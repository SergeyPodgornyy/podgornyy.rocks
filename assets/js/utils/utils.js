export function numberRange(start, end) {
    return new Array(end - start)
        .fill()
        .map((d, i) => i + start);
}

export function alphabetRange(start, end) {
    return new Array(end.charCodeAt(0) - start.charCodeAt(0))
        .fill()
        .map((d, i) => String.fromCharCode(i + start.charCodeAt(0)));
}

const debounce = (func, wait, immediate) => {
    var timeout;

    return () => {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export { debounce };
