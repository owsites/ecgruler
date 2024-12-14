"use strict";

/* ===== Smooth scrolling ====== */
/* Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */

const pageNavLinks = document.querySelectorAll('.scrollto');

pageNavLinks.forEach((pageNavLink) => {
    pageNavLink.addEventListener('click', (e) => {
        const href = pageNavLink.getAttribute("href");

        // Check if the link is a hash link
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = href.replace('#', '');
            const targetElement = document.getElementById(target);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Element with ID "${target}" not found.`);
            }
        }
        // Otherwise, allow the default behavior for external links
    });
});
