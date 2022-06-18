const express = require('express');
const ProductM = require('../models/model');

const Productrouter = express.Router()

module.exports = Productrouter;

//Post Method

Productrouter.post('/post', async (req, res) => {
    const data = new ProductM({
        Name: req.body.Name,
        Imagesrc:req.body.Imagesrc,
        Price:req.body.Price,
        productType:req.body.productType,
        Color:req.body.Color
     
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
Productrouter.get('/getAll', async (req, res) => {
    try{
        const data = await ProductM.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


