const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false
    let result = ''
    const sortedArray = members
        .filter(e => typeof e === 'string')
        .map(e => {return e.trim()})
        .sort()

    for (const iterator of sortedArray) {
        if (typeof iterator !== 'string') {
            continue
        } else {
            result += iterator[0]
        }
    }
    return result.split('').sort().join('').toUpperCase();
};
