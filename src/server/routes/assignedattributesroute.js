const express = require('express');
const mongoose = require('mongoose');

var AssignedAttribute = new mongoose.Schema({
    AttributeValue:  { type: mongoose.Schema.Types.ObjectId, ref: 'AttributeValue' },
});

var AssignedAttributeM = mongoose.model('AssignedAttribute', AssignedAttribute);

const assignedAttributeRouter = express.Router()

module.exports = assignedAttributeRouter;

//Get all Method
assignedAttributeRouter.get('/getAll', async (req, res) => {
    try{
        const data = await AssignedAttributeM.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


