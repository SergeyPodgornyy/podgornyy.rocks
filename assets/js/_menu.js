import { debounce } from "./utils/utils";

$('span.menu').click(function() {
    $('ul.nav-list').slideToggle(300, function() {
        // Animation complete.
    });
});

const handleScreenWidthChanged = event => {
    if (event.currentTarget.innerWidth >= 480) {
        $('ul.nav-list').show();
    } else {
        $('ul.nav-list').hide();
    }
};

window.addEventListener('resize', e => debounce(handleScreenWidthChanged(e), 500, false), false);
window.addEventListener('orientationchange', handleScreenWidthChanged, false);
