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

module.exports = mongoose.model('User', userSchema);