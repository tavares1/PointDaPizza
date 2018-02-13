const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.send('Testing website');
})

app.listen(3000,_ => {
    console.log("Server [ONLINE]");
})