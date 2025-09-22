document.addEventListener('DOMContentLoaded', () => {
    // Storage keys
    const STORAGE_KEYS = {
        ORDERS: 'restaurant_orders',
        ITEMS: 'restaurant_items',
        CUSTOMERS: 'restaurant_customers',
        USERS: 'restaurant_users',
        PROFILE_IMAGE: 'admin_profile_image',
        USER_DATA: 'admin_user_data'
    };

    // Initialize data
    let orders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
    let items = JSON.parse(localStorage.getItem(STORAGE_KEYS.ITEMS)) || { 1: [], 2: [], 3: [] };
    let customers = JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOMERS)) || [];
    let users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [
        { id: 1, name: 'Admin User', email: 'admin@megezez.com', role: 'admin' }
    ];

    // DOM Elements
    const sidebarItems = document.querySelectorAll('.sidebar-nav li');
    const pageTitle = document.getElementById('page-title');
    const sections = document.querySelectorAll('.content-section');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const logoutBtn = document.getElementById('logout-btn');
    const searchInput = document.getElementById('admin-search');
    const addMenuItemBtn = document.getElementById('add-menu-item');
    const menuModal = document.getElementById('add-menu-modal');
    const menuForm = document.getElementById('add-menu-form');
    const closeMenuModal = document.getElementById('close-menu-modal');
    const cancelMenuModal = document.getElementById('cancel-menu-modal');
    const menuItemsTable = document.getElementById('menu-items-table');
    const menuSearch = document.getElementById('menu-search');
    const menuCategoryFilter = document.getElementById('menu-category-filter');
    const ordersTable = document.getElementById('orders-table');
    const orderStatusFilter = document.getElementById('order-status-filter');
    const overlay = document.getElementById('overlay');
    const userProfileForm = document.getElementById('user-profile-form');
    const userImageUpload = document.getElementById('user-image-upload');
    const currentUserImage = document.getElementById('current-user-image');
    const adminAvatar = document.getElementById('admin-avatar');
    const userNameInput = document.getElementById('user-name');
    const userEmailInput = document.getElementById('user-email');

    let editingItem = null;
    let salesChart;

    // Load user data and profile image
    function loadUserData() {
        const userData = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_DATA)) || users[0];
        userNameInput.value = userData.name;
        userEmailInput.value = userData.email;
        
        const profileImage = localStorage.getItem(STORAGE_KEYS.PROFILE_IMAGE);
        if (profileImage) {
            currentUserImage.src = profileImage;
            adminAvatar.src = profileImage;
        }
    }

    // Save data to local storage
    function saveData() {
        localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
        localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(items));
        localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(customers));
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    }

    // Save image to local storage as base64
    function saveImageToStorage(file, storageKey, imageElement) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageData = event.target.result;
                localStorage.setItem(storageKey, imageData);
                if (imageElement) {
                    imageElement.src = imageData;
                }
                resolve(imageData);
            };
            reader.readAsDataURL(file);
        });
    }

    // Switch between sections
    function switchSection(sectionId) {
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(`${sectionId}-section`).classList.add('active');
        sidebarItems.forEach(item => item.classList.remove('active'));
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
        pageTitle.textContent = document.querySelector(`[data-section="${sectionId}"] span`).textContent;
    }

    // Show notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Dashboard Functions
    function updateDashboard() {
        const today = new Date().toISOString().split('T')[0];
        const todayOrders = orders.filter(o => o.timestamp.startsWith(today));
        const yesterdayOrders = orders.filter(o => {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return o.timestamp.startsWith(yesterday.toISOString().split('T')[0]);
        });

        const todayRevenue = todayOrders.reduce((sum, o) => sum + parseFloat(o.total), 0);
        const yesterdayRevenue = yesterdayOrders.reduce((sum, o) => sum + parseFloat(o.total), 0);
        const newCustomersToday = new Set(todayOrders.map(o => o.customer.name)).size;

        // Create summary cards
        const dashboardGrid = document.querySelector('.dashboard-grid');
        dashboardGrid.innerHTML = `
            <div class="summary-card total-orders">
                <div class="card-content">
                    <h3>Today's Orders</h3>
                    <p class="count" id="today-orders">${todayOrders.length}</p>
                    <p class="change" id="orders-change"></p>
                </div>
                <i class="fas fa-shopping-cart"></i>
            </div>
            <div class="summary-card total-revenue">
                <div class="card-content">
                    <h3>Today's Revenue</h3>
                    <p class="count" id="today-revenue">${todayRevenue.toFixed(2)} ETB</p>
                    <p class="change" id="revenue-change"></p>
                </div>
                <i class="fas fa-money-bill-wave"></i>
            </div>
            <div class="summary-card new-customers">
                <div class="card-content">
                    <h3>New Customers</h3>
                    <p class="count" id="new-customers">${newCustomersToday}</p>
                    <p class="change" id="customers-change"></p>
                </div>
                <i class="fas fa-user-plus"></i>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3>Recent Orders</h3>
                </div>
                <div class="card-body">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="recent-orders-table">
                            ${todayOrders.slice(-3).reverse().map(order => `
                                <tr>
                                    <td>#${order.orderId}</td>
                                    <td>${order.customer.name}</td>
                                    <td>${order.total} ETB</td>
                                    <td><span class="status ${order.cartStatus.replace(' ', '-')}">${order.cartStatus}</span></td>
                                    <td>
                                        <button class="action-btn view" data-id="${order.orderId}">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    // Menu Management Functions
    function displayMenuItems() {
        const searchTerm = menuSearch.value.toLowerCase();
        const categoryFilter = menuCategoryFilter.value;
        const filteredItems = Object.values(items).flat().filter(item => 
            (!searchTerm || item.title.toLowerCase().includes(searchTerm)) &&
            (!categoryFilter || item.categoryId === categoryFilter)
        );

        menuItemsTable.innerHTML = filteredItems.map(item => `
            <tr>
                <td><img src="${item.image}" alt="${item.title}" class="item-thumbnail"></td>
                <td>${item.title}</td>
                <td>${['', 'Fasting Foods', 'Non-Fast Foods', 'Drinks'][item.categoryId]}</td>
                <td>${item.price} ETB</td>
                <td><span class="status active">Active</span></td>
                <td>
                    <button class="action-btn edit" data-id="${item.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    async function showMenuModal(item = null) {
        editingItem = item;
        document.getElementById('modal-title').textContent = item ? 'Edit Menu Item' : 'Add New Menu Item';
        document.getElementById('item-name').value = item ? item.title : '';
        document.getElementById('item-category').value = item ? item.categoryId : '';
        document.getElementById('item-price').value = item ? item.price : '';
        document.getElementById('item-discount').value = item ? (item.discount || 0) : '0';
        document.getElementById('item-description').value = item ? item.description : '';
        
        menuModal.classList.add('active');
        overlay.classList.add('active');
    }

    // Orders Functions
    function displayOrders() {
        const filter = orderStatusFilter.value;
        const filteredOrders = filter === 'all' ? orders : orders.filter(o => o.cartStatus === filter);
        
        ordersTable.innerHTML = `
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${filteredOrders.map(order => `
                    <tr>
                        <td>#${order.orderId}</td>
                        <td>${order.customer.name}</td>
                        <td>${order.total} ETB</td>
                        <td><span class="status ${order.cartStatus.replace(' ', '-')}">${order.cartStatus}</span></td>
                        <td>
                            <button class="action-btn view" data-id="${order.orderId}">
                                <i class="fas fa-eye"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    // Event Listeners
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => switchSection(item.dataset.section));
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            window.location.href = '../HTML/starter.html';
        }
    });

    // Menu item form submission
    menuForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const imageFile = document.getElementById('item-image').files[0];
        let imageData = editingItem ? editingItem.image : '';
        
        if (imageFile) {
            imageData = await saveImageToStorage(imageFile, `menu_item_${Date.now()}`, null);
        }

        const categoryId = document.getElementById('item-category').value;
        const newItem = {
            id: editingItem ? editingItem.id : Date.now(),
            title: document.getElementById('item-name').value,
            categoryId: categoryId,
            price: parseFloat(document.getElementById('item-price').value),
            discount: parseFloat(document.getElementById('item-discount').value) || 0,
            description: document.getElementById('item-description').value,
            image: imageData,
            rating: editingItem ? editingItem.rating : 4.0,
            ratingCount: editingItem ? editingItem.ratingCount : 0
        };

        if (!items[categoryId]) items[categoryId] = [];
        if (editingItem) {
            const index = items[categoryId].findIndex(i => i.id === editingItem.id);
            items[categoryId][index] = newItem;
            showNotification('Item updated successfully');
        } else {
            items[categoryId].push(newItem);
            showNotification('Item added successfully');
        }

        saveData();
        menuModal.classList.remove('active');
        overlay.classList.remove('active');
        displayMenuItems();
    });

    // Profile image upload
    userImageUpload.addEventListener('change', async (e) => {
        if (e.target.files && e.target.files[0]) {
            const imageData = await saveImageToStorage(
                e.target.files[0], 
                STORAGE_KEYS.PROFILE_IMAGE, 
                currentUserImage
            );
            adminAvatar.src = imageData;
            showNotification('Profile image updated');
        }
    });

    // Save user profile
    userProfileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userData = {
            name: userNameInput.value,
            email: userEmailInput.value
        };
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
        showNotification('Profile updated successfully');
    });

    // Close modals
    closeMenuModal.addEventListener('click', () => {
        menuModal.classList.remove('active');
        overlay.classList.remove('active');
    });

    cancelMenuModal.addEventListener('click', () => {
        menuModal.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        overlay.classList.remove('active');
        sidebar.classList.remove('active');
    });

    // Initialize
    loadUserData();
    updateDashboard();
    displayMenuItems();
    displayOrders();

    // Set interval for dashboard updates
    setInterval(updateDashboard, 60000);
});