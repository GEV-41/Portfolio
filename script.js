/* =====================================================
   JED GABRIEL E. NAVARRA
   PORTFOLIO JAVASCRIPT
   ===================================================== */


/* ================= NAVIGATION ================= */

const navLinks = document.querySelectorAll(".nav-link");


navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();


        const targetID = this.getAttribute("href");

        const target = document.querySelector(targetID);


        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");


function updateNavigation() {

    let current = "home";

    const position = window.scrollY + 180;


    sections.forEach(function(section) {

        const top = section.offsetTop;

        const height = section.offsetHeight;


        if (
            position >= top &&
            position < top + height
        ) {

            current = section.id;

        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


/* ================= SCROLL EVENT ================= */

window.addEventListener(
    "scroll",
    updateNavigation
);


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    updateNavigation
);