const express = require('express');
const config = require('../config/config');

const bodyParser = require('body-parser');
const multer = require('multer') // v1.0.5
 // for parsing multipart/form-data



const app = express();
const upload = multer()

//GET-http method
app.get('/users/id=:id&name=:name',(req,res)=>{
    let id =req.params.id;
    let name = req.params.name;

    res.json({id,name});
});

//POST-http method=======================0
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/users',upload.array(),(req,res)=>{
    console.log(req.body);
    let body = req.body;
    if(!body.name){
        res.status(400).json({response:{
             msg:"El nombre es un campo requerido para procesar tu solicitud"}
            });
    }else{
        res.json({person: body});
    }
    
});


//PUT
app.put('/users',(req,res)=>{

    res.json({id,name});
});

app.delete('/users',(req,res)=>{

    res.json({id,name});
});



app.listen(config.port, ()=>{
    console.log("This server is on, listening in the port: " + process.env.PORT);
})