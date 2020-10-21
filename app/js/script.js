// JavaScript Document
const rwdMedia = {};

['xs', 'sm', 'md', 'lg', 'xl'].map( bp =>
    rwdMedia[bp] = () => document.querySelector(`.bs4-${bp}`).offsetParent !== null
);

function toggleImg(img) {
    const $imgSet = document.getElementById(img).parentNode.children;
    for (let i = 0; i < $imgSet.length; i++) $imgSet[i].style.display="none";
    document.getElementById(img).style.display="block";
}

window.toggleImg = toggleImg;


function toggleRadio(radioSet, state, imgSet) {
    const radio = document.querySelectorAll(`[name="${radioSet}"]`)
    if (state) {
        radio.forEach( radio => { radio.disabled = false })
    } else {
        console.log(radio);
        radio.forEach( radio => {
            radio.disabled = true;
            radio.checked = false;
        })

        if (imgSet) {
            const $imgSet = document.getElementById(imgSet).children;
            for (let i = 0; i < $imgSet.length; i++) $imgSet[i].style.display="none";
        }
    }

}

window.toggleRadio = toggleRadio;


function toggleMapControl(event, elem,  mapId) {

    event.preventDefault();

    const $mapId = document.getElementById(mapId);
    if ($mapId.style.display === "none") {
        $mapId.style.display = "block";
        elem.children[0].style.display="none";
        elem.children[1].style.display="block";
    } else {
        $mapId.style.display = "none";
        elem.children[0].style.display="block";
        elem.children[1].style.display="none";
    }
}

window.toggleMapControl = toggleMapControl;



$(document).ready(function(e) {

    var testimonials = new Swiper ('.testimonials .swiper-container', {
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.testimonials .swiper-button-next',
            prevEl: '.testimonials .swiper-button-prev',
        },

        pagination: {
            el: '.testimonials .swiper-pagination',
        },
    });

    $('.jumbotron').flurry({
        character: "❅❆",
        height: 700,
        small: 18,
        large: 88,
        speed: 8000,
        frequency: 800,
        zIndex: 3
    });


});


// JQ extras

(function($) {

// jQuery plugin to scroll to an element on the page
// Usage: $('.callBack').scrollTo();
//    or: $('.callBack').scrollTo(750);

    var $window = $(window),
        $document = $(document),
        $documentWrapper = $('body, html');

    $.fn.scrollTo = function ( speed ) {
        if ( speed === undefined ) speed = 300;

        $documentWrapper.animate({
            scrollTop: Math.min( this.offset().top - 10, $document.height() - $window.height() )
        }, speed);

        return this;
    };

    $.fn.hasAttr = function(name) {
        return this.attr(name) !== undefined;
    };

}(jQuery));
