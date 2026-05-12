// SoOptimal Contracting - Interactive JavaScript

// Quote Calculator with Real Pricing Logic
class QuoteCalculator {
    constructor() {
        this.rates = {
            residential: {
                installation: 2.50, // per sq ft
                repair: 45,        // per hour
                finishing: 3.25,   // per sq ft
                complete: 4.75     // per sq ft
            },
            commercial: {
                installation: 2.25, // per sq ft (bulk discount)
                repair: 55,        // per hour (premium)
                finishing: 3.00,   // per sq ft
                complete: 4.25     // per sq ft
            }
        };
        
        this.minimums = {
            residential: 350,
            commercial: 1500,
            repair: 200
        };
        
        this.multipliers = {
            rush: 1.25,
            weekend: 1.15,
            highEnd: 1.35
        };
        
        this.init();
    }
    
    init() {
        const form = document.getElementById('quoteForm');
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('change', () => this.calculateQuote());
            input.addEventListener('input', () => this.debounce(() => this.calculateQuote(), 500));
        });
        
        form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    debounce(func, wait) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(func, wait);
    }
    
    calculateQuote() {
        const form = document.getElementById('quoteForm');
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate required fields
        if (!data.projectType || !data.sqFootage || !data.serviceType) {
            this.hideQuoteResult();
            return;
        }
        
        const sqFootage = parseInt(data.sqFootage) || 0;
        const roomCount = parseInt(data.roomCount) || 1;
        const projectType = data.projectType;
        const serviceType = data.serviceType;
        
        if (sqFootage < 50) {
            this.hideQuoteResult();
            return;
        }
        
        // Calculate base price
        let basePrice = this.calculateBasePrice(projectType, serviceType, sqFootage);
        
        // Apply room count multiplier for complex layouts
        if (roomCount > 5) {
            basePrice *= 1.1; // 10% complexity surcharge
        }
        
        // Calculate price range (±15%)
        const lowPrice = Math.round(basePrice * 0.85);
        const highPrice = Math.round(basePrice * 1.15);
        
        this.displayQuoteResult(lowPrice, highPrice, data);
    }
    
    calculateBasePrice(projectType, serviceType, sqFootage) {
        const rates = this.rates[projectType];
        const rate = rates[serviceType];
        const minimum = this.minimums[projectType];
        
        let price;
        
        if (serviceType === 'repair') {
            // Repair work is hourly, estimate based on scope
            const estimatedHours = Math.max(sqFootage / 50, 2); // minimum 2 hours
            price = estimatedHours * rate;
        } else {
            price = sqFootage * rate;
        }
        
        // Apply minimum charge
        price = Math.max(price, minimum);
        
        // Large project discount (over 2000 sq ft)
        if (sqFootage > 2000) {
            price *= 0.92; // 8% bulk discount
        }
        
        // Huge project discount (over 5000 sq ft - like 300 apartments)
        if (sqFootage > 5000) {
            price *= 0.88; // additional 4% discount (12% total)
        }
        
        return price;
    }
    
    displayQuoteResult(lowPrice, highPrice, data) {
        const resultDiv = document.getElementById('quoteResult');
        const priceRange = document.getElementById('priceRange');
        
        priceRange.innerHTML = `$${lowPrice.toLocaleString()} - $${highPrice.toLocaleString()}`;
        resultDiv.style.display = 'block';
        
        // Smooth scroll to result
        setTimeout(() => {
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
        
        // Store quote data for submission
        this.currentQuote = { lowPrice, highPrice, ...data };
    }
    
    hideQuoteResult() {
        const resultDiv = document.getElementById('quoteResult');
        resultDiv.style.display = 'none';
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.currentQuote) {
            alert('Please complete the quote calculator first.');
            return;
        }
        
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        try {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending Quote Request...';
            
            // Simulate API call (replace with actual submission)
            await this.submitQuoteRequest(this.currentQuote);
            
            // Success feedback
            this.showSuccessMessage();
            e.target.reset();
            this.hideQuoteResult();
            
        } catch (error) {
            console.error('Quote submission error:', error);
            alert('There was an error sending your quote request. Please try again or call us directly.');
            
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    }
    
    async submitQuoteRequest(quoteData) {
        // This would integrate with your backend/n8n workflow
        // For now, we'll simulate success
        return new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    showSuccessMessage() {
        const resultDiv = document.getElementById('quoteResult');
        resultDiv.innerHTML = `
            <div class="success-message">
                <h3 style="color: var(--color-success); margin-bottom: 16px;">✓ Quote Request Sent!</h3>
                <p style="margin: 0; color: var(--color-neutral-600);">
                    Thank you for your interest! We'll review your project details and contact you within 2 business hours with a detailed quote and to schedule a free consultation.
                </p>
            </div>
        `;
        
        // Hide after 8 seconds
        setTimeout(() => {
            this.hideQuoteResult();
        }, 8000);
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.init();
    }
    
    init() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        try {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            // Simulate API call
            await this.submitContact(data);
            
            this.showContactSuccess();
            e.target.reset();
            
        } catch (error) {
            console.error('Contact form error:', error);
            alert('There was an error sending your message. Please try again or call us directly.');
            
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    }
    
    async submitContact(data) {
        // This would integrate with your backend
        return new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    showContactSuccess() {
        const form = document.getElementById('contactForm');
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <h3 style="color: var(--color-success); margin-bottom: 16px;">✓ Message Sent!</h3>
            <p style="margin: 0; color: var(--color-neutral-600);">
                Thanks for reaching out! We'll get back to you within 4 hours during business hours.
            </p>
        `;
        
        form.parentNode.insertBefore(successDiv, form);
        
        // Hide after 6 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 6000);
    }
}

// Mobile Navigation
class MobileNav {
    constructor() {
        this.init();
    }
    
    init() {
        const toggle = document.querySelector('.nav-toggle');
        const menu = document.querySelector('.nav-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('nav-menu-open');
                toggle.classList.toggle('nav-toggle-active');
            });
            
            // Close menu when clicking nav links
            menu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('nav-menu-open');
                    toggle.classList.remove('nav-toggle-active');
                });
            });
        }
    }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav-container').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe service cards, portfolio items, etc.
    const animateElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .contact-item'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Add animation classes to CSS
const animationStyles = `
.service-card,
.portfolio-item,
.contact-item {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.nav-menu-open {
    display: flex !important;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-top: 1px solid var(--color-neutral-200);
}

.nav-toggle-active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.nav-toggle-active span:nth-child(2) {
    opacity: 0;
}

.nav-toggle-active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

.success-message {
    background: var(--color-success);
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2);
}

@media (min-width: 769px) {
    .nav-menu-open {
        position: static !important;
        display: flex !important;
        flex-direction: row !important;
        background: transparent !important;
        padding: 0 !important;
        box-shadow: none !important;
        border: none !important;
    }
}
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new QuoteCalculator();
    new ContactForm();
    new MobileNav();
    initSmoothScrolling();
    initScrollAnimations();
    
    // Add loading state management
    document.body.classList.add('loaded');
});

// Add loading animation
const loadingStyles = `
body:not(.loaded) .hero-section,
body:not(.loaded) .services-section,
body:not(.loaded) .portfolio-section {
    opacity: 0;
}

body.loaded .hero-section,
body.loaded .services-section,
body.loaded .portfolio-section {
    opacity: 1;
    transition: opacity 0.6s ease-in-out;
}
`;

const loadingStyleSheet = document.createElement('style');
loadingStyleSheet.textContent = loadingStyles;
document.head.appendChild(loadingStyleSheet);