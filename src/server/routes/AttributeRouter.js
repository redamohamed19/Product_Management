const express = require('express');
const AttributeM = require('../models/model');

const AttributeRouter = express.Router()

module.exports = AttributeRouter;

//Get all Method
AttributeRouter.get('/getAll', async (req, res) => {
    try{
        const data = await AttributeM.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


