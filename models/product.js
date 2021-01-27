const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name :{
        type  : String,
        required : true
    },

    img :{
        type  : String,
        required : true
    },

    category :{
        type  : String,
        required : true
    },

    discount :{
        type  : Boolean,
        default : false
    },

    date :{
        type : Date,
        default : Date.now
    },

});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;