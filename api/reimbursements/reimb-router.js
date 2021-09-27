const express = require('express');

const reimb = require("./reimb-model");
const router = express.Router()

router.get('/', (req, res, next) => {
    reimb.findReimb()
    .then(resp => {
        res.status(200).json(resp);
    }).catch(next);
})

router.get('/user/:USER_ID', (req, res, next) => {
    const { USER_ID } = req.params;
    
    reimb.findReimbByUserID(USER_ID)
    .then(resp => {
        res.status(200).json(resp);
    }).catch(next);
})

router.get('/status/:reimb_status', (req, res, next) => {
    const { reimb_status } = req.params;
    
    reimb.findReimbByStatus(reimb_status)
    .then(resp => {
        res.status(200).json(resp);
    }).catch(next);
})

module.exports = router;