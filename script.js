// GitHub Configuration - Update with your GitHub username
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'; // Replace with your GitHub username

// Navigation functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// CV Download functionality
const downloadCvBtn = document.getElementById('download-cv');

downloadCvBtn.addEventListener('click', () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = 'cv.pdf'; // Update this path to your CV file
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills-content');
if (skillsSection) {
    skillsSection.querySelectorAll('.skill-category').forEach(category => {
        observer.observe(category);
    });
}

// Fetch GitHub Projects
async function fetchGitHubProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (!projectsGrid || GITHUB_USERNAME === 'YOUR_GITHUB_USERNAME') {
        // Show placeholder projects if username not configured
        projectsGrid.innerHTML = `
            <div class="project-card">
                <div class="project-image">
                    <i class="fab fa-github"></i>
                </div>
                <div class="project-content">
                    <h3 class="project-title">Sample Project</h3>
                    <p class="project-description">Update GITHUB_USERNAME in script.js to load your GitHub projects.</p>
                    <div class="project-tech">
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">React</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link" target="_blank">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub repositories');
        }

        const repos = await response.json();
        
        if (repos.length === 0) {
            projectsGrid.innerHTML = `
                <div class="project-card">
                    <div class="project-content">
                        <h3 class="project-title">No Projects Found</h3>
                        <p class="project-description">No public repositories found for this GitHub username.</p>
                    </div>
                </div>
            `;
            return;
        }

        projectsGrid.innerHTML = repos.map(repo => {
            const languages = repo.language || 'Various';
            const description = repo.description || 'No description available.';
            
            return `
                <div class="project-card">
                    <div class="project-image">
                        <i class="fab fa-github"></i>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${repo.name}</h3>
                        <p class="project-description">${description}</p>
                        <div class="project-tech">
                            <span class="tech-tag">${languages}</span>
                            ${repo.stargazers_count > 0 ? `<span class="tech-tag">⭐ ${repo.stargazers_count}</span>` : ''}
                        </div>
                        <div class="project-links">
                            <a href="${repo.html_url}" class="project-link" target="_blank">
                                <i class="fab fa-github"></i> View Code
                            </a>
                            ${repo.homepage ? `
                                <a href="${repo.homepage}" class="project-link" target="_blank">
                                    <i class="fas fa-external-link-alt"></i> Live Demo
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        projectsGrid.innerHTML = `
            <div class="project-card">
                <div class="project-content">
                    <h3 class="project-title">Error Loading Projects</h3>
                    <p class="project-description">Unable to fetch projects from GitHub. Please check your username and try again.</p>
                </div>
            </div>
        `;
    }
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link (you can replace this with a backend service)
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
    
    // Show success message (you can enhance this with a toast notification)
    alert('Thank you for your message! Your email client should open now.');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubProjects();
    
    // Animate elements on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe project cards and achievement cards
    document.querySelectorAll('.project-card, .achievement-card, .education-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(el);
    });
});



