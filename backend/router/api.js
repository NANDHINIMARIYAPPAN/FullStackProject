const express = require('express');

const router = express.Router();

const contactUs = require('../controller/contactUs')


const mongoose = require('mongoose');

const db = 'mongodb://127.0.0.1:27017/mailOtp'

mongoose.set('strictQuery', false);

mongoose.connect(db)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

console.log("Hello World")
router.post('/contactUs', contactUs.contactUs)
router.get('/getcontactUs', contactUs.getContactUs)
router.get('/ejs', contactUs.ejsGet)

router.get('/getSample', contactUs.getMethor)

router.get('/getSample', (req, res) => {
    res.json({ message: "Hello World" })
})
module.exports = router