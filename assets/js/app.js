import $ from "jquery";

window.$ = window.jQuery = $;

// script for menu
$( "span.menu" ).click(function() {
    $( "ul.nav1" ).slideToggle( 300, function() {
     // Animation complete.
    });
});
// END script for menu

jQuery(document).ready(($) => {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});

import "./_circles";
import "./_to-top";
