var express = require('express'),
app = express(),
path = require('path');
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'help'))
app.use(express.static(__dirname+'/help'))
app.use(express.static(__dirname+'/'))
app.get('/',(req,res)=>{
    res.render('home',{})
})
app.listen(4000, _=>{
    console.log('PadiApp help listen to port 4000')
})