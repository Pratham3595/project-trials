// Content data (can be loaded from external JSON in production with a server)

const contentData = {
    "hero": {
        "badge": "Luxury Travel Redefined",
        "heading": "Your Passport to Global Glamour",
        "features": [
            "Personalized Travel Experiences",
            "Expert Destination Knowledge",
            "Exceptional Customer Service"
        ]
    },
    "destinations": [
        {
            "id": 1,
            "name": "Eiffel Tower",
            "tours": 356,
            "image": "./assets/images/eiffel-tower.png"
        },
        {
            "id": 2,
            "name": "Machu Picchu",
            "tours": 356,
            "image": "./assets/images/machu-picchu.png"
        },
        {
            "id": 3,
            "name": "Great Wall",
            "tours": 356,
            "image": "./assets/images/great-wall.png"
        },
        {
            "id": 4,
            "name": "Statue of Liberty",
            "tours": 356,
            "image": "./assets/images/statue-liberty.png"
        },
        {
            "id": 5,
            "name": "Taj Mahal",
            "tours": 356,
            "image": "./assets/images/taj-mahal.png"
        },
        {
            "id": 6,
            "name": "Opera House",
            "tours": 356,
            "image": "./assets/images/opera-house.png"
        },
        {
            "id": 7,
            "name": "Colosseum",
            "tours": 356,
            "image": "./assets/images/colosseum.png"
        },
        {
            "id": 8,
            "name": "Grand Canyon",
            "tours": 356,
            "image": "./assets/images/grand-canyon.png"
        }
    ],
    "recommendedTours": [
        {
            "id": 1,
            "title": "California Sunset/Twilight Boat Cruise",
            "image": "./assets/images/journey2.png",
            "badge": "Top Rated",
            "badgeColor": "#F09814",
            "duration": "2 days 3 nights",
            "guests": "4-6 guest",
            "price": "$48.25",
            "rating": "4.96",
            "reviews": "672"
        },
        {
            "id": 2,
            "title": "NYC: Food Tastings and Culture Tour",
            "image": "./assets/images/journey3.png",
            "badge": "Best Sale",
            "badgeColor": "#F09814",
            "duration": "3 days 3 nights",
            "guests": "4-6 guest",
            "price": "$17.32",
            "rating": "4.8",
            "reviews": "520"
        },
        {
            "id": 3,
            "title": "Grand Canyon Horseshoe Bend 2 days",
            "image": "./assets/images/journey4.png",
            "badge": "25% Off",
            "badgeColor": "#F09814",
            "duration": "7 days 6 nights",
            "guests": "4-6 guest",
            "price": "$15.63",
            "rating": "4.9",
            "reviews": "456"
        }
    ],
    "stats": [
        {
            "id": 1,
            "number": "168k",
            "label": "Happy Clients",
            "width": "215.13px"
        },
        {
            "id": 2,
            "number": "+45k",
            "label": "Destinations",
            "width": "205.16px"
        },
        {
            "id": 3,
            "number": "+49",
            "label": "Global Branch",
            "width": "214.3px"
        },
        {
            "id": 4,
            "number": "+26k",
            "label": "Campaigns",
            "width": "202.11px"
        }
    ],
    "flightOffers": [
        {
            "id": 1,
            "image": "./assets/images/flight1.png",
            "fromCity": "Denmark",
            "toCity": "New York",
            "departureDate": "09 Jun 2024",
            "returnDate": "16 Jun 2024",
            "class": "Business",
            "price": "$288.15",
            "seatsLeft": 18
        },
        {
            "id": 2,
            "image": "./assets/images/flight4.png",
            "fromCity": "Paris",
            "toCity": "London",
            "departureDate": "09 Jun 2024",
            "returnDate": "16 Jun 2024",
            "class": "Business",
            "price": "$188.25",
            "seatsLeft": 12
        }
    ],
    "features": [
        {
            "id": 1,
            "type": "support",
            "title": "24/7 Support",
            "description": "We are here to help, before,\nduring, and even after your trip.",
            "backgroundImage": "./assets/images/support-bg-3befd2.png",
            "backgroundColor": "#A8BAF9",
            "image1": "./assets/images/support-25792b.png",
            "image2": "./assets/images/support2-5e0d43.png",
            "width": "288px",
            "height": "556.27px"
        },
        {
            "id": 2,
            "type": "best-price",
            "title": "Best Price",
            "description": "Price match within 48 hours of order\nconfirmation",
            "backgroundImage": "./assets/images/best-price-bg-3b0683.png",
            "backgroundColor": "#D4F6C0",
            "buttonText": "View More",
            "width": "392px",
            "height": "264px"
        },
        {
            "id": 3,
            "type": "save-time",
            "tagline": "Save your time!",
            "title": "Explore, Book, Soar: Your\nJourney Awaits!",
            "description": "",
            "backgroundImage": "./assets/images/save-time-bg-1c2044.png",
            "backgroundColor": "#A8E2EF",
            "buttonText": "View More",
            "width": "392px",
            "height": "270px"
        },
        {
            "id": 4,
            "type": "special-offer",
            "savePercent": "39%",
            "price": "$899",
            "buttonText": "BOOK NOW",
            "backgroundColor": "#FCFCF3",
            "image": "./assets/images/img-travel-56586a.png",
            "width": "496px",
            "height": "369px"
        }
    ],
    "trustReasons": {
        "heading": "You will love us",
        "subheading": "Because more than 268 other customers have loved us too",
        "image": "./assets/images/img-love-56586a.png",
        "backgroundImage": "./assets/images/love-section-bg2-40aa85.png",
        "reasons": [
            {
                "id": 1,
                "icon": "security",
                "title": "Security Assurance",
                "description": "Demonstrates commitment to user\ndata security through encryption and\nsecure payment practices"
            },
            {
                "id": 2,
                "icon": "support",
                "title": "Customer Support",
                "description": "Demonstrates commitment to user\ndata security through encryption and\nsecure payment practices"
            },
            {
                "id": 3,
                "icon": "policies",
                "title": "Transparent Policies",
                "description": "Demonstrates commitment to user\ndata security through encryption and\nsecure payment practices"
            },
            {
                "id": 4,
                "icon": "affiliations",
                "title": "Reputable Affiliations",
                "description": "Demonstrates commitment to user\ndata security through encryption and\nsecure payment practices"
            }
        ]
    },

    popularDestinations: [
        {
            id: 1,
            name: "Venice",
            tours: "356 Tours",
            activities: "248 Activities",
            image: "./assets/images/popular-56586a.png"
        },
        {
            id: 2,
            name: "Amsterdam",
            tours: "356 Tours",
            activities: "248 Activities",
            image: "./assets/images/popular2-56586a.png"
        },
        {
            id: 3,
            name: "Budapest",
            tours: "356 Tours",
            activities: "248 Activities",
            image: "./assets/images/popular3-56586a.png"
        },
        {
            id: 4,
            name: "Lisbon",
            tours: "356 Tours",
            activities: "248 Activities",
            image: "./assets/images/popular4-56586a.png"
        },
        {
            id: 5,
            name: "London",
            tours: "356 Tours",
            activities: "248 Activities",
            image: "./assets/images/popular5-56586a.png"
        },
        {
            id: 6,
            name: "Ottawa",
            tours: "356 Tours",
            activities: "248 Activities",
            image: "./assets/images/popular6-56586a.png"
        },
        {
            id: 7,
            name: "Paris",
            tours: "356 Tours",
            activities: "248 Activities",
            image: "./assets/images/popular7-56586a.png"
        }
    ],
    
    videoGallery: {
        badge: "Video Gallery",
        heading: "Journey to the Most\nBeautiful Places on Earth",
        videos: [
            {
                id: 1,
                image: "./assets/images/video1-56586a.png",
                width: 496,
                height: 599.89,
                size: "large"
            },
            {
                id: 2,
                image: "./assets/images/video2-56586a.png",
                width: 288,
                height: 240,
                size: "small"
            },
            {
                id: 3,
                image: "./assets/images/video3-56586a.png",
                width: 288,
                height: 336.97,
                size: "medium"
            },
            {
                id: 4,
                image: "./assets/images/video4-56586a.png",
                width: 392,
                height: 288.11,
                size: "wide"
            },
            {
                id: 5,
                image: "./assets/images/video5-56586a.png",
                width: 392,
                height: 288.11,
                size: "wide"
            }
        ],
        playButton: "./assets/images/play-button-70eb20.png",
        loadMoreText: "Load More Tours"
    },
    
    faq: {
        heading: "Frequently Asked Questions",
        subheading: "You need to come at least once in your life",
        categories: [
            { id: 1, name: "Tours Booking", icon: "tours" },
            { id: 2, name: "Activities", icon: "activities" },
            { id: 3, name: "Destinations", icon: "destinations" },
            { id: 4, name: "Hotels Booking", icon: "hotels" },
            { id: 5, name: "Rental Car", icon: "car" },
            { id: 6, name: "Property", icon: "property" },
            { id: 7, name: "Tickets Booking", icon: "tickets" }
        ],
        questions: [
            {
                id: 1,
                number: "01",
                question: "How do I make a reservation on your website",
                answer: "To make a reservation, start by browsing our available tours, activities, or destinations. Use the search bar or category filters to narrow down your options. Once you find your preferred option, select your travel dates and the number of guests. Click 'Book Now' and follow the prompts to enter your details and payment information. After confirming your booking, you will receive a confirmation email with all the details. Our platform also offers tools to compare prices and find the best deals for your trip.",
                isOpen: true
            },
            {
                id: 2,
                number: "02",
                question: "What documents do I need for my trip, and how do I obtain them?",
                answer: "You typically need a valid passport, visa (if required for your destination), and travel insurance. Some destinations may require additional documents such as vaccination certificates. You can obtain these documents from your local government offices or embassies. After booking, we provide guidance on required documents for your specific trip in your confirmation email and on your account dashboard.",
                isOpen: false
            },
            {
                id: 3,
                number: "03",
                question: "In the event that I need to modify or cancel my reservation, what are the policies in place?",
                answer: "You can modify or cancel your reservation by logging into your account and accessing your bookings. Our cancellation and modification policies vary depending on the service provider and type of booking. Please review the terms and conditions provided during booking. For most bookings, free cancellation is available up to a certain period before departure. If you need assistance, our 24/7 support team is available to help.",
                isOpen: false
            },
            {
                id: 4,
                number: "04",
                question: "Can you specify the types of credit/debit cards, digital wallets, or other online payment methods accepted?",
                answer: "We accept major credit and debit cards including Visa, MasterCard, and American Express. Digital wallets such as PayPal, Apple Pay, and Google Pay are also supported. For some destinations, local payment options may be available. All payments are processed securely using encrypted technology.",
                isOpen: false
            },
            {
                id: 5,
                number: "05",
                question: "What are the working hours, and what can I expect in terms of response times?",
                answer: "Our customer support is available 24/7 via chat, email, and phone. We strive to respond to all inquiries within 30 minutes. For urgent matters, please use our live chat for the fastest response.",
                isOpen: false
            }
        ]
    },
    
    blog: {
        heading: "News, Tips & Guides",
        subheading: "Favorite destinations based on customer reviews",
        articles: [
            {
                id: 1,
                image: "./assets/images/news-20000e.png",
                category: "Cultural",
                categoryColor: "#FFFFFF",
                date: "18 Sep 2024",
                readTime: "6 mins",
                comments: "38 comments",
                title: "Ultimate Travel Planning Guide:\n10 Tips for a Seamless Journey",
                author: "Jimmy Dave",
                authorAvatar: "./assets/images/avatar-56586a.png"
            },
            {
                id: 2,
                image: "./assets/images/news2-20000e.png",
                category: "Travel",
                categoryColor: "#FFFFFF",
                date: "18 Sep 2024",
                readTime: "6 mins",
                comments: "38 comments",
                title: "Top 10 Travel Hacks for Budget-\nConscious Adventurers",
                author: "Jimmy Dave",
                authorAvatar: "./assets/images/avatar-56586a.png"
            },
            {
                id: 3,
                image: "./assets/images/news3-20000e.png",
                category: "Discovery",
                categoryColor: "#FFFFFF",
                date: "18 Sep 2024",
                readTime: "6 mins",
                comments: "38 comments",
                title: "Discovering Hidden Gems: 10 Off-\nthe-Beaten-Path Travel Tips",
                author: "Jimmy Dave",
                authorAvatar: "./assets/images/avatar-56586a.png"
            }
        ]
    }
};

