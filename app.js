const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const globalErrorHandler = require('./controllers/errorController');
const morgan = require('morgan');
const cors = require('cors')

//  start app
const app = express();

// Mongo DB connection
mongoose.connect('mongodb://localhost/bmcaccounting',
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        .then(()=>{
            console.log('db connected successfully');
        })
        .catch((err)=>{
            console.log('error connecting database');
        })

//  middlewares
app.use(cors());
app.use(morgan("combined"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



//routes
const admin = require('./routes/admin');




// Port 
const PORT = process.env.PORT || 3000;

app.use('/api/admin',admin);

// global Error Controller
app.use(globalErrorHandler);

app.listen(PORT,()=>console.log(`app running in port ${PORT}`));

