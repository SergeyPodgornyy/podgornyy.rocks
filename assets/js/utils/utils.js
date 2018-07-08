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
