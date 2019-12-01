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

const PlayerModel = mongoose.model('movie', playerschema);


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatever', (req, res) => {
    res.send('whatever')
})

app.get('/name', (req, res) => {
    console.log(req.query.lastname)
    res.send('Welcome ' + req.query.firstname +
        ' ' + req.query.lastname);
})

app.get('/name/:name', (req, res) => {
    PlayerModel.findOne({name:req.params.name},
    (error,data)=>{
        res.json(data);
    }
    )
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/players', (req, res) => {

    PlayerModel.find((error, data) =>{
        res.json({players:data});
    })
    // const myplayers = [
    //     {
    //         "name": "Avengers: Infinity War",
    //         "dob": "2018",
    //         "image": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "name": "Captain America: Civil War",
    //         "dob": "2016",
    //         "image": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     }
    // ];

    // res.status(200).json(
    //     {
    //         players: myplayers,
    //         message: 'Data Sent'
    //     });
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
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))