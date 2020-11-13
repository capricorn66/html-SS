// jQuery plugin to scroll to an element on the page
// Usage: $('.callBack').scrollTo();
//    or: $('.callBack').scrollTo(750);

import $ from 'jquery';

$.fn.scrollTo = function ( speed ) {
    if ( speed === undefined ) speed = 300;

    $('body, html').animate({
        scrollTop: Math.min( this.offset().top - 10, $(document).height() - $(window).height() )
    }, speed);

    return this;
};
