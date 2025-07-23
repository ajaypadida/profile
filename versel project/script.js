// Global variable to store the current chart instance
let currentChart = null;
let rellax = null;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Preloader removed
    // Add loaded class to body immediately
                document.body.classList.add('loaded');

    // Initialize theme
    initThemeSwitch();

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: false,
        offset: 50
    });

    // Initialize Quote of the Day
    initQuoteOfTheDay();

    // Initialize Interactive Background
    initInteractiveBackground();
    
    // Initialize Hero Spotlight Effect
    initHeroSpotlight();

    // Initialize Project Card Tilt Effect using VanillaTilt.js
    initProjectCardTilt();

    // Initialize Hero Parallax Effect
    initHeroParallax();
    
    // Initialize Parallax Scrolling with Rellax.js
    initParallaxScrolling();

    // Initialize Floating Icons
    initFloatingIcons();
    
    // Initialize staggered Tech Logo animations
    initStaggeredTechLogos();

    // Initialize Mouse Trail Effect
    initMouseTrail();

    // Initialize Interactive Scroll Indicator
    initScrollIndicator();

    // Initialize Morphing Background Effect
    initMorphingBackground();

    // Initialize Cursor Bubble Effect
    initCursorBubbleEffect();

    // Initialize Network Nodes Animation
    initNetworkAnimation();

    // Initialize Skills Chart - start with radar view
    initSkillsChart('radar');
    
    // Initialize chart toggle buttons
    initChartToggleButtons();
    
    // Initialize role text animation
    initRoleTextAnimation();
    
    // Initialize footer starfield
    initFooterStarfield();

    // Initialize tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Initialize VanillaTilt for profile image
    initProfileTilt();

    // Initialize the coding screen animation
    initCodingScreenAnimation();

    // Initialize AjayBot Assistant
    initAjayBotAssistant();

    // Initialize Particles.js
    initParticlesJS();

    // Elements
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const contactForm = document.getElementById('contactForm');
    const aboutTabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Set initial state for navbar based on scroll position
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }

    // Create ripple effect for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            this.appendChild(ripple);
            
            // Get position
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            // Set position
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Add ripple class
            ripple.classList.add('ripple');
            
            // Remove after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Smooth scroll to top when logo is clicked
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Scroll event for sticky header with enhanced performance using requestAnimationFrame
    let lastScrollTop = 0;
    let scrollTimer;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            if (!header.classList.contains('scrolled')) {
                header.classList.add('scrolled');
            }
        } else {
            header.classList.remove('scrolled');
        }
        
        // Add visible class when scrolling up
        if (scrollTop < lastScrollTop) {
            header.classList.add('navbar-visible');
        } else {
            header.classList.remove('navbar-visible');
        }
        
        lastScrollTop = scrollTop;
    }
    
    window.addEventListener('scroll', () => {
        if (scrollTimer) {
            return;
        }
        
        scrollTimer = setTimeout(() => {
            handleScroll();
            scrollTimer = null;
        }, 10);
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Highlight active nav item based on scroll position
    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY;
        
        // Get all sections
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active from all nav items
                navLinks.forEach(link => {
                    link.classList.remove('active-nav');
                });
                
                // Add active to current section's nav item
                const currentNavItem = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
                if (currentNavItem) {
                    currentNavItem.classList.add('active-nav');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    highlightNavOnScroll(); // Run once on page load

    // About section tab handling
    aboutTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            aboutTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get the target tab content
            const targetTabId = tab.getAttribute('data-tab');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the selected tab content
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    // Enhanced smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Add active class to clicked link
            navLinks.forEach(link => {
                link.classList.remove('active-nav');
            });
            this.classList.add('active-nav');
            
            // Scroll smoothly to target
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Project filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Form submission handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showAlert('Please fill in all required fields', 'error');
                return;
            }
            
            // Here you would normally send data to a server
            // For demo purposes, we're just showing a success message
            showAlert('Your message has been sent successfully!', 'success');
            
            // Reset form
            this.reset();
        });
    }

    // Alert function
    function showAlert(message, type) {
        // Check if alert already exists and remove it
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert ${type}`;
        alert.textContent = message;
        
        // Append to form
        contactForm.prepend(alert);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            alert.classList.add('fade-out');
            setTimeout(() => {
                alert.remove();
            }, 500);
        }, 5000);
    }

    // Skill animation on scroll
    const skillsSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');
    
    // Animate skills when they come into view
    function animateSkills() {
        if (isInViewport(skillsSection)) {
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            
            // Remove event listener after animation
            window.removeEventListener('scroll', animateSkills);
        }
    }
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Add scroll event for skill animation
    window.addEventListener('scroll', animateSkills);
    
    // Initial check for elements in viewport
    animateSkills();

    // Initialize Smart Navigation
    initSmartNavigation();
});

// Initialize Smart Navigation
function initSmartNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const smartNavItems = document.querySelectorAll('.smart-nav-item');
    const smartNav = document.querySelector('.smart-nav');
    
    if (!sections.length || !smartNavItems.length || !smartNav) return;
    
    // Function to update active nav item based on scroll position
    function updateActiveNavItem() {
        const scrollPosition = window.scrollY;
        
        // Get current section
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all items
                smartNavItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to corresponding nav item
                const activeItem = document.querySelector(`.smart-nav-item[href="#${sectionId}"]`);
                if (activeItem) {
                    activeItem.classList.add('active');
                }
            }
        });
        
        // Show/hide smart nav based on scroll position
        if (scrollPosition > 300) {
            smartNav.style.opacity = '1';
        } else {
            smartNav.style.opacity = '0';
        }
    }
    
    // Initial call to set active section
    updateActiveNavItem();
    
    // Update active section on scroll
    window.addEventListener('scroll', updateActiveNavItem);
    
    // Smooth scroll for nav items
    smartNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                
                window.scrollTo({
                    top: offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation for initial appearance
    setTimeout(() => {
        smartNavItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 1000);
}

// Interactive Background with Particle Effect
function initInteractiveBackground() {
    const canvas = document.getElementById('interactiveBackground');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Mouse position
    let mouseX = width / 2;
    let mouseY = height / 2;
    
    // Particles array
    const particles = [];
    const particleCount = 100;
    
    // Colors from our CSS variables
    const colors = [
        '#4361ee', // primary
        '#3a0ca3', // secondary
        '#f72585', // accent
    ];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 5 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 2 + 0.5,
            angle: Math.random() * Math.PI * 2,
            distance: Math.random() * 50 + 50,
            opacity: 0, // Set opacity to 0 to make particles invisible
        });
    }
    
    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Touch move event for mobile
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    });
    
    // Resize event
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Draw connecting lines
        drawConnections();
        
        // Update and draw particles
        particles.forEach((particle, index) => {
            // Calculate distance to mouse
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Move particles toward mouse with easing
            if (distance < 300) {
                const angle = Math.atan2(dy, dx);
                const force = (300 - distance) / 1500;
                particle.x += Math.cos(angle) * force * particle.speed;
                particle.y += Math.sin(angle) * force * particle.speed;
            } else {
                // Random movement when far from mouse
                particle.x += Math.cos(particle.angle) * 0.2;
                particle.y += Math.sin(particle.angle) * 0.2;
                
                // Change direction occasionally
                if (Math.random() < 0.01) {
                    particle.angle = Math.random() * Math.PI * 2;
                }
            }
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > width) {
                particle.angle = Math.PI - particle.angle;
            }
            if (particle.y < 0 || particle.y > height) {
                particle.angle = -particle.angle;
            }
            
            // Draw particle (now invisible due to opacity 0)
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${hexToRgb(particle.color)}, ${particle.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    // Draw connections between close particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${hexToRgb('#4361ee')}, ${0.2 * (1 - distance / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Convert hex color to rgb
    function hexToRgb(hex) {
        // Remove # if present
        hex = hex.replace('#', '');
        
        // Convert 3-digit hex to 6-digits
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        
        // Extract RGB components
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        return `${r}, ${g}, ${b}`;
    }
    
    // Start animation
    animate();
}

// Hero Section Spotlight Effect
function initHeroSpotlight() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create spotlight overlay
    const spotlight = document.createElement('div');
    spotlight.classList.add('hero-spotlight');
    hero.appendChild(spotlight);
    
    // Initial position
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    
    // Update spotlight position with easing
    function updateSpotlight() {
        // Easing calculation
        mouseX += (targetX - mouseX) * 0.1;
        mouseY += (targetY - mouseY) * 0.1;
        
        // Update spotlight position
        if (spotlight) {
            spotlight.style.background = `radial-gradient(
                circle at ${mouseX}px ${mouseY - hero.offsetTop}px, 
                rgba(255, 255, 255, 0.2) 0%, 
                rgba(255, 255, 255, 0) 50%
            )`;
        }
        
        requestAnimationFrame(updateSpotlight);
    }
    
    // Mouse move event
    hero.addEventListener('mousemove', (e) => {
        // Get mouse position
        targetX = e.clientX;
        targetY = e.clientY;
    });
    
    // Touch move event for mobile
    hero.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            targetX = e.touches[0].clientX;
            targetY = e.touches[0].clientY;
            
            // Prevent scrolling
            e.preventDefault();
        }
    });
    
    // Start animation
    updateSpotlight();
}

// Project Card 3D Tilt Effect using VanillaTilt.js
function initProjectCardTilt() {
    const projectCards = document.querySelectorAll('.project-card');
    const skillCards = document.querySelectorAll('.skill-card');
    const blogCards = document.querySelectorAll('.blog-card');
    
    // Configure VanillaTilt for project cards
    if (projectCards.length > 0) {
        VanillaTilt.init(projectCards, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            scale: 1.05,
            perspective: 1000,
            transition: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            gyroscope: true,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45,
            gyroscopeMinAngleY: -45,
            gyroscopeMaxAngleY: 45
        });
    }
    
    // Configure VanillaTilt for skill cards
    if (skillCards.length > 0) {
        VanillaTilt.init(skillCards, {
            max: 10,
            speed: 400,
            glare: false,
            scale: 1.03,
            perspective: 1000
        });
    }
    
    // Configure VanillaTilt for blog cards
    if (blogCards.length > 0) {
        VanillaTilt.init(blogCards, {
            max: 8,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.02,
            perspective: 1000
        });
    }
    
    // Add event listeners to enhance image zoom effect on hover
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const image = this.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const image = this.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });
}

// Hero Section Parallax Effect
function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroTagline = document.querySelector('.hero-tagline');
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('.subtitle');
    const heroDescription = document.querySelector('.description');
    const ctaButtons = document.querySelector('.cta-buttons');
    
    if (!hero) return;
    
    // Create parallax layers
    const parallaxLayers = [];
    
    // Add floating elements to hero
    for (let i = 0; i < 5; i++) {
        const floatingElement = document.createElement('div');
        floatingElement.classList.add('floating-element');
        
        // Randomize size
        const size = Math.random() * 60 + 40;
        floatingElement.style.width = `${size}px`;
        floatingElement.style.height = `${size}px`;
        
        // Randomize position
        floatingElement.style.left = `${Math.random() * 100}%`;
        floatingElement.style.top = `${Math.random() * 100}%`;
        
        // Randomize opacity
        floatingElement.style.opacity = Math.random() * 0.15 + 0.05;
        
        // Add to hero
        hero.appendChild(floatingElement);
        
        // Add to parallax layers
        parallaxLayers.push({
            element: floatingElement,
            speedX: (Math.random() * 0.08 + 0.02) * (Math.random() > 0.5 ? 1 : -1),
            speedY: (Math.random() * 0.08 + 0.02) * (Math.random() > 0.5 ? 1 : -1),
            baseX: parseFloat(floatingElement.style.left),
            baseY: parseFloat(floatingElement.style.top)
        });
    }
    
    // Add content elements to parallax layers with subtle effect
    if (heroTagline) parallaxLayers.push({ element: heroTagline, speedX: -0.02, speedY: -0.01 });
    if (heroTitle) parallaxLayers.push({ element: heroTitle, speedX: -0.015, speedY: -0.007 });
    if (heroSubtitle) parallaxLayers.push({ element: heroSubtitle, speedX: -0.01, speedY: -0.005 });
    if (heroDescription) parallaxLayers.push({ element: heroDescription, speedX: -0.005, speedY: -0.003 });
    if (ctaButtons) parallaxLayers.push({ element: ctaButtons, speedX: -0.003, speedY: -0.002 });
    
    // Mouse move event for parallax effect
    hero.addEventListener('mousemove', (e) => {
        // Get mouse position relative to hero
        const rect = hero.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width;
        const mouseY = (e.clientY - rect.top) / rect.height;
        
        // Update parallax layers
        parallaxLayers.forEach(layer => {
            if (!layer.baseX && layer.element !== heroTagline && 
                layer.element !== heroTitle && 
                layer.element !== heroSubtitle && 
                layer.element !== heroDescription && 
                layer.element !== ctaButtons) {
                // For floating elements
                const translateX = (mouseX - 0.5) * 100 * layer.speedX;
                const translateY = (mouseY - 0.5) * 100 * layer.speedY;
                layer.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
            } else {
                // For content elements
                const translateX = (mouseX - 0.5) * 30 * layer.speedX;
                const translateY = (mouseY - 0.5) * 30 * layer.speedY;
                layer.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
            }
        });
    });
}

// Mouse Trail Effect
function initMouseTrail() {
    const body = document.body;
    const trailCount = 15;
    const trails = [];
    
    // Create trail elements
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.classList.add('mouse-trail');
        trail.style.opacity = (1 - i / trailCount) * 0.4;
        trail.style.width = trail.style.height = `${8 - (i / trailCount) * 6}px`;
        
        // Add to body
        body.appendChild(trail);
        
        // Add to trails array
        trails.push({
            element: trail,
            x: 0,
            y: 0
        });
    }
    
    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        // Update trail positions with delay
        setTimeout(() => {
            // First trail follows mouse directly
            trails[0].x = e.clientX;
            trails[0].y = e.clientY;
            
            // Other trails follow previous trail
            for (let i = 1; i < trails.length; i++) {
                const prevTrail = trails[i - 1];
                const currentTrail = trails[i];
                
                // Move toward previous trail with easing
                currentTrail.x = prevTrail.x;
                currentTrail.y = prevTrail.y;
                
                // Update position
                currentTrail.element.style.left = `${currentTrail.x}px`;
                currentTrail.element.style.top = `${currentTrail.y}px`;
            }
        }, i * 40);
        
        // Update first trail immediately
        trails[0].element.style.left = `${e.clientX}px`;
        trails[0].element.style.top = `${e.clientY}px`;
    });
}

// Interactive Scroll Indicator
function initScrollIndicator() {
    const scrollDown = document.querySelector('.scroll-down');
    const hero = document.querySelector('.hero');
    
    if (!scrollDown || !hero) return;
    
    // Add hover effect
    scrollDown.addEventListener('mouseenter', () => {
        scrollDown.classList.add('active');
    });
    
    scrollDown.addEventListener('mouseleave', () => {
        scrollDown.classList.remove('active');
    });
    
    // Add click effect
    scrollDown.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add click animation
        scrollDown.classList.add('clicked');
        
        // After animation, scroll to target
        setTimeout(() => {
            const targetId = scrollDown.querySelector('a').getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Remove click animation
            setTimeout(() => {
                scrollDown.classList.remove('clicked');
            }, 600);
        }, 300);
    });
    
    // Hide on scroll past hero
    window.addEventListener('scroll', () => {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        const scrollPos = window.scrollY + window.innerHeight;
        
        if (window.scrollY > 100) {
            scrollDown.classList.add('fade-out');
        } else {
            scrollDown.classList.remove('fade-out');
        }
    });
}

// Morphing Background Effect
function initMorphingBackground() {
    // Create a container for the morphing shapes
    const morphContainer = document.createElement('div');
    morphContainer.className = 'morph-background';
    document.body.appendChild(morphContainer);
    
    // Create a style element for the morph container
    const style = document.createElement('style');
    style.textContent = `
        .morph-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            pointer-events: none;
            overflow: hidden;
        }
        
        .morph-shape {
            position: absolute;
            background: linear-gradient(45deg, rgba(67, 97, 238, 0.1), rgba(58, 12, 163, 0.1));
            border-radius: 50%;
            filter: blur(20px);
            transition: transform 0.5s ease-out, border-radius 0.8s ease-in-out;
        }
    `;
    document.head.appendChild(style);
    
    // Create initial shapes
    for (let i = 0; i < 6; i++) {
        createMorphShape(morphContainer);
    }
    
    // Add event listener for mouse movement
    document.addEventListener('mousemove', (e) => {
        // Calculate mouse position as percentage of screen
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Get all shapes
        const shapes = document.querySelectorAll('.morph-shape');
        
        // Update each shape based on mouse position
        shapes.forEach((shape, index) => {
            // Base shape properties
            let borderRadius = 50; // Default circle
            let rotation = 0;
            
            // Modify shape based on mouse position and shape index
            if (mouseX > 0.5) {
                // Right side of screen - more angular shapes
                borderRadius = `${20 + (index * 10)}% ${60 - (index * 5)}% ${70 - (mouseY * 40)}% ${30 + (mouseY * 30)}%`;
                rotation = mouseX * 60;
            } else {
                // Left side of screen - more rounded shapes
                borderRadius = `${50 + (mouseY * 20)}% ${50 - (mouseY * 20)}% ${50 + (mouseX * 30)}% ${50 - (mouseX * 30)}%`;
                rotation = -mouseX * 60;
            }
            
            // Apply transformations
            shape.style.borderRadius = borderRadius;
            shape.style.transform = `translate(${(mouseX - 0.5) * 10}%, ${(mouseY - 0.5) * 10}%) rotate(${rotation}deg)`;
        });
    });
    
    // Create a new morphing shape
    function createMorphShape(container) {
        const shape = document.createElement('div');
        shape.className = 'morph-shape';
        
        // Random size between 200px and 600px
        const size = Math.random() * 400 + 200;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        
        // Random opacity
        shape.style.opacity = Math.random() * 0.3 + 0.1;
        
        // Add to container
        container.appendChild(shape);
    }
}

// Cursor Bubble Effect for hero section
function initCursorBubbleEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create effect layer
    const effectLayer = document.createElement('div');
    effectLayer.className = 'cursor-effect-layer';
    hero.appendChild(effectLayer);
    
    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let mouseSpeed = 0;
    let isInHero = false;
    
    // Create bubble array to reuse objects
    const bubbles = [];
    const maxBubbles = 15;
    for (let i = 0; i < maxBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        effectLayer.appendChild(bubble);
        bubbles.push({
            element: bubble,
            x: 0,
            y: 0,
            size: 0,
            life: 0,
            maxLife: 0,
            active: false
        });
    }
    
    // Create particles for quick motion
    const particles = [];
    const maxParticles = 20;
    for (let i = 0; i < maxParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        effectLayer.appendChild(particle);
        particles.push({
            element: particle,
            x: 0,
            y: 0,
            size: Math.random() * 3 + 2,
            speedX: 0,
            speedY: 0,
            life: 0,
            maxLife: 0,
            active: false
        });
        
        // Set size
        particle.style.width = `${particles[i].size}px`;
        particle.style.height = `${particles[i].size}px`;
    }
    
    // Mouse enter event
    hero.addEventListener('mouseenter', () => {
        isInHero = true;
    });
    
    // Mouse leave event
    hero.addEventListener('mouseleave', () => {
        isInHero = false;
    });
    
    // Track mouse movement
    hero.addEventListener('mousemove', (e) => {
        // Get mouse position relative to hero
        const rect = hero.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        
        // Calculate mouse speed
        const dx = mouseX - prevMouseX;
        const dy = mouseY - prevMouseY;
        mouseSpeed = Math.sqrt(dx * dx + dy * dy);
        
        // Update previous position
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        
        // Create bubbles periodically based on mouse movement
        if (mouseSpeed > 3) {
            createBubble(mouseX, mouseY, mouseSpeed);
            
            // Create particles for fast movements
            if (mouseSpeed > 10) {
                createParticles(mouseX, mouseY, mouseSpeed);
            }
        }
    });
    
    // Create a bubble at cursor position
    function createBubble(x, y, speed) {
        // Find an inactive bubble
        const bubble = bubbles.find(b => !b.active);
        if (!bubble) return;
        
        // Activate bubble
        bubble.active = true;
        bubble.x = x;
        bubble.y = y;
        bubble.size = Math.min(80, 20 + speed * 2);
        bubble.life = 0;
        bubble.maxLife = 30 + Math.random() * 30;
        
        // Update bubble element
        const element = bubble.element;
        element.style.width = `${bubble.size}px`;
        element.style.height = `${bubble.size}px`;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.opacity = '0.7';
        element.style.transform = 'translate(-50%, -50%) scale(0.5)';
        
        // Trigger reflow to ensure animation works
        void element.offsetWidth;
        
        // Apply animation
        element.style.opacity = '0';
        element.style.transform = 'translate(-50%, -50%) scale(1.2)';
    }
    
    // Create multiple particles at cursor position for fast movements
    function createParticles(x, y, speed) {
        // Number of particles to create based on speed
        const count = Math.min(5, Math.floor(speed / 5));
        
        for (let i = 0; i < count; i++) {
            // Find an inactive particle
            const particle = particles.find(p => !p.active);
            if (!particle) return;
            
            // Activate particle
            particle.active = true;
            particle.x = x;
            particle.y = y;
            particle.speedX = (Math.random() - 0.5) * speed * 0.3;
            particle.speedY = (Math.random() - 0.5) * speed * 0.3;
            particle.life = 0;
            particle.maxLife = 20 + Math.random() * 20;
            
            // Initialize particle appearance
            particle.element.style.opacity = '0.8';
            updateParticlePosition(particle);
        }
    }
    
    // Update particle position
    function updateParticlePosition(particle) {
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
    }
    
    // Animation loop
    function animate() {
        if (isInHero) {
            // Update bubbles
            bubbles.forEach(bubble => {
                if (bubble.active) {
                    bubble.life++;
                    if (bubble.life >= bubble.maxLife) {
                        // Deactivate bubble
                        bubble.active = false;
                    }
                }
            });
            
            // Update particles
            particles.forEach(particle => {
                if (particle.active) {
                    // Update position
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;
                    
                    // Apply drag
                    particle.speedX *= 0.95;
                    particle.speedY *= 0.95;
                    
                    // Update life
                    particle.life++;
                    
                    // Update appearance
                    const opacity = 0.8 * (1 - particle.life / particle.maxLife);
                    particle.element.style.opacity = opacity.toString();
                    updateParticlePosition(particle);
                    
                    if (particle.life >= particle.maxLife) {
                        // Deactivate particle
                        particle.active = false;
                        particle.element.style.opacity = '0';
                    }
                }
            });
        }
        
        requestAnimationFrame(animate);
    }
    
    // Start animation loop
    animate();
}

// Network Nodes Animation
function initNetworkAnimation() {
    // Create container for network animation
    const container = document.createElement('div');
    container.className = 'network-container';
    document.body.appendChild(container);
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.className = 'network-canvas';
    container.appendChild(canvas);
    
    // Get canvas context
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Nodes array
    const nodes = [];
    const nodeCount = 70; // Number of nodes
    const nodeRadius = 3; // Size of nodes
    const nodeColor = 'rgba(67, 97, 238, 0)'; // Making nodes transparent by setting alpha to 0
    const nodeConnectDistance = 150; // Maximum distance to connect nodes
    const lineColor = 'rgba(67, 97, 238, 0.15)'; // Line color
    
    // Mouse position
    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseRadius = 150; // Mouse influence radius
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + nodeRadius,
            speedX: (Math.random() - 0.5) * 0.8,
            speedY: (Math.random() - 0.5) * 0.8,
            lastX: 0,
            lastY: 0,
            hue: Math.random() * 30 + 210, // Blue-ish colors
        });
    }
    
    // Handle resize
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    // Handle mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animation loop
    function animate() {
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Update and draw nodes
        nodes.forEach(node => {
            // Save last position
            node.lastX = node.x;
            node.lastY = node.y;
            
            // Update position
            node.x += node.speedX;
            node.y += node.speedY;
            
            // Mouse influence - attract nodes to cursor
            const dx = mouseX - node.x;
            const dy = mouseY - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouseRadius) {
                const force = (mouseRadius - distance) / mouseRadius;
                node.speedX += dx * force * 0.02;
                node.speedY += dy * force * 0.02;
            }
            
            // Apply speed limits
            const maxSpeed = 2;
            const currentSpeed = Math.sqrt(node.speedX * node.speedX + node.speedY * node.speedY);
            if (currentSpeed > maxSpeed) {
                node.speedX = (node.speedX / currentSpeed) * maxSpeed;
                node.speedY = (node.speedY / currentSpeed) * maxSpeed;
            }
            
            // Bounce off edges
            if (node.x < 0 || node.x > width) {
                node.speedX *= -1;
            }
            if (node.y < 0 || node.y > height) {
                node.speedY *= -1;
            }
            
            // Apply drag
            node.speedX *= 0.98;
            node.speedY *= 0.98;
            
            // Draw node (transparent but still needed for logic)
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = nodeColor;
            ctx.fill();
            
            // Draw connections
            nodes.forEach(otherNode => {
                if (node === otherNode) return;
                
                const dx = otherNode.x - node.x;
                const dy = otherNode.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < nodeConnectDistance) {
                    // Calculate opacity based on distance
                    const opacity = 1 - (distance / nodeConnectDistance);
                    
                    // Calculate line width based on distance
                    const lineWidth = 1 * opacity;
                    
                    // Calculate color based on mouse proximity
                    const mouseDx = mouseX - ((node.x + otherNode.x) / 2);
                    const mouseDy = mouseY - ((node.y + otherNode.y) / 2);
                    const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
                    const isNearMouse = mouseDistance < mouseRadius;
                    
                    // Draw line
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    
                    if (isNearMouse) {
                        // Use a brighter color for lines near the mouse
                        ctx.strokeStyle = `rgba(67, 97, 238, ${opacity * 0.6})`;
                        ctx.lineWidth = lineWidth * 1.5;
                    } else {
                        ctx.strokeStyle = `rgba(67, 97, 238, ${opacity * 0.2})`;
                        ctx.lineWidth = lineWidth;
                    }
                    
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
}

// Initialize Skills Chart
function initSkillsChart(type = 'radar') {
    const chartElement = document.getElementById('skillsChart');
    
    if (!chartElement) return;
    
    // Destroy existing chart if it exists
    if (currentChart) {
        currentChart.destroy();
    }
    
    // Determine if dark theme is active
    const isDarkTheme = document.body.classList.contains('dark-theme');
    
    // Set theme-specific colors
    const gridColor = isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const textColor = isDarkTheme ? '#d1d5db' : '#4b5563';
    
    // Enhanced color palette for radar chart
    const primaryColor = 'rgba(67, 97, 238, 1)';
    const secondaryColor = 'rgba(247, 37, 133, 1)';
    const tertiaryColor = 'rgba(58, 12, 163, 1)';
    
    // Common data for both chart types with skill categories
    const labels = [
        'Python', 
        'JavaScript/HTML/CSS',
        'Data Analysis',
        'Machine Learning',
        'Database/SQL',
        'Visualization',
        'Problem Solving',
        'Communication'
    ];
    
    const data = [92, 78, 88, 82, 84, 86, 90, 87];
    
    // Configuration based on chart type
    if (type === 'radar') {
        // Data for the enhanced radar chart
        const skillsData = {
            labels: labels,
            datasets: [{
                label: 'Skill Level',
                data: data,
                backgroundColor: isDarkTheme ? 'rgba(67, 97, 238, 0.4)' : 'rgba(67, 97, 238, 0.3)',
                borderColor: primaryColor,
                borderWidth: 2,
                pointBackgroundColor: [
                    primaryColor,
                    secondaryColor,
                    tertiaryColor,
                    primaryColor,
                    secondaryColor,
                    tertiaryColor,
                    primaryColor,
                    secondaryColor
                ],
                pointBorderColor: isDarkTheme ? '#121212' : '#fff',
                pointHoverBackgroundColor: isDarkTheme ? '#121212' : '#fff',
                pointHoverBorderColor: 'rgba(67, 97, 238, 1)',
                pointRadius: 6,
                pointHoverRadius: 8,
                pointStyle: 'circle',
                borderJoinStyle: 'round'
            }]
        };
        
        // Enhanced chart configuration
        const config = {
            type: 'radar',
            data: skillsData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            color: gridColor,
                            lineWidth: 1.5
                        },
                        grid: {
                            color: gridColor,
                            circular: true
                        },
                        pointLabels: {
                            font: {
                                size: 14,
                                family: "'Poppins', sans-serif",
                                weight: '600'
                            },
                            color: textColor,
                            padding: 10
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: {
                            stepSize: 20,
                            callback: function(value) {
                                return value + '%';
                            },
                            color: textColor,
                            backdropColor: 'transparent'
                        },
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: isDarkTheme ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.95)',
                        titleColor: isDarkTheme ? '#fff' : '#333',
                        bodyColor: isDarkTheme ? '#fff' : '#333',
                        titleFont: {
                            size: 14,
                            family: "'Poppins', sans-serif",
                            weight: '600'
                        },
                        bodyFont: {
                            size: 13,
                            family: "'Poppins', sans-serif"
                        },
                        padding: 12,
                        boxPadding: 8,
                        cornerRadius: 8,
                        displayColors: true,
                        borderColor: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        borderWidth: 1,
                        callbacks: {
                            title: function(tooltipItems) {
                                return tooltipItems[0].label;
                            },
                            label: function(context) {
                                return `Proficiency: ${context.raw}%`;
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutElastic',
                    delay: function(context) {
                        return context.dataIndex * 100;
                    }
                },
                elements: {
                    line: {
                        tension: 0.3,
                        fill: true
                    }
                },
                transitions: {
                    active: {
                        animation: {
                            duration: 400
                        }
                    }
                }
            }
        };
        
        // Create the chart with animation
        currentChart = new Chart(chartElement, config);
    } else if (type === 'bar') {
        // Data for the enhanced bar chart
        const skillsData = {
            labels: labels,
            datasets: [{
                label: 'Skill Level',
                data: data,
                backgroundColor: [
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(247, 37, 133, 0.7)',
                    'rgba(58, 12, 163, 0.7)',
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(247, 37, 133, 0.7)',
                    'rgba(58, 12, 163, 0.7)',
                    'rgba(67, 97, 238, 0.7)',
                    'rgba(247, 37, 133, 0.7)'
                ],
                borderColor: [
                    primaryColor,
                    secondaryColor,
                    tertiaryColor,
                    primaryColor,
                    secondaryColor,
                    tertiaryColor,
                    primaryColor,
                    secondaryColor
                ],
                borderWidth: 2,
                borderRadius: 8,
                hoverBorderWidth: 3,
                hoverBorderColor: isDarkTheme ? '#fff' : '#000'
            }]
        };
        
        // Enhanced bar chart configuration
        const config = {
            type: 'bar',
            data: skillsData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: gridColor,
                            borderDash: [3, 3]
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: {
                                family: "'Poppins', sans-serif",
                                weight: '500'
                            },
                            color: textColor,
                            padding: 10
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: "'Poppins', sans-serif",
                                weight: '600'
                            },
                            color: textColor,
                            padding: 8
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: isDarkTheme ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.95)',
                        titleColor: isDarkTheme ? '#fff' : '#333',
                        bodyColor: isDarkTheme ? '#fff' : '#333',
                        titleFont: {
                            size: 14,
                            family: "'Poppins', sans-serif",
                            weight: '600'
                        },
                        bodyFont: {
                            size: 13,
                            family: "'Poppins', sans-serif"
                        },
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: true,
                        borderColor: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        borderWidth: 1,
                        callbacks: {
                            title: function(tooltipItems) {
                                return tooltipItems[0].label;
                            },
                            label: function(context) {
                                return `Proficiency: ${context.raw}%`;
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    delay: function(context) {
                        return context.dataIndex * 150;
                    },
                    easing: 'easeOutQuart'
                },
                layout: {
                    padding: {
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    }
                },
                barPercentage: 0.8,
                categoryPercentage: 0.8
            }
        };
        
        // Create the enhanced chart
        currentChart = new Chart(chartElement, config);
    }
}

// Initialize charts and toggle buttons
function initChartToggleButtons() {
    const radarBtn = document.getElementById('radarChartBtn');
    const barBtn = document.getElementById('barChartBtn');
    
    if (!radarBtn || !barBtn) return;
    
    radarBtn.addEventListener('click', () => {
        radarBtn.classList.add('active');
        barBtn.classList.remove('active');
        initSkillsChart('radar');
    });
    
    barBtn.addEventListener('click', () => {
        barBtn.classList.add('active');
        radarBtn.classList.remove('active');
        initSkillsChart('bar');
    });
}

// Role text animation
function initRoleTextAnimation() {
    // Create a role text element if it doesn't exist already
    if (!document.getElementById('role-text')) {
        const roleTextContainer = document.createElement('p');
        roleTextContainer.id = 'role-text';
        roleTextContainer.className = 'role-text';
        roleTextContainer.innerHTML = "I'm a <span id='changing-role'>Data Science Enthusiast</span>";
        
        // Insert after the subtitle and before the description
        const subtitle = document.querySelector('.subtitle');
        const description = document.querySelector('.description');
        
        if (subtitle && description && subtitle.parentNode) {
            subtitle.parentNode.insertBefore(roleTextContainer, description);
        }
    }
    
    // Array of roles to cycle through
    const roles = [
        "Data Science Enthusiast",
        "Web Developer",
        "Computer Science Engineering",
        "Backend Developer",
        "AI Explorer"
    ];
    
    let currentRoleIndex = 0;
    const changingRoleElement = document.getElementById('changing-role');
    
    // Function to change text with typing effect
    function typeWriter(text, i, callback) {
        if (i < text.length) {
            changingRoleElement.innerHTML = text.substring(0, i+1) + '<span class="typing-cursor">|</span>';
            // Adjust typing speed for a more natural effect - slightly random
            const typeSpeed = Math.random() * 30 + 70; // 70-100ms between characters
            setTimeout(function() {
                typeWriter(text, i + 1, callback);
            }, typeSpeed);
        } else {
            // Remove cursor and callback after typing
            changingRoleElement.innerHTML = text;
            if (callback) {
                // Pause longer when fully typed to make it readable
                setTimeout(callback, 2000); // 2 seconds display time
            }
        }
    }
    
    // Function to erase text
    function eraseText(callback) {
        const currentText = changingRoleElement.innerText;
        if (currentText.length > 0) {
            changingRoleElement.innerHTML = currentText.substring(0, currentText.length - 1) + '<span class="typing-cursor">|</span>';
            // Erasing is typically faster than typing
            const eraseSpeed = Math.random() * 20 + 30; // 30-50ms between character removal
            setTimeout(function() {
                eraseText(callback);
            }, eraseSpeed);
        } else {
            changingRoleElement.innerHTML = '';
            if (callback) {
                // Short pause before typing next role
                setTimeout(callback, 500);
            }
        }
    }
    
    // Start the animation cycle
    function animateRole() {
        // Type current role
        typeWriter(roles[currentRoleIndex], 0, function() {
            // Erase after display time
            setTimeout(function() {
                eraseText(function() {
                    // Move to next role
                    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                    // Continue the cycle with a slight pause between roles
                    setTimeout(animateRole, 500);
                });
            }, 2000); // Display time for completed text
        });
    }
    
    // Start the animation after a short delay to ensure the DOM is ready
    setTimeout(animateRole, 2500); // Initial delay after page load
}

// Footer Starfield Animation
function initFooterStarfield() {
    const canvas = document.getElementById('footerStarfield');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    // Star properties
    const stars = [];
    const starCount = 150; // Number of stars
    const maxStarSize = 3; // Maximum star size
    
    // Create stars with random properties
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * maxStarSize + 0.5,
            opacity: Math.random() * 0.8 + 0.2, // Base opacity
            twinkleSpeed: Math.random() * 0.02 + 0.01,
            twinkleDirection: Math.random() > 0.5 ? 1 : -1,
            color: getStarColor(),
        });
    }
    
    // Get a random star color (white to blue-ish)
    function getStarColor() {
        const blueIntensity = Math.floor(Math.random() * 50); // 0-50 blue intensity
        return `rgb(255, 255, ${205 + blueIntensity})`;
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        
        // Redistribute stars on resize
        stars.forEach(star => {
            star.x = Math.random() * width;
            star.y = Math.random() * height;
        });
    });
    
    // Animation function
    function animate() {
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Set black background
        ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // Transparent to let footer background show through
        ctx.fillRect(0, 0, width, height);
        
        // Draw and update stars
        stars.forEach(star => {
            // Update star twinkle
            star.opacity += star.twinkleSpeed * star.twinkleDirection;
            
            // Reverse direction if reaching opacity limits
            if (star.opacity <= 0.2 || star.opacity >= 1) {
                star.twinkleDirection *= -1;
            }
            
            // Draw star (circle with glow effect)
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.globalAlpha = star.opacity;
            ctx.fill();
            
            // Add glow effect
            const glow = ctx.createRadialGradient(
                star.x, star.y, 0,
                star.x, star.y, star.size * 2
            );
            glow.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
            glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();
            
            // Reset opacity for next drawing
            ctx.globalAlpha = 1;
            
            // Occasionally add a shooting star
            if (Math.random() < 0.0003) { // Very rare occurrence
                createShootingStar();
            }
        });
        
        // Request next frame
        requestAnimationFrame(animate);
    }
    
    // Create a shooting star
    function createShootingStar() {
        const shootingStar = {
            x: Math.random() * width,
            y: 0,
            length: Math.random() * 80 + 40,
            speed: Math.random() * 15 + 10,
            angle: Math.PI / 4 + (Math.random() * Math.PI / 4), // Angle between PI/4 and PI/2
            life: 0,
            maxLife: 50
        };
        
        // Animation function for shooting star
        function animateShootingStar() {
            if (shootingStar.life >= shootingStar.maxLife) return;
            
            // Update position
            shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
            shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
            
            // Calculate tail start
            const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
            const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;
            
            // Draw shooting star
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(shootingStar.x, shootingStar.y);
            
            // Gradient for tail
            const gradient = ctx.createLinearGradient(
                tailX, tailY,
                shootingStar.x, shootingStar.y
            );
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.8)');
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Update life
            shootingStar.life++;
            
            // Continue animation until maxLife is reached
            if (shootingStar.life < shootingStar.maxLife) {
                requestAnimationFrame(animateShootingStar);
            }
        }
        
        // Start shooting star animation
        animateShootingStar();
    }
    
    // Start the animation
    animate();
}

// Theme Switcher Implementation
function initThemeSwitch() {
    const themeToggleBtn = document.getElementById('themeToggle');
    if (!themeToggleBtn) return;
    
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    // Apply theme based on saved preference or OS preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', () => {
        // Toggle dark-theme class on body
        document.body.classList.toggle('dark-theme');
        
        // Save preference to localStorage
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            
            // Add a small animation effect
            themeToggleBtn.classList.add('theme-toggle-animation');
            setTimeout(() => {
                themeToggleBtn.classList.remove('theme-toggle-animation');
            }, 300);
        } else {
            localStorage.setItem('theme', 'light');
            
            // Add a small animation effect
            themeToggleBtn.classList.add('theme-toggle-animation');
            setTimeout(() => {
                themeToggleBtn.classList.remove('theme-toggle-animation');
            }, 300);
        }
        
        // Optional: Update charts if they exist
        if (currentChart) {
            // Reinitialize charts with new theme colors
            const chartType = document.querySelector('.chart-toggle-btn.active').id === 'radarChartBtn' ? 'radar' : 'bar';
            initSkillsChart(chartType);
        }
    });
    
    // Listen for OS theme preference change
    prefersDarkScheme.addEventListener('change', (event) => {
        // Only update if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            if (event.matches) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
            
            // Optional: Update charts if they exist
            if (currentChart) {
                // Reinitialize charts with new theme colors
                const chartType = document.querySelector('.chart-toggle-btn.active').id === 'radarChartBtn' ? 'radar' : 'bar';
                initSkillsChart(chartType);
            }
        }
    });
}

// Initialize Parallax Scrolling with Rellax.js
function initParallaxScrolling() {
    rellax = new Rellax('.rellax', {
        speed: -2,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    
    // Refresh parallax on window resize for better responsiveness
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (rellax) {
                rellax.refresh();
            }
        }, 250);
    });
    
    // Refresh on scroll to ensure smooth parallax effect
    window.addEventListener('scroll', () => {
        if (rellax && window.scrollY === 0) {
            // Special handling for top of page
            rellax.refresh();
        }
    });
    
    // Refresh on theme change
    document.getElementById('themeToggle').addEventListener('click', () => {
        setTimeout(() => {
            if (rellax) {
                rellax.refresh();
            }
        }, 300);
    });
}

// Function to initialize floating icons interaction
function initFloatingIcons() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    // Skip if no floating icons found
    if (!floatingIcons.length) return;
    
    // Add subtle movement to floating icons on mouse move
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingIcons.forEach(icon => {
            // Calculate distance from center
            const centerX = 0.5;
            const centerY = 0.5;
            const distX = mouseX - centerX;
            const distY = mouseY - centerY;
            
            // Apply subtle movement to each icon with different intensity based on class
            const intensity = icon.classList.contains('float-1') ? 15 : 
                             icon.classList.contains('float-2') ? 10 : 5;
            
            // Get current transform
            const currentTransform = window.getComputedStyle(icon).transform;
            
            // If it's in 'none' state (no transform), just apply movement
            if (currentTransform === 'none') {
                icon.style.transform = `translate(${distX * intensity}px, ${distY * intensity}px)`;
            } else {
                // Otherwise, don't override the animation, just add a small additional movement
                icon.style.transformOrigin = 'center';
                icon.style.transform = `${currentTransform} translate(${distX * intensity/2}px, ${distY * intensity/2}px)`;
            }
        });
    });
    
    // Randomly change the color of icons occasionally
    setInterval(() => {
        const randomIcon = floatingIcons[Math.floor(Math.random() * floatingIcons.length)];
        const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        randomIcon.style.transition = 'color 1.5s ease';
        randomIcon.style.color = randomColor;
    }, 5000);
}

// Function to initialize staggered tech logo floating animations
function initStaggeredTechLogos() {
    const techLogos = document.querySelectorAll('.tech-logo');
    
    if (!techLogos.length) return;
    
    // Apply different animation delays to each logo for a staggered effect
    techLogos.forEach((logo, index) => {
        // Stagger the animation start between 0 and 2 seconds
        const delay = (index * 0.2) % 2;
        logo.style.animationDelay = `${delay}s`;
        
        // Add hover effects with interaction
        logo.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
    
    // Add scroll-based animation - logos slow down when scrolling
    let lastScrollY = window.scrollY;
    let scrollDirection = 0; // 0: none, 1: down, -1: up
    
    window.addEventListener('scroll', () => {
        // Detect scroll direction
        const currentScrollY = window.scrollY;
        scrollDirection = currentScrollY > lastScrollY ? 1 : -1;
        lastScrollY = currentScrollY;
        
        // Only affect logos if they're in viewport
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;
        
        const rect = skillsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isInView) {
            techLogos.forEach(logo => {
                // Slow down animation when scrolling down, speed up when scrolling up
                const playbackRate = scrollDirection > 0 ? 0.5 : 1.5;
                logo.style.animationDuration = `${scrollDirection > 0 ? 6 : 3}s`;
            });
        }
    }, { passive: true });
}

// Initialize VanillaTilt for profile image
function initProfileTilt() {
    const profileElement = document.querySelector('.profile-image.js-tilt');
    if (profileElement) {
        VanillaTilt.init(profileElement, {
            max: 5, // Reduced tilt for stability
            speed: 300, // Slower speed
            glare: false, // Remove glare effect
            scale: 1.02, // Reduced scale effect
            perspective: 1000, // Increased perspective
            transition: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            reset: true,
            gyroscope: false // Disable gyroscope to prevent mobile glitching
        });
    }
}

// Initialize the coding screen animation
function initCodingScreenAnimation() {
    const codingIcon = document.querySelector('.coding-icon');
    const codingLines = document.querySelectorAll('.coding-line');
    
    if (!codingIcon) return;

    // Add mousemove event for 3D effect
    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth < 992) return; // Skip on small screens
        
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        codingIcon.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(20px)`;
    });
    
    // Reset transform on mouse leave
    codingIcon.addEventListener('mouseleave', function() {
        codingIcon.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
    });
    
    // Add periodic animation to simulate typing
    function animateTyping() {
        // Randomly select a line to animate
        const randomLine = Math.floor(Math.random() * codingLines.length);
        const lineWidth = parseInt(window.getComputedStyle(codingLines[randomLine]).width);
        
        // Create typing animation
        let width = 0;
        const typing = setInterval(() => {
            width += Math.floor(Math.random() * 10) + 5;
            if (width >= lineWidth) {
                clearInterval(typing);
            } else {
                // Move cursor to give typing effect
                const cursor = document.querySelector('.coding-cursor');
                if (cursor) {
                    cursor.style.left = `${width}px`;
                    cursor.style.top = `${codingLines[randomLine].offsetTop + 5}px`;
                }
            }
        }, 100);
    }
    
    // Run typing animation periodically
    setInterval(animateTyping, 5000);
}

