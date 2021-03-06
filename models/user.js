const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    
    lastName: {
        type: String,  
        required: true
    },

    email: {
        type: String,
        required: true
    }, 

    password: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now

    }
});

const user = mongoose.model('user',userSchema);
//ceci exporte tout les données d'user 
module.exports = user;