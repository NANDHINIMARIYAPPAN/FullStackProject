const contactModel = require('../model/contactUs')
const ejs = require('ejs')
const axios = require('axios')
const contactUs = async (req, res) => {
    const email = req.body.email
    let existingUser = await contactModel.findOne({ email: email })


    if (existingUser) {
        return res.json({
            status: 401,
            isSuccessful: false,
            message: 'Email already exists'
        })
    }
    let newUser = {
        userName: req.body.userName,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        message: req.body.message
    }
    contactModel.create(newUser)
        .then((data) => {
            res.json({
                status: 200,
                isSuccessful: true,
                message: 'User created successfully',
                date: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                isSuccessful: false,
                message: err
            })
        })

}

const getContactUs = async (req, res) => {
    try {
        let data = await contactModel.find({})
       
    //    await res.status(200).json({
    //         status: 200,
    //         isSuccessful: true,
    //         message: 'Data retrieved successfully',
    //         data: data
    //     })

        await res.render('pages/index', { data: data })
    } catch (err) {
        res.json({
            status: 500,
            isSuccessful: false,
            message: err
        })
    }
}

const ejsGet = async (req, res) => {
    try {
        let data = await contactModel.find({})
        const html = await ejs.renderFile((global.__basedir + '/views/pages/index.ejs'), {
            data: data
        })
        res.status(200).send(html)
    } catch (err) {
        res.json({
            status: 500,
            isSuccessful: false,
            message: err
        })
    }
}


module.exports = { contactUs, getContactUs, ejsGet }