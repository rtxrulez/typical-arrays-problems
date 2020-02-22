exports.min = function min(array) {
    if (array === undefined || array.length === 0) return 0;
    let n = array[0];
    array.forEach(function(a) {
        if (a < n) n = a;
    });
    return n;
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) return 0;
    let n = array[0];
    array.forEach(function(a) {
        if (a > n) n = a;
    });
    return n;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) return 0;
    let n = 0;
    array.forEach(function(a) {
        return (n = n + a);
    });

    return n / array.length;
};
