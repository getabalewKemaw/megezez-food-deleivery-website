// Enhanced data with discounts and more realistic ratings
const data = {
    categories: [
        {
            id: 1,
            title: "Fasting Foods ",
            image: "../Images/fasting-img.png",
            description: "Exquisite vegan delights crafted for fasting days - bursting with authentic Ethiopian flavors !"
        },
        {
            id: 2,
            title: "Non-Fast Foods",
            image: "../Images/yefsk1-img.png",
            description: "Our legendary meat dishes - succulent cuts prepared with generations of culinary wisdom !."
        },
        {
            id: 3,
            title: "Drinks ",
            image: "../Images/drinks-img.png",
            description: "Refresh your soul with our vibrant drink selection - from traditional brews to international favorites!"
        },
        {
            id: 4,
            title: "Traditional Food ",
            image: "../Images/variousfood-img.png",
            description: "Time-honored Ethiopian classics - each dish tells a story of our rich cultural heritage!"
        }
    ],
    items: {
        1: [
            {
                id: 101,
                title: "Beyaynet ( Vegan Platter)",
                image: "../Images/beyaynet.png",
                rating: 4.5,
                ratingCount: 128,
                price: 120,
                originalPrice: 150,
                discount: 20,
                description: "A magnificent spread of 8+ vegan delicacies! Our chef's selection features slow-cooked lentils, spiced greens, and savory stews - a rainbow of flavors on one platter!"
            },
            {
                id: 102,
                title: "Shiro ( Chickpea Stew)",
                image: "../Images/shiro-feses.png",
                rating: 4.8,
                ratingCount: 95,
                price: 70,
                description: "Creamy perfection! Our signature shiro blends roasted chickpeas with 14 aromatic spices, simmered to velvety smoothness - a fasting day essential!"
            },
            {
                id: 103,
                title: "Tegabino ( Spiced Chickpea)",
                image: "../Images/tegabino-img.png",
                rating: 4.7,
                ratingCount: 210,
                price: 80,
                originalPrice: 90,
                discount: 15,
                description: "A bold, fiery chickpea stew that dances on your palate! Infused with berbere spice and garlic, this vegan powerhouse will awaken your senses!"
            },
            {
                id: 104,
                title: "Misir Wot (- Spiced Lentils)",
                image: "../Images/freshmsr.png",
                rating: 4.3,
                ratingCount: 76,
                price: 80,
                description: "Comfort in every bite! Our red lentils melt with onions, garlic, and just the right kick of spice - a protein-packed vegan delight!"
            },
            {
                id: 105,
                title: "Pasta ",
                image: "../Images/pasta.png",
                rating: 4.6,
                ratingCount: 142,
                price: 70,
                originalPrice: 75,
                discount: 17,
                description: "Al dente perfection! Imported Italian pasta tossed with garden-fresh vegetables in our secret garlic-herb sauce - an Ethiopian-Italian fusion!"
            },
            {
                id: 106,
                title: "Injera ( Sourdough Flatbread)",
                image: "../Images/injerafrfr.png",
                rating: 4.4,
                ratingCount: 88,
                price: 65,
                description: "The heart of Ethiopian dining! Our 3-day fermented teff injera has the perfect spongy texture to scoop up every delicious morsel!"
            },
            {
                id: 107,
                title: "Timatim lebleb (Tomato Salad)",
                image: "../Images/tematim-lebleb.png",
                rating: 4.7,
                ratingCount: 156,
                price: 70,
                description: "A refreshing explosion of flavors! Juicy tomatoes, crisp onions, and green peppers tossed with lime and mitmita spice - the perfect palate cleanser!"
            },
            {
                id: 108,
                title: "Suf Fitfit (Sunflower Bread Salad)",
                image: "../Images/suf-ftft.png",
                rating: 4.5,
                ratingCount: 92,
                price: 80,
                originalPrice: 100,
                discount: 13,
                description: "A textural masterpiece! Fluffy injera soaked in spiced sunflower seed sauce, topped with crunchy roasted seeds - vegan comfort food at its finest!"
            },
            {
                id: 109,
                title: "Telba Fitfit ( Flaxseed Bread Salad)",
                image: "../Images/telba-ftft.png",
                rating: 4.9,
                ratingCount: 203,
                price: 70,
                description: "Nutrition meets flavor! Protein-rich flaxseed sauce coats soft injera, creating a superfood dish that's been cherished for generations!"
            },
            {
                id: 110,
                title: "Dabo Firfir ( Spiced Bread Pieces)",
                image: "../Images/dabofrfr.png",
                rating: 4.6,
                ratingCount: 117,
                price: 65,
                description: "Breakfast of champions! Fresh bread tossed in aromatic spiced butter with herbs - the ultimate morning comfort food with a caffeine-like energy boost!"
            },
            {
                id: 111,
                title: "Rice",
                image: "../Images/rice.png",
                rating: 4.8,
                ratingCount: 189,
                price: 65,
                description: "Fragrant basmati rice cooked to fluffy perfection with saffron and herbs - a versatile base for all our delicious stews and sauces!"
            },
            {
                id: 112,
                title: "Sambusa ( Spiced Pastry)",
                image: "../Images/sambusa.png",
                rating: 4.4,
                ratingCount: 78,
                price: 15,
                description: "Crispy golden pockets of joy! Our flaky pastry bursts with seasoned lentils or beef - the perfect snack any time of day!"
            }
        ],
        2: [
            {
                id: 201,
                title: "1 Kilo Meat ",
                image: "../Yefskimages/meat-img.png",
                rating: 4.8,
                ratingCount: 185,
                price: 700,
                description: "A carnivore's dream! Premium grass-fed beef or lamb, butchered daily and ready for your favorite preparation - tender enough to melt in your mouth!"
            },
            {
                id: 202,
                title: "Mlas Sember (Spiced Meat & Veggies)",
                image: "../Yefskimages/mlas-sember.png",
                rating: 4.9,
                ratingCount: 210,
                price: 500,
                description: "A symphony of textures! Succulent beef strips wok-tossed with crisp vegetables in our signature spice blend - sizzling hot and bursting with umami!"
            },
            {
                id: 203,
                title: "1 Kilo Goden (- Seasoned Meat)",
                image: "../Yefskimages/godn-meat.png",
                rating: 4.7,
                ratingCount: 165,
                price: 500,
                description: "Slow-cooked to perfection! Marinated beef or lamb simmered with rosemary, garlic, and awaze sauce until fork-tender - worth every birr!"
            },
            {
                id: 204,
                title: "Tibs ( Sautéed Meat)",
                image: "../Yefskimages/tibs.png",
                rating: 4.5,
                ratingCount: 132,
                price: 160,
                description: "The national favorite! Cubed beef seared in niter kibbeh with jalapeños and herbs - smoky, spicy, and utterly addictive!"
            },
            {
                id: 205,
                title: "Dullet ( Chopped Meat & Liver)",
                image: "../Yefskimages/dullet.png",
                rating: 4.6,
                ratingCount: 98,
                price: 90,
                originalPrice: 100,
                discount: 16,
                description: "An adventurous delight! Finely chopped premium beef and liver blended with mitmita and cardamom - packed with iron and explosive flavor!"
            },
            {
                id: 206,
                title: "Kikil (- Meat Stew)",
                image: "../Yefskimages/kikl.png",
                rating: 4.8,
                ratingCount: 145,
                price: 120,
                description: "Grandma's secret recipe! Fall-off-the-bone beef simmered for hours with potatoes and berbere - comfort food that warms your soul!"
            },
            {
                id: 207,
                title: "Kitfo ( Beef Tartare)",
                image: "../Yefskimages/kitfo.png",
                rating: 4.7,
                ratingCount: 178,
                price: 400,
                description: "For the bold foodie! Premium lean beef hand-chopped and seasoned with spiced butter - served traditional (raw) or lightly cooked (leb leb)!"
            },
            {
                id: 208,
                title: "Enkulal Firfir ( Scrambled Egg with Bread)",
                image: "../Yefskimages/enkulalfrfr.png",
                rating: 4.6,
                ratingCount: 112,
                price: 70,
                description: "Breakfast redefined! Farm-fresh eggs scrambled with injera in spiced butter - protein-packed morning fuel with an Ethiopian twist!"
            }
        ],
        3: [
            {
                id: 301,
                title: "Coca Cola ",
                image: "../drinksimages/cocacola.png",
                rating: 4.7,
                ratingCount: 112,
                price: 35,
                description: "The classic refreshment! Ice-cold Coca Cola served in glass bottles for that perfect crisp, bubbly experience!"
            },
            {
                id: 302,
                title: "Makiato ( - Coffee with Milk)",
                image: "../drinksimages/makiyato.png",
                rating: 4.6,
                ratingCount: 98,
                price: 25,
                description: "Ethiopia's favorite coffee break! Freshly brewed arabica coffee with steamed milk and just a hint of sugar - liquid energy in a cup!"
            },
            {
                id: 303,
                title: "Buna ( Ethiopian Coffee)",
                image: "../drinksimages/coffee.png",
                rating: 4.8,
                ratingCount: 145,
                price: 15,
                description: "From bean to cup! Our traditional coffee ceremony uses premium Yirgacheffe beans - rich, floral, and served with pride!"
            },
            {
                id: 304,
                title: "Ergo (- Ethiopian Yogurt)",
                image: "../drinksimages/ergo.png",
                rating: 4.5,
                ratingCount: 87,
                price: 20,
                description: "Probiotic powerhouse! Thick, tangy homemade yogurt made from grass-fed cow's milk - delicious plain or with honey!"
            },
            {
                id: 305,
                title: "Keshir (- Barley Drink)",
                image: "../drinksimages/keshier.png",
                rating: 4.7,
                ratingCount: 76,
                price: 20,
                description: "Ancient superfood drink! Roasted barley flour blended with water and spices - a nutritious, slightly sweet traditional refresher!"
            },
            {
                id: 306,
                title: "Spice Tea (- Herbal Tea)",
                image: "../drinksimages/spris.png",
                rating: 4.4,
                ratingCount: 65,
                price: 20,
                description: "A fragrant bouquet in a cup! Ten-spice blend featuring cinnamon, cardamom, and cloves - soothing and aromatic!"
            },
            {
                id: 307,
                title: "1 Liter Water ",
                image: "../drinksimages/water.png",
                rating: 4.3,
                ratingCount: 54,
                price: 30,
                description: "Pure mountain spring water - bottled at source for crisp, clean hydration to complement your meal!"
            },
            {
                id: 308,
                title: "Fanta ",
                image: "../drinksimages/fanta.png",
                rating: 4.6,
                ratingCount: 78,
                price: 50,
                description: "Sunshine in a bottle! Ice-cold orange Fanta with that perfect balance of sweetness and fizz - a nostalgic favorite!"
            },
            {
                id: 309,
                title: "Ananas Shai ( - Pineapple Tea)",
                image: "../drinksimages/ananastea.png",
                rating: 4.7,
                ratingCount: 67,
                price: 30,
                description: "Tropical paradise! Fragrant black tea infused with fresh pineapple chunks - a sweet escape in every sip!"
            },
            {
                id: 310,
                title: "Orange Tea ",
                image: "../drinksimages/orange-tea.png",
                rating: 4.5,
                ratingCount: 30,
                price: 30,
                description: "Citrus sunrise! Zesty orange peel steeped with premium tea leaves - vitamin C boost with comforting warmth!"
            },
            {
                id: 311,
                title: "Mango Tea ",
                image: "../drinksimages/mango-tea.png",
                rating: 4.8,
                ratingCount: 89,
                price: 30,
                description: "Summer in a cup! Sun-ripened mango essence blended with aromatic tea - like drinking sunshine!"
            },
            {
                id: 312,
                title: "Lemon Tea ",
                image: "../drinksimages/lemmon-tea.png",
                rating: 4.7,
                ratingCount: 76,
                price: 30,
                description: "Zingy revitalizer! Freshly squeezed lemon in honey-sweetened tea - the perfect pick-me-up any time of day!"
            }
        ],
        4: [
            {
                id: 401,
                title: "Tikur Anbessa Cake (ጥቁር አንበሳ ኬክ - Black Lion Cake)",
                image: "../otherimages/cake.png",
                rating: 4.8,
                ratingCount: 145,
                price: 30,
                description: "Legendary Ethiopian sponge cake! Moist layers infused with cardamom and topped with golden honey glaze - a sweet taste of tradition!"
            },
            {
                id: 402,
                title: "Donut ",
                image: "../otherimages/donut.png",
                rating: 4.7,
                ratingCount: 132,
                price: 30,
                description: "Cloud-like perfection! Freshly fried doughnuts with your choice of glaze - crispy outside, pillowy soft inside!"
            },
            {
                id: 403,
                title: "Special Ful ( - Fava Bean Dish)",
                image: "../otherimages/specialfull.png",
                rating: 4.6,
                ratingCount: 98,
                price: 100,
                description: "Breakfast fit for royalty! Slow-cooked fava beans topped with jalapeños, tomatoes, and our secret spice mix - served sizzling hot!"
            },
            {
                id: 404,
                title: "Chips ",
                image: "../otherimages/chips.png",
                rating: 4.5,
                ratingCount: 87,
                price: 15,
                description: "Golden crispy perfection! Hand-cut potatoes fried to crunchy excellence and dusted with our special seasoning - irresistible!"
            },
            {
                id: 405,
                title: "Pizza ",
                image: "../otherimages/pizza.png",
                rating: 4.4,
                ratingCount: 76,
                price: 300,
                description: "Italian-Ethiopian fusion! Wood-fired crust topped with our signature spicy tomato sauce and premium cheeses - best of both worlds!"
            },
            {
                id: 406,
                title: "Tuna Pizza ",
                image: "../otherimages/tunapizza.png",
                rating: 4.9,
                ratingCount: 178,
                price: 350,
                description: "Ocean meets oven! Flaky tuna, capers, and mozzarella on crisp crust - a seafood lover's dream with an Ethiopian spice kick!"
            },
            {
                id: 407,
                title: "Tikil Gomen (- Cabbage & Potatoes)",
                image: "../otherimages/tkl-gomen.png",
                rating: 4.5,
                ratingCount: 94,
                price: 95,
                description: "Vegetable masterpiece! Slow-cooked cabbage and potatoes caramelized with onions and turmeric - simple ingredients transformed into magic!"
            },
            {
                id: 410,
                title: "Yeabesha Gomen ( - Collard Greens)",
                image: "../otherimages/gomen.png",
                rating: 4.5,
                ratingCount: 78,
                price: 100,
                description: "Grandmother's recipe! Tender collard greens simmered with garlic and ginger - a healthy side bursting with flavor and tradition!"
            }
        ]
    }
};



