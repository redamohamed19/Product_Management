const express = require('express');
const { default: mongoose } = require('mongoose');
const ProductType = require('../models/model');

const router = express.Router()

module.exports = router;

//Post Method

router.post('/post', async (req, res) => {
    const data = new ProductType({
        Name: "test",
        Attribute:['629663a96db18c20d81d011d']
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


