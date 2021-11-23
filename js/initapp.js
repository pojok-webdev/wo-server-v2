var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    appconfig = require('./configs'),
    appSetting = appconfig.appSetting(),
    executor = require('./../js/executor');
    app.engine('html',require('ejs').renderFile)
    app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))

module.exports = {
    executor:executor,
    app:app,
    appSetting:appSetting,
}