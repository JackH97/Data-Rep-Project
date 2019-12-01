const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@cluster0-nigfm.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const playerschema = new Schema({
    name:String,
    dob:String,
    image:String
})

const PlayerModel = mongoose.model('players', playerschema);


const contactschema = new Schema({
    name:String,
    email:String,
    issue:String
})

const ContactModel = mongoose.model('contact', contactschema);


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/players', (req, res) => {

    PlayerModel.find((error, data) =>{
        res.json({players:data});
    })
})

app.get('/api/contact', (req, res) => {

    ContactModel.find((error, data) =>{
        res.json({contact:data});
    })
})

app.get('/api/players/:id', (req, res)=>{
    console.log(req.params.id);

    PlayerModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

app.delete('/api/players/:id', (req, res)=>{
    console.log(req.params.id);

    PlayerModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})

app.put('/api/players/:id',(req,res)=>{
    console.log("Edit: "+req.params.id);
    console.log(req.body);
    
    PlayerModel.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true},
        (error,data)=>{
            res.json(data);
        })
})

app.get('/api/players/:id', (req,res)=>{
    console.log("GET: "+req.params.id);

    PlayerModel.findById(req.params.id,(error, data)=>{
        res.json(data);
    })
})

app.post('/api/players', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.dob);
    console.log(req.body.image);

    PlayerModel.create({
        name:req.body.name, 
        dob:req.body.dob, 
        image:req.body.image
    });

    res.json('post recieved!');
})


app.post('/api/contact', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.issue);

    ContactModel.create({
        name:req.body.name, 
        email:req.body.email, 
        issue:req.body.issue
    });

    res.json('post recieved!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))