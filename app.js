const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

let port = process.env.PORT || 5000;

app.use(cors({
    origin: '*',  // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    allowedHeaders: ['Content-Type','Authorization']  // Allowed headers
  }));

app.options('*', cors());

app.get('/get_news',(req,res)=>{
    var category = req.query.category; 
    console.log(category);
    axios
    .get(`https://newsapi.org/v2/everything?q=${category}&apiKey=e719b9cf112540d59dc4ca8e87e383ce`)
    .then((resp)=>{
        res.send(resp.data);
    })
    .catch((e)=>console.log(e));
});

app.get('/',(req,res)=>{
    res.send("Server is healthy")
})

app.listen(port, "0.0.0.0", () => {
    console.log(`Server started listening at ${port}.`);
});

module.exports=app;

// dummy line