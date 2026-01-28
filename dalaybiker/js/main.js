/* ============================================
   BIKE PRO - OFICINA PREMIUM
   Main JavaScript
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // MOBILE NAVIGATION
    // ============================================
    const initMobileNav = () => {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open', navMenu.classList.contains('active'));
            navToggle.setAttribute('aria-expanded',
                navToggle.classList.contains('active'));
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Prevent background scrolling when menu is open
        let startY = 0;

        navMenu.addEventListener('touchstart', (e) => {
            if (navMenu.classList.contains('active')) {
                startY = e.touches[0].clientY;
            }
        }, { passive: false });

        navMenu.addEventListener('touchmove', (e) => {
            if (navMenu.classList.contains('active')) {
                e.preventDefault();
            }
        }, { passive: false });
    };

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const initHeaderScroll = () => {
        const header = document.querySelector('.header');
        if (!header) return;
        
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    };

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const initScrollAnimations = () => {
        const animatedElements = document.querySelectorAll('[data-animate]');
        
        if (!animatedElements.length) return;
        
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => observer.observe(el));
    };

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    const initSmoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (!target) return;
                
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    };

    // ============================================
    // ACTIVE NAV LINK ON SCROLL
    // ============================================
    const initActiveNavLink = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar__menu a[href^="#"]');
        
        if (!sections.length || !navLinks.length) return;
        
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 150;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    };

    // ============================================
    // FORM VALIDATION (for contact page)
    // ============================================
    const initFormValidation = () => {
        const forms = document.querySelectorAll('form[data-validate]');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.classList.add('error');
                        showError(input, 'Este campo é obrigatório');
                    } else {
                        input.classList.remove('error');
                        hideError(input);
                        
                        // Email validation
                        if (input.type === 'email' && !isValidEmail(input.value)) {
                            isValid = false;
                            input.classList.add('error');
                            showError(input, 'Digite um e-mail válido');
                        }
                        
                        // Phone validation
                        if (input.type === 'tel' && !isValidPhone(input.value)) {
                            isValid = false;
                            input.classList.add('error');
                            showError(input, 'Digite um telefone válido');
                        }
                    }
                });
                
                if (isValid) {
                    // Here you would normally send the form data
                    showSuccessMessage(form);
                    form.reset();
                }
            });
            
            // Remove error on input
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    input.classList.remove('error');
                    hideError(input);
                });
            });
        });
    };

    // Helper functions for form validation
    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const isValidPhone = (phone) => {
        const cleaned = phone.replace(/\D/g, '');
        return cleaned.length >= 10;
    };

    const showError = (input, message) => {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('span');
            errorElement.classList.add('error-message');
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.textContent = message;
    };

    const hideError = (input) => {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
    };

    const showSuccessMessage = (form) => {
        const successDiv = document.createElement('div');
        successDiv.classList.add('success-message');
        successDiv.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        form.parentNode.insertBefore(successDiv, form);
        
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    };

    // ============================================
    // LAZY LOAD IMAGES
    // ============================================
    const initLazyLoad = () => {
        const images = document.querySelectorAll('img[data-src]');
        
        if (!images.length) return;
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    };

    // ============================================
    // PHONE NUMBER MASK
    // ============================================
    const initPhoneMask = () => {
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        
        phoneInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length <= 11) {
                    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
                    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
                }
                
                e.target.value = value;
            });
        });
    };

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const initBackToTop = () => {
        const backToTopBtn = document.querySelector('.back-to-top');
        
        if (!backToTopBtn) return;
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    // ============================================
    // PRELOAD CRITICAL RESOURCES
    // ============================================
    const preloadCriticalResources = () => {
        // Preload fonts
        const fonts = [
            'https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap'
        ];
        
        fonts.forEach(fontUrl => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = fontUrl;
            document.head.appendChild(link);
        });
    };

    // ============================================
    // INITIALIZE ALL
    // ============================================
    const init = () => {
        // Run immediately
        initMobileNav();
        initHeaderScroll();
        initSmoothScroll();
        initActiveNavLink();
        initFormValidation();
        initPhoneMask();
        initBackToTop();
        preloadCriticalResources();
        
        // Run after DOM is fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initScrollAnimations();
                initLazyLoad();
            });
        } else {
            initScrollAnimations();
            initLazyLoad();
        }
    };

    // Start the application
    init();

    // ============================================
    // PERFORMANCE MONITORING (Optional)
    // ============================================
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                }
            }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

})();
