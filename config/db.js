const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/miBaseDeDatos';

class baseMongoose{
    constructor() {
        console.log("solicitando conexion a base de datos") //sssssssssssssssssssssssssssssssssssssssss
        
        if (!baseMongoose.instance) {
            console.log("conectado BD existente") //ssssssssssssssssssssssssssssssssssss
            
            try {
                mongoose.connect(url, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });
                
                console.log('Conexión establecida con la base de datos.'); //ssssssssssssssssssssssssssss
                baseMongoose.instance = this;

            } catch (error) {
                console.error('Error al conectar con la base de datos:', error); //ssssssssssssssssssssssssssss
            }
        }

        console.log("Entregando conexion BD existente") //ssssssssssssssssssssssssssss
        return baseMongoose.instance;
    }
}

module.exports = baseMongoose;