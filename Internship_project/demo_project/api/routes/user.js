const express = require('express');
const Router = express.Router();
const user= require('../models/User');

var id =0;

Router.post('/',(req, resp)=>
{

    if(req.body.name == null|| req.body.email == null || req.body.password == null || req.body.age==null)
    {
        resp.status(400).json({status: "400",
                               error: " Wrong Paramters",
                               message:"Please check the entered parameters"});
    }

    id+=1;
   const User = new user({
        id:id,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password
    });
    User.save().then((result)=> resp.status(200).json({'status_code':200, 'message':' User Created Successfully','data':{'newUser':result}}))
               .catch((err) => resp.status(500).json({'error':err}));
    
});
module.exports=Router;
