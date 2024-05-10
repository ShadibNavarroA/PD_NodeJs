const express = require("express");
const router = express.Router();

router.post("/",(req, res)=>{
    const {username, password} = req.body;

    res.send({
        User: username,
        Pass: password
    });
});

router.put("/",(req, res)=>{
    res.send({data: "User Upsate"});
});


module.exports = router;