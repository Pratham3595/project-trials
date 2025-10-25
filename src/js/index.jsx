// JavaScript functionality for Figma Travel Website

// Global State
const state = {
    currentHeroSlide: 0,
    currentTestimonialSlide: 0,
    currentDestinationSlide: 0,
    activeTab: 'all',
    searchQuery: '',
    blogPosts: [],
    filteredPosts: []
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Travel Website loaded successfully!');
    
    // Initialize all functionality
    initializeNavigation();
    initializeHeroSlider();
    initializeTestimonialSlider();
    initializeDestinationSlider();
    initializeTabs();
    initializeAccordion();
    initializeForms();
    initializeSearch();
    initializeDynamicContent();
    initializeScrollEffects();
});

// ========================================
// NAVIGATION
// ========================================
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger icon
            const icon = navToggle.querySelector('svg');
            if (navMenu.classList.contains('active')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
            }
        });
    }
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Sticky navigation on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', debounce(function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, 10));
    }
}

// ========================================
// HERO SLIDER
// ========================================
function initializeHeroSlider() {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.hero-slide');
    const prevBtn = slider.querySelector('.hero-prev');
    const nextBtn = slider.querySelector('.hero-next');
    const indicators = slider.querySelector('.hero-indicators');
    
    if (slides.length === 0) return;
    
    // Create indicators
    if (indicators) {
        slides.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = 'indicator';
            indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToHeroSlide(index));
            indicators.appendChild(indicator);
        });
    }
    
    function showHeroSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        if (indicators) {
            const dots = indicators.querySelectorAll('.indicator');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        state.currentHeroSlide = index;
    }
    
    function goToHeroSlide(index) {
        showHeroSlide(index);
    }
    
    function nextHeroSlide() {
        const nextIndex = (state.currentHeroSlide + 1) % slides.length;
        showHeroSlide(nextIndex);
    }
    
    function prevHeroSlide() {
        const prevIndex = (state.currentHeroSlide - 1 + slides.length) % slides.length;
        showHeroSlide(prevIndex);
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevHeroSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextHeroSlide);
    
    // Auto-play
    let autoplayInterval = setInterval(nextHeroSlide, 5000);
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    slider.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextHeroSlide, 5000);
    });
    
    // Keyboard navigation
    slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevHeroSlide();
        if (e.key === 'ArrowRight') nextHeroSlide();
    });
}

// ========================================
// TESTIMONIAL SLIDER
// ========================================
function initializeTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    if (!slider) return;
    
    const track = slider.querySelector('.testimonial-track');
    const slides = slider.querySelectorAll('.testimonial-slide');
    const prevBtn = slider.querySelector('.testimonial-prev');
    const nextBtn = slider.querySelector('.testimonial-next');
    
    if (slides.length === 0) return;
    
    function showTestimonialSlide(index) {
        const offset = -index * 100;
        if (track) {
            track.style.transform = `translateX(${offset}%)`;
        }
        state.currentTestimonialSlide = index;
    }
    
    function nextTestimonialSlide() {
        const nextIndex = (state.currentTestimonialSlide + 1) % slides.length;
        showTestimonialSlide(nextIndex);
    }
    
    function prevTestimonialSlide() {
        const prevIndex = (state.currentTestimonialSlide - 1 + slides.length) % slides.length;
        showTestimonialSlide(prevIndex);
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevTestimonialSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonialSlide);
    
    // Auto-play
    setInterval(nextTestimonialSlide, 6000);
}

