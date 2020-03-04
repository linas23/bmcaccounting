const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


//  start app
const app = express();

// Mongo DB connection
mongoose.connect('mongodb://localhost/bmcaccounting',
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        .then(()=>{
            console.log('db connected successfully');
        })
        .catch((err)=>{
            console.log('error connecting database');
        })

//  middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



//routes
const admin = require('./routes/admin');




// Port 
const PORT = process.env.PORT || 3000;

app.use('/api/admin',admin);

app.listen(PORT,()=>console.log(`app running in port ${PORT}`));

