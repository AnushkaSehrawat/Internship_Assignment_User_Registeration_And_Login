const express =  require('express');
const app = express(); // so using app, we can utilize all the fucntions and utilities of express.
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const Routes = require('./api/routes/user');
const LoginRoutes = require('./api/routes/userLogin');



mongoose.connect('mongodb+srv://anushka:'+process.env.MONGO_ATLAS_PW+'@cluster0-2dznd.mongodb.net/test?retryWrites=true',{useNewUrlParser:true});



app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());

app.use('/registerUsers',Routes); // It acts as a middleware for handling requests.Incoming request has to go through use.
app.use('/loginUser',LoginRoutes);


module.exports=app;