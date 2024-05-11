const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String 
        },
        username:{
            type: String,
            unique: true,
            required: true
        },
        password:{
            type: String,
            unique: true,
            required: true
        },
        rol:{
            type: String,
            unique: true,
            required: true
        },
        key:{
            type: String,
            unique: true,
            required: true
        }
    }
    
);

const User = mongoose.model('User', userSchema);
module.exports = User;