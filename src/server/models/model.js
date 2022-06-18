const mongoose=require("mongoose")


  








var Product = new mongoose.Schema({
    Name: String,
    Imagesrc:String,
    Price:String,
    Color:String,
    Rate:Number,
    Sales:Number,

    productType: { type: mongoose.Schema.Types.ObjectId, ref: 'productType' },
  
});




module.exports = mongoose.model('Product', Product);
