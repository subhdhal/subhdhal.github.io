// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function initTheme() {
    const theme = savedTheme === 'light' || (!savedTheme && !prefersDark) ? 'light' : 'dark';
    setTheme(theme);
}

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Theme toggle button handler
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const isLightMode = document.body.classList.contains('light-mode');
        setTheme(isLightMode ? 'dark' : 'light');
    });
}

// Initialize theme
initTheme();

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add active class to current nav link
function setActiveNavLink() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-list a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === '/' || item.getAttribute('href') === 'index.html') {
            if (currentLocation === '/' || currentLocation.endsWith('index.html')) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        } else if (currentLocation.includes(item.getAttribute('href'))) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

setActiveNavLink();

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.post-card, .about-section, .resume-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Prevent theme flash on page load
document.documentElement.style.visibility = 'visible';
