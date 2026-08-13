// ======================================================
// Khadija Wristwear
// scripts/scripts.js
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const topBtn = document.getElementById("topBtn");

    // ============================================
    // Sticky Navbar Effect
    // ============================================

    function handleNavbar() {
        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleNavbar);
    handleNavbar();

    // ============================================
    // Back To Top Button
    // ============================================

    function toggleTopButton() {

        if (window.scrollY > 350) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    }

    window.addEventListener("scroll", toggleTopButton);
    toggleTopButton();

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // ============================================
    // Smooth Scroll
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    // ============================================
    // Active Navbar Link
    // ============================================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") == "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    // ============================================
    // Fade Up Animation
    // ============================================

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("fade-up");

        observer.observe(section);

    });

    // ============================================
    // Product Hover Animation
    // ============================================

    document.querySelectorAll(".product-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = ".35s";
            card.style.transform = "translateY(-12px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

    // ============================================
    // Hero Floating Animation
    // ============================================

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) {

        let direction = 1;

        setInterval(function () {

            if (direction == 1) {

                heroImage.style.transform = "translateY(-10px)";
                direction = 0;

            } else {

                heroImage.style.transform = "translateY(0px)";
                direction = 1;

            }

        }, 1800);

    }

    // ============================================
    // Image Lightbox
    // ============================================

    const images = document.querySelectorAll("img");

    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.left = "0";
    overlay.style.top = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,.85)";
    overlay.style.display = "none";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "99999";

    const lightboxImg = document.createElement("img");

    lightboxImg.style.maxWidth = "90%";
    lightboxImg.style.maxHeight = "90%";
    lightboxImg.style.borderRadius = "15px";
    lightboxImg.style.boxShadow = "0 0 30px rgba(255,255,255,.3)";

    overlay.appendChild(lightboxImg);

    document.body.appendChild(overlay);

    images.forEach(image => {

        image.style.cursor = "pointer";

        image.addEventListener("click", function () {

            lightboxImg.src = this.src;

            overlay.style.display = "flex";

        });

    });

    overlay.addEventListener("click", function () {

        overlay.style.display = "none";

    });

    // ============================================
    // Newsletter Validation
    // ============================================

    const newsletterInput = document.querySelector(".newsletter input");

    const newsletterBtn = document.querySelector(".newsletter button");

    if (newsletterBtn) {

        newsletterBtn.addEventListener("click", function () {

            if (newsletterInput.value.trim() == "") {

                alert("Please enter your email.");

                return;

            }

            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!regex.test(newsletterInput.value)) {

                alert("Please enter a valid email.");

                return;

            }

            alert("Thank you for subscribing!");

            newsletterInput.value = "";

        });

    }

    // ============================================
    // Contact Form Validation
    // ============================================

    const contactForm = document.querySelector("#contact form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const fields = contactForm.querySelectorAll("input, textarea");

            let valid = true;

            fields.forEach(field => {

                if (field.value.trim() == "") {

                    valid = false;

                    field.style.borderColor = "red";

                } else {

                    field.style.borderColor = "#ddd";

                }

            });

            if (!valid) {

                alert("Please complete all fields.");

                return;

            }

            alert("Message sent successfully!");

            contactForm.reset();

        });

    }

    // ============================================
    // Counter Animation
    // ============================================

    function animateValue(element, end) {

        let start = 0;

        const duration = 1500;

        const increment = end / (duration / 20);

        const timer = setInterval(() => {

            start += increment;

            if (start >= end) {

                start = end;

                clearInterval(timer);

            }

            element.innerHTML = Math.floor(start);

        }, 20);

    }

    document.querySelectorAll("[data-count]").forEach(counter => {

        observer.observe(counter);

        counter.addEventListener("transitionend", function () {

            animateValue(counter, Number(counter.dataset.count));

        });

    });

    // ============================================
    // Button Ripple Effect
    // ============================================

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const diameter = Math.max(button.clientWidth, button.clientHeight);

            circle.style.width = diameter + "px";
            circle.style.height = diameter + "px";

            circle.style.position = "absolute";
            circle.style.borderRadius = "50%";
            circle.style.background = "rgba(255,255,255,.5)";
            circle.style.transform = "scale(0)";
            circle.style.animation = "ripple .6s linear";

            circle.style.left = e.offsetX - diameter / 2 + "px";
            circle.style.top = e.offsetY - diameter / 2 + "px";

            button.style.position = "relative";
            button.style.overflow = "hidden";

            button.appendChild(circle);

            setTimeout(() => {

                circle.remove();

            }, 600);

        });

    });

});

// ============================================
// Ripple Animation CSS Injection
// ============================================

const style = document.createElement("style");

style.innerHTML = `

@keyframes ripple{

0%{

transform:scale(0);
opacity:1;

}

100%{

transform:scale(4);
opacity:0;

}

}

`;

document.head.appendChild(style);
