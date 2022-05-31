const express = require('express');
const Product = require('../models/model');

const Productrouter = express.Router()

module.exports = Productrouter;

//Post Method

Productrouter.post('/post', async (req, res) => {
    const data = new Product({
        Name: "Tara",
        productType:['6296695f7fd6e007b5cacee3'],
        AssignedAttributes:['62966aca6db18c20d81d011f']
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


