/* =================================
   SATVEER KAUR — PORTFOLIO
   SIMPLE INTERACTIONS
================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* Smooth navigation */
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* Reveal sections when scrolling */
    const revealItems = document.querySelectorAll(
        ".featured-work, .more-work, .about-layout, .contact-inner"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealItems.forEach(item => {
        item.classList.add("reveal");
        observer.observe(item);
    });


    /* Current year */
    const year = document.querySelector(".footer-bottom span");

    if (year) {
        year.textContent =
            `© ${new Date().getFullYear()} Satveer Kaur`;
    }

});
