const knex = require('./db').knex
const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use( bodyParser.json() );   
app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/cardapio',(req,res)=> {
    knex("comida").select().then( ret =>{
        res.send(ret)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

app.get('/pedido',(req,res)=> {
    knex("pedido").select().then(ret => {
        res.send(ret)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

knex.migrate.latest().then( _ => {
    console.log("knex migrate latest")
    app.listen(3000, _ => console.log("SERVER [ONLINE]"))
})