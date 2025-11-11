

let navbarIsTransparent = true;



const transparencyThresholds = [];
transparencyThresholds.push(71);
transparencyThresholds.push(233);
let transparencyThresholdId = 0;







const navbarDiv = document.getElementById('mainNav');
function setNavbarBG() {
    navbarDiv.style.backgroundColor = "rgb(76, 128, 183)";
    navbarDiv.classList.add("shadow-strong");
}
function setNavbarTransparent() {
    navbarDiv.style.backgroundColor = "rgba(0,0,0,0)";
    navbarDiv.classList.remove("shadow-strong")
}






function toggleTransparencyThreshold() {
    transparencyThresholdId = (transparencyThresholdId + 1) % 2;
}

function dynamicNavbarColor() {
    if (canvasIsInViewport && !navbarIsTransparent) {
        setNavbarTransparent();
        navbarIsTransparent = true;
    } else if (!canvasIsInViewport && navbarIsTransparent) {
        setNavbarBG();
        navbarIsTransparent = false;

    }
    setTimeout(() => {
        dynamicNavbarColor();
    }, 100);
}



document.addEventListener("DOMContentLoaded", function () {

    dynamicNavbarColor();



    const navbarCollapse = document.getElementById("navbarResponsive");
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    // 1) Close when clicking outside
    document.addEventListener("click", function (event) {
        if (
            navbarCollapse.classList.contains("show") && // menu is open
            !navbarCollapse.contains(event.target) &&    // click not inside menu
            !event.target.closest(".navbar-toggler")     // click not on toggler
        ) {
            bsCollapse.hide();
            toggleTransparencyThreshold();
        }
    });




    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');


    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -50%',
        });
    }




    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });






});




