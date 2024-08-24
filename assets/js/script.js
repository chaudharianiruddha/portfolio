'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

// Sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Scroll Behavior for Home Page and Navbar
const navbar = document.querySelector('.navbar');
const homePage = document.querySelector('.home-page');
const aboutSection = document.querySelector('.about-section');

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// Initial Navbar and Scroll Setup
document.addEventListener("DOMContentLoaded", function() {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        document.body.classList.add('scrolled');
    }
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
    if (shareOptions.classList.contains("active")) {
        shareOptions.style.display = "block";
    } else {
        shareOptions.style.display = "none";
    }
});

// Close share options if clicked outside
window.addEventListener("click", function (event) {
    if (!shareButton.contains(event.target) && !shareOptions.contains(event.target)) {
        shareOptions.style.display = "none";
        shareOptions.classList.remove("active");
    }
});

// Testimonials modal functionality
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal toggle function
const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// Add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();
    });
}

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
    elementToggleFunc(this);
});

// Add event in all select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}

// Filter functionality
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    }
}

// Add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
}

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        // Check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}

