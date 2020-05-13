function sweetsAndToys(s, t, guests) {
    let max = 0;

    function dfs(i, guestsAndSibl, guestCount) {
        if (i < guests.length) {
            dfs(i + 1, guestsAndSibl + guests[i] + 1, guestCount + 1);
            dfs(i + 1, guestsAndSibl, guestCount);
        } else {
            if (s % guestsAndSibl === 0 && t % guestsAndSibl === 0 && guestCount > max) {
                max = guestCount;
            }
        }
    }

    dfs(0, 0, 0);

    return max;
}

module.exports = sweetsAndToys;