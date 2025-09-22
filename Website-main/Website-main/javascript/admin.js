document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeSidebarBtn = document.querySelector('.close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = {
        dashboard: document.getElementById('dashboard-content'),
        menu: document.getElementById('menu-content'),
        orders: document.getElementById('orders-content'),
        customers: document.getElementById('customers-content'),
        reservations: document.getElementById('reservations-content'),
        reports: document.getElementById('reports-content')
    };
    const viewButtons = document.querySelectorAll('.view-btn, .view-all');
    const logoutBtn = document.getElementById('logout-btn');
    const dropdownLogoutBtn = document.getElementById('dropdown-logout-btn');
    const addMenuItemBtn = document.getElementById('add-menu-item');
    const menuItemModal = document.getElementById('menu-item-modal');
    const closeMenuModal = document.getElementById('close-menu-modal');
    const cancelMenuModal = document.getElementById('cancel-menu-item');
    const menuItemForm = document.getElementById('menu-item-form');
    const orderDetailsModal = document.getElementById('order-details-modal');
    const closeOrderModal = document.getElementById('close-order-modal');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmCancel = document.getElementById('confirm-cancel');
    const confirmAction = document.getElementById('confirm-action');
    const menuSearch = document.getElementById('menu-search');
    const menuCategoryFilter = document.getElementById('menu-category-filter');
    const menuStatusFilter = document.getElementById('menu-status-filter');
    const menuItemsTable = document.getElementById('menu-items-table');
    const ordersTableBody = document.getElementById('orders-table-body');
    const orderStatusFilter = document.getElementById('order-status-filter');
    const orderDateFilter = document.getElementById('order-date-filter');
    const customersTableBody = document.getElementById('customers-table-body');
    const customerSearch = document.getElementById('customer-search');
    const reservationsTableBody = document.getElementById('reservations-table-body');
    const reservationStatusFilter = document.getElementById('reservation-status-filter');
    const reservationDateFilter = document.getElementById('reservation-date-filter');
    const reportType = document.getElementById('report-type');
    const reportStartDate = document.getElementById('report-start-date');
    const reportEndDate = document.getElementById('report-end-date');
    const notificationBell = document.querySelector('.notification-bell');
    const markAllReadBtn = document.querySelector('.mark-all-read');
    const notificationItems = document.querySelectorAll('.notification-item');
    const userAvatar = document.querySelector('.user-avatar');
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    
    // Charts
    let salesChart;
    let reportChart;
    
    // Sample data for demonstration
    let menuItems = [
        { 
            id: 1, 
            name: 'Margherita Pizza', 
            category: 'main', 
            price: 12.99, 
            description: 'Classic pizza with tomato sauce, mozzarella, and basil', 
            status: 'active', 
            image: 'https://source.unsplash.com/random/300x300/?pizza',
            createdAt: new Date('2025-01-15')
        },
        { 
            id: 2, 
            name: 'Pasta Alfredo', 
            category: 'main', 
            price: 10.99, 
            description: 'Creamy fettuccine with parmesan sauce', 
            status: 'active', 
            image: 'https://source.unsplash.com/random/300x300/?pasta',
            createdAt: new Date('2025-02-20')
        },
        { 
            id: 3, 
            name: 'Caesar Salad', 
            category: 'appetizer', 
            price: 8.99, 
            description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing', 
            status: 'active', 
            image: 'https://source.unsplash.com/random/300x300/?salad',
            createdAt: new Date('2025-03-05')
        },
        { 
            id: 4, 
            name: 'Chocolate Cake', 
            category: 'dessert', 
            price: 6.99, 
            description: 'Rich chocolate cake with chocolate frosting', 
            status: 'active', 
            image: 'https://source.unsplash.com/random/300x300/?cake',
            createdAt: new Date('2025-03-10')
        },
        { 
            id: 5, 
            name: 'Iced Tea', 
            category: 'beverage', 
            price: 2.99, 
            description: 'Refreshing iced tea with lemon', 
            status: 'inactive', 
            image: 'https://source.unsplash.com/random/300x300/?tea',
            createdAt: new Date('2025-03-15')
        }
    ];

    let orders = [
        { 
            id: 1256, 
            customer: 'John Doe', 
            customerId: 101,
            items: [
                { id: 1, name: 'Margherita Pizza', price: 12.99, quantity: 1 },
                { id: 2, name: 'Pasta Alfredo', price: 10.99, quantity: 2 }
            ], 
            total: 34.97, 
            status: 'preparing', 
            date: '2025-04-05',
            deliveryAddress: '123 Food Street, Taste City',
            paymentMethod: 'Credit Card (Visa ****4242)',
            notes: 'Please make sure the pasta is not too spicy. Also, can you include some extra napkins? Thanks!',
            createdAt: new Date('2025-04-05T12:30:00')
        },
        { 
            id: 1255, 
            customer: 'Jane Smith', 
            customerId: 102,
            items: [
                { id: 3, name: 'Caesar Salad', price: 8.99, quantity: 1 },
                { id: 5, name: 'Iced Tea', price: 2.99, quantity: 1 }
            ], 
            total: 11.98, 
            status: 'pending', 
            date: '2025-04-05',
            deliveryAddress: '456 Restaurant Ave, Flavor Town',
            paymentMethod: 'PayPal',
            notes: '',
            createdAt: new Date('2025-04-05T10:15:00')
        },
        { 
            id: 1254, 
            customer: 'Bob Johnson', 
            customerId: 103,
            items: [
                { id: 4, name: 'Chocolate Cake', price: 6.99, quantity: 1 }
            ], 
            total: 6.99, 
            status: 'delivered', 
            date: '2025-04-04',
            deliveryAddress: '789 Gourmet Blvd, Culinary City',
            paymentMethod: 'Cash on Delivery',
            notes: 'Please include candles for the cake',
            createdAt: new Date('2025-04-04T18:45:00')
        }
    ];

    let customers = [
        { 
            id: 101, 
            name: 'John Doe', 
            email: 'john@example.com', 
            phone: '(555) 123-4567', 
            address: '123 Food Street, Taste City',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            orders: 5,
            lastOrder: '2025-04-05',
            joined: '2025-01-10'
        },
        { 
            id: 102, 
            name: 'Jane Smith', 
            email: 'jane@example.com', 
            phone: '(555) 987-6543', 
            address: '456 Restaurant Ave, Flavor Town',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            orders: 3,
            lastOrder: '2025-04-05',
            joined: '2025-02-15'
        },
        { 
            id: 103, 
            name: 'Bob Johnson', 
            email: 'bob@example.com', 
            phone: '(555) 456-7890', 
            address: '789 Gourmet Blvd, Culinary City',
            avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
            orders: 2,
            lastOrder: '2025-04-04',
            joined: '2025-03-01'
        }
    ];

    let reservations = [
        { 
            id: 1001, 
            customer: 'John Doe', 
            customerId: 101,
            date: '2025-04-10', 
            time: '19:00', 
            guests: 4, 
            status: 'confirmed',
            notes: 'Anniversary celebration',
            createdAt: new Date('2025-03-25')
        },
        { 
            id: 1002, 
            customer: 'Jane Smith', 
            customerId: 102,
            date: '2025-04-12', 
            time: '18:30', 
            guests: 2, 
            status: 'pending',
            notes: '',
            createdAt: new Date('2025-04-01')
        },
        { 
            id: 1003, 
            customer: 'Bob Johnson', 
            customerId: 103,
            date: '2025-04-15', 
            time: '20:00', 
            guests: 6, 
            status: 'confirmed',
            notes: 'Business dinner',
            createdAt: new Date('2025-04-03')
        }
    ];

    // Current item to be deleted
    let itemToDelete = null;

    // Initialize the dashboard
    function initDashboard() {
        // Load admin name
        document.getElementById('admin-name').textContent = 'Admin';
        
        // Initialize charts
        initSalesChart();
        initReportChart();
        
        // Load data tables
        loadMenuItems();
        loadOrders();
        loadCustomers();
        loadReservations();
        
        // Set active section
        showSection('dashboard');
        
        // Add event listeners
        addEventListeners();
        
        // Show welcome toast
        showToast('Welcome back, Admin!', 'success');
    }

    // Initialize sales chart
    function initSalesChart() {
        const ctx = document.getElementById('salesChart').getContext('2d');
        
        // Sample data for the last 7 days
        const labels = [];
        const data = [];
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
            
            // Random sales data for demo
            data.push(Math.floor(Math.random() * 2000) + 500);
        }
        
        salesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Sales ($)',
                    data: data,
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderColor: 'rgba(231, 76, 60, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(231, 76, 60, 1)',
                    pointBorderColor: '#fff',
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(231, 76, 60, 1)',
                    pointHoverBorderColor: '#fff',
                    pointHitRadius: 10,
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            family: 'Poppins',
                            size: 14
                        },
                        bodyFont: {
                            family: 'Poppins',
                            size: 12
                        },
                        callbacks: {
                            label: function(context) {
                                return '$' + context.parsed.y.toFixed(2);
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + value;
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Initialize report chart
    function initReportChart() {
        const ctx = document.getElementById('reportChart').getContext('2d');
        
        // Sample data for the last 30 days
        const labels = [];
        const data = [];
        
        for (let i = 29; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            labels.push(date.getDate() + ' ' + date.toLocaleDateString('en-US', { month: 'short' }));
            
            // Random sales data for demo
            data.push(Math.floor(Math.random() * 3000) + 500);
        }
        
        reportChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Sales ($)',
                    data: data,
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            family: 'Poppins',
                            size: 14
                        },
                        bodyFont: {
                            family: 'Poppins',
                            size: 12
                        },
                        callbacks: {
                            label: function(context) {
                                return '$' + context.parsed.y.toFixed(2);
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + value;
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                }
            }
        });
    }

    // Load menu items into table
    function loadMenuItems(filter = '', category = '', status = '') {
        menuItemsTable.innerHTML = '';
        
        // Filter menu items
        let filteredItems = [...menuItems];
        
        if (filter) {
            filteredItems = filteredItems.filter(item => 
                item.name.toLowerCase().includes(filter.toLowerCase()) || 
                item.description.toLowerCase().includes(filter.toLowerCase())
            );
        }
        
        if (category) {
            filteredItems = filteredItems.filter(item => item.category === category);
        }
        
        if (status) {
            filteredItems = filteredItems.filter(item => item.status === status);
        }
        
        // Sort by creation date (newest first)
        filteredItems.sort((a, b) => b.createdAt - a.createdAt);
        
        if (filteredItems.length === 0) {
            menuItemsTable.innerHTML = `
                <tr>
                    <td colspan="6" class="no-data">No menu items found</td>
                </tr>
            `;
            return;
        }
        
        filteredItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="image-col">
                    <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                </td>
                <td>
                    <div class="item-name">${item.name}</div>
                    <small class="item-desc">${item.description}</small>
                </td>
                <td>${formatCategory(item.category)}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <span class="status-badge ${item.status}">
                        ${item.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                </td>
                <td class="actions-col">
                    <button class="action-btn small edit-menu-item" data-id="${item.id}">
                        <span class="material-icons-round">edit</span>
                    </button>
                    <button class="action-btn small secondary delete-menu-item" data-id="${item.id}">
                        <span class="material-icons-round">delete</span>
                    </button>
                </td>
            `;
            menuItemsTable.appendChild(row);
        });
        
        // Update table info
        document.getElementById('menu-table-info').textContent = 
            `Showing 1 to ${filteredItems.length} of ${filteredItems.length} entries`;
        
        // Add event listeners to action buttons
        addMenuItemsEventListeners();
    }

    // Format category name
    function formatCategory(category) {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    // Load orders into table
    function loadOrders(status = 'all', date = '') {
        ordersTableBody.innerHTML = '';
        
        // Filter orders
        let filteredOrders = [...orders];
        
        if (status !== 'all') {
            filteredOrders = filteredOrders.filter(order => order.status === status);
        }
        
        if (date) {
            filteredOrders = filteredOrders.filter(order => order.date === date);
        }
        
        // Sort by creation date (newest first)
        filteredOrders.sort((a, b) => b.createdAt - a.createdAt);
        
        if (filteredOrders.length === 0) {
            ordersTableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="no-data">No orders found</td>
                </tr>
            `;
            return;
        }
        
        filteredOrders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>#${order.id}</td>
                <td>
                    <div class="customer-with-avatar">
                        <img src="${getCustomerAvatar(order.customerId)}" alt="${order.customer}">
                        <span>${order.customer}</span>
                    </div>
                </td>
                <td>
                    <div class="items-list">
                        ${order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                    </div>
                </td>
                <td>$${order.total.toFixed(2)}</td>
                <td>
                    <span class="status-badge ${order.status}">
                        ${formatStatus(order.status)}
                    </span>
                </td>
                <td>${formatDate(order.date)}</td>
                <td class="actions-col">
                    <button class="action-btn small view-order-details" data-id="${order.id}">
                        <span class="material-icons-round">visibility</span>
                    </button>
                    <button class="action-btn small secondary edit-order" data-id="${order.id}">
                        <span class="material-icons-round">edit</span>
                    </button>
                </td>
            `;
            ordersTableBody.appendChild(row);
        });
        
        // Update table info
        document.getElementById('orders-table-info').textContent = 
            `Showing 1 to ${filteredOrders.length} of ${filteredOrders.length} entries`;
        
        // Add event listeners to action buttons
        addOrdersEventListeners();
    }

    // Get customer avatar by ID
    function getCustomerAvatar(customerId) {
        const customer = customers.find(c => c.id === customerId);
        return customer ? customer.avatar : 'https://randomuser.me/api/portraits/men/0.jpg';
    }

    // Format status
    function formatStatus(status) {
        return status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ');
    }

    // Format date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // Load customers into table
    function loadCustomers(filter = '') {
        customersTableBody.innerHTML = '';
        
        // Filter customers
        let filteredCustomers = [...customers];
        
        if (filter) {
            filteredCustomers = filteredCustomers.filter(customer => 
                customer.name.toLowerCase().includes(filter.toLowerCase()) || 
                customer.email.toLowerCase().includes(filter.toLowerCase()) ||
                customer.phone.includes(filter)
            );
        }
        
        // Sort by join date (newest first)
        filteredCustomers.sort((a, b) => new Date(b.joined) - new Date(a.joined));
        
        if (filteredCustomers.length === 0) {
            customersTableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="no-data">No customers found</td>
                </tr>
            `;
            return;
        }
        
        filteredCustomers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="image-col">
                    <img src="${customer.avatar}" alt="${customer.name}" class="customer-avatar">
                </td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>${customer.orders}</td>
                <td>${formatDate(customer.lastOrder)}</td>
                <td class="actions-col">
                    <button class="action-btn small view-customer" data-id="${customer.id}">
                        <span class="material-icons-round">visibility</span>
                    </button>
                    <button class="action-btn small secondary edit-customer" data-id="${customer.id}">
                        <span class="material-icons-round">edit</span>
                    </button>
                </td>
            `;
            customersTableBody.appendChild(row);
        });
        
        // Update table info
        document.getElementById('customers-table-info').textContent = 
            `Showing 1 to ${filteredCustomers.length} of ${filteredCustomers.length} entries`;
        
        // Add event listeners to action buttons
        addCustomersEventListeners();
    }

    // Load reservations into table
    function loadReservations(status = 'all', date = '') {
        reservationsTableBody.innerHTML = '';
        
        // Filter reservations
        let filteredReservations = [...reservations];
        
        if (status !== 'all') {
            filteredReservations = filteredReservations.filter(res => res.status === status);
        }
        
        if (date) {
            filteredReservations = filteredReservations.filter(res => res.date === date);
        }
        
        // Sort by creation date (newest first)
        filteredReservations.sort((a, b) => b.createdAt - a.createdAt);
        
        if (filteredReservations.length === 0) {
            reservationsTableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="no-data">No reservations found</td>
                </tr>
            `;
            return;
        }
        
        filteredReservations.forEach(reservation => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>#${reservation.id}</td>
                <td>
                    <div class="customer-with-avatar">
                        <img src="${getCustomerAvatar(reservation.customerId)}" alt="${reservation.customer}">
                        <span>${reservation.customer}</span>
                    </div>
                </td>
                <td>${formatDate(reservation.date)}</td>
                <td>${reservation.time}</td>
                <td>${reservation.guests}</td>
                <td>
                    <span class="status-badge ${reservation.status}">
                        ${formatStatus(reservation.status)}
                    </span>
                </td>
                <td class="actions-col">
                    <button class="action-btn small view-reservation" data-id="${reservation.id}">
                        <span class="material-icons-round">visibility</span>
                    </button>
                    <button class="action-btn small secondary edit-reservation" data-id="${reservation.id}">
                        <span class="material-icons-round">edit</span>
                    </button>
                </td>
            `;
            reservationsTableBody.appendChild(row);
        });
        
        // Update table info
        document.getElementById('reservations-table-info').textContent = 
            `Showing 1 to ${filteredReservations.length} of ${filteredReservations.length} entries`;
        
        // Add event listeners to action buttons
        addReservationsEventListeners();
    }

    // Show section based on clicked nav link
    function showSection(sectionId) {
        Object.values(sections).forEach(section => {
            section.classList.add('hidden');
        });
        sections[sectionId].classList.remove('hidden');
        
        // Update active nav link
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
        
        // Update page title
        document.getElementById('page-title').textContent = 
            document.querySelector(`[data-section="${sectionId}"] span`).textContent;
    }

    // Toggle sidebar on mobile
    function toggleSidebar() {
        sidebar.classList.toggle('show');
    }

    // Show menu item modal
    function showMenuItemModal(item = null) {
        const modalTitle = document.getElementById('modal-title');
        const form = document.getElementById('menu-item-form');
        
        if (item) {
            // Edit mode
            modalTitle.textContent = 'Edit Menu Item';
            form.dataset.mode = 'edit';
            form.dataset.id = item.id;
            
            // Fill form with item data
            document.getElementById('item-name').value = item.name;
            document.getElementById('item-category').value = item.category;
            document.getElementById('item-price').value = item.price;
            document.getElementById('item-discount').value = item.discount || 0;
            document.getElementById('item-description').value = item.description || '';
            document.querySelector(`input[name="item-status"][value="${item.status}"]`).checked = true;
            
            // Set image preview
            const preview = document.getElementById('item-image-preview');
            preview.innerHTML = `<img src="${item.image}" alt="Preview">`;
        } else {
            // Add mode
            modalTitle.textContent = 'Add Menu Item';
            form.dataset.mode = 'add';
            form.reset();
            document.getElementById('item-image-preview').innerHTML = '';
        }
        
        menuItemModal.classList.add('show');
    }

    // Show order details modal
    function showOrderDetailsModal(orderId) {
        const order = orders.find(order => order.id == orderId);
        if (!order) return;
        
        // Set modal title
        document.getElementById('order-details-title').textContent = `Order Details #${order.id}`;
        
        // Get customer details
        const customer = customers.find(c => c.id === order.customerId) || {
            name: order.customer,
            email: 'N/A',
            phone: 'N/A',
            address: order.deliveryAddress || 'N/A'
        };
        
        // Update order info
        const orderInfoHTML = `
            <div class="info-item">
                <span class="material-icons-round">person</span>
                <div>
                    <small>Customer</small>
                    <p>${customer.name}</p>
                </div>
            </div>
            <div class="info-item">
                <span class="material-icons-round">email</span>
                <div>
                    <small>Email</small>
                    <p>${customer.email}</p>
                </div>
            </div>
            <div class="info-item">
                <span class="material-icons-round">phone</span>
                <div>
                    <small>Phone</small>
                    <p>${customer.phone}</p>
                </div>
            </div>
            <div class="info-item">
                <span class="material-icons-round">home</span>
                <div>
                    <small>Delivery Address</small>
                    <p>${customer.address}</p>
                </div>
            </div>
            <div class="info-item">
                <span class="material-icons-round">event</span>
                <div>
                    <small>Order Date</small>
                    <p>${order.createdAt.toLocaleString()}</p>
                </div>
            </div>
            <div class="info-item">
                <span class="material-icons-round">payments</span>
                <div>
                    <small>Payment Method</small>
                    <p>${order.paymentMethod}</p>
                </div>
            </div>
        `;
        
        document.querySelector('.order-info').innerHTML = orderInfoHTML;
        
        // Update order items
        let itemsHTML = '';
        let subtotal = 0;
        
        order.items.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            itemsHTML += `
                <tr>
                    <td class="item-with-image">
                        <img src="${getMenuItemImage(item.id)}" alt="${item.name}">
                        <span>${item.name}</span>
                    </td>
                    <td>${item.quantity}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>$${itemTotal.toFixed(2)}</td>
                </tr>
            `;
        });
        
        // Calculate discount (10% for demo)
        const discount = subtotal * 0.1;
        const total = subtotal - discount + 5.00; // Add $5 delivery fee
        
        itemsHTML += `
            <tr>
                <td colspan="3">Subtotal</td>
                <td>$${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="3">Delivery Fee</td>
                <td>$5.00</td>
            </tr>
            <tr>
                <td colspan="3">Discount (10%)</td>
                <td>-$${discount.toFixed(2)}</td>
            </tr>
            <tr class="total-row">
                <td colspan="3">Total</td>
                <td>$${total.toFixed(2)}</td>
            </tr>
        `;
        
        document.querySelector('.order-items tbody').innerHTML = itemsHTML;
        
        // Update order notes
        document.querySelector('.order-notes p').textContent = 
            order.notes || 'No special instructions provided';
            
        // Set current status in dropdown
        document.getElementById('order-status-update').value = order.status;
        
        orderDetailsModal.classList.add('show');
    }

    // Get menu item image by ID
    function getMenuItemImage(itemId) {
        const item = menuItems.find(item => item.id == itemId);
        return item ? item.image : 'https://via.placeholder.com/150';
    }

    // Show confirmation modal
    function showConfirmModal(message, callback) {
        document.getElementById('confirm-message').textContent = message;
        confirmModal.classList.add('show');
        
        // Set up confirm action
        confirmAction.onclick = function() {
            if (callback) callback();
            confirmModal.classList.remove('show');
        };
    }

    // Show toast notification
    function showToast(message, type = 'success') {
        toast.className = 'toast hidden';
        toast.classList.add(type);
        
        toastMessage.textContent = message;
        
        if (type === 'success') {
            toastIcon.textContent = 'check_circle';
            toastIcon.style.color = 'var(--success)';
        } else if (type === 'error') {
            toastIcon.textContent = 'error';
            toastIcon.style.color = 'var(--danger)';
        } else if (type === 'warning') {
            toastIcon.textContent = 'warning';
            toastIcon.style.color = 'var(--warning)';
        }
        
        toast.classList.remove('hidden');
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 300);
        }, 3000);
    }

    // Handle menu item form submission
    function handleMenuItemForm(e) {
        e.preventDefault();
        
        const form = e.target;
        const mode = form.dataset.mode;
        const id = mode === 'edit' ? parseInt(form.dataset.id) : Math.max(...menuItems.map(item => item.id)) + 1;
        
        const newItem = {
            id: id,
            name: document.getElementById('item-name').value,
            category: document.getElementById('item-category').value,
            price: parseFloat(document.getElementById('item-price').value),
            discount: parseInt(document.getElementById('item-discount').value) || 0,
            description: document.getElementById('item-description').value,
            status: document.querySelector('input[name="item-status"]:checked').value,
            image: 'https://source.unsplash.com/random/300x300/?food', // In a real app, this would be the uploaded image
            createdAt: new Date()
        };
        
        if (mode === 'edit') {
            // Update existing item
            menuItems = menuItems.map(item => item.id === id ? newItem : item);
            showToast('Menu item updated successfully');
        } else {
            // Add new item
            menuItems.push(newItem);
            showToast('Menu item added successfully');
        }
        
        loadMenuItems();
        menuItemModal.classList.remove('show');
    }

    // Edit menu item
    function editMenuItem(id) {
        const item = menuItems.find(item => item.id == id);
        if (item) {
            showMenuItemModal(item);
        }
    }

    // Confirm delete menu item
    function confirmDeleteMenuItem(id) {
        const item = menuItems.find(item => item.id == id);
        if (item) {
            itemToDelete = id;
            showConfirmModal(`Are you sure you want to delete "${item.name}"?`, () => {
                deleteMenuItem(id);
            });
        }
    }

    // Delete menu item
    function deleteMenuItem(id) {
        menuItems = menuItems.filter(item => item.id != id);
        loadMenuItems();
        showToast('Menu item deleted successfully');
    }

    // Update order status
    function updateOrderStatus(orderId, newStatus) {
        const order = orders.find(order => order.id == orderId);
        if (order) {
            order.status = newStatus;
            loadOrders();
            showToast(`Order #${orderId} status updated to ${formatStatus(newStatus)}`);
        }
    }

    // Add event listeners to menu items
    function addMenuItemsEventListeners() {
        document.querySelectorAll('.edit-menu-item').forEach(btn => {
            btn.addEventListener('click', () => editMenuItem(btn.dataset.id));
        });
        
        document.querySelectorAll('.delete-menu-item').forEach(btn => {
            btn.addEventListener('click', () => confirmDeleteMenuItem(btn.dataset.id));
        });
    }

    // Add event listeners to orders
    function addOrdersEventListeners() {
        document.querySelectorAll('.view-order-details').forEach(btn => {
            btn.addEventListener('click', () => showOrderDetailsModal(btn.dataset.id));
        });
        
        document.querySelectorAll('.edit-order').forEach(btn => {
            btn.addEventListener('click', () => {
                // In a real app, this would open an edit order modal
                showToast('Edit order functionality would be implemented here', 'info');
            });
        });
    }

    // Add event listeners to customers
    function addCustomersEventListeners() {
        document.querySelectorAll('.view-customer').forEach(btn => {
            btn.addEventListener('click', () => {
                // In a real app, this would open a customer details modal
                showToast('View customer functionality would be implemented here', 'info');
            });
        });
        
        document.querySelectorAll('.edit-customer').forEach(btn => {
            btn.addEventListener('click', () => {
                // In a real app, this would open an edit customer modal
                showToast('Edit customer functionality would be implemented here', 'info');
            });
        });
    }

    // Add event listeners to reservations
    function addReservationsEventListeners() {
        document.querySelectorAll('.view-reservation').forEach(btn => {
            btn.addEventListener('click', () => {
                // In a real app, this would open a reservation details modal
                showToast('View reservation functionality would be implemented here', 'info');
            });
        });
        
        document.querySelectorAll('.edit-reservation').forEach(btn => {
            btn.addEventListener('click', () => {
                // In a real app, this would open an edit reservation modal
                showToast('Edit reservation functionality would be implemented here', 'info');
            });
        });
    }

    // Add all event listeners
    function addEventListeners() {
        // Sidebar toggle
        hamburgerBtn.addEventListener('click', toggleSidebar);
        closeSidebarBtn.addEventListener('click', toggleSidebar);
        
        // Navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (this.id === 'logout-btn') {
                    // Handle logout
                    showConfirmModal('Are you sure you want to logout?', () => {
                        showToast('Logged out successfully');
                        // In a real app, redirect to login page
                        setTimeout(() => {
                            window.location.href = '../HTML/starter.html';
                        }, 1500);
                    });
                    return;
                }
                
                const sectionId = this.getAttribute('data-section');
                showSection(sectionId);
                
                // Close sidebar on mobile after selection
                if (window.innerWidth <= 768) {
                    toggleSidebar();
                }
            });
        });
        
        // View buttons
        viewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const action = this.getAttribute('data-action');
                if (action === 'view-orders') {
                    showSection('orders');
                } else if (action === 'view-customers') {
                    showSection('customers');
                } else if (action === 'view-reservations') {
                    showSection('reservations');
                } else if (action === 'view-reports') {
                    showSection('reports');
                } else if (action === 'view-menu') {
                    showSection('menu');
                } else if (action === 'view-activity') {
                    // In a real app, this would show all activity
                    showToast('View all activity functionality would be implemented here', 'info');
                }
            });
        });
        
        // Menu item modal
        addMenuItemBtn.addEventListener('click', () => showMenuItemModal());
        closeMenuModal.addEventListener('click', () => menuItemModal.classList.remove('show'));
        cancelMenuModal.addEventListener('click', () => menuItemModal.classList.remove('show'));
        menuItemForm.addEventListener('submit', handleMenuItemForm);
        
        // Order details modal
        closeOrderModal.addEventListener('click', () => orderDetailsModal.classList.remove('show'));
        
        // Confirmation modal
        confirmCancel.addEventListener('click', () => confirmModal.classList.remove('show'));
        
        // Update order status
        document.getElementById('update-status-btn').addEventListener('click', () => {
            const orderId = parseInt(document.getElementById('order-details-title').textContent.split('#')[1]);
            const newStatus = document.getElementById('order-status-update').value;
            updateOrderStatus(orderId, newStatus);
            orderDetailsModal.classList.remove('show');
        });
        
        // Menu search and filters
        menuSearch.addEventListener('input', (e) => {
            loadMenuItems(e.target.value, menuCategoryFilter.value, menuStatusFilter.value);
        });
        
        menuCategoryFilter.addEventListener('change', (e) => {
            loadMenuItems(menuSearch.value, e.target.value, menuStatusFilter.value);
        });
        
        menuStatusFilter.addEventListener('change', (e) => {
            loadMenuItems(menuSearch.value, menuCategoryFilter.value, e.target.value);
        });
        
        // Orders filters
        orderStatusFilter.addEventListener('change', (e) => {
            loadOrders(e.target.value, orderDateFilter.value);
        });
        
        orderDateFilter.addEventListener('change', (e) => {
            loadOrders(orderStatusFilter.value, e.target.value);
        });
        
        // Customers search
        customerSearch.addEventListener('input', (e) => {
            loadCustomers(e.target.value);
        });
        
        // Reservations filters
        reservationStatusFilter.addEventListener('change', (e) => {
            loadReservations(e.target.value, reservationDateFilter.value);
        });
        
        reservationDateFilter.addEventListener('change', (e) => {
            loadReservations(reservationStatusFilter.value, e.target.value);
        });
        
        // Reports filters
        reportType.addEventListener('change', (e) => {
            // In a real app, this would update the report chart based on the selected period
            showToast('Report period changed to ' + e.target.value, 'info');
        });
        
        // Notification bell
        notificationBell.addEventListener('click', (e) => {
            e.stopPropagation();
            notificationBell.querySelector('.notification-dropdown').classList.toggle('show');
        });
        
        // Mark all notifications as read
        markAllReadBtn.addEventListener('click', () => {
            document.querySelectorAll('.notification-item.unread').forEach(item => {
                item.classList.remove('unread');
            });
            document.querySelector('.notification-count').textContent = '0';
            notificationBell.querySelector('.notification-dropdown').classList.remove('show');
            showToast('All notifications marked as read');
        });
        
        // User dropdown
        userAvatar.addEventListener('click', (e) => {
            e.stopPropagation();
            userAvatar.querySelector('.user-dropdown').classList.toggle('show');
        });
        
        // Logout from dropdown
        dropdownLogoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showConfirmModal('Are you sure you want to logout?', () => {
                showToast('Logged out successfully');
                // In a real app, redirect to login page
                setTimeout(() => {
                    window.location.href = '../HTML/starter.html';
                }, 1500);
            });
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            const notificationDropdown = document.querySelector('.notification-dropdown');
            if (notificationDropdown && notificationDropdown.classList.contains('show')) {
                notificationDropdown.classList.remove('show');
            }
            
            const userDropdown = document.querySelector('.user-dropdown');
            if (userDropdown && userDropdown.classList.contains('show')) {
                userDropdown.classList.remove('show');
            }
        });
        
        // Image upload preview
        document.getElementById('item-image').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const preview = document.getElementById('item-image-preview');
                    preview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Initialize the dashboard
    initDashboard();
});