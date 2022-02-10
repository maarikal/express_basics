const express = require('express');
const  app = express();

// set up brauser aadress row router
app.get('/', (req, res) => {
    //create html response
    res.send('<a href="/contact"> Contact us </a> <br> <a href = "/about"> About us </a>');
});

app.get('/contact', (req, res) => {
    res.send('<h1> Contact us page </h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1> About us page </h1>');
})

app.get('*', (req, res) => {
    res.send('404. This page does not exist. <a href="/"> Go to HomePage </a>');
})

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});