// Load content data
function loadContentData() {
    return contentData;
}

// Render Popular Destinations
function renderDestinations(destinations) {
    const container = document.getElementById('destinations-container');
    if (!container || !destinations) return;

    container.innerHTML = destinations.map(dest => `
        <div class="text-center space-y-3">
            <div class="mx-auto overflow-hidden" style="width: 100px; height: 135.67px; border-radius: 1350px;">
                <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold text-lg">${dest.name}</h3>
            <p class="text-gray-500 text-sm">${dest.tours} Tours</p>
        </div>
    `).join('');
}

// Render Recommended Tours
function renderRecommendedTours(tours) {
    const containerMobile = document.getElementById('tours-container-mobile');
    const containerDesktop = document.getElementById('tours-container-desktop');
    if (!tours) return;

    // Mobile/Tablet Layout
    if (containerMobile) {
        containerMobile.innerHTML = tours.map(tour => `
            <div class="bg-white rounded-2xl border border-border overflow-hidden max-w-[320px] sm:max-w-[392px] mx-auto">
                <!-- Image Container -->
                <div class="relative w-full h-48 sm:h-56">
                    <img src="${tour.image}" alt="${tour.title}" class="w-full h-full object-cover">
                    
                    <!-- Badge -->
                    <div class="absolute left-4 top-4 bg-white rounded-custom-50 px-3 py-1 h-7">
                        <span class="font-bold text-xs" style="color: ${tour.badgeColor};">${tour.badge}</span>
                    </div>
                    
                    <!-- Heart Icon -->
                    <button class="absolute right-4 top-4 rounded-2xl w-7 h-7 flex items-center justify-center" style="background: rgba(255, 255, 255, 0.82);">
                        <svg width="16" height="14" fill="none" stroke="#000000" stroke-width="1.5">
                            <path d="M8 13.3l-1.2-1.12C3.2 9.32 0.8 7.16 0.8 4.46 0.8 2.43 2.37 0.8 4.4 0.8c1.2 0 2.4.64 2.88 1.6.48-.96 1.68-1.6 2.88-1.6 2.03 0 3.6 1.63 3.6 3.66 0 2.7-2.4 4.86-6 8.22z"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Content Section -->
                <div class="p-4 sm:p-5 relative">
                    <!-- Review Badge -->
                    <div class="absolute left-1/2 -translate-x-1/2 -top-4 bg-white border border-border rounded-custom-50 px-3 h-8 flex items-center shadow-sm">
                        <svg width="9" height="9" fill="#FFC700" class="mr-1 flex-shrink-0">
                            <path d="M4.5 0.4l1.13 2.6L8.18 3.4l-1.86 1.86L6.72 8.1l-2.19-1.13L2.34 8.1l.4-2.84L1 3.4l2.51-.4z"/>
                        </svg>
                        <span class="text-xs whitespace-nowrap">
                            <span class="font-bold text-secondary">${tour.rating}</span>
                            <span class="font-bold text-gray-500"> (${tour.reviews})</span>
                        </span>
                    </div>
                    
                    <!-- Title -->
                    <h3 class="font-extrabold text-secondary text-lg sm:text-xl leading-tight mb-3 mt-3">
                        ${tour.title}
                    </h3>
                    
                    <!-- Duration & Guests -->
                    <div class="flex items-center gap-4 mb-4">
                        <div class="flex items-center gap-1.5">
                            <svg width="12" height="12" fill="none">
                                <circle cx="6" cy="6" r="5.5" stroke="#D6D7D8" stroke-width="1"/>
                            </svg>
                            <span class="text-gray-600 font-medium text-xs sm:text-sm">${tour.duration}</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <svg width="12" height="12" fill="none">
                                <circle cx="6" cy="4" r="1.8" stroke="#000000" stroke-width="1.1"/>
                                <path d="M1.5 11c0-2.4 2-4.4 4.5-4.4s4.5 2 4.5 4.4" stroke="#000000" stroke-width="1.1"/>
                            </svg>
                            <span class="text-gray-600 font-medium text-xs sm:text-sm">${tour.guests}</span>
                        </div>
                    </div>
                    
                    <!-- Price & Button -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-1">
                            <span class="font-extrabold text-secondary text-lg sm:text-xl">${tour.price}</span>
                            <span class="text-gray-600 font-medium text-xs">/ person</span>
                        </div>
                        <button class="bg-light border border-border rounded-custom-50 px-4 py-2">
                            <span class="font-bold text-secondary text-xs">Book Now</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Desktop Layout (Exact Figma positioning)
    if (containerDesktop) {
        const positions = [
            { left: '12px', top: '0px' },      // Card 1: x=12, y=0 (relative to 153 section offset)
            { left: '428px', top: '0px' },     // Card 2: x=428, y=0
            { left: '844px', top: '0px' }      // Card 3: x=844, y=0
        ];

        containerDesktop.innerHTML = tours.slice(0, 3).map((tour, index) => `
            <div class="absolute bg-white rounded-custom-32 border border-border overflow-hidden" style="left: ${positions[index].left}; top: ${positions[index].top}; width: 392px; height: 547px;">
                <!-- Image Container -->
                <div class="relative" style="width: 390px; height: 326px; margin: 1px;">
                    <img src="${tour.image}" alt="${tour.title}" class="w-full h-full object-cover rounded-t-custom-32">
                    
                    <!-- Badge -->
                    <div class="absolute bg-white rounded-custom-50 flex items-center justify-center" style="left: 25px; top: 22px; height: 32px; padding: 0 18px;">
                        <span class="font-bold" style="color: ${tour.badgeColor}; font-size: 14px; line-height: 22px;">${tour.badge}</span>
                    </div>
                    
                    <!-- Heart Icon -->
                    <button class="absolute rounded-custom-16 flex items-center justify-center" style="right: 22px; top: 20px; width: 32px; height: 32px; background: rgba(255, 255, 255, 0.82);">
                        <svg width="20" height="18" fill="none" stroke="#000000" stroke-width="1.5">
                            <path d="M10 16.5l-1.5-1.4C3.75 11.46 0.75 8.8 0.75 5.5 0.75 3 2.75 1 5.25 1c1.5 0 3 0.8 3.6 2 .6-1.2 2.1-2 3.6-2 2.5 0 4.5 2 4.5 4.5 0 3.3-3 5.96-7.5 10.1z"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Content Section -->
                <div class="absolute bg-white" style="left: 1px; top: 287px; width: 390px; height: 259px; border-radius: 30px; padding: 42px 32px 32px 32px;">
                    <!-- Review Badge (Overlapping) -->
                    <div class="absolute bg-white border border-border rounded-custom-50 flex items-center" style="left: 188.7px; top: -19px; width: 169.3px; height: 36px; box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.07); padding: 0 10px;">
                        <svg width="11" height="11" fill="#FFC700" style="margin-right: 3px; flex-shrink: 0;">
                            <path d="M5.5 0.5l1.39 3.17L10.01 4.16l-2.27 2.27L8.19 9.9l-2.67-1.39L2.85 9.9l.5-3.47L1.08 4.16l3.07-.49z"/>
                        </svg>
                        <span style="font-size: 14px; line-height: 18px; white-space: nowrap;">
                            <span class="font-bold" style="color: #000000;">${tour.rating}</span>
                            <span class="font-bold" style="color: #8E8E8E;"> (${tour.reviews})</span>
                        </span>
                    </div>
                    
                    <!-- Title -->
                    <h3 class="font-extrabold text-secondary mb-2" style="font-size: 24px; line-height: 32px;">
                        ${tour.title}
                    </h3>
                    
                    <!-- Duration & Guests -->
                    <div class="flex items-center mb-8" style="gap: 32px;">
                        <div class="flex items-center" style="gap: 6px;">
                            <svg width="16" height="16" fill="none">
                                <circle cx="8" cy="8" r="7" stroke="#D6D7D8" stroke-width="1.5"/>
                            </svg>
                            <span class="font-medium" style="color: #737373; font-size: 16px; line-height: 26px;">${tour.duration}</span>
                        </div>
                        <div class="flex items-center" style="gap: 6px;">
                            <svg width="16" height="16" fill="none">
                                <circle cx="8" cy="5.3" r="2.4" stroke="#000000" stroke-width="1.5"/>
                                <path d="M2 14.5c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#000000" stroke-width="1.5"/>
                            </svg>
                            <span class="font-medium" style="color: #737373; font-size: 16px; line-height: 26px;">${tour.guests}</span>
                        </div>
                    </div>
                    
                    <!-- Price & Button -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center" style="gap: 6px;">
                            <span class="font-extrabold text-secondary" style="font-size: 24px; line-height: 32px;">${tour.price}</span>
                            <span class="font-medium" style="color: #737373; font-size: 16px; line-height: 26px;">/ person</span>
                        </div>
                        <button class="bg-light border border-border rounded-custom-50 flex items-center justify-center" style="width: 104px; height: 40px;">
                            <span class="font-bold text-secondary" style="font-size: 14px; line-height: 22px;">Book Now</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Render Stats
function renderStats(stats) {
    const containerMobile = document.getElementById('stats-container');
    const containerDesktop = document.getElementById('stats-container-desktop');
    if (!stats) return;

    // Mobile/Tablet responsive grid layout
    if (containerMobile) {
        containerMobile.innerHTML = stats.map((stat, index) => `
            <!-- Stat ${stat.id}: ${stat.label} -->
            <div class="flex flex-col items-start">
                <h3 class="font-extrabold text-white text-3xl sm:text-4xl">${stat.number}</h3>
                <p class="font-bold text-white text-sm sm:text-base">${stat.label}</p>
            </div>
        `).join('');
    }

    // Desktop fixed layout matching Figma exactly
    if (containerDesktop) {
        containerDesktop.innerHTML = stats.map((stat, index) => `
            <div class="flex flex-col items-start" style="width: ${stat.width}; padding-left: 40px;">
                <h3 class="font-extrabold text-white" style="font-size: 52px; line-height: 76px;">${stat.number}</h3>
                <p class="font-bold text-white" style="font-size: 20px; line-height: 32px;">${stat.label}</p>
            </div>
            ${index < stats.length - 1 ? '<div style="width: 1px; height: 60px; background-color: #F2F2F2; margin: 0 24px 0 0;"></div>' : ''}
        `).join('');
    }
}

// Render Flight Offers
function renderFlightOffers(flights) {
    const container = document.getElementById('flights-container');
    if (!container || !flights) return;

    container.innerHTML = flights.map(flight => `
        <!-- Flight Card -->
        <div class="relative bg-white rounded-custom-24 overflow-hidden w-full max-w-full lg:w-auto" style="lg:width: 582px;">
            <!-- DESKTOP LAYOUT (hidden on mobile) -->
            <div class="hidden lg:block" style="height: 311px;">
                <!-- Flight Image -->
                <div style="position: absolute; left: 0; top: 0; width: 273.55px; height: 311px;">
                    <img src="${flight.image}" alt="Flight from ${flight.fromCity} to ${flight.toCity}" class="w-full h-full object-cover">
                </div>
                
                <!-- Heart Icon -->
                <button class="absolute bg-white/80 backdrop-blur-sm rounded-custom-16 flex items-center justify-center" style="left: 20px; top: 20px; width: 32px; height: 32px;">
                    <svg width="20" height="18" fill="none" stroke="#000000" stroke-width="1.5">
                        <path d="M10 17l-1.5-1.4C4 11.5 1 8.8 1 5.5 1 3 2.9 1 5.4 1c1.5 0 3 .8 3.6 2 .6-1.2 2.1-2 3.6-2C15.1 1 17 3 17 5.5c0 3.3-3 6-7.5 10.1z"/>
                    </svg>
                </button>
                
                <!-- Content Card -->
                <div class="absolute bg-white border border-border rounded-custom-24" style="left: 193px; top: 0; width: 389px; height: 311px; padding: 32px;">
                    <!-- Dates -->
                    <div class="flex items-center mb-8">
                        <div class="flex items-center">
                            <svg width="16" height="16" fill="none" stroke="#8E8E8E" stroke-width="1.5" style="margin-right: 4px;">
                                <circle cx="8" cy="8" r="6"/>
                                <path d="M8 4v4l3 2"/>
                            </svg>
                            <span style="color: #737373; font-weight: 500; font-size: 16px; line-height: 26px;">${flight.departureDate}</span>
                        </div>
                        <div style="width: 18px; height: 1px; background-color: #E4E6E8; margin: 0 16px;"></div>
                        <div class="flex items-center">
                            <svg width="16" height="16" fill="none" stroke="#8E8E8E" stroke-width="1.5" style="margin-right: 4px;">
                                <circle cx="8" cy="8" r="6"/>
                                <path d="M8 4v4l3 2"/>
                            </svg>
                            <span style="color: #737373; font-weight: 500; font-size: 16px; line-height: 26px;">${flight.returnDate}</span>
                        </div>
                    </div>
                    
                    <!-- Route -->
                    <div class="flex items-center mb-17" style="margin-bottom: 17px;">
                        <h3 class="font-extrabold" style="color: #000000; font-size: 24px; line-height: 32px;">${flight.fromCity}</h3>
                        <svg width="24" height="24" fill="none" stroke="#000000" stroke-width="1.5" style="margin: 0 18px;">
                            <path d="M7 5h10M14 9l4-4-4-4M7 19h10M10 15l-4 4 4 4"/>
                        </svg>
                        <h3 class="font-extrabold" style="color: #000000; font-size: 24px; line-height: 32px;">${flight.toCity}</h3>
                    </div>
                    
                    <!-- Pricing -->
                    <div class="flex items-start mb-40" style="margin-bottom: 40px;">
                        <div style="width: 130px;">
                            <p style="color: #575756; font-weight: 500; font-size: 16px; line-height: 26px; margin-bottom: 9px;">${flight.class}</p>
                            <h3 class="font-extrabold" style="color: #000000; font-size: 24px; line-height: 32px;">${flight.price}</h3>
                        </div>
                        <div style="width: 1px; height: 42px; background-color: #E4E6E8; margin: 16px 43px 0 43px;"></div>
                        <div style="width: 130px;">
                            <p style="color: #575756; font-weight: 500; font-size: 16px; line-height: 26px; margin-bottom: 9px;">${flight.class}</p>
                            <h3 class="font-extrabold" style="color: #000000; font-size: 24px; line-height: 32px;">${flight.price}</h3>
                        </div>
                    </div>
                    
                    <!-- Footer -->
                    <div class="flex items-center justify-between">
                        <span style="color: #737373; font-weight: 500; font-size: 16px; line-height: 26px;">${flight.seatsLeft} Seats left</span>
                        <button class="bg-light border border-border rounded-custom-50 flex items-center justify-center" style="width: 104px; height: 40px;">
                            <span class="font-bold" style="color: #000000; font-size: 14px; line-height: 22px;">Book Now</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- MOBILE LAYOUT (hidden on desktop) -->
            <div class="lg:hidden flex flex-col">
                <!-- Flight Image First -->
                <div class="relative w-full h-48 sm:h-64">
                    <img src="${flight.image}" alt="Flight from ${flight.fromCity} to ${flight.toCity}" class="w-full h-full object-cover rounded-t-custom-24">
                    
                    <!-- Heart Icon on Image -->
                    <button class="absolute bg-white/80 backdrop-blur-sm rounded-custom-16 flex items-center justify-center" style="right: 16px; top: 16px; width: 32px; height: 32px;">
                        <svg width="20" height="18" fill="none" stroke="#000000" stroke-width="1.5">
                            <path d="M10 17l-1.5-1.4C4 11.5 1 8.8 1 5.5 1 3 2.9 1 5.4 1c1.5 0 3 .8 3.6 2 .6-1.2 2.1-2 3.6-2C15.1 1 17 3 17 5.5c0 3.3-3 6-7.5 10.1z"/>
                        </svg>
                    </button>
                </div>

                <!-- Content Below Image -->
                <div class="p-4 sm:p-6">
                    <!-- Dates -->
                    <div class="flex items-center mb-4 text-sm sm:text-base flex-wrap gap-2">
                        <div class="flex items-center">
                            <svg width="16" height="16" fill="none" stroke="#8E8E8E" stroke-width="1.5" style="margin-right: 4px;">
                                <circle cx="8" cy="8" r="6"/>
                                <path d="M8 4v4l3 2"/>
                            </svg>
                            <span class="text-gray-600 font-medium">${flight.departureDate}</span>
                        </div>
                        <div class="w-4 h-px bg-gray-200"></div>
                        <div class="flex items-center">
                            <svg width="16" height="16" fill="none" stroke="#8E8E8E" stroke-width="1.5" style="margin-right: 4px;">
                                <circle cx="8" cy="8" r="6"/>
                                <path d="M8 4v4l3 2"/>
                            </svg>
                            <span class="text-gray-600 font-medium">${flight.returnDate}</span>
                        </div>
                    </div>
                    
                    <!-- Route -->
                    <div class="flex items-center mb-4">
                        <h3 class="font-extrabold text-xl sm:text-2xl">${flight.fromCity}</h3>
                        <svg width="20" height="20" fill="none" stroke="#000000" stroke-width="1.5" class="mx-2 sm:mx-3">
                            <path d="M7 5h10M14 9l4-4-4-4M7 19h10M10 15l-4 4 4 4"/>
                        </svg>
                        <h3 class="font-extrabold text-xl sm:text-2xl">${flight.toCity}</h3>
                    </div>
                    
                    <!-- Class & Price -->
                    <div class="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                        <div>
                            <p class="text-gray-600 font-medium text-sm mb-1">${flight.class}</p>
                            <h3 class="font-extrabold text-xl sm:text-2xl">${flight.price}</h3>
                        </div>
                        <div class="text-right">
                            <p class="text-gray-600 font-medium text-sm mb-2">${flight.seatsLeft} Seats left</p>
                        </div>
                    </div>
                    
                    <!-- Book Button -->
                    <button class="w-full bg-light border border-border rounded-custom-50 py-2.5 sm:py-3">
                        <span class="font-bold text-sm sm:text-base">Book Now</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}


// Render Features Section
function renderFeatures(features) {
    const containerMobile = document.getElementById('features-container');
    const containerDesktop = document.getElementById('features-container-desktop');
    if (!features) return;
    
    const supportCard = features.find(f => f.type === 'support');
    const bestPriceCard = features.find(f => f.type === 'best-price');
    const saveTimeCard = features.find(f => f.type === 'save-time');
    const specialOfferCard = features.find(f => f.type === 'special-offer');
    
    // Mobile/Tablet: Stacked vertically
    const mobileHTML = `
        <!-- 24/7 Support Card -->
        <div class="rounded-custom-32 overflow-hidden relative w-full max-w-md" style="background-image: url('${supportCard.backgroundImage}'); background-color: ${supportCard.backgroundColor}; background-size: cover; background-position: center; padding: 30px; min-height: 400px;">
            <h3 class="font-extrabold mb-2" style="color: #000000; font-size: 24px; line-height: 32px;">${supportCard.title}</h3>
            <p class="font-medium mb-4" style="color: #000000; font-size: 14px; line-height: 22px; max-width: 250px; white-space: pre-line;">${supportCard.description}</p>
            
            <div class="flex flex-col gap-3 mt-4">
                <img src="${supportCard.image1}" alt="Support" class="rounded-custom-32 border border-white w-full" style="max-width: 250px; height: auto; object-fit: cover;">
                <img src="${supportCard.image2}" alt="Support Team" class="rounded-custom-32 border border-white w-full" style="max-width: 250px; height: auto; object-fit: cover;">
            </div>
        </div>
        
        <!-- Best Price Card -->
        <div class="rounded-custom-32 overflow-hidden w-full max-w-md" style="background-image: url('${bestPriceCard.backgroundImage}'); background-color: ${bestPriceCard.backgroundColor}; background-size: cover; background-position: center; padding: 30px;">
            <h3 class="font-extrabold mb-2" style="color: #000000; font-size: 24px; line-height: 32px;">${bestPriceCard.title}</h3>
            <p class="font-medium mb-6" style="color: #000000; font-size: 14px; line-height: 22px; max-width: 280px; white-space: pre-line;">${bestPriceCard.description}</p>
            
            <button class="rounded-custom-50 flex items-center justify-center" style="width: 154px; height: 60px; background-color: #FEFA17;">
                <span class="font-bold" style="color: #000000; font-size: 16px; line-height: 26px;">View More</span>
                <svg width="16" height="16" fill="none" stroke="#000000" stroke-width="1.5" style="margin-left: 12px;">
                    <path d="M5 11l4-4-4-4"/>
                </svg>
            </button>
        </div>
        
        <!-- Save Your Time Card -->
        <div class="rounded-custom-32 overflow-hidden w-full max-w-md" style="background-image: url('${saveTimeCard.backgroundImage}'); background-color: ${saveTimeCard.backgroundColor}; background-size: cover; background-position: center; padding: 30px;">
            <p class="font-bold mb-4" style="color: #000000; font-size: 16px; line-height: 26px;">${saveTimeCard.tagline}</p>
            <h3 class="font-extrabold mb-6" style="color: #000000; font-size: 24px; line-height: 32px; max-width: 320px; white-space: pre-line;">${saveTimeCard.title}</h3>
            
            <button class="rounded-custom-50 flex items-center justify-center" style="width: 154px; height: 52px; background-color: #FEFA17;">
                <span class="font-bold" style="color: #000000; font-size: 16px; line-height: 26px;">View More</span>
                <svg width="16" height="16" fill="none" stroke="#000000" stroke-width="1.5" style="margin-left: 12px;">
                    <path d="M5 11l4-4-4-4"/>
                </svg>
            </button>
        </div>
        
        <!-- Special Offer Card with Image -->
        <div class="rounded-custom-32 overflow-hidden relative w-full max-w-md" style="background-color: #FCFCF3; min-height: 400px;">
            <img src="${specialOfferCard.image}" alt="Travel Destination" class="rounded-custom-32 w-full h-64 object-cover">
            
            <div class="absolute rounded-full border-4 border-white flex flex-col items-center justify-center" style="left: 20px; top: 50%; transform: translateY(-50%); width: 100px; height: 100px; background-color: #FEFA17;">
                <p class="font-bold" style="color: #000000; font-size: 9px; line-height: 14px; text-align: center;">SAVE 39%</p>
                <h3 class="font-bold" style="color: #000000; font-size: 24px; line-height: 32px; text-align: center;">$899</h3>
                <p class="font-bold" style="color: #000000; font-size: 12px; line-height: 16px; text-align: center;">BOOK NOW</p>
            </div>
        </div>
    `;
    
    // Desktop: Exact Figma layout
    const desktopHTML = `
        <!-- 24/7 Support Card - Left -->
        <div class="absolute rounded-custom-32 overflow-hidden" style="left: 0px; top: 1.74px; width: 288px; height: 556.27px; background-image: url('${supportCard.backgroundImage}'); background-color: ${supportCard.backgroundColor}; background-size: cover; background-position: center;">
            <h3 class="font-extrabold" style="position: absolute; left: 31px; top: 37px; color: #000000; font-size: 24px; line-height: 32px; width: 154.63px;">${supportCard.title}</h3>
            <p class="font-medium" style="position: absolute; left: 31px; top: 76.5px; color: #000000; font-size: 14px; line-height: 22px; width: 204.39px; height: 44px; white-space: pre-line;">${supportCard.description}</p>
            
            <!-- Support Images -->
            <img src="${supportCard.image1}" alt="Support" class="rounded-custom-32 border border-white absolute" style="left: 31px; top: 128px; width: 226px; height: 165.41px; object-fit: cover;">
            <img src="${supportCard.image2}" alt="Support Team" class="rounded-custom-32 border border-white absolute" style="left: 31px; top: 300.91px; width: 226px; height: 206.35px; object-fit: cover;">
        </div>
        
        <!-- Middle Container with Best Price + Save Time -->
        <div class="absolute" style="left: 300px; top: 0px; width: 416px; height: 582px;">
            
            <!-- Best Price Card -->
            <div class="absolute rounded-custom-32 overflow-hidden" style="left: 12px; top: 0px; width: 392px; height: 264px; background-image: url('${bestPriceCard.backgroundImage}'); background-color: ${bestPriceCard.backgroundColor}; background-size: cover; background-position: center;">
                <h3 class="font-extrabold" style="position: absolute; left: 51px; top: 43px; color: #000000; font-size: 24px; line-height: 32px; width: 119.66px;">${bestPriceCard.title}</h3>
                <p class="font-medium" style="position: absolute; left: 51px; top: 82.5px; color: #000000; font-size: 14px; line-height: 22px; width: 235.78px; height: 44px; white-space: pre-line;">${bestPriceCard.description}</p>
                
                <!-- View More Button -->
                <div class="absolute rounded-custom-50 flex items-center justify-center" style="left: 51px; top: 134px; width: 154.2px; height: 77px; background-color: #FEFA17;">
                    <span class="font-bold" style="color: #000000; font-size: 16px; line-height: 26px; margin-left: 23px;">View More</span>
                    <svg width="16" height="16" fill="none" stroke="#000000" stroke-width="1.5" style="margin-left: 13px; margin-right: 16px;">
                        <path d="M5 11l4-4-4-4"/>
                    </svg>
                </div>
            </div>
            
            <!-- Save Your Time Card -->
            <div class="absolute rounded-custom-32 overflow-hidden" style="left: 12px; top: 288px; width: 392px; height: 270px; background-image: url('${saveTimeCard.backgroundImage}'); background-color: ${saveTimeCard.backgroundColor}; background-size: cover; background-position: center;">
                <p class="font-bold" style="position: absolute; left: 40px; top: 44px; color: #000000; font-size: 16px; line-height: 26px; width: 120.34px;">${saveTimeCard.tagline}</p>
                <h3 class="font-extrabold" style="position: absolute; left: 40px; top: 102px; color: #000000; font-size: 24px; line-height: 32px; width: 293.97px; height: 64px; white-space: pre-line;">${saveTimeCard.title}</h3>
                
                <!-- View More Button -->
                <div class="absolute rounded-custom-50 flex items-center justify-center" style="left: 40px; top: 174px; width: 154.2px; height: 52px; background-color: #FEFA17;">
                    <span class="font-bold" style="color: #000000; font-size: 16px; line-height: 26px; margin-left: 23px;">View More</span>
                    <svg width="16" height="16" fill="none" stroke="#000000" stroke-width="1.5" style="margin-left: 13px; margin-right: 16px;">
                        <path d="M5 11l4-4-4-4"/>
                    </svg>
                </div>
            </div>
        </div>
        
        <!-- Right Side: Special Offer Card + Image -->
        <div class="absolute rounded-custom-32" style="left: 728px; top: 189px; width: 496px; height: 369px; background-color: #FCFCF3;">
            <!-- Circular Badge -->
            <div class="absolute rounded-full border-4 border-white flex flex-col items-center justify-center" style="left: 30px; top: 174px; width: 115px; height: 115px; background-color: #FEFA17; z-index: 10;">
                <p class="font-bold" style="color: #000000; font-size: 9px; line-height: 14px; text-align: center; margin-top: 17.72px;">SAVE 39%</p>
                <h3 class="font-bold" style="color: #000000; font-size: 29px; line-height: 39px; text-align: center;">$899</h3>
                <p class="font-bold" style="color: #000000; font-size: 14px; line-height: 18px; text-align: center;">BOOK NOW</p>
            </div>
        </div>
        
        <!-- Travel Image - Overlaps and extends beyond -->
        <div class="absolute rounded-custom-32 overflow-hidden" style="left: 759px; top: 0px; width: 434px; height: 631px; z-index: 5;">
            <img src="${specialOfferCard.image}" alt="Travel Destination" class="rounded-custom-32" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
        </div>
    `;
    
    // Render to both containers
    if (containerMobile) containerMobile.innerHTML = mobileHTML;
    if (containerDesktop) containerDesktop.innerHTML = desktopHTML;
}

// Render Trust/Love Section
function renderTrustReasons(trustData) {
    const container = document.getElementById('trust-reasons-container');
    if (!container || !trustData) return;
    
    const getIconSVG = (iconType) => {
        const icons = {
            security: `<svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.44 0.8L13.56 0L27.55 0.8C27.55 0.8 28.8 18.2 13.56 33.2C-1.68 18.2 0.44 0.8 0.44 0.8Z" fill="#FFD15D"/>
                <path d="M3.88 5.08L13.56 4.48L24.13 5.08C24.13 5.08 25.13 18.63 13.56 29.61C2 18.63 3.88 5.08 3.88 5.08Z" fill="#F5B92D"/>
                <ellipse cx="13.56" cy="17.76" rx="5.63" ry="4.76" fill="#000000"/>
            </svg>`,
            support: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.21 0L33.79 0C33.79 0 36 0 36 36L0 36C0 36 0 0 2.21 0Z" fill="#FD9727"/>
                <path d="M13.58 0L25.49 0C25.49 0 25.49 0 25.49 21.7L13.58 21.7C13.58 21.7 13.58 0 13.58 0Z" fill="#FF6D3A"/>
                <ellipse cx="8.04" cy="12.41" rx="1.48" ry="2.36" fill="#3D6687"/>
                <ellipse cx="26.48" cy="12.41" rx="1.48" ry="2.36" fill="#3D6687"/>
                <path d="M10.66 18.29C10.66 18.29 13.56 28.34 20.92 28.34C28.28 28.34 10.66 18.29 10.66 18.29Z" fill="#FED9A8"/>
                <path d="M0 22.69L31.58 22.69L31.58 36L0 36L0 22.69Z" fill="#FF4C4C"/>
                <path d="M19.06 22.69L31.57 22.69L31.57 36L19.06 36L19.06 22.69Z" fill="#EF2929"/>
            </svg>`,
            policies: `<svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="18" cy="10.59" rx="10.09" ry="10.09" fill="#FFD164"/>
                <path d="M14.73 0.69L21.26 9.27L14.73 0.69Z" fill="#FF4155"/>
                <path d="M7.91 0.69C7.91 0.69 7.91 0.69 12.17 20.87L7.91 0.69Z" fill="#E6BC5A"/>
                <path d="M2.86 16.2C2.86 16.2 8.19 32.35 32.41 32.35C8.19 32.35 2.86 16.2 2.86 16.2Z" fill="#FFDAA2"/>
                <path d="M10.46 16.22C10.46 16.22 14.09 28.56 32.41 28.56C14.09 28.56 10.46 16.22 10.46 16.22Z" fill="#FBBD80"/>
                <circle cx="9.6" cy="28.13" r="2.35" fill="#0593FC"/>
                <circle cx="32.55" cy="28.13" r="2.35" fill="#0593FC"/>
                <path d="M0 16.92C0 16.92 0 16.92 3.12 27.04L0 16.92Z" fill="#0584E3"/>
            </svg>`,
            affiliations: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.63L32 1.63L32 30.34L0 30.34L0 1.63Z" fill="#00EFD1"/>
                <path d="M26.06 0L32 7.71L26.06 0Z" fill="#00ACEA"/>
                <path d="M4.7 0L29.02 0C29.02 0 29.02 0 29.02 28.71L4.7 28.71C4.7 28.71 4.7 0 4.7 0Z" fill="#00EFD1"/>
                <rect x="10.89" y="3.56" width="8.41" height="10.5" fill="#000000"/>
                <ellipse cx="15.12" cy="9.91" rx="2.14" ry="1.6" fill="#FEDB41"/>
                <rect x="8.38" y="16.03" width="13.91" height="1.07" fill="#000000"/>
                <rect x="8.38" y="18.5" width="13.91" height="1.07" fill="#000000"/>
            </svg>`
        };
        return icons[iconType] || '';
    };
    
    container.innerHTML = `
        <!-- Mobile & Tablet Layout (Stacked) -->
        <div class="block lg:hidden px-4 sm:px-6">
            <!-- Image -->
            <div class="mb-6 sm:mb-8">
                <img src="${trustData.image}" alt="Happy Travelers" class="w-full h-64 sm:h-80 object-cover rounded-2xl">
            </div>
            
            <!-- Content -->
            <div>
                <h2 class="font-extrabold mb-2 text-2xl sm:text-3xl leading-tight" style="color: #000000;">${trustData.heading}</h2>
                <p class="font-medium text-sm sm:text-base mb-6 sm:mb-8" style="color: #737373;">${trustData.subheading}</p>
                
                <!-- Grid of Reasons (1 column mobile, 2 columns tablet) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    ${trustData.reasons.map((reason, index) => `
                        <div class="flex gap-4">
                            <!-- Icon with Shadow -->
                            <div class="flex-shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-md" style="width: 48px; height: 48px; sm:width: 56px; sm:height: 56px;">
                                <div class="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center scale-75 sm:scale-90">
                                    ${getIconSVG(reason.icon)}
                                </div>
                            </div>
                            
                            <!-- Content -->
                            <div class="flex-1 min-w-0">
                                <h3 class="font-bold mb-1.5 text-base sm:text-lg" style="color: #000000;">${reason.title}</h3>
                                <p class="font-medium mb-2 text-xs sm:text-sm leading-relaxed" style="color: #737373;">${reason.description.replace(/\n/g, ' ')}</p>
                                <a href="#" class="inline-flex items-center font-medium text-xs sm:text-sm" style="color: #000000;">
                                    Learn More 
                                    <svg width="10" height="9" class="ml-1.5" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4.5H9" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5.5 1L9 4.5L5.5 8" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Desktop Layout (Side by Side) -->
        <div class="hidden lg:block relative" style="min-height: 500px;">
            <!-- Left Image -->
            <div class="absolute" style="left: 0px; top: 0px; width: 380px; height: 500px;">
                <img src="${trustData.image}" alt="Happy Travelers" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;">
            </div>
            
            <!-- Right Content -->
            <div class="absolute" style="left: 412px; top: 20px; width: 780px;">
                <h2 class="font-extrabold mb-2" style="color: #000000; font-size: 48px; line-height: 64px;">${trustData.heading}</h2>
                <p class="font-medium" style="color: #737373; font-size: 18px; line-height: 28px; margin-bottom: 48px;">${trustData.subheading}</p>
                
                <!-- Grid of Reasons (2x2) -->
                <div class="grid grid-cols-2 gap-x-12 gap-y-20">
                    ${trustData.reasons.map((reason, index) => `
                        <div class="relative">
                            <!-- Icon with Shadow -->
                            <div class="absolute bg-white rounded-custom-16 flex items-center justify-center" style="width: 64px; height: 64px; left: 0px; top: 0px; box-shadow: 0px 6px 22px 0px rgba(0, 0, 0, 0.09);">
                                <div style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
                                    ${getIconSVG(reason.icon)}
                                </div>
                            </div>
                            
                            <!-- Content -->
                            <div style="padding-left: 80px;">
                                <h3 class="font-bold mb-2" style="color: #000000; font-size: 18px; line-height: 25px;">${reason.title}</h3>
                                <p class="font-medium mb-3" style="color: #737373; font-size: 13px; line-height: 20px; max-width: 280px;">${reason.description.replace(/\n/g, ' ')}</p>
                                <a href="#" class="inline-flex items-center font-medium text-xs sm:text-sm" style="color: #000000;">
                                    Learn More 
                                    <svg width="10" height="9" class="ml-1.5" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4.5H9" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5.5 1L9 4.5L5.5 8" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Render Video Gallery
function renderVideoGallery(data) {
    const container = document.getElementById('video-gallery-container');
    if (!container) return;
    
    // Create the grid layout with all videos
    container.innerHTML = `
        <!-- Large Video (Left) -->
        <div class="relative" style="border-radius: 32px; overflow: hidden;">
            <img src="${data.videos[0].image}" alt="Video 1" style="width: 496px; height: 599.89px; object-fit: cover;">
            <button class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 101px; height: 101px;">
                <img src="${data.playButton}" alt="Play" style="width: 101px; height: 101px;">
            </button>
        </div>
        
        <!-- Middle Column -->
        <div class="flex flex-col" style="gap: 30px;">
            <!-- Video 2 -->
            <div class="relative" style="border-radius: 32px; overflow: hidden;">
                <img src="${data.videos[1].image}" alt="Video 2" style="width: 288px; height: 240px; object-fit: cover;">
                <button class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px;">
                    <img src="${data.playButton}" alt="Play" style="width: 60px; height: 60px;">
                </button>
            </div>
            
            <!-- Video 3 -->
            <div class="relative" style="border-radius: 32px; overflow: hidden;">
                <img src="${data.videos[2].image}" alt="Video 3" style="width: 288px; height: 336.97px; object-fit: cover;">
                <button class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px;">
                    <img src="${data.playButton}" alt="Play" style="width: 60px; height: 60px;">
                </button>
            </div>
        </div>
        
        <!-- Right Column -->
        <div class="flex flex-col" style="gap: 30px;">
            <!-- Video 4 -->
            <div class="relative" style="border-radius: 32px; overflow: hidden;">
                <img src="${data.videos[3].image}" alt="Video 4" style="width: 392px; height: 288.11px; object-fit: cover;">
                <button class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px;">
                    <img src="${data.playButton}" alt="Play" style="width: 60px; height: 60px;">
                </button>
            </div>
            
            <!-- Video 5 -->
            <div class="relative" style="border-radius: 32px; overflow: hidden;">
                <img src="${data.videos[4].image}" alt="Video 5" style="width: 392px; height: 288.11px; object-fit: cover;">
                <button class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px;">
                    <img src="${data.playButton}" alt="Play" style="width: 60px; height: 60px;">
                </button>
            </div>
        </div>
    `;
}

// Render FAQ
function renderFAQ(data) {
    const categoriesContainer = document.getElementById('faq-categories-container');
    const questionsContainer = document.getElementById('faq-questions-container');
    
    if (!categoriesContainer || !questionsContainer) return;
    
    // Render category buttons
    categoriesContainer.innerHTML = data.categories.map(category => `
        <button class="flex items-center justify-center space-x-2 sm:space-x-3 px-3 sm:px-4 bg-white border border-gray-200 hover:border-gray-300 transition-colors h-12 sm:h-14 lg:h-[60.69px]" style="border-radius: 8px;">
            <svg width="20" height="20" class="sm:w-[23px] sm:h-[23px] lg:w-[25px] lg:h-[24px]" viewBox="0 0 25 24" fill="none">
                ${getCategoryIcon(category.icon)}
            </svg>
            <span class="font-bold text-sm sm:text-base" style="lg:font-size: 16px; lg:line-height: 26px; color: #000000;">${category.name}</span>
        </button>
    `).join('');
    
    // Render FAQ questions
    questionsContainer.innerHTML = data.questions.map((q, index) => `
        <div class="faq-item border border-gray-200" style="border-radius: ${index === 0 ? '6px 6px 0 0' : index === data.questions.length - 1 ? '0 0 6px 6px' : '0'}; ${index > 0 ? 'border-top: 0;' : ''}">
            <button class="faq-question w-full flex items-center justify-between px-4 sm:px-6 lg:px-11 py-4 sm:py-6 lg:py-8 bg-white hover:bg-gray-50 transition-colors ${q.isOpen ? 'faq-open' : ''}" style="border-radius: ${index === 0 ? '5px 5px 0 0' : index === data.questions.length - 1 && !q.isOpen ? '0 0 5px 5px' : '0'}; ${q.isOpen ? 'background-color: #F2F4F6; box-shadow: inset 0px -1px 0px 0px #E4E6E8;' : ''}" data-faq-id="${q.id}">
                <div class="flex items-center space-x-3 sm:space-x-6 lg:space-x-12 min-w-0 flex-1">
                    <span class="font-extrabold text-2xl sm:text-3xl lg:text-[44px] flex-shrink-0" style="lg:line-height: 58px; color: #000000;">${q.number}</span>
                    <h3 class="font-bold text-left text-sm sm:text-lg lg:text-2xl leading-tight min-w-0" style="lg:font-size: 24px; lg:line-height: 32px; color: #000000; font-family: 'Urbanist', sans-serif;">${q.question}</h3>
                </div>
                <div class="flex-shrink-0 ml-2 sm:ml-3 lg:ml-4" style="width: 32px; height: 32px; sm:width: 38px; sm:height: 38px; lg:width: 42px; lg:height: 42px; background-color: ${q.isOpen ? '#000000' : '#F2F4F6'}; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                    <img src="./assets/images/chevron-down-58c372.png" alt="Toggle" class="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5" style="${q.isOpen ? 'transform: rotate(180deg); filter: invert(1);' : ''}">
                </div>
            </button>
            ${q.isOpen && q.answer ? `
                <div class="faq-answer px-4 sm:px-6 lg:px-11 py-4 sm:py-5 lg:py-6 bg-gray-50 border-t border-gray-200" style="border-radius: 0 0 ${index === data.questions.length - 1 ? '16px 16px' : '0'};">
                    <p class="font-normal text-xs sm:text-sm leading-relaxed sm:leading-normal ml-0 sm:ml-12 lg:ml-[101px]" style="lg:font-size: 14px; lg:line-height: 24px; color: #737373; lg:max-width: 747.76px;">${q.answer}</p>
                </div>
            ` : ''}
        </div>
    `).join('');
    
    // Add click handlers for FAQ toggle
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const isOpen = this.classList.contains('faq-open');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-question').forEach(btn => {
                btn.classList.remove('faq-open');
                btn.style.backgroundColor = '#FFFFFF';
                btn.style.boxShadow = 'none';
                const icon = btn.querySelector('div[style*="background-color"]');
                if (icon) {
                    icon.style.backgroundColor = '#F2F4F6';
                }
                const img = btn.querySelector('img');
                if (img) {
                    img.style.transform = '';
                    img.style.filter = '';
                }
                const answer = btn.parentElement.querySelector('.faq-answer');
                if (answer) {
                    answer.remove();
                }
            });
            
            // Toggle current FAQ
            if (!isOpen) {
                this.classList.add('faq-open');
                this.style.backgroundColor = '#F2F4F6';
                this.style.boxShadow = 'inset 0px -1px 0px 0px #E4E6E8';
                const icon = this.querySelector('div[style*="background-color"]');
                if (icon) {
                    icon.style.backgroundColor = '#000000';
                }
                const img = this.querySelector('img');
                if (img) {
                    img.style.transform = 'rotate(180deg)';
                    img.style.filter = 'invert(1)';
                }
                
                // Add answer if exists
                const faqId = this.dataset.faqId;
                const question = data.questions.find(q => q.id == faqId);
                if (question && question.answer) {
                    const answerDiv = document.createElement('div');
                    answerDiv.className = 'faq-answer px-4 sm:px-6 lg:px-11 py-4 sm:py-5 lg:py-6 bg-gray-50 border-t border-gray-200';
                    answerDiv.style.borderRadius = '0 0 16px 16px';
                    answerDiv.innerHTML = `<p class="font-normal text-xs sm:text-sm leading-relaxed sm:leading-normal ml-0 sm:ml-12 lg:ml-[101px]" style="lg:font-size: 14px; lg:line-height: 24px; color: #737373; lg:max-width: 747.76px;">${question.answer}</p>`;
                    faqItem.appendChild(answerDiv);
                }
            }
        });
    });
}

// Helper function to get category icons
function getCategoryIcon(iconType) {
    const icons = {
        tours: '<path d="M0.5 0H23.5V24H0.5V0Z" fill="none"/><text x="12" y="16" font-size="14" text-anchor="middle" fill="#000000">🎫</text>',
        activities: '<circle cx="12.5" cy="12" r="10" stroke="#000000" stroke-width="1.5" fill="none"/>',
        destinations: '<path d="M12.5 2L21.5 22H3.5L12.5 2Z" stroke="#000000" stroke-width="1.5" fill="none"/>',
        hotels: '<rect x="4.5" y="5" width="16" height="14" stroke="#000000" stroke-width="1.5" fill="none"/><rect x="8.5" y="9" width="3" height="3" fill="#000000"/><rect x="14.5" y="9" width="3" height="3" fill="#000000"/><rect x="8.5" y="14" width="3" height="3" fill="#000000"/><rect x="14.5" y="14" width="3" height="3" fill="#000000"/>',
        car: '<path d="M5.5 12H19.5M5.5 12C4.5 12 3.5 13 3.5 14V18H7.5M5.5 12L7.5 8H17.5L19.5 12M19.5 12C20.5 12 21.5 13 21.5 14V18H17.5M7.5 18C7.5 19.1 6.6 20 5.5 20C4.4 20 3.5 19.1 3.5 18M7.5 18C7.5 16.9 6.6 16 5.5 16C4.4 16 3.5 16.9 3.5 18M17.5 18C17.5 19.1 18.4 20 19.5 20C20.6 20 21.5 19.1 21.5 18M17.5 18C17.5 16.9 18.4 16 19.5 16C20.6 16 21.5 16.9 21.5 18" stroke="#000000" stroke-width="1.5" fill="none"/>',
        property: '<path d="M3.5 12L12.5 3L21.5 12M5.5 10V20H10.5V15H14.5V20H19.5V10" stroke="#000000" stroke-width="1.5" fill="none"/>',
        tickets: '<rect x="3.5" y="7" width="18" height="10" rx="2" stroke="#000000" stroke-width="1.5" fill="none"/><line x1="3.5" y1="12" x2="21.5" y2="12" stroke="#000000" stroke-width="1.5" stroke-dasharray="2 2"/>'
    };
    return icons[iconType] || icons.tours;
}

// Render Blog Section
function renderBlog(data) {
    const mobileContainer = document.getElementById('blog-articles-container-mobile');
    const desktopContainer = document.getElementById('blog-articles-container-desktop');
    if (!data.articles) return;
    
    // Mobile rendering - Responsive grid
    if (mobileContainer) {
        mobileContainer.innerHTML = data.articles.map(article => `
            <div class="bg-white border border-gray-200 rounded-custom-32 overflow-hidden w-full max-w-[320px] sm:max-w-[388px]" style="height: auto;">
                <!-- Article Image -->
                <div class="relative w-full aspect-[386/312]" style="margin: 1px;">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
                    
                    <!-- Category Badge -->
                    <div class="absolute bg-white rounded-custom-50" style="left: 16px; top: 16px; padding: 6px 14px;">
                        <span class="font-bold text-xs" style="color: #000000;">${article.category}</span>
                    </div>
                    
                    <!-- Heart Icon -->
                    <button class="absolute rounded-custom-16 flex items-center justify-center" style="right: 16px; top: 16px; width: 28px; height: 28px; background: rgba(255, 255, 255, 0.82);">
                        <svg width="18" height="16" fill="none" stroke="#000000" stroke-width="1.5">
                            <path d="M9 15.3l-1.35-1.26C3.6 10.35 0.9 7.92 0.9 4.95 0.9 2.7 2.61 0.9 4.86 0.9c1.35 0 2.7.72 3.24 1.8.54-1.08 1.89-1.8 3.24-1.8 2.25 0 3.96 1.8 3.96 4.05 0 2.97-2.7 5.4-6.75 9.09z"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Article Content -->
                <div class="bg-white rounded-t-3xl p-5 sm:p-6 -mt-6 relative" style="border-radius: 30px;">
                    <!-- Meta Info -->
                    <div class="flex items-center flex-wrap gap-3 mb-3">
                        <!-- Date -->
                        <div class="flex items-center">
                            <svg width="14" height="14" fill="none" style="margin-right: 3px;">
                                <rect x="1.2" y="1.8" width="10.8" height="10.8" rx="1.8" stroke="#8E8E8E" stroke-width="1.3" fill="none"/>
                            </svg>
                            <span class="text-xs font-medium" style="color: #000000;">${article.date}</span>
                        </div>
                        
                        <!-- Read Time -->
                        <div class="flex items-center">
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style="margin-right: 3px;">
                                <circle cx="6" cy="6" r="4.5" stroke="#8E8E8E" stroke-width="1.3" fill="none"/>
                                <path d="M6 3v3l1.8 1.8" stroke="#8E8E8E" stroke-width="1.3"/>
                            </svg>
                            <span class="text-xs font-medium" style="color: #000000;">${article.readTime}</span>
                        </div>
                        
                        <!-- Comments -->
                        <div class="flex items-center">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style="margin-right: 3px;">
                                <circle cx="3" cy="6" r="0.5" fill="#8E8E8E" stroke="#8E8E8E" stroke-width="2"/>
                                <circle cx="6" cy="6" r="0.5" fill="#8E8E8E" stroke="#8E8E8E" stroke-width="2"/>
                                <circle cx="9" cy="6" r="0.5" fill="#8E8E8E" stroke="#8E8E8E" stroke-width="2"/>
                            </svg>
                            <span class="text-xs font-medium" style="color: #000000;">${article.comments}</span>
                        </div>
                    </div>
                    
                    <!-- Title -->
                    <h3 class="font-bold mb-4 text-base sm:text-lg leading-snug" style="color: #000000; white-space: pre-line;">${article.title}</h3>
                    
                    <!-- Author & Button -->
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center min-w-0">
                            <img src="${article.authorAvatar}" alt="${article.author}" class="rounded-full flex-shrink-0" style="width: 28px; height: 28px; object-fit: cover; margin-right: 8px;">
                            <span class="font-bold text-xs truncate" style="color: #000000;">${article.author}</span>
                        </div>
                        <button class="bg-white border rounded-custom-50 flex items-center justify-center flex-shrink-0" style="border-color: #E4E6E8; width: 104.14px; height: 40px; padding: 8px 20px;">
                            <span class="font-bold" style="color: #000000; font-size: 14px; line-height: 22px;">Read More</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Desktop rendering - Exact Figma positioning
    if (desktopContainer) {
        // Blog article positions from Figma - exact coordinates from layout_HI3Z5H, layout_U0NY0P, layout_FDFXJN
        const positions = [
            { x: 12, y: 192 },    // First article (layout_HI3Z5H)
            { x: 418, y: 192 },   // Second article (layout_U0NY0P)
            { x: 836, y: 192 }    // Third article (layout_FDFXJN)
        ];
        
        desktopContainer.innerHTML = data.articles.slice(0, 3).map((article, index) => {
            const pos = positions[index];
            return `
            <div class="absolute bg-white border overflow-hidden" style="left: ${pos.x}px; top: ${pos.y}px; width: 388px; height: 505.69px; border-color: #E4E6E8; border-width: 1px; border-radius: 32px;">
                <!-- Article Image Container with 1px border -->
                <div style="width: 388px; height: 313.69px; border: 1px solid transparent;">
                    <div class="relative" style="width: 386px; height: 311.69px; margin: 0;">
                        <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
                        
                        <!-- Category Badge - exact position from Figma -->
                        <div class="absolute bg-white" style="left: 20px; top: 20px; padding: 7.5px 18px; border-radius: 50px;">
                            <span style="font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 14px; line-height: 22px; color: #000000;">${article.category}</span>
                        </div>
                        
                        <!-- Heart Icon - exact position from Figma -->
                        <button class="absolute flex items-center justify-center" style="right: 20px; top: 20px; width: 32px; height: 32px; background: rgba(255, 255, 255, 0.82); border-radius: 16px; border: none; cursor: pointer;">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M10 17.27L8.82 16.23C3.5 11.36 0 8.28 0 4.5C0 1.42 2.42 0 4.5 0C6.24 0 7.91 0.81 9 2.09C10.09 0.81 11.76 0 13.5 0C15.58 0 18 1.42 18 4.5C18 8.28 14.5 11.36 9.18 16.23L10 17.27Z" fill="none" stroke="#000000" stroke-width="1.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- Article Content - exact padding from Figma layout_KSPMUZ -->
                <div class="bg-white" style="width: 386px; height: 192px; padding: 30px 31px; border-radius: 30px;">
                    <!-- Meta Info - exact spacing from Figma -->
                    <div class="flex items-center" style="height: 22px; margin-bottom: 8px;">
                        <!-- Date with clock icon -->
                        <div class="flex items-center" style="height: 22px;">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="margin-right: 4px;">
                                <rect x="1.5" y="1.5" width="9" height="9" rx="1.5" stroke="#8E8E8E" stroke-width="1.2" fill="none"/>
                                <circle cx="3.5" cy="3.5" r="0.75" fill="#8E8E8E"/>
                            </svg>
                            <span style="font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 14px; line-height: 22px; color: #000000;">${article.date}</span>
                        </div>
                        
                        <!-- Read Time -->
                        <div class="flex items-center" style="height: 22px; margin-left: 20px;">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="margin-right: 4px;">
                                <circle cx="6" cy="6" r="4.5" stroke="#8E8E8E" stroke-width="1.2" fill="none"/>
                                <path d="M6 3v3l2 2" stroke="#8E8E8E" stroke-width="1.2" stroke-linecap="round"/>
                            </svg>
                            <span style="font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 14px; line-height: 22px; color: #000000;">${article.readTime}</span>
                        </div>
                        
                        <!-- Comments -->
                        <div class="flex items-center" style="height: 22px; margin-left: 20px;">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="margin-right: 4px;">
                                <circle cx="3" cy="6" r="0.75" fill="#8E8E8E"/>
                                <circle cx="6" cy="6" r="0.75" fill="#8E8E8E"/>
                                <circle cx="9" cy="6" r="0.75" fill="#8E8E8E"/>
                            </svg>
                            <span style="font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 14px; line-height: 22px; color: #000000;">${article.comments}</span>
                        </div>
                    </div>
                    
                    <!-- Title - exact dimensions from Figma layout_RYC4S6 -->
                    <div style="height: 64px; margin-bottom: 0;">
                        <h3 style="font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 20px; line-height: 32px; color: #000000; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${article.title}</h3>
                    </div>
                    
                    <!-- Author & Button - exact layout from Figma -->
                    <div class="flex items-center justify-between" style="height: 40px; margin-top: 26px;">
                        <!-- Author with avatar -->
                        <div class="flex items-center" style="height: 32px;">
                            <img src="${article.authorAvatar}" alt="${article.author}" class="rounded-full" style="width: 32px; height: 32px; object-fit: cover; margin-right: 10px;">
                            <span style="font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 14px; line-height: 22px; color: #000000;">${article.author}</span>
                        </div>
                        
                        <!-- Read More Button - exact from Figma layout_HH0ICB -->
                        <button class="bg-white border flex items-center justify-center" style="width: 104.14px; height: 40px; border-color: #E4E6E8; border-width: 1px; border-radius: 50px; cursor: pointer; padding: 8px 20px;">
                            <span style="font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 14px; line-height: 22px; color: #000000; white-space: nowrap;">Read More</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        }).join('');
    }
}

