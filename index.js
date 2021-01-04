const express = require('express')
const app = express()
const path = require('path')

const public = path.join(__dirname, 'public')

//accèdes au style css
app.use(express.static(public));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render('index.ejs')
;});

app.get('/about',(req, res) => {
    res.send('about')
;});

app.listen(3000, () => console.log('Server is running'))