// Initialize AjayBot Assistant
function initAjayBotAssistant() {
    const ajaybotIcon = document.getElementById('ajaybotIcon');
    const ajaybotClose = document.getElementById('ajaybotClose');
    const ajaybotChat = document.querySelector('.ajaybot-chat');
    const ajaybotInput = document.getElementById('ajaybotInput');
    const ajaybotSend = document.getElementById('ajaybotSend');
    const ajaybotMessages = document.getElementById('ajaybotMessages');
    const ajaybotTyping = document.querySelector('.ajaybot-typing');
    
    if (!ajaybotIcon || !ajaybotChat) return;
    
    // Toggle chat window
    ajaybotIcon.addEventListener('click', () => {
        ajaybotChat.classList.add('active');
        ajaybotMessages.scrollTop = ajaybotMessages.scrollHeight;
    });
    
    // Close chat window
    ajaybotClose.addEventListener('click', () => {
        ajaybotChat.classList.remove('active');
    });
    
    // Send message on button click
    ajaybotSend.addEventListener('click', () => {
        sendMessage();
    });
    
    // Send message on Enter key press
    ajaybotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Function to add a message to the chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        if (isUser) {
            messageDiv.classList.add('user');
        } else {
            messageDiv.classList.add('bot');
        }
        
        const messagePara = document.createElement('p');
        messagePara.textContent = text;
        
        messageDiv.appendChild(messagePara);
        ajaybotMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        ajaybotMessages.scrollTop = ajaybotMessages.scrollHeight;
    }
    
    // Show typing indicator
    function showTyping() {
        ajaybotTyping.classList.remove('hidden');
        ajaybotMessages.scrollTop = ajaybotMessages.scrollHeight;
    }
    
    // Hide typing indicator
    function hideTyping() {
        ajaybotTyping.classList.add('hidden');
    }
    
    // Generate a bot response based on user input
    function getBotResponse(userInput) {
        userInput = userInput.toLowerCase();
        
        // Simple keyword matching for responses
        if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('hey')) {
            return "Hello! I'm AjayBot. Feel free to ask me about Ajay's skills, projects, or background!";
        }
        else if (userInput.includes('name')) {
            return "My creator's name is Padida Ajay, a Computer Science student with a passion for data analysis and visualization.";
        }
        else if (userInput.includes('skills') || userInput.includes('good at')) {
            return "Ajay is skilled in Python programming, data analysis & visualization, machine learning, database management, and web development. He's especially good with Python, Pandas, NumPy, and data visualization libraries.";
        }
        else if (userInput.includes('project') || userInput.includes('work')) {
            return "Ajay has worked on several exciting projects including COVID-19 data analysis, Email Spam Detection, and Unemployment Analysis. He uses data visualization to extract meaningful insights from complex datasets.";
        }
        else if (userInput.includes('education') || userInput.includes('study') || userInput.includes('college') || userInput.includes('university')) {
            return "Ajay is pursuing a B.Tech in Computer Science Engineering at Teegala Krishna Reddy College in Hyderabad (2022-2026). Before that, he studied at Sri Chaithanya Junior College.";
        }
        else if (userInput.includes('contact') || userInput.includes('email') || userInput.includes('phone')) {
            return "You can reach Ajay at ajaypadida7@gmail.com or by phone at 8919832684. He's also on LinkedIn and GitHub!";
        }
        else if (userInput.includes('experience') || userInput.includes('job') || userInput.includes('work') || userInput.includes('intern')) {
            return "Ajay has experience as a Data Science Intern at OASIS INFOBYTE and will be joining Micro IT for a Software Developer Internship focusing on Web Development.";
        }
        else if (userInput.includes('hobby') || userInput.includes('interest') || userInput.includes('like')) {
            return "Ajay enjoys traveling and exploring new technologies. He's particularly interested in data science and web development.";
        }
        else if (userInput.includes('language')) {
            return "Ajay speaks Telugu and English fluently.";
        }
        else if (userInput.includes('thank')) {
            return "You're welcome! Feel free to ask anything else about Ajay!";
        }
        else if (userInput.includes('who are you') || userInput.includes('what are you')) {
            return "I'm AjayBot, a virtual assistant created to provide information about Padida Ajay. I'm not a real AI, just a simulated chatbot with pre-programmed responses!";
        }
        else {
            return "I'm still learning about Ajay! Try asking about his skills, education, projects, or experience.";
        }
    }
    
    // Send message function
    function sendMessage() {
        const userMessage = ajaybotInput.value.trim();
        
        if (userMessage === '') return;
        
        // Add user message
        addMessage(userMessage, true);
        
        // Clear input
        ajaybotInput.value = '';
        
        // Show typing indicator
        showTyping();
        
        // Simulate bot thinking time
        setTimeout(() => {
            // Hide typing indicator
            hideTyping();
            
            // Get and add bot response
            const botResponse = getBotResponse(userMessage);
            addMessage(botResponse);
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }
    
    // Automatically open the chat after a delay
    setTimeout(() => {
        if (!ajaybotChat.classList.contains('active')) {
            ajaybotIcon.classList.add('attention');
        }
    }, 15000); // 15 seconds delay
}

// Initialize Particles.js
function initParticlesJS() {
    if (typeof particlesJS === 'undefined' || !document.getElementById('particles-js')) return;

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4361ee",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    
    // Adjust for dark/light mode
    const updateParticlesColor = () => {
        if (document.body.classList.contains('dark-theme')) {
            window.pJSDom[0].pJS.particles.array.forEach(p => {
                p.color.value = "#ffffff";
                p.color.rgb = {r: 255, g: 255, b: 255};
            });
            window.pJSDom[0].pJS.particles.line_linked.color = "#ffffff";
            window.pJSDom[0].pJS.particles.line_linked.color_rgb_line = {r: 255, g: 255, b: 255};
        } else {
            window.pJSDom[0].pJS.particles.array.forEach(p => {
                p.color.value = "#4361ee";
                p.color.rgb = {r: 67, g: 97, b: 238};
            });
            window.pJSDom[0].pJS.particles.line_linked.color = "#4361ee";
            window.pJSDom[0].pJS.particles.line_linked.color_rgb_line = {r: 67, g: 97, b: 238};
        }
    };

    // Hook into theme toggle if available
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const originalClick = themeToggle.onclick;
        themeToggle.onclick = function(e) {
            if (originalClick) originalClick.call(this, e);
            setTimeout(updateParticlesColor, 100);
        };
    }
}

