/**
 * Portfolio Website JavaScript
 * Modern JavaScript with ES6+ features for interactive functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');
    const themeToggle = document.querySelector('.theme-toggle');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');
    const forms = document.querySelectorAll('form');

    // Initialize functionality
    initializeTheme();
    initializeNavigation();
    initializeProjectFiltering();
    initializeLazyLoading();
    setupScrollAnimation();
    initializeFormValidation();

    /**
     * Theme Toggling with localStorage persistence
     */
    function initializeTheme() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Toggle theme when button is clicked
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    /**
     * Mobile Navigation Toggle
     */
    function initializeNavigation() {
        // Toggle navigation menu
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close navigation when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Smooth scroll to section when navigation link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Account for fixed header
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Project Filtering Functionality
     */
    function initializeProjectFiltering() {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and add to clicked button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                // Filter projects based on category
                projects.forEach(project => {
                    if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                        project.classList.remove('hide');
                        setTimeout(() => {
                            project.style.display = 'block';
                        }, 0);
                    } else {
                        project.classList.add('hide');
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 300); // Match the transition time
                    }
                });
            });
        });
    }

    /**
     * Lazy Loading Images
     */
    function initializeLazyLoading() {
        // Using Intersection Observer API for lazy loading
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('src');
                    
                    // Load the image
                    img.src = src;
                    
                    // Add loaded class to fade in the image
                    img.onload = () => {
                        img.classList.add('loaded');
                    };
                    
                    // Stop observing once loaded
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px',
            threshold: 0.1
        });
        
        // Observe all images with lazy-load class
        const lazyImages = document.querySelectorAll('.lazy-load');
        lazyImages.forEach(img => imgObserver.observe(img));
    }

    /**
     * Scroll Animation
     */
    function setupScrollAnimation() {
        // Add appear class to elements when they come into view
        const appearOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            });
        }, appearOptions);
        
        // Observe elements with fade-in class
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            appearOnScroll.observe(element);
        });
    }

    /**
     * Form Validation
     */
    function initializeFormValidation() {
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let isValid = true;
                
                // Clear previous errors
                const errorElements = form.querySelectorAll('.form-error.show');
                errorElements.forEach(error => error.classList.remove('show'));
                
                // Validate required fields
                const requiredFields = form.querySelectorAll('[required]');
                requiredFields.forEach(field => {
                    // Remove previous error state
                    field.classList.remove('error');
                    
                    // Check if field is empty
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('error');
                        const errorEl = field.nextElementSibling;
                        if (errorEl && errorEl.classList.contains('form-error')) {
                            errorEl.classList.add('show');
                        }
                    }
                    
                    // Email validation
                    if (field.type === 'email' && field.value.trim()) {
                        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailPattern.test(field.value.trim())) {
                            isValid = false;
                            field.classList.add('error');
                            const errorEl = field.nextElementSibling;
                            if (errorEl && errorEl.classList.contains('form-error')) {
                                errorEl.textContent = 'Please enter a valid email address';
                                errorEl.classList.add('show');
                            }
                        }
                    }
                });
                
                // If form is valid, show success message or submit
                if (isValid) {
                    // Here you would typically send the form data to a server
                    // For this demo, we'll just show a success message
                    alert('Form submitted successfully!');
                    form.reset();
                }
            });
        });
    }
});

