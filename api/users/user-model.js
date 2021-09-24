const db = require('../../data/dbConfig');

module.exports = {
    findUsers,
    findUserByID,
    findUserByUsername,
    registerUser
}

// add
async function registerUser(neoUser) {
    neoUser.ERS_USER_ID = Date.now();

    return await db('ERS_USERS').insert(neoUser, ['ERS_USER_ID','ERS_USERNAME', 'USER_ROLE_ID'])
}

// findAll
async function findUsers() {
    return await db("users");
}

// findByID
async function findUserByID(key) { 
    key = parseInt(key);
    return await db("users")
        .where({userID: key})
        .first();
}

// findByUsername
async function findUserByUsername(key) { 
    return await db("users")
        .where({username: key})
        .first();
}

