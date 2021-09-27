const db = require('../../data/dbConfig');

module.exports = {
    findReimb,
    findReimbByUserID,
    findReimbByStatus,
    createReimb
}

// add
async function createReimb(neoReimb) {
    neoReimb.REIMB_ID = Date.now();

    return await db('ERS_REIMBURSEMENT').insert(neoReimb)
}

// findAll
async function findReimb() {
    return await db('ERS_REIMBURSEMENT');
}

// findByID
async function findReimbByUserID(key) { 
    key = parseInt(key);
    return await db('ERS_REIMBURSEMENT')
        .where({REIMB_AUTHOR: key})
}

// findByUsername
async function findReimbByStatus(key) {
    key = parseInt(key); 
    return await db("ERS_REIMBURSEMENT")
        .where({REIMB_STATUS_ID: key})
}

