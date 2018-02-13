const knex = require('./db').knex
const express = require('express')
const app = express()

app.get('/cardapio',(req,res)=> {
    knex("comida").select().then( ret =>{
        res.send(ret)
    }).catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
})

app.listen(3000, _ => console.log("SERVER [ONLINE]"))