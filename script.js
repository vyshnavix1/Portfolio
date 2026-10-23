
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

// Open and close the mobile menu
menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("show");

    const isOpen = navbar.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Highlight the selected navigation link
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Close menu after clicking a link
        navbar.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

const title = document.querySelector(".hero-content h2");

const roles = [
    "Computer Science Graduate",
    "Python Developer",
    "Frontend Developer",
    "Generative AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];

    title.textContent = currentRole.substring(0, charIndex);

    if (!deleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(typeRole, 90);
    } else if (!deleting) {
        deleting = true;
        setTimeout(typeRole, 1200);
    } else if (charIndex > 0) {
        charIndex--;
        setTimeout(typeRole, 45);
    } else {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 300);
    }
}

typeRole();

// About section scroll animation
const aboutElements = document.querySelectorAll(
    ".about-image, .about-content"
);

const aboutObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

aboutElements.forEach((element) => {
    aboutObserver.observe(element);
});

// Education section scroll animation
const educationCards = document.querySelectorAll(
    ".education-card"
);

const educationObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

educationCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
    educationObserver.observe(card);
});

const skillCards = document.querySelectorAll(".skill-card");

const skillsObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

skillCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    skillsObserver.observe(card);
});

// Projects section scroll animation
const projectCards = document.querySelectorAll(".project-card");

const projectsObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
    projectsObserver.observe(card);
});

/* Footer: Automatically update copyright year */
const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
