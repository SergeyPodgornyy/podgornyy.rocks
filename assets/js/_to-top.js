import $ from "jquery";
import "./utils/move-top";
import "./utils/easing";

$(document).ready(function() {
    /*
        var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear'
        };
    */
    $().UItoTop({ easingType: 'easeOutQuart' });
});