// DOM elements
const categoryContainer = document.getElementById('category-container');
const itemsContainer = document.getElementById('items-container');
const backBtn = document.getElementById('back-btn');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const totalAmount = document.getElementById('total-amount');
const checkoutBtn = document.getElementById('checkout-btn');
const cartCount = document.getElementById('cart-count');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalQuantity = document.getElementById('modal-quantity');
const modalDescInput = document.getElementById('modal-desc-input');
const cancelBtn = document.getElementById('cancel-btn');
const confirmBtn = document.getElementById('confirm-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const suggestionsContainer = document.getElementById('suggestions-container');
const filterContainer = document.getElementById('filter-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const ratingModal = document.getElementById('rating-modal');
const ratingStars = document.getElementById('rating-stars');
const ratingCancelBtn = document.getElementById('rating-cancel-btn');
const ratingSubmitBtn = document.getElementById('rating-submit-btn');

// Payment related DOM elements
const paymentFormContainer = document.getElementById('payment-form-container');
const closePayment = document.getElementById('close-payment');
const paymentForm = document.getElementById('paymentForm');
const deliveryYes = document.getElementById('deliveryYes');
const deliveryNo = document.getElementById('deliveryNo');
const deliveryDetails = document.getElementById('deliveryDetails');
const buildingSelect = document.getElementById('building');
const deliveryFeeDisplay = document.getElementById('deliveryFee');
const paymentMethod = document.getElementById('paymentMethod');
const accountDetails = document.getElementById('accountDetails');
const accountNumber = document.getElementById('accountNumber');
const accountError = document.getElementById('accountError');
const paymentSuccess = document.getElementById('payment-success');
const paymentSuccessBtn = document.getElementById('payment-success-btn');
const paymentSubtotal = document.getElementById('paymentSubtotal');
const paymentDeliveryFee = document.getElementById('paymentDeliveryFee');
const paymentTotal = document.getElementById('paymentTotal');

// Delivery fees structure
const deliveryFees = {
    // 10 ETB locations
    'tesfa gebere selassie library': 10,
    'LH-05': 10,
    'LH-07': 10,
    'SE-09': 10,
    'SE-10': 10,
    'SE-11': 10,
    'SE-12': 10,
    'SE-13': 10,
    'SE-14': 10,
    'SE-15': 10,

    // 12 ETB locations
    'DN-01': 12,
    'DN-02': 12,
    'LA-08': 12,
    'LA-09': 12,
    'DH-05': 12,
    'DS-04': 12,

    // 13 ETB locations
    'SE-01': 13,
    'SE-02': 13,
    'SE-03': 13,
    'SE-04': 13,
    'SE-05': 13,
    'SE-06': 13,

    // 14 ETB locations (all DO buildings)
    'DO-01': 14,
    'DO-02': 14,
    // ... add all DO buildings up to DO-41
    'DO-41': 14,

    // Default 15 ETB for all others
    'default': 15
};
// Bank validation rules
const bankRules = {
    nib: {
        pattern: /^[0-9]{13}$/,
        message: 'NIB account must be exactly 13 digits',
        example: '1000123456789'
    },
    cbe: {
        pattern: /^[0-9]{13}$/,
        message: 'CBE account must be exactly 13 digits',
        example: '1000123456789'
    },
    dashen: {
        pattern: /^1[0-9]{9}$/,
        message: 'Dashen account must be 10 digits starting with 1',
        example: '1012345678'
    },
    abisinia: {
        pattern: /^[0-9]{12}$/,
        message: 'Abisinia account must be exactly 12 digits',
        example: '123456789012'
    },
    telebirr: {
        pattern: /^[0-9]{9}$/,
        message: 'Telebirr account must be 9 digits',
        example: '912345678'
    }
};

// State
let currentCategory = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentItem = null;
let currentRatingItem = null;
let selectedRating = 0;

// Initialize the app
function init() {
    addRandomDiscountsAndRatings();
    renderCategories();
    setupEventListeners();
    updateCartCount();
    initBuildingOptions();
}

// Add random discounts and realistic ratings to items
function addRandomDiscountsAndRatings() {
    for (const categoryId in data.items) {
        data.items[categoryId].forEach((item, index) => {
            if (Math.random() < 0.3 && !item.discount) {
                const discount = Math.floor(Math.random() * 30) + 5;
                item.originalPrice = Math.round(item.price * (1 + discount / 100));
                item.discount = discount;
            }

            if (index % 3 === 0 && item.rating > 4.5) {
                item.rating = (Math.random() * 0.5) + 4.0;
            } else if (index % 5 === 0) {
                item.rating = (Math.random() * 0.7) + 4.3;
            }

            item.ratingCount = Math.floor(item.ratingCount * (0.8 + Math.random() * 0.4));
        });
    }
}

// Render categories
function renderCategories() {
    categoryContainer.innerHTML = '';
    data.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <img src="${category.image}" alt="${category.title}" class="category-img">
            <div class="category-info">
                <h3 class="category-title">${category.title}</h3>
                <p class="category-desc">${category.description}</p>
                <button class="explore-btn" data-id="${category.id}">Explore</button>
            </div>
        `;
        categoryContainer.appendChild(categoryCard);
    });
}

// Render items for a category with filters
function renderItems(categoryId, filter = 'all') {
    itemsContainer.innerHTML = '';
    let items = data.items[categoryId];

    if (filter !== 'all') {
        if (filter === 'discounted') {
            items = items.filter(item => item.discount);
        } else if (filter === 'rating') {
            items = [...items].sort((a, b) => b.rating - a.rating);
        } else if (filter === 'price-low') {
            items = [...items].sort((a, b) => a.price - b.price);
        } else if (filter === 'price-high') {
            items = [...items].sort((a, b) => b.price - a.price);
        }
    }

    if (items && items.length > 0) {
        items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';

            const discountBadge = item.discount ?
                `<div class="discount-badge">${item.discount}% OFF</div>` : '';

            const priceDisplay = item.originalPrice ?
                `<div class="price-container">
                    <span class="item-price">${item.price} ETB</span>
                    <span class="original-price">${item.originalPrice} ETB</span>
                </div>` :
                `<div class="item-price">${item.price} ETB</div>`;

            itemCard.innerHTML = `
                ${discountBadge}
                <img src="${item.image}" alt="${item.title}" class="item-img">
                <div class="item-info">
                    <h3 class="item-title">${item.title}</h3>
                    <div class="item-rating" data-id="${item.id}">
                        <div class="stars">
                            ${renderStars(item.rating)}
                        </div>
                        <span class="rating-count">(${item.ratingCount})</span>
                    </div>
                    ${priceDisplay}
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            `;
            itemsContainer.appendChild(itemCard);
        });

        const backButton = document.createElement('button');
        backButton.className = 'back-btn';
        backButton.innerHTML = '<i class="fa-solid fa-backward"></i> BACK';
        backButton.addEventListener('click', () => {
            itemsContainer.style.display = 'none';
            categoryContainer.style.display = 'flex';
            currentCategory = null;
            searchInput.value = '';
            filterContainer.style.display = 'none';
            document.body.classList.remove('showing-items');

            filterButtons.forEach(btn => {
                if (btn.dataset.filter === 'all') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        });

        itemsContainer.appendChild(backButton);

        itemsContainer.style.display = 'flex';
        categoryContainer.style.display = 'none';
        filterContainer.style.display = 'flex';
    }
}

// Render stars based on rating
function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

// Render cart items
function renderCartItems() {
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-price">${item.price} ETB</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-index="${index}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}">
                    <button class="quantity-btn plus" data-index="${index}">+</button>
                    <button class="remove-item" data-index="${index}"><i class="fas fa-trash"></i></button>
                </div>
                ${item.specialInstructions ? `<div class="special-instructions">Special: ${item.specialInstructions}</div>` : ''}
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    updateTotal();
}

// Update cart total
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `${total} ETB`;
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show search suggestions
function showSuggestions(searchTerm) {
    if (searchTerm.length < 1) {
        suggestionsContainer.style.display = 'none';
        return;
    }

    const allItems = getAllItems();
    const suggestions = allItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);

    if (suggestions.length > 0) {
        suggestionsContainer.innerHTML = '';
        suggestions.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = item.title;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = item.title;
                suggestionsContainer.style.display = 'none';
                searchItems(item.title);
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

// Get all items from all categories
function getAllItems() {
    let allItems = [];
    for (const categoryId in data.items) {
        allItems = [...allItems, ...data.items[categoryId]];
    }
    return allItems;
}

// Simple NLP-based search
function nlpSearch(query) {
    query = query.toLowerCase();

    const fastingTerms = ['fasting', 'vegan', 'vegetarian', 'lent', 'abstinence'];
    if (fastingTerms.some(term => query.includes(term))) {
        return data.items[1];
    }

    const drinkTerms = ['drink', 'beverage', 'juice', 'smoothie', 'coffee', 'tea'];
    if (drinkTerms.some(term => query.includes(term))) {
        return data.items[3];
    }

    return getAllItems().filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
}

// Show add to cart modal
function showAddToCartModal(item) {
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.description;
    modalQuantity.value = 1;
    modalDescInput.value = '';
    modal.style.display = 'flex';
    overlay.classList.add('active');
}

// Show rating modal
function showRatingModal(item) {
    const stars = ratingStars.querySelectorAll('.rating-star');
    stars.forEach(star => {
        star.classList.remove('active');
        star.classList.remove('fas');
        star.classList.add('far');
    });

    selectedRating = 0;
    ratingModal.style.display = 'flex';
    overlay.classList.add('active');
}

// Search items with optional filter
function searchItems(query = null, filter = null) {
    const searchTerm = query || searchInput.value.trim().toLowerCase();
    const activeFilter = filter || document.querySelector('.filter-btn.active').dataset.filter;

    if (searchTerm === '') {
        if (currentCategory) {
            renderItems(currentCategory, activeFilter);
            document.body.classList.add('showing-items');
        } else {
            itemsContainer.style.display = 'none';
            categoryContainer.style.display = 'flex';
            filterContainer.style.display = 'none';
            document.body.classList.remove('showing-items');
        }
        return;
    }

    itemsContainer.innerHTML = '';
    filterContainer.style.display = 'flex';

    let foundItems = nlpSearch(searchTerm);

    if (activeFilter === 'discounted') {
        foundItems = foundItems.filter(item => item.discount);
    } else if (activeFilter === 'rating') {
        foundItems = [...foundItems].sort((a, b) => b.rating - a.rating);
    } else if (activeFilter === 'price-low') {
        foundItems = [...foundItems].sort((a, b) => a.price - b.price);
    } else if (activeFilter === 'price-high') {
        foundItems = [...foundItems].sort((a, b) => b.price - a.price);
    }

    if (foundItems.length === 0) {
        itemsContainer.innerHTML = '<div style="width:100%;text-align:center;padding:40px 0;color:var(--text-color)">No items found matching your search</div>';
    } else {
        foundItems.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';

            const discountBadge = item.discount ?
                `<div class="discount-badge">${item.discount}% OFF</div>` : '';

            const priceDisplay = item.originalPrice ?
                `<div class="price-container">
                    <span class="item-price">${item.price} ETB</span>
                    <span class="original-price">${item.originalPrice} ETB</span>
                </div>` :
                `<div class="item-price">${item.price} ETB</div>`;

            itemCard.innerHTML = `
                ${discountBadge}
                <img src="${item.image}" alt="${item.title}" class="item-img">
                <div class="item-info">
                    <h3 class="item-title">${item.title}</h3>
                    <div class="item-rating" data-id="${item.id}">
                        <div class="stars">
                            ${renderStars(item.rating)}
                        </div>
                        <span class="rating-count">(${item.ratingCount})</span>
                    </div>
                    ${priceDisplay}
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            `;
            itemsContainer.appendChild(itemCard);
        });

        const backButton = document.createElement('button');
        backButton.className = 'back-btn';
        backButton.innerHTML = `<i class="fa-light fa-arrow-right">`;
        backButton.addEventListener('click', () => {
            itemsContainer.style.display = 'none';
            categoryContainer.style.display = 'flex';
            currentCategory = null;
            searchInput.value = '';
            filterContainer.style.display = 'none';
        });
        itemsContainer.appendChild(backButton);
    }

    itemsContainer.style.display = 'flex';
    categoryContainer.style.display = 'none';
    currentCategory = null;
    document.body.classList.add('showing-items');
}

// Payment related functions
function toggleDeliveryDetails() {
    if (deliveryYes.checked) {
        deliveryDetails.style.display = 'block';
        updateDeliveryFee();
    } else {
        deliveryDetails.style.display = 'none';
        deliveryFeeDisplay.textContent = '0 ETB';
        updateOrderSummary(0);
    }
}

function updateDeliveryFee() {
    if (!deliveryYes.checked) return;

    const building = buildingSelect.value.toLowerCase();
    let fee = deliveryFees.default;

    for (const [key, value] of Object.entries(deliveryFees)) {
        if (building.includes(key.toLowerCase())) {
            fee = value;
            break;
        }
    }

    deliveryFeeDisplay.textContent = `${fee} ETB`;
    updateOrderSummary(fee);
}

function updateOrderSummary(deliveryFee) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + deliveryFee;

    paymentSubtotal.textContent = `${subtotal} ETB`;
    paymentDeliveryFee.textContent = `${deliveryFee} ETB`;
    paymentTotal.textContent = `${total} ETB`;
}

function toggleAccountDetails() {
    if (paymentMethod.value) {
        accountDetails.classList.remove('hidden');
    } else {
        accountDetails.classList.add('hidden');
    }
}

function validateAccountNumber() {
    const value = accountNumber.value.trim();
    const method = paymentMethod.value;
    const rules = bankRules[method];
    const inputGroup = accountNumber.closest('.input-group');

    inputGroup.classList.remove('error');
    accountError.style.display = 'none';

    if (!method) {
        showError('Please select a payment method');
        return false;
    }

    if (!value) {
        showError('Account number is required');
        return false;
    }

    if (!/^\d+$/.test(value)) {
        showError('Account number must contain only numbers');
        return false;
    }

    if (rules && !rules.pattern.test(value)) {
        showError(`${rules.message} (Example: ${rules.example})`);
        return false;
    }

    return true;
}

function showError(message) {
    const inputGroup = accountNumber.closest('.input-group');
    inputGroup.classList.add('error');
    accountError.textContent = message;
    accountError.style.display = 'block';
    accountNumber.focus();
}

function validateForm() {
    let isValid = true;

    if (!paymentForm.fullName.value.trim()) {
        isValid = false;
        showFieldError(paymentForm.fullName, 'Full name is required');
    }

    if (!paymentForm.phone.value.trim() || !/^[0-9]{10}$/.test(paymentForm.phone.value)) {
        isValid = false;
        showFieldError(paymentForm.phone, 'Valid phone number is required (10 digits)');
    }

    if (deliveryYes.checked && !buildingSelect.value) {
        isValid = false;
        showFieldError(buildingSelect, 'Building selection is required');
    }

    if (!paymentMethod.value) {
        isValid = false;
        showFieldError(paymentMethod, 'Payment method is required');
    } else {
        if (!validateAccountNumber()) {
            isValid = false;
        }
    }

    return isValid;
}

function showFieldError(field, message) {
    const inputGroup = field.closest('.input-group');
    if (!inputGroup) return;

    let errorElement = inputGroup.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        inputGroup.appendChild(errorElement);
    }

    inputGroup.classList.add('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    field.focus();
}

function processPayment() {
    if (!validateForm()) return;

    checkoutBtn.disabled = true;
    checkoutBtn.textContent = 'Processing...';

    setTimeout(() => {
        paymentForm.style.display = 'none';
        paymentSuccess.style.display = 'block';

        const orderData = {
            customer: {
                name: paymentForm.fullName.value,
                phone: paymentForm.phone.value
            },
            delivery: {
                method: deliveryYes.checked ? 'delivery' : 'pickup',
                building: deliveryYes.checked ? buildingSelect.value : null,
                fee: deliveryYes.checked ? parseInt(deliveryFeeDisplay.textContent) : 0
            },
            payment: {
                method: paymentMethod.value,
                account: accountNumber.value
            },
            items: cart,
            total: paymentTotal.textContent,
            timestamp: new Date().toISOString()
        };

        console.log('Order submitted:', orderData);

        checkoutBtn.disabled = false;
        checkoutBtn.textContent = 'Checkout';
    }, 1500);
}

function initBuildingOptions() {
    const buildings = [
        ...Array.from({ length: 41 }, (_, i) => `DO-${(i + 1).toString().padStart(2, '0')}`),
        ...Array.from({ length: 4 }, (_, i) => `CL-${(i + 1).toString().padStart(2, '0')}`),
        'CS-01', 'DA-01', 'DA-02', ...Array.from({ length: 5 }, (_, i) => `DH-${(i + 1).toString().padStart(2, '0')}`),
        'DN-01', 'DN-02', ...Array.from({ length: 10 }, (_, i) => `LA-${(i + 1).toString().padStart(2, '0')}`),
        ...Array.from({ length: 7 }, (_, i) => `LH-${(i + 1).toString().padStart(2, '0')}`),
        'LI-01', 'LI-02', ...Array.from({ length: 15 }, (_, i) => `SE-${(i + 1).toString().padStart(2, '0')}`),
        'WS-01', 'WS-02',
        'Tesfa Gebere Selassie Library', 'Kebede Micael Library',
        'Female Library', 'Postgraduate', 'Main Registrar', 'Parking'
    ];

    buildingSelect.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select your building';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    buildingSelect.appendChild(defaultOption);

    const dormGroup = document.createElement('optgroup');
    dormGroup.label = 'Dormitories';
    for (let i = 1; i <= 41; i++) {
        const option = document.createElement('option');
        option.value = `DO-${i.toString().padStart(2, '0')}`;
        option.textContent = `Dormitory ${i.toString().padStart(2, '0')}`;
        dormGroup.appendChild(option);
    }
    buildingSelect.appendChild(dormGroup);

    const classGroup = document.createElement('optgroup');
    classGroup.label = 'Classrooms';
    for (let i = 1; i <= 4; i++) {
        const option = document.createElement('option');
        option.value = `CL-${i.toString().padStart(2, '0')}`;
        option.textContent = `Classroom ${i.toString().padStart(2, '0')}`;
        classGroup.appendChild(option);
    }
    buildingSelect.appendChild(classGroup);

    const otherGroup = document.createElement('optgroup');
    otherGroup.label = 'Other Buildings';
    buildings.filter(b => !b.startsWith('DO-') && !b.startsWith('CL-')).forEach(building => {
        const option = document.createElement('option');
        option.value = building;
        option.textContent = building;
        otherGroup.appendChild(option);
    });
    buildingSelect.appendChild(otherGroup);

    buildingSelect.addEventListener('focus', function () {
        this.size = 6;
    });

    buildingSelect.addEventListener('blur', function () {
        this.size = 1;
    });

    buildingSelect.addEventListener('change', updateDeliveryFee);
}

function showPaymentForm() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    paymentSubtotal.textContent = `${subtotal} ETB`;
    paymentDeliveryFee.textContent = '0 ETB';
    paymentTotal.textContent = `${subtotal} ETB`;

    cartSidebar.classList.remove('active');
    paymentFormContainer.classList.add('active');
    overlay.classList.add('active');
    paymentForm.style.display = 'block';
    paymentSuccess.style.display = 'none';
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Category explore buttons
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('explore-btn')) {
            e.preventDefault();
            currentCategory = parseInt(e.target.getAttribute('data-id'));
            renderItems(currentCategory);
            document.body.classList.add('showing-items');
        }
    });

    // Add to cart buttons
    itemsContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart')) {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            const categoryItems = currentCategory ? data.items[currentCategory] : getAllItems();
            const item = categoryItems.find(i => i.id === itemId);

            if (item) {
                currentItem = item;
                showAddToCartModal(item);
            }
        }

        if (e.target.closest('.item-rating')) {
            const itemId = parseInt(e.target.closest('.item-rating').getAttribute('data-id'));
            const categoryItems = currentCategory ? data.items[currentCategory] : getAllItems();
            const item = categoryItems.find(i => i.id === itemId);

            if (item) {
                currentRatingItem = item;
                showRatingModal(item);
            }
        }
    });

    const wrapper=document.getElementById("wrapper");

    // Cart icon click
    cartIcon.addEventListener('click', function () {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        wrapper.classList.add('blurred');
        renderCartItems();
    });

    // Close cart
    closeCart.addEventListener('click', function () {
        cartSidebar.classList.remove('active');
        wrapper.classList.remove('blurred'); // REMOVE blur
        overlay.classList.remove('active');
    });

    // Overlay click
    overlay.addEventListener('click', function () {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        modal.style.display = 'none';
        ratingModal.style.display = 'none';
        paymentFormContainer.classList.remove('active');
        paymentSuccess.classList.add('hidden');
    });

    // Cart item quantity changes
    cartItems.addEventListener('click', function (e) {
        const removeBtn = e.target.closest('.remove-item');
        if (removeBtn) {
            const index = removeBtn.getAttribute('data-index');
            cart.splice(index, 1);
            saveCart();
            renderCartItems();
            updateCartCount();
            updateTotal();
            showToast('Item removed from cart');
            return;
        }

        const index = e.target.getAttribute('data-index');
        if (index === null) return;

        const item = cart[index];

        if (e.target.classList.contains('minus')) {
            if (item.quantity > 1) {
                item.quantity--;
                showToast('Quantity decreased');
            } else {
                cart.splice(index, 1);
                showToast('Item removed from cart');
            }
        } else if (e.target.classList.contains('plus')) {
            item.quantity++;
            showToast('Quantity increased');
        }

        saveCart();
        renderCartItems();
        updateCartCount();
    });

    // Cart item quantity input changes
    cartItems.addEventListener('change', function (e) {
        if (e.target.classList.contains('quantity-input')) {
            const index = e.target.getAttribute('data-index');
            const quantity = parseInt(e.target.value);

            if (quantity > 0) {
                cart[index].quantity = quantity;
            } else {
                cart.splice(index, 1);
            }

            saveCart();
            renderCartItems();
            updateCartCount();
        }
    });

    // Checkout button
    checkoutBtn.addEventListener('click', showPaymentForm);

    // Close payment form
    closePayment.addEventListener('click', function () {
        paymentFormContainer.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Delivery method toggle
    deliveryYes.addEventListener('change', toggleDeliveryDetails);
    deliveryNo.addEventListener('change', toggleDeliveryDetails);

    // Building selection change
    buildingSelect.addEventListener('change', updateDeliveryFee);

    // Payment method change
    paymentMethod.addEventListener('change', toggleAccountDetails);

    // Account number validation
    accountNumber.addEventListener('input', validateAccountNumber);

    // Payment success button
    paymentSuccessBtn.addEventListener('click', function () {
        paymentFormContainer.classList.remove('active');
        overlay.classList.remove('active');
        paymentSuccess.style.display = 'none';
        paymentForm.style.display = 'block';

        cart = [];
        saveCart();
        updateCartCount();
        renderCartItems();
        updateTotal();

        showToast('Payment successful! Your order has been placed.');
    });

    // Form submission
    paymentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        processPayment();
    });

    // Modal buttons
    cancelBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        overlay.classList.remove('active');
    });

    confirmBtn.addEventListener('click', function () {
        const quantity = parseInt(modalQuantity.value);
        const specialInstructions = modalDescInput.value;

        if (quantity > 0 && currentItem) {
            const existingItemIndex = cart.findIndex(item =>
                item.id === currentItem.id &&
                item.specialInstructions === specialInstructions
            );

            if (existingItemIndex >= 0) {
                cart[existingItemIndex].quantity += quantity;
            } else {
                cart.push({
                    ...currentItem,
                    quantity,
                    specialInstructions
                });
            }

            saveCart();
            updateCartCount();
            showToast('Item added to cart');
        }

        modal.style.display = 'none';
        overlay.classList.remove('active');
        currentItem = null;
    });

    // Search functionality
    searchInput.addEventListener('input', function () {
        showSuggestions(this.value);
        searchItems(this.value);
    });

    searchBtn.addEventListener('click', function () {
        searchItems(searchInput.value);
    });

    document.addEventListener('click', function (e) {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            if (currentCategory) {
                renderItems(currentCategory, filter);
            } else if (itemsContainer.style.display === 'flex') {
                searchItems(searchInput.value, filter);
            }
        });
    });

    // Rating stars
    ratingStars.addEventListener('click', function (e) {
        if (e.target.classList.contains('rating-star')) {
            const rating = parseInt(e.target.dataset.rating);
            selectedRating = rating;

            const stars = ratingStars.querySelectorAll('.rating-star');
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                    star.classList.add('fas');
                    star.classList.remove('far');
                } else {
                    star.classList.remove('active');
                    star.classList.remove('fas');
                    star.classList.add('far');
                }
            });
        }
    });

    // Rating modal buttons
    ratingCancelBtn.addEventListener('click', function () {
        ratingModal.style.display = 'none';
        overlay.classList.remove('active');
        selectedRating = 0;
    });

    ratingSubmitBtn.addEventListener('click', function () {
        if (selectedRating > 0 && currentRatingItem) {
            const newRatingCount = currentRatingItem.ratingCount + 1;
            const newRating = ((currentRatingItem.rating * currentRatingItem.ratingCount) + selectedRating) / newRatingCount;

            currentRatingItem.rating = parseFloat(newRating.toFixed(1));
            currentRatingItem.ratingCount = newRatingCount;

            if (currentCategory) {
                renderItems(currentCategory, document.querySelector('.filter-btn.active').dataset.filter);
            } else {
                searchItems(searchInput.value);
            }

            showToast('Thank you for your rating!');
        }

        ratingModal.style.display = 'none';
        overlay.classList.remove('active');
        selectedRating = 0;
    });
}

// Initialize the app
init();