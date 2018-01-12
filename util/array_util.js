const clone = (o) => {
    let output, v, key;
    output = Array.isArray(o) ? [] : {};

    for (key in o) {
        v = o[key];
        output[key] = (typeof v === "object") ? clone(v) : v;
    }

    return output;
}

module.exports = {
    clone
}