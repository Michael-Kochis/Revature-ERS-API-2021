const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../../config/secrets');

const generateToken = (user) => {
    const payload = {
        id: user.ERS_USER_ID,
        username: user.ERS_USERNAME,
        role: ERS_USER_ROLE
    }
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, TOKEN_SECRET, options);
}

module.exports = {
    generateToken
}