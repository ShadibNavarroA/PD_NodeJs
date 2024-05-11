const User = require('../Data_Base/users');
const QueryFactory  = require("../Data_Base/getData")


async function getdb() {
    try {  
      const userQuery = QueryFactory.createQuery(User);
      const result = await userQuery.findByName('Humanito');
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }



const userController = {
    get: (req, res) => {
        console.log();console.log("////////////////////////Modelo-Vista-Controlador///////////////////////////")
        getdb().result
        res.send("Humanito");
    },
    login: (req, res) => {
        console.log();console.log("////////////////////////Modelo-Vista-Controlador///////////////////////////")
        const {username, password} = req.body;
        res.send({
        User: username,
        Pass: password
    });
    }
};
  
module.exports = userController;
