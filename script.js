function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

$(window).scroll(function () {
    if ($(window).scrollTop() >= 90) {
        $('header').addClass("sticky-header");
    }
    else {
        $('header').removeClass("sticky-header");
    }
});