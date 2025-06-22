// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSmoothScrolling();
    initSkillBars();
    initScrollAnimations();
    initPortfolioCards();
    initContactForm();
    initParticleBackground();

    // Mobile Menu Toggle - Fixed
    function initMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const sidebar = document.getElementById('sidebar');
        
        if (mobileMenuToggle && sidebar) {
            // Ensure the toggle is visible and working
            mobileMenuToggle.style.display = 'flex';
            mobileMenuToggle.style.flexDirection = 'column';
            
            mobileMenuToggle.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event bubbling
                sidebar.classList.toggle('active');
                this.classList.toggle('active');
                
                // Force repaint to ensure styles are applied
                sidebar.offsetHeight;
            });

            // Close sidebar when clicking outside
            document.addEventListener('click', function(e) {
                if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target) && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            });

            // Close sidebar on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            });
            
            // Add additional class to body when menu is active
            mobileMenuToggle.addEventListener('click', function() {
                document.body.classList.toggle('menu-active');
            });
        }
    }

    // Smooth Scrolling Navigation
    function initSmoothScrolling() {
        // Handle navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerOffset = 20;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const sidebar = document.getElementById('sidebar');
                    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
                    if (sidebar && mobileMenuToggle && sidebar.classList.contains('active')) {
                        sidebar.classList.remove('active');
                        mobileMenuToggle.classList.remove('active');
                        document.body.classList.remove('menu-active');
                    }
                }
            });
        });
    }

    // Animated Skill Progress Bars
    function initSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillItem = entry.target;
                    const skillBar = skillItem.querySelector('.skill-progress-bar');
                    const skillWidth = skillItem.getAttribute('data-skill');
                    
                    // Animate progress bar
                    setTimeout(() => {
                        if (skillBar) {
                            skillBar.style.width = skillWidth + '%';
                        }
                    }, 200);
                    
                    // Animate percentage counter
                    const percentageElement = skillItem.querySelector('.skill-percentage');
                    if (percentageElement) {
                        animateCounter(percentageElement, 0, parseInt(skillWidth), 1500);
                    }
                    
                    observer.unobserve(skillItem);
                }
            });
        }, { threshold: 0.3 });

        skillItems.forEach(item => {
            observer.observe(item);
        });
    }

    // Counter Animation
    function animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (end - start) * easeOutQuart);
            
            element.textContent = current + '%';
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // Scroll-triggered Animations
    function initScrollAnimations() {
        const animateElements = document.querySelectorAll('.portfolio-card, .timeline-item, .skills-category');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animateElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(element);
        });
    }

    // Portfolio Card Interactions
    function initPortfolioCards() {
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        
        portfolioCards.forEach(card => {
            // Add hover feedback
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });

            // Handle portfolio buttons
            const portfolioBtns = card.querySelectorAll('.portfolio-btn');
            portfolioBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const icon = this.querySelector('i');
                    
                    if (icon.classList.contains('fa-eye')) {
                        // Preview functionality
                        showPortfolioPreview(card);
                    } else if (icon.classList.contains('fa-external-link-alt')) {
                        // External link functionality
                        openPortfolioLink(card);
                    }
                });
            });
        });
    }

    // Portfolio Preview Modal
    function showPortfolioPreview(card) {
        const title = card.querySelector('.portfolio-title').textContent;
        const description = card.querySelector('.portfolio-description').textContent;
        const image = card.querySelector('.portfolio-image img').src;
        
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'portfolio-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close">&times;</button>
                    <img src="${image}" alt="${title}" class="modal-image">
                    <h3 class="modal-title">${title}</h3>
                    <p class="modal-description">${description}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add modal styles
        const modalStyles = `
            .portfolio-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(10, 15, 28, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .modal-overlay {
                background: var(--color-surface-elevated);
                border: 1px solid var(--color-primary);
                border-radius: 12px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
            }
            .modal-close {
                position: absolute;
                top: 10px;
                right: 15px;
                background: none;
                border: none;
                color: var(--color-primary);
                font-size: 24px;
                cursor: pointer;
                z-index: 10;
            }
            .modal-image {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }
            .modal-content {
                padding: 20px;
            }
            .modal-title {
                color: var(--color-primary);
                margin-bottom: 10px;
            }
            .modal-description {
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
        
        // Show modal with delay for transition
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        
        function closeModal() {
            modal.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                }
                if (document.head.contains(styleSheet)) {
                    document.head.removeChild(styleSheet);
                }
            }, 300);
        }
        
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        document.addEventListener('keydown', function modalKeyHandler(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', modalKeyHandler);
            }
        });
    }

    // Open Portfolio Link
    function openPortfolioLink(card) {
        const projectId = card.getAttribute('data-project');
        // In a real application, you would have actual URLs
        const projectUrls = {
            '1': 'https://github.com/jumpincrane/cybertech-dashboard',
            '2': 'https://github.com/jumpincrane/ai-marketing-platform',
            '3': 'https://github.com/jumpincrane/blockchain-tracker'
        };
        
        const url = projectUrls[projectId] || '#';
        if (url !== '#') {
            window.open(url, '_blank');
        }
    }

    // Contact Form Handling
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const formObject = {};
                formData.forEach((value, key) => {
                    formObject[key] = value;
                });
                
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Wysyłanie...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    showNotification('Wiadomość została wysłana pomyślnie!', 'success');
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            });
        }
    }

    // Notification System
    function showNotification(message, type = 'info') {
        // Remove any existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => {
            document.body.removeChild(notif);
        });
        
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        const notificationStyles = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--color-surface-elevated);
                border: 1px solid var(--color-primary);
                border-radius: 8px;
                padding: 1rem;
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 300px;
            }
            .notification--success {
                border-color: var(--color-primary);
                box-shadow: 0 0 10px rgba(56, 251, 219, 0.3);
            }
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            .notification-message {
                color: var(--color-text);
                font-size: 0.9rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: var(--color-primary);
                cursor: pointer;
                font-size: 1.2rem;
            }
        `;
        
        if (!document.querySelector('#notification-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'notification-styles';
            styleSheet.textContent = notificationStyles;
            document.head.appendChild(styleSheet);
        }
        
        document.body.appendChild(notification);
        
        // Show notification with a slight delay
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Auto-hide after 5 seconds
        const hideTimeout = setTimeout(() => {
            hideNotification(notification);
        }, 5000);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            clearTimeout(hideTimeout);
            hideNotification(notification);
        });
        
        function hideNotification(notif) {
            notif.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notif)) {
                    document.body.removeChild(notif);
                }
            }, 300);
        }
    }

    // Particle Background Animation
    function initParticleBackground() {
        const particlesContainer = document.getElementById('particles-background');
        if (!particlesContainer) return;
        
        const particleCount = 30; // Reduced for better performance
        
        for (let i = 0; i < particleCount; i++) {
            createParticle(particlesContainer);
        }
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: var(--color-primary);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: float ${duration}s ${delay}s infinite ease-in-out;
            pointer-events: none;
        `;
        
        container.appendChild(particle);
        
        // Add floating animation
        if (!document.querySelector('#particle-styles')) {
            const particleStyles = document.createElement('style');
            particleStyles.id = 'particle-styles';
            particleStyles.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-20px) rotate(120deg); }
                    66% { transform: translateY(20px) rotate(240deg); }
                }
                .particle {
                    box-shadow: 0 0 6px var(--color-glow);
                }
            `;
            document.head.appendChild(particleStyles);
        }
    }

    // Fix for sidebar alignment when scrolling
    function fixSidebarScroll() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            // Ensure sidebar stays fixed when scrolling
            sidebar.style.position = 'fixed';
            sidebar.style.top = '0';
            sidebar.style.left = '0';
            sidebar.style.height = '100%';
            sidebar.style.overflowY = 'auto';
            sidebar.style.zIndex = '1000';
            
            // Prevent body scroll when sidebar is open on mobile
            const style = document.createElement('style');
            style.textContent = `
                body.menu-active {
                    overflow: hidden;
                }
                @media (max-width: 1024px) {
                    .sidebar.active {
                        transform: translateX(0);
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                    }
                    .mobile-menu-toggle {
                        display: flex !important;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        z-index: 1002;
                    }
                    .mobile-menu-toggle span {
                        display: block;
                        transition: all 0.3s ease;
                    }
                    .mobile-menu-toggle.active {
                        background: var(--color-primary);
                    }
                    .mobile-menu-toggle.active span {
                        background: var(--color-background);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Call the sidebar fix function
    fixSidebarScroll();
    
    // Performance optimization: Throttle scroll events
    let ticking = false;
    
    function updateOnScroll() {
        // Add any scroll-based animations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add keyboard navigation styles
    const keyboardStyles = document.createElement('style');
    keyboardStyles.textContent = `
        .keyboard-navigation *:focus {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(keyboardStyles);

    // Handle window resize
    window.addEventListener('resize', function() {
        // Ensure mobile menu behaves correctly on resize
        const sidebar = document.getElementById('sidebar');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        
        if (window.innerWidth > 1024 && sidebar && mobileMenuToggle) {
            sidebar.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-active');
        }
    });

    // Initialize any elements that might be added dynamically
    function initDynamicElements() {
        // This function can be called if you add DOM elements dynamically
        initSkillBars();
        initScrollAnimations();
    }

    // Console easter egg
    console.log(`
    ╔══════════════════════════════════════╗
    ║  🚀 Cyber Portfolio v2025           ║
    ║  Built with modern web technologies  ║
    ║  © 2025 Michał Heit                  ║
    ╚══════════════════════════════════════╝
    `);
});