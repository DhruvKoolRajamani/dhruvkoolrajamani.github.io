// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
$(document).ready(function () {
    var typedTitle = new Typed('#typed-title', {
        strings: ['<h1 class="display-1 text-center intro-text">Dhruv Kool Rajamani</h1>^1000'],
        typeSpeed: 50,
        backSpeed: 20,
        loop: false,
        onComplete: function(self) { scrollDown() },
        showCursor: false,
    });

    var waypointAbout = new Waypoint({
        element: document.getElementById('about'),
        handler: function(direction) {
            console.log('Scrolled to waypoint!');
        }
    })

    function scrollDown () {
        document.getElementById('about').scrollIntoView({behavior: "smooth", block:"start", inline: "nearest"});
    };

    var typedAbout = new Typed('#typed-about', {
        strings: ['<h2 class="display-3 text-center about-title">About</h2><hr>^1000'],
        typeSpeed: 1,
        showCursor: false,
    });

    var typedProj = new Typed('#typed-proj', {
        strings: ['<h2 class="display-3 text-center projects-title">Projects</h2><hr>^1000'],
        typeSpeed: 50,
        showCursor: false,
    });

    var typedPub = new Typed('#typed-pub', {
        strings: ['<h2 class="display-4 text-center publications-title">Publications</h2>^1000'],
        typeSpeed: 50,
        showCursor: false,
    });

    var typedPres = new Typed('#typed-pres', {
        strings: ['<h2 class="display-4 text-center publications-title">Presentations</h2>^1000'],
        typeSpeed: 50,
        showCursor: false,
    });
});