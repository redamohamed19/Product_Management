const express = require('express');
const { default: mongoose } = require('mongoose');


const router = express.Router()

module.exports = router;
var ProductType = new mongoose.Schema({
    Name: String,
    Attribute: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attribute' }]
});
var ProductTypeM = mongoose.model('ProductType', ProductType);

//Post Method

router.post('/post', async (req, res) => {
    const data = new ProductTypeM({
        Name:  req.body.Name,
        Attribute:[ req.body.Attribute]
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
router.get('/getAll', async (req, res) => {
    try{
        const data = await ProductTypeM.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

