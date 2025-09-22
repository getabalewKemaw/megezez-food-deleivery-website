document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeSidebarBtn = document.querySelector('.close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = {
        dashboard: document.getElementById('dashboard-content'),
        orders: document.getElementById('orders-content'),
        favorites: document.getElementById('favorites-content'),
        profile: document.getElementById('profile-content')
    };
    const viewButtons = document.querySelectorAll('.view-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const modal = document.getElementById('glass-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalClose = document.getElementById('modal-close');
    const modalConfirm = document.getElementById('modal-confirm');
    const editProfileBtn = document.querySelector('[data-action="edit-profile"]');
    const cancelEditBtn = document.querySelector('[data-action="cancel-edit"]');
    const profileDisplay = document.getElementById('profile-display');
    const profileForm = document.getElementById('profile-form');
    const avatarUpload = document.getElementById('avatar-upload');
    const userAvatarImg = document.getElementById('user-avatar-img');
    const profileAvatarImg = document.getElementById('profile-avatar-img');
    const notificationBell = document.querySelector('.notification-bell');
    const removeFavButtons = document.querySelectorAll('.remove-fav-btn');

    // Sample user data
    let userData = {
        name: "John Doe",
        email: "john@example.com",
        phone: "(555) 123-4567",
        address: "123 Food Street, Taste City",
        joinDate: "2023",
        avatar: "default-avatar.jpg",
        orders: 12,
        favorites: 5,
        notifications: 3
    };

    // Initialize the dashboard
    function initDashboard() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    
 


        // Set user data
        // document.getElementById('welcome-message').textContent = `Welcome Back, ${userData.name}!`;
        // document.getElementById('profile-name').textContent = userData.name;
        // document.getElementById('profile-email').textContent = userData.email;
        // document.getElementById('profile-phone').textContent = userData.phone;
        // document.getElementById('profile-address').textContent = userData.address;
        // document.querySelector('.stat-number:nth-of-type(1)').textContent = userData.orders;
        // document.querySelector('.stat-number:nth-of-type(2)').textContent = userData.favorites;
        // document.querySelector('.notification-count').textContent = userData.notifications;

        // 
        // Load user data from localStorage or use default
        // const currentUser = JSON.parse(localStorage.getItem('currentUser')) || userData;

        // Load orders from localStorage
        const userOrders = JSON.parse(localStorage.getItem(`userOrders_${currentUser.email}`)) || [];


        // Update UI with real data
        document.getElementById('welcome-message').textContent = `Welcome Back, ${currentUser.name}!`;
        document.getElementById('profile-name').textContent = currentUser.name;
        document.getElementById('profile-email').textContent = currentUser.email;
        document.getElementById('profile-phone').textContent = currentUser.phone || "(Not set)";
        document.getElementById('profile-address').textContent = currentUser.address || "(Not set)";

        // Update stats with real data
        document.querySelector('.stat-number:nth-of-type(1)').textContent = userOrders.length;
        document.querySelector('.stat-number:nth-of-type(2)').textContent = currentUser.favorites || 0;


      
    
        // Set avatar with fallback
        if (currentUser.avatar) {
            userAvatarImg.src = currentUser.avatar;
            profileAvatarImg.src = currentUser.avatar;
        } else {
            // Set default avatar if none exists
            const defaultAvatar = '../Images/default-avatar.png'; // Path to your default avatar
            userAvatarImg.src = defaultAvatar;
            profileAvatarImg.src = defaultAvatar;
        }



        // Update orders table with real data
        updateOrdersTable(userOrders);

        // Update recent activity with real data
        updateRecentActivity(userOrders);
         loadUserOrders();


    }

    // Function to update orders table with real data
    function updateOrdersTable(orders) {
        const ordersTable = document.querySelector('.orders-table tbody');
        ordersTable.innerHTML = '';

        if (orders.length === 0) {
            ordersTable.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center">No orders yet</td>
            </tr>
        `;
            return;
        }

        orders.forEach(order => {
            const orderDate = new Date(order.timestamp).toLocaleDateString();
            const itemsList = order.items.map(item => item.title).join(', ');
            const total = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            ordersTable.innerHTML += `
            <tr>
                <td>#${order.id}</td>
                <td>${orderDate}</td>
                <td>${itemsList}</td>
                <td>${total} ETB</td>
                <td class="status-${order.status || 'pending'}">${order.status || 'Pending'}</td>
            </tr>
        `;
        });
    }

    // Function to update recent activity
    function updateRecentActivity(orders) {
        const activityList = document.querySelector('.activity-list');
        activityList.innerHTML = '';

        // Add order activities
        orders.slice(0, 3).forEach(order => {
            const orderDate = new Date(order.timestamp).toLocaleString();
            activityList.innerHTML += `
            <li>
                <span class="material-icons">shopping_bag</span>
                <div>
                    <p>Ordered ${order.items[0].title}${order.items.length > 1 ? ` + ${order.items.length - 1} more` : ''}</p>
                    <small>${orderDate}</small>
                </div>
            </li>
        `;
        });
    }
   


    function loadUserOrders() {
        try {
            const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
            const ordersKey = `user_${currentUser.email}_orders`;
            const orders = JSON.parse(localStorage.getItem(ordersKey)) || [];
            
            const ordersBody = document.getElementById('orders-body');
            if (!ordersBody) return;
    
            // Clear existing rows except the fallback
            while (ordersBody.rows.length > 1) {
                ordersBody.deleteRow(1);
            }
    
            // Add real orders
            orders.forEach(order => {
                const row = ordersBody.insertRow();
                
                // Format date
                const orderDate = new Date(order.timestamp);
                const formattedDate = orderDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
    
                // Format items list
                const itemsList = order.items.map(item => item.title).join(', ');
    
                row.innerHTML = `
                    <td>#${order.id || order.timestamp}</td>
                    <td>${formattedDate}</td>
                    <td>${itemsList}</td>
                    <td>${order.total}</td>
                    <td class="status-${order.status.toLowerCase()}">${order.status}</td>
                `;
            });
    
            // Update orders count
            const ordersCountElement = document.querySelector('.stats-card:nth-child(1) .stat-number');
            if (ordersCountElement) {
                ordersCountElement.textContent = orders.length;
            }
        } catch (error) {
            console.error('Error loading orders:', error);
        }
    }







    // Toggle sidebar on mobile
    function toggleSidebar() {
        sidebar.classList.toggle('show');
    }

    // Show section based on clicked nav link
    function showSection(sectionId) {
        Object.values(sections).forEach(section => {
            section.classList.add('hidden');
        });
        sections[sectionId].classList.remove('hidden');
    }

    // Show modal with message
    function showModal(message, showConfirm = false) {
        modalMessage.textContent = message;
        modalConfirm.classList.toggle('hidden', !showConfirm);
        modal.classList.add('show');
    }

    // Close modal
    function closeModal() {
        modal.classList.remove('show');
    }

    function handleAvatarUpload(e) {
        const file = e.target.files[0];
        if (file && file.size < 500000) { // Limit to 500KB
            const reader = new FileReader();
            reader.onload = function(event) {
                // Update UI
                userAvatarImg.src = event.target.result;
                profileAvatarImg.src = event.target.result;
                
                // Save to localStorage properly
                const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
                currentUser.avatar = event.target.result;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                showToast('Profile picture updated successfully!');
            };
            reader.onerror = function() {
                showToast('Error loading image. Please try another image.');
            };
            reader.readAsDataURL(file);
        } else if (file) {
            showToast('Image too large (max 500KB)');
        }
    }




    // Handle profile edit
    function handleProfileEdit() {
        profileDisplay.classList.add('hidden');
        profileForm.classList.remove('hidden');
        document.getElementById('edit-name').value = userData.name;
        document.getElementById('edit-email').value = userData.email;
        document.getElementById('edit-phone').value = userData.phone;
        document.getElementById('edit-address').value = userData.address;
    }

    // Cancel profile edit
    function cancelProfileEdit() {
        profileForm.classList.add('hidden');
        profileDisplay.classList.remove('hidden');
    }

    // Enhanced profile save to update localStorage
    function saveProfileChanges(e) {
        e.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || userData;
        
        currentUser.name = document.getElementById('edit-name').value;
        currentUser.email = document.getElementById('edit-email').value;
        currentUser.phone = document.getElementById('edit-phone').value;
        currentUser.address = document.getElementById('edit-address').value;
        
        // Save to localStorage
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Update UI
        document.getElementById('profile-name').textContent = currentUser.name;
        document.getElementById('profile-email').textContent = currentUser.email;
        document.getElementById('profile-phone').textContent = currentUser.phone;
        document.getElementById('profile-address').textContent = currentUser.address;
        document.getElementById('welcome-message').textContent = `Welcome Back, ${currentUser.name}!`;
        
        profileForm.classList.add('hidden');
        profileDisplay.classList.remove('hidden');
        showModal('Profile updated successfully!');
    }



    // Handle logout
    function handleLogout() {
        showModal('Are you sure you want to logout?', true);
        modalConfirm.onclick = function () {
            // In a real app, you would redirect to login page
            showModal('Logging out...');
            setTimeout(() => {
                closeModal();
                // window.location.href = 'login.html';
            }, 1500);
        };
    }

    // Handle notification bell
    function handleNotificationBell() {
        userData.notifications = 0;
        document.querySelector('.notification-count').textContent = '0';
        showModal('You have no new notifications');
    }

    // Handle remove favorite
    function handleRemoveFavorite(e) {
        const itemName = e.target.getAttribute('data-item');
        showModal(`Remove ${itemName} from favorites?`, true);
        modalConfirm.onclick = function () {
            e.target.closest('.favorite-item').remove();
            userData.favorites--;
            document.querySelector('.stat-number:nth-of-type(2)').textContent = userData.favorites;
            closeModal();
            showModal(`${itemName} removed from favorites`);
        };
    }

    // Event Listeners
    hamburgerBtn.addEventListener('click', toggleSidebar);
    closeSidebarBtn.addEventListener('click', toggleSidebar);

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            if (this.id === 'logout-btn') {
                handleLogout();
                return;
            }

            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);

            // Close sidebar on mobile after selection
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
        });
    });

    viewButtons.forEach(button => {
        button.addEventListener('click', function () {
            const action = this.getAttribute('data-action');
            if (action === 'view-orders') {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector('[data-section="orders"]').classList.add('active');
                showSection('orders');
            } else if (action === 'view-favorites') {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector('[data-section="favorites"]').classList.add('active');
                showSection('favorites');
            }
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalConfirm.addEventListener('click', closeModal);

    editProfileBtn.addEventListener('click', handleProfileEdit);
    cancelEditBtn.addEventListener('click', cancelProfileEdit);
    profileForm.addEventListener('submit', saveProfileChanges);
    avatarUpload.addEventListener('change', handleAvatarUpload);
    notificationBell.addEventListener('click', handleNotificationBell);

    removeFavButtons.forEach(button => {
        button.addEventListener('click', handleRemoveFavorite);
    });

    // Initialize the dashboard
    initDashboard();
});