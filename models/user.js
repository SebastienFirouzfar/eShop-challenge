const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    
    lastname: {
        type: String,  
        required: true
    },

    email: {
        type: String,
        required: true
    }, 

    passwords: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user',userSchema);

//this function will find all the user   
//there will be just a callback parameter
//cette fonction trouvera tout l'utilisateur   
// il n'y aura qu'un paramètre de rappel   
module.exports.getUser=(cb)=>{  
    userModel.find((err,data)=>{  
        if(err){  
            console.log(err)  
        }  
        else{  
            cb(null,data)  
        }  
    })  
}  