// Render Popular Destinations
function renderPopularDestinations(destinations) {
    const container = document.getElementById('popular-destinations-container');
    if (!container || !destinations) return;

    container.innerHTML = destinations.map((dest, index) => {
        return `
            <div class="bg-white border border-border rounded-custom-24 relative" style="width: 288px; height: 223.31px;">
                <div class="relative" style="width: 256px; height: 114.31px; margin: 16px; border-radius: 20px; overflow: hidden;">
                    <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover">
                </div>
                <div style="padding: 0 16px 16px 16px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3 class="font-bold text-secondary" style="font-size: 18px; line-height: 28px; margin-bottom: 6px;">${dest.name}</h3>
                        <p style="color: #737373; font-weight: 400; font-size: 14px; line-height: 22px; margin-bottom: 0;">${dest.tours}, ${dest.activities}</p>
                    </div>
                    <button class="rounded-custom-16 flex items-center justify-center" style="width: 27px; height: 27px; background: #F2F4F6; flex-shrink: 0;">
                        <svg width="10" height="10" fill="none" stroke="#000000" stroke-width="1">
                            <path d="M0.92 0.92L8.17 0.92L8.17 8.17"/>
                            <path d="M0.92 8.17L8.17 0.92"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }).join('') + `
        <!-- Special Yellow CTA Card -->
        <div class="bg-warning rounded-custom-24 border border-border relative" style="width: 288px; height: 227px;">
            <div style="padding: 19px 19px 5px 19px;">
                <h3 class="font-extrabold text-secondary" style="font-size: 24px; line-height: 32px; max-width: 250px;">Crafting Your Perfect Travel Experience</h3>
            </div>
            <div style="padding: 0 19px 19px 19px;">
                <button class="bg-secondary rounded-custom-16 flex items-center justify-between" style="width: 250px; height: 68px; padding: 12px 26px;">
                    <span class="text-white font-bold text-left" style="font-size: 16px; line-height: 22px;">Browse<br>All destinations</span>
                    <svg width="10" height="10" fill="none" stroke="#FFFFFF" stroke-width="1" style="flex-shrink: 0;">
                        <path d="M0.92 0.92L8.17 0.92L8.17 8.17"/>
                        <path d="M0.92 8.17L8.17 0.92"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

// Initialize content on page load
document.addEventListener('DOMContentLoaded', () => {
    const data = loadContentData();
    
    if (data) {
        // Render sections
        renderDestinations(data.destinations);
        renderRecommendedTours(data.recommendedTours);
        renderStats(data.stats);
        renderFlightOffers(data.flightOffers);
        renderFeatures(data.features);
        renderTrustReasons(data.trustReasons);
        renderPopularDestinations(data.popularDestinations);
        renderVideoGallery(data.videoGallery);
        renderFAQ(data.faq);
        renderBlog(data.blog);
        
        console.log('Content loaded successfully');
    } else {
        console.error('Failed to load content data');
    }
});