// Initialize Quote of the Day
function initQuoteOfTheDay() {
    // Array of inspirational quotes as fallback
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
        { text: "It's not a bug – it's an undocumented feature.", author: "Anonymous" },
        { text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
        { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { text: "If you think good design is expensive, you should look at the cost of bad design.", author: "Ralf Speth" },
        { text: "Knowledge is power.", author: "Francis Bacon" },
        { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }
    ];

    // Find the quote container (it should already exist in the HTML)
    let quoteContainer = document.querySelector('.quote-of-day');
    
    if (!quoteContainer) {
        console.log("Quote container not found, creating a new one");
        
        // Create the quote container
        quoteContainer = document.createElement('div');
        quoteContainer.className = 'quote-of-day';
        
        // Create quote text element
        const quoteText = document.createElement('p');
        quoteText.className = 'quote-text';
        quoteContainer.appendChild(quoteText);
        
        // Create quote author element
        const quoteAuthor = document.createElement('p');
        quoteAuthor.className = 'quote-author';
        quoteContainer.appendChild(quoteAuthor);
        
        // Add container to the page - insert after hero section
        const heroSection = document.querySelector('#home');
        if (heroSection) {
            console.log("Found hero section, inserting quote after it");
            // Insert after the hero section
            if (heroSection.nextElementSibling) {
                heroSection.parentNode.insertBefore(quoteContainer, heroSection.nextElementSibling);
            } else {
                heroSection.parentNode.appendChild(quoteContainer);
            }
        } else {
            console.log("Hero section not found, adding to body");
            // If hero section not found, add to body
            document.body.appendChild(quoteContainer);
        }
    } else {
        console.log("Quote container already exists in the HTML, using it");
    }
    
    // Function to display a quote with animation
    function displayQuote(quote) {
        console.log("Displaying quote:", quote);
        
        const quoteText = quoteContainer.querySelector('.quote-text');
        const quoteAuthor = quoteContainer.querySelector('.quote-author');
        
        if (!quoteText || !quoteAuthor) {
            console.error("Quote elements not found");
            return;
        }
        
        // Add quote with fade-in animation
        quoteContainer.style.opacity = '0';
        quoteContainer.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            quoteText.innerHTML = `"${quote.text}"`;
            quoteAuthor.innerHTML = `— ${quote.author}`;
            
            quoteContainer.style.opacity = '1';
            quoteContainer.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Try to fetch a quote from an API first
    try {
        console.log("Attempting to fetch quote from API");
        
        fetch('https://api.quotable.io/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log("API quote received:", data);
                displayQuote({
                    text: data.content,
                    author: data.author
                });
            })
            .catch(error => {
                console.error('API fetch error:', error);
                // Use fallback quotes array if API fails
                const randomIndex = Math.floor(Math.random() * quotes.length);
                console.log("Using fallback quote at index:", randomIndex);
                displayQuote(quotes[randomIndex]);
            });
    } catch (error) {
        console.error('Error in fetch operation:', error);
        // Use fallback quotes array if there's an error in the try block
        const randomIndex = Math.floor(Math.random() * quotes.length);
        console.log("Using fallback quote due to error");
        displayQuote(quotes[randomIndex]);
    }
    
    // Add hover effect to the quote
    quoteContainer.addEventListener('mouseenter', () => {
        quoteContainer.classList.add('quote-hover');
    });
    
    quoteContainer.addEventListener('mouseleave', () => {
        quoteContainer.classList.remove('quote-hover');
    });
}

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Initialize Rellax.js
    const rellax = new Rellax('.rellax', {
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

    // Initialize interactive effects
    initInteractiveBackground();
    initHeroSpotlight();
    initProjectCardTilt();
    initHeroParallax();
    initMouseTrail();
    initScrollIndicator();
    initCursorBubbleEffect();
    initNetworkAnimation();
    initSkillsChart();
    initChartToggleButtons();
    initRoleTextAnimation();
    initThemeSwitch();
    initParallaxScrolling();
    initFloatingIcons();
    initStaggeredTechLogos();
    initFooterStarfield();
    initProfileTilt();
    initCodingScreenAnimation();
    initAjayBotAssistant();
    initParticlesJS();
    initAchievementsTimeline();
    
    // Fix navigation visibility - force the navbar to be visible
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (header) {
        // Make sure header is visible
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
        header.style.visibility = 'visible';
    }
    
    // Ensure navigation menu toggle works
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Display mobile menu by default on smaller screens
    const checkMobileNavVisibility = () => {
        if (window.innerWidth <= 768) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    };
    
    // Initial check for visibility
    if (nav) {
        checkMobileNavVisibility();
    }
    
    // Initial check for elements in viewport
    animateSkills();
    
    // Initialize Smart Navigation
    initSmartNavigation();
  }); 
  
// Initialize Animated Achievements Timeline
function initAchievementsTimeline() {
    const timelineContainer = document.querySelector('.animated-timeline');
    if (!timelineContainer) return;
    
    // Animate the timeline when it comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineContainer.classList.add('timeline-animated');
                
                // Animate each block with a delay
                const blocks = timelineContainer.querySelectorAll('.timeline-block');
                blocks.forEach((block, index) => {
                    setTimeout(() => {
                        block.classList.add('animated');
                    }, 300 * (index + 1));
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(timelineContainer);
    
    // Certificate preview lightbox effect
    const certificatePreviews = document.querySelectorAll('.certificate-preview');
    certificatePreviews.forEach(preview => {
        preview.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const overlay = document.createElement('div');
            overlay.className = 'certificate-lightbox';
            
            overlay.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${imgSrc}" alt="Certificate">
                </div>
            `;
            
            document.body.appendChild(overlay);
            
            // Prevent scrolling on body
            document.body.style.overflow = 'hidden';
            
            // Close on click
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay || e.target.className === 'lightbox-close') {
                    document.body.removeChild(overlay);
                    document.body.style.overflow = '';
                }
            });
        });
    });
    
    // Next/Prev navigation for timeline
    const prevBtn = timelineContainer.querySelector('.timeline-nav-button.prev');
    const nextBtn = timelineContainer.querySelector('.timeline-nav-button.next');
    const blocks = timelineContainer.querySelectorAll('.timeline-block');
    
    if (prevBtn && nextBtn && blocks.length) {
        let currentIndex = 0;
        
        // Initialize by showing the first set of blocks and hiding the rest
        updateVisibleBlocks();
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateVisibleBlocks();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < Math.ceil(blocks.length / 4) - 1) {
                currentIndex++;
                updateVisibleBlocks();
            }
        });
        
        function updateVisibleBlocks() {
            blocks.forEach((block, index) => {
                // Show blocks for current page (4 per page)
                if (index >= currentIndex * 4 && index < (currentIndex + 1) * 4) {
                    block.style.display = 'block';
                } else {
                    block.style.display = 'none';
                }
            });
            
            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= Math.ceil(blocks.length / 4) - 1;
        }
    }
}

// Text Animation for Changing Roles
document.addEventListener('DOMContentLoaded', function() {
    const changingText = document.getElementById('changing-role');
    if (!changingText) return;
    
    const roles = [
        'Data Science Enthusiast',
        'Web Developer',
        'AI Explorer',
        'Python Developer'
    ];
    
    let currentIndex = 0;
    
    function updateText() {
        // Fade out
        changingText.style.opacity = '0';
        changingText.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            // Change text
            currentIndex = (currentIndex + 1) % roles.length;
            changingText.textContent = roles[currentIndex];
            
            // Fade in
            changingText.style.opacity = '1';
            changingText.style.transform = 'translateY(0)';
            
            // Schedule next update
            setTimeout(updateText, 3000); // Wait 3 seconds before changing again
        }, 500); // Wait 500ms for fade out effect
    }
    
    // Set initial text
    changingText.textContent = roles[0];
    
    // Add transition styles
    changingText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    changingText.style.opacity = '1';
    
    // Start animation loop after a delay
    setTimeout(updateText, 3000);
}); 