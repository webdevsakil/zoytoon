

function targetElement(id) {
    if (id) {
        return document.querySelector(id)
    }
    return false;
}
const showmenu = targetElement('.showmenu');
const closemenu = targetElement('.closemenu');
const navWrapper = targetElement('.nav-wrapper');
showmenu.addEventListener("click", function (e) {
    navWrapper.classList.add("showMenu");
    navWrapper.classList.remove("hideMenu");
    showmenu.style.display = "none"
    closemenu.style.display = "block"
})
closemenu.addEventListener("click", function (e) {
    navWrapper.classList.add("hideMenu");
    navWrapper.classList.remove("showMenu");
    showmenu.style.display = "block"
    closemenu.style.display = "none"
})
// sticky header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('stickyheader', window.scrollY > 5)
})
// tiny slider
if (targetElement('.testimonial-slider-one')) {
    var testimonialSlider = tns({
        container: targetElement('.testimonial-slider-one'),
        items: 1,
        slideBy: 'page',
        autoplay: true,
        nav: false,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: targetElement('.testimonial-slider-controls-one')
    });
}
if (targetElement('.testimonial-slider')) {
    var testimonialSlider = tns({
        container: targetElement('.testimonial-slider'),
        items: 1,
        slideBy: 'page',
        autoplay: true,
        nav: false,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: targetElement('.testimonial-slider-controls')
    });
}
if (targetElement('.food-nav-slider')) {
    var foodNavSlider = tns({
        container: targetElement('.food-nav-slider'),
        items: 1,
        slideBy: 1,
        autoplay: true,
        nav: false,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: targetElement(".food-nav-controls"),
        responsive: {
            640: {
                edgePadding: 20,
                gutter: 20,
                items: 2
            },
            700: {
                gutter: 30
            },
            900: {
                items: 3
            }
        }
    });
}
if (targetElement('.blog-slider')) {
    var blogSlider = tns({
        container: targetElement('.blog-slider'),
        controlsContainer: targetElement(".blog-controls"),
        items: 1,
        slideBy: 'page',
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        nav:false,
        responsive: {
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }

    });
}
if (targetElement('.foodmenu-blog-two')) {
    var blogSlider = tns({
        container: targetElement('.foodmenu-blog-two'),
        controlsContainer: targetElement(".foodmenu-two-controls"),
        items: 1,
        swipeAngle: true,
        nav: false,
        responsive: {
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }

    });
}

// Aos
AOS.init();
