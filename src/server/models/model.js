const mongoose=require("mongoose")


  
var AttributeValue = new mongoose.Schema({
    Name     : String,
    Boolean  : Boolean,
    Date : Date,
   
},{timestamps:true});

var AssignedAttribute = new mongoose.Schema({
    AttributeValue:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'AttributeValue' }],
});


var Attribute = new mongoose.Schema({
    Name: String,
    Type: [mongoose.Schema.Types.Mixed],
    AttributeValue: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AttributeValue' }]
});



var Product = new mongoose.Schema({
    Name: String,
    productType: [{ type: mongoose.Schema.Types.ObjectId, ref: 'productType' }],
    AssignedAttributes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AssignedAttributes' }]
});



var AttributeValueM  = mongoose.model('AttributeValue', AttributeValue);
var AssignedAttributeM = mongoose.model('AssignedAttribute', AssignedAttribute);
var AttributeM  = mongoose.model('Attribute', Attribute);


module.exports = mongoose.model('Product', Product);
module.exports = mongoose.model('Attribute', Attribute);