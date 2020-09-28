const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false

    let result = ''
    const sortedArray = members.map(function (e) {
        return e.trim()
    })

    for (const iterator of sortedArray.sort()) {
        if (typeof iterator !== 'string') {
            continue
        } else {
            result += iterator[0]
        }
    }
    return result.toUpperCase();
};
