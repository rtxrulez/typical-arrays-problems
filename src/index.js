exports.min = function min(array) {
    if (array.length === 0) return 0;
    array.sort(function(a, b) {
        return a - b;
    });

    return array[0];
};

exports.max = function max(array) {
    if (array.length === 0) return 0;
    array.sort(function(a, b) {
        return b - a;
    });

    return array[0];
};

exports.avg = function avg(array) {
    if (array.length === 0) return 0;
    let n = 0;
    array.forEach(function(a) {
        return (n = n + a);
    });

    return n / array.length;
};
