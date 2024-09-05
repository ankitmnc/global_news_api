const express = require('express');
const axios = require('axios');
const app = express();

let port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => {
    console.log(`Server started listening at ${port}.`);
});

app.get('/get_news',(req,res)=>{
    var category = req.query.category; 
    axios
    .get(`https://newsapi.org/v2/everything?q=${category}&apiKey=e719b9cf112540d59dc4ca8e87e383ce`)
    .then((resp)=>{
        console.log(resp.data);
        res.send(resp.data);
    })
    .catch((e)=>console.log(e));
});

app.get('/',(req,res)=>{
    res.send("Server is healthy")
})

module.exports=app;