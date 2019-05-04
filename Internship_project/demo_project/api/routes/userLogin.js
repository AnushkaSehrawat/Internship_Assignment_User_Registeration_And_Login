const express = require('express');
const Router = express.Router();
const user= require('../models/User');

Router.post('/',(req,resp)=>
{
    if(req.body.email == null || req.body.password == null ) 
    {
        resp.status(400).json({
            'status_code': 400,
            error:"Wrong Parameters",
            message:"Please Check the entered paramters"
        });
    }
    else 
    {
       user.find({'email':req.body.email},{_id:0,__v:0})
       .exec()
       .then((doc) => 
       {
            if(doc[0].password == req.body.password)
            {
                resp.status(200).json({'status_code':200, 'message':" User  Logged In", 'data':{'user':doc}});
            }
            else
            {
                resp.status(400).json({
                    'status_code': 204,
                    error:'Invalid User',
                    message:"User Not Found"
                });
            }
        })
       .catch((err) => {console.log(err);
        resp.status(500).json({error:err});
        });
    }
});
module.exports=Router;