const express = require("express");
const app = express();
const routerUser = require("./routers/users.routes");    
const initDB = require('./config/db')
const bodyParser = require('body-parser')
const userdb = require("./Data_Base/users")

console.log();console.log("//////////////////////////singleton/////////////////////////////")
const Mdb = new initDB;
console.log()
const Mydb = new initDB;
console.log("////////////////////////////////////////////////////////////////"); console.log()


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


{//Router
app.use(routerUser);
}

app.listen(3000, ()=>{
    console.log("server rubbubg on port", 3000);
})

