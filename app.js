const express = require("express");
const app = express();
const routerUser = require("./routers/users.routes");    
const initDB = require('./config/db');
const bodyParser = require('body-parser');
const User = require("./Data_Base/users");
const QueryFactory  = require("./Data_Base/getData")
const { addDataToTable } = require("./Data_Base/putData");




console.log();console.log("//////////////////////////singleton/////////////////////////////")
const Mdb = new initDB();
console.log()
const Mydb = new initDB;
console.log("////////////////////////////////////////////////////////////////"); console.log()





console.log();//console.log("//////////////////////////Función de Orden Superior/////////////////////////////")
const newUser = new User({
    name: 'Humanito',
    username: 'HumanitoUser',
    password: 'PassHumanito',
    rol: 'H',
    key: 'KeyH'
});
addDataToTable(User, newUser)
//console.log("////////////////////////////////////////////////////////////////"); console.log()





//console.log();console.log("////////////////////////Factory Method///////////////////////////")
async function getdb() {
    try {  
      const userQuery = QueryFactory.createQuery(User);
      const result = await userQuery.findByName('Humanito');
      console.log();console.log("////////////////////////Factory Method///////////////////////////")
      console.log(result);
      console.log("////////////////////////////////////////////////////////////////"); console.log()
    } catch (error) {
      console.error('Error:', error);
    }
  }
getdb();
//console.log("////////////////////////////////////////////////////////////////"); console.log()






app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


{//Router
app.use(routerUser);
}

app.listen(3000, ()=>{
    console.log("server rubbubg on port", 3000);
})

