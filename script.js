// Custom Cursor with improved performance
const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.cursor-dot');
let isMoving = false;

// Throttled mousemove handler
function updateCursor(e) {
    if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(() => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            isMoving = false;
        });
    }
}

document.addEventListener('mousemove', updateCursor);

// Enhanced hover effects
document.querySelectorAll('a, button, .hover-effect').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
    });
});

// Navbar Scroll Animation with Progress
const navbar = document.getElementById('navbar');
const progressBar = document.querySelector('.scroll-progress');
let lastScroll = 0;

function updateScroll() {
    const currentScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (currentScroll / height) * 100;
    
    // Update progress bar
    progressBar.style.width = `${scrolled}%`;
    
    // Navbar show/hide logic
    if (currentScroll > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(updateScroll);
});

// Magnetic Effect for Navigation Items
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const bounds = link.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;
        
        const moveX = (mouseX - centerX) * 0.2;
        const moveY = (mouseY - centerY) * 0.2;
        
        link.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = '';
    });
});

// Background Effects
function initializeBackgroundEffects() {
    // Create floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 2}s`;
    });

    // Mouse parallax effect for shapes
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX * speed);
            const y = (mouseY * speed);
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Improved Theme Toggle
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.className = `${savedTheme} scroll-smooth`;
    updateThemeColors(savedTheme);
}

function updateThemeColors(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.style.setProperty('--primary-color', '#4F46E5');
        root.style.setProperty('--secondary-color', '#7C3AED');
        root.style.setProperty('--accent-color', '#EC4899');
        root.style.setProperty('--grid-color', 'rgba(79, 70, 229, 0.1)');
        root.style.setProperty('--gradient-start', 'rgba(15, 23, 42, 0.8)');
        root.style.setProperty('--gradient-mid', 'rgba(30, 41, 59, 0.8)');
        root.style.setProperty('--gradient-end', 'rgba(15, 23, 42, 0.8)');
        
        // Update particles color for dark theme
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.particles.color.value = '#4F46E5';
            window.pJSDom[0].pJS.particles.line_linked.color = '#4F46E5';
        }
    } else {
        root.style.setProperty('--primary-color', '#6366F1');
        root.style.setProperty('--secondary-color', '#8B5CF6');
        root.style.setProperty('--accent-color', '#F472B6');
        root.style.setProperty('--grid-color', 'rgba(99, 102, 241, 0.1)');
        root.style.setProperty('--gradient-start', 'rgba(255, 255, 255, 0.8)');
        root.style.setProperty('--gradient-mid', 'rgba(243, 244, 246, 0.8)');
        root.style.setProperty('--gradient-end', 'rgba(255, 255, 255, 0.8)');
        
        // Update particles color for light theme
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.particles.color.value = '#6366F1';
            window.pJSDom[0].pJS.particles.line_linked.color = '#6366F1';
        }
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.classList.contains('dark') ? 'light' : 'dark';
    
    // Add transition class
    html.classList.add('theme-transition');
    
    // Update theme
    html.className = `${currentTheme} scroll-smooth theme-transition`;
    localStorage.setItem('theme', currentTheme);
    updateThemeColors(currentTheme);
    
    // Remove transition class
    setTimeout(() => {
        html.classList.remove('theme-transition');
    }, 300);
}

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');

    // Animate menu button
    if (mobileMenu.classList.contains('active')) {
        mobileMenuBtn.innerHTML = '<i class="ri-close-line text-2xl nav-icon"></i>';
        mobileMenuBtn.style.transform = 'rotate(90deg)';
    } else {
        mobileMenuBtn.innerHTML = '<i class="ri-menu-line text-2xl nav-icon"></i>';
        mobileMenuBtn.style.transform = 'rotate(0deg)';
    }
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && 
        !e.target.closest('#mobile-menu') && 
        !e.target.closest('#mobile-menu-btn')) {
        toggleMobileMenu();
    }
});

// Enhanced active section highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
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
}

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar mouse move effect
const navbarContainer = document.querySelector('.nav-container');

if (navbarContainer) {
    navbarContainer.addEventListener('mousemove', (e) => {
        const rect = navbarContainer.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / navbarContainer.clientWidth) * 100;
        const y = ((e.clientY - rect.top) / navbarContainer.clientHeight) * 100;
        
        navbarContainer.style.setProperty('--mouse-x', `${x}%`);
        navbarContainer.style.setProperty('--mouse-y', `${y}%`);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeBackgroundEffects();
    
    // Theme toggle event listeners
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('theme-toggle-mobile');
    
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
    
    // Initialize particles with enhanced configuration
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 50, density: { enable: true, value_area: 800 } },
                color: { value: '#4F46E5' },
                shape: { type: 'circle' },
                opacity: { 
                    value: 0.5,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: { 
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4F46E5',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { enable: true, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 200,
                        size: 6,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
});

// Typing Animation with gradient text
const texts = ['Web Developer 💻', 'UI Designer 🎨', 'Problem Solver 🔧', 'Gamer 🎮', 'Music Lover 🎵'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    const holder = document.getElementById('holder');
    if (holder) {
        holder.innerHTML = letter;
        holder.classList.add('typing', 'gradient-text');

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            holder.classList.remove('typing');
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    }
}

// Start animations
window.onload = type;

// Initialize navbar
window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);