// ========================================
// DESTINATION SLIDER
// ========================================
function initializeDestinationSlider() {
    const slider = document.querySelector('.destination-slider');
    if (!slider) return;
    
    const track = slider.querySelector('.destination-track');
    const slides = slider.querySelectorAll('.destination-slide');
    const prevBtn = slider.querySelector('.destination-prev');
    const nextBtn = slider.querySelector('.destination-next');
    
    if (slides.length === 0) return;
    
    let slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    
    function showDestinationSlide(index) {
        const maxIndex = Math.max(0, slides.length - slidesToShow);
        const safeIndex = Math.min(index, maxIndex);
        const offset = -safeIndex * (100 / slidesToShow);
        
        if (track) {
            track.style.transform = `translateX(${offset}%)`;
        }
        state.currentDestinationSlide = safeIndex;
    }
    
    function nextDestinationSlide() {
        const maxIndex = Math.max(0, slides.length - slidesToShow);
        const nextIndex = Math.min(state.currentDestinationSlide + 1, maxIndex);
        showDestinationSlide(nextIndex);
    }
    
    function prevDestinationSlide() {
        const prevIndex = Math.max(state.currentDestinationSlide - 1, 0);
        showDestinationSlide(prevIndex);
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevDestinationSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextDestinationSlide);
    
    // Update on resize
    window.addEventListener('resize', debounce(() => {
        const newSlidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        if (newSlidesToShow !== slidesToShow) {
            slidesToShow = newSlidesToShow;
            showDestinationSlide(0);
        }
    }, 250));
}

// ========================================
// TABS
// ========================================
function initializeTabs() {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabPanels = document.querySelectorAll('[data-tab-panel]');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active states
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            tabPanels.forEach(panel => panel.classList.remove('active'));
            const targetPanel = document.querySelector(`[data-tab-panel="${tabName}"]`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
            
            // Update state and fetch filtered content
            state.activeTab = tabName;
            await fetchAndRenderBlogPosts(tabName === 'all' ? null : tabName);
        });
    });
}

// ========================================
// ACCORDION
// ========================================
function initializeAccordion() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionItem = this.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const isActive = accordionItem.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const content = item.querySelector('.accordion-content');
                if (content) {
                    content.style.maxHeight = null;
                }
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                accordionItem.classList.add('active');
                if (accordionContent) {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                }
            }
        });
    });
}

// ========================================
// FORMS
// ========================================
function initializeForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const formType = this.getAttribute('data-form-type') || 'contact';
            
            // Validate form
            if (!validateForm(this)) {
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                showNotification('Success! Your message has been sent.', 'success');
                
                // Reset form
                this.reset();
                
                // Clear validation states
                this.querySelectorAll('.input-error').forEach(el => {
                    el.classList.remove('input-error');
                });
                this.querySelectorAll('.error-message').forEach(el => {
                    el.remove();
                });
                
            } catch (error) {
                showNotification('Error! Please try again later.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('input-error')) {
                    validateField(this);
                }
            });
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name') || field.getAttribute('placeholder') || 'This field';
    let errorMessage = '';
    
    // Remove existing error
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    field.classList.remove('input-error');
    
    // Required check
    if (field.hasAttribute('required') && !value) {
        errorMessage = `${fieldName} is required`;
    }
    
    // Email validation
    else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Phone validation
    else if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            errorMessage = 'Please enter a valid phone number';
        }
    }
    
    // Min length check
    else if (field.hasAttribute('minlength')) {
        const minLength = parseInt(field.getAttribute('minlength'));
        if (value.length < minLength) {
            errorMessage = `${fieldName} must be at least ${minLength} characters`;
        }
    }
    
    if (errorMessage) {
        field.classList.add('input-error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-500 text-sm mt-1';
        errorDiv.textContent = errorMessage;
        field.parentElement.appendChild(errorDiv);
        return false;
    }
    
    return true;
}

// ========================================
// SEARCH
// ========================================
function initializeSearch() {
    const searchInput = document.querySelector('#search-input');
    const searchButton = document.querySelector('#search-button');
    const searchForm = document.querySelector('#search-form');
    
    if (!searchInput) return;
    
    const performSearch = debounce(async function() {
        const query = searchInput.value.trim();
        state.searchQuery = query;
        
        if (query.length >= 2) {
            await fetchAndRenderBlogPosts(
                state.activeTab === 'all' ? null : state.activeTab,
                query
            );
        } else if (query.length === 0) {
            await fetchAndRenderBlogPosts(
                state.activeTab === 'all' ? null : state.activeTab
            );
        }
    }, 500);
    
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
    }
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch();
        });
    }
    
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch();
        });
    }
}

