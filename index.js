document.addEventListener('DOMContentLoaded', () => {
    // Current Year in Footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Scroll Animations using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Magical Angels Observer
    const angelElements = document.querySelectorAll('.magical-angel');
    const angelObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fly-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });
    angelElements.forEach(el => angelObserver.observe(el));

    // Flywheel Animation Observer
    const flywheelSection = document.querySelector('.flywheel');
    if (flywheelSection) {
        const flywheelObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    flywheelSection.classList.add('in-view');
                }
            });
        }, { threshold: 0.5 });
        flywheelObserver.observe(flywheelSection);
    }

    // Flywheel Steps Interactive Logic
    const flywheelSteps = document.querySelectorAll('.step-item');
    if (flywheelSteps.length > 0) {
        flywheelSteps.forEach(step => {
            step.addEventListener('click', () => {
                // Remove active from all
                flywheelSteps.forEach(s => s.classList.remove('active'));
                // Add active to clicked
                step.classList.add('active');
            });
        });
    }

    // Story Tabs
    const storyTabs = document.querySelectorAll('.story-tab');
    const storyContents = document.querySelectorAll('.story-content');
    
    if (storyTabs.length > 0) {
        storyTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                
                // Remove active class from all tabs and contents
                storyTabs.forEach(t => t.classList.remove('active'));
                storyContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                document.getElementById(target).classList.add('active');
            });
        });
    }

    // Form Submissions
    const waitlistForm = document.getElementById('waitlist-form');
    const modalJoinForm = document.getElementById('modal-join-form');
    const toast = document.getElementById('toast');

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            waitlistForm.reset();
            showToast();
        });
    }

    if (modalJoinForm) {
        modalJoinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            modalJoinForm.reset();
            toggleModal('joinModal');
            showToast();
        });
    }
});

// Modal Logic (Global)
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle('active');
        if (modal.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}