const crypto = require('crypto')

function generatePassword(salt) {
    return crypto.randomBytes(salt).toString('hex')
}

module.exports = generatePassword