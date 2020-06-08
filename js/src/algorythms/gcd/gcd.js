function gcd(m, n) {
    let a = Math.max(m, n);
    let b = Math.min(m, n);

    for(;;) {
        let r = a % b;
        if (r === 0) {
            return b;
        }
        a = b;
        b = r;
    }

}

module.exports = gcd;