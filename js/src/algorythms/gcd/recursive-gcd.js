function recursive(b, r) {
    if (r === 0) {
        return b;
    } else {
        return recursive(r, b % r);
    }
}

function gcd(m, n) {
    // base case
    let a = Math.max(m, n);
    let b = Math.min(m, n);
    return recursive(b, a % b);
}

module.exports = gcd;