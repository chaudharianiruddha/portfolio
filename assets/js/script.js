'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Navbar links toggle active state and page navigation
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navbarLinks.forEach((link, index) => {
    link.addEventListener("click", function () {
        navbarLinks.forEach(nav => nav.classList.remove("active"));
        pages.forEach(page => page.classList.remove("active"));

        this.classList.add("active");
        pages[index].classList.add("active");
    });
});

// Contact form validation and submission
const form = document.querySelector("form");
const formInputs = document.querySelectorAll("input, textarea");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Thank you for your message!");
            form.reset();
        } else {
            alert("Oops! There was a problem submitting your form");
        }
    });
});

// Modal functionality for portfolio projects
const projectItems = document.querySelectorAll(".project-item");
const modals = document.querySelectorAll(".portfolio-modal-container");

projectItems.forEach((item, index) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        const modal = modals[index];
        modal.classList.add("active");

        const closeButton = modal.querySelector(".portfolio-modal-close-btn");
        closeButton.addEventListener("click", function () {
            modal.classList.remove("active");
        });

        // Close modal when clicking outside
        window.addEventListener("click", function outsideClickListener(event) {
            if (!modal.contains(event.target) && !item.contains(event.target)) {
                modal.classList.remove("active");
                window.removeEventListener("click", outsideClickListener);
            }
        });
    });
});

// Share button functionality
const shareButton = document.getElementById("share-button");
const shareOptions = document.getElementById("share-options");

shareButton.addEventListener("click", function () {
    elementToggleFunc(shareOptions);
});

// Close share options if clicked outside
window.addEventListener("click", function (event) {
    if (!shareButton.contains(event.target) && !shareOptions.contains(event.target)) {
        shareOptions.classList.remove("active");
    }
});

// Scroll effect for home section
window.addEventListener('scroll', function() {
    const homeSection = document.querySelector('.home-section');
    let scrollPos = window.pageYOffset;
    let opacityValue = 1 - (scrollPos / 500);

    homeSection.style.opacity = opacityValue > 0 ? opacityValue : 0;
});

// Navbar hide/show on scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        navbar.style.top = "-60px"; // Hide the navbar on scroll down
    } else {
        navbar.style.top = "0"; // Show the navbar on scroll up
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);