// ========================================
// DYNAMIC CONTENT
// ========================================
async function initializeDynamicContent() {
    // Load initial blog posts
    await fetchAndRenderBlogPosts();
    
    // Load destinations
    await fetchAndRenderDestinations();
    
    // Load testimonials
    await fetchAndRenderTestimonials();
    
    // Load FAQ
    renderFAQ();
}

async function fetchAndRenderBlogPosts(category = null, search = null) {
    const container = document.querySelector('#blog-posts-container');
    if (!container) return;
    
    // Show loading state
    container.innerHTML = '<div class="col-span-full text-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div><p class="mt-4 text-gray-600">Loading posts...</p></div>';
    
    try {
        const posts = await window.API.fetchBlogPosts(category, search);
        state.blogPosts = posts;
        state.filteredPosts = posts;
        
        if (posts.length === 0) {
            container.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-gray-600 text-lg">No posts found</p></div>';
            return;
        }
        
        container.innerHTML = posts.map(post => `
            <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
                <div class="relative h-48 overflow-hidden">
                    <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy">
                    <span class="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">${post.category}</span>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <span>${post.author}</span>
                        <span class="mx-2">•</span>
                        <span>${post.date}</span>
                        <span class="mx-2">•</span>
                        <span>${post.readTime}</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                        ${post.title}
                    </h3>
                    <p class="text-gray-600 mb-4 line-clamp-2">${post.excerpt}</p>
                    <button class="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center">
                        Read More
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </article>
        `).join('');
        
        // Reinitialize scroll effects for new elements
        initializeScrollEffects();
        
    } catch (error) {
        container.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-red-600">Error loading posts. Please try again.</p></div>';
        console.error('Error fetching blog posts:', error);
    }
}

async function fetchAndRenderDestinations() {
    const track = document.querySelector('.destination-track');
    if (!track) return;
    
    try {
        const destinations = await window.API.fetchDestinations();
        
        track.innerHTML = destinations.map(dest => `
            <div class="destination-slide flex-shrink-0">
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div class="relative h-64 overflow-hidden">
                        <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy">
                        <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                            <div class="flex items-center text-yellow-500">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                </svg>
                                <span class="ml-1 text-sm font-medium text-gray-900">${dest.rating}</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${dest.name}</h3>
                        <p class="text-gray-600 mb-4">${dest.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-bold text-primary-600">${dest.price}</span>
                            <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error fetching destinations:', error);
    }
}

async function fetchAndRenderTestimonials() {
    const track = document.querySelector('.testimonial-track');
    if (!track) return;
    
    try {
        const testimonials = await window.API.fetchTestimonials();
        
        track.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-slide flex-shrink-0 w-full px-4">
                <div class="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                    <div class="flex items-center mb-6">
                        ${Array(testimonial.rating).fill('<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>').join('')}
                    </div>
                    <p class="text-gray-700 text-lg mb-6 italic">"${testimonial.content}"</p>
                    <div class="flex items-center">
                        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-12 h-12 rounded-full object-cover">
                        <div class="ml-4">
                            <h4 class="font-bold text-gray-900">${testimonial.name}</h4>
                            <p class="text-gray-600 text-sm">${testimonial.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error fetching testimonials:', error);
    }
}

function renderFAQ() {
    const container = document.querySelector('#faq-container');
    if (!container) return;
    
    const faqs = window.API.faqs;
    
    container.innerHTML = faqs.map((faq, index) => `
        <div class="accordion-item border-b border-gray-200 ${index === 0 ? 'active' : ''}">
            <button class="accordion-button w-full text-left py-6 px-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span class="font-semibold text-gray-900 text-lg pr-8">${faq.question}</span>
                <svg class="w-6 h-6 text-primary-600 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
            <div class="accordion-content overflow-hidden transition-all duration-300" style="max-height: ${index === 0 ? '1000px' : '0'}">
                <div class="px-6 pb-6 text-gray-600">
                    ${faq.answer}
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// SCROLL EFFECTS
// ========================================
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        if (!el.classList.contains('fade-in-up')) {
            observer.observe(el);
        }
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(120%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}
