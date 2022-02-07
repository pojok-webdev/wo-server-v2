var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    appconfig = require('./configs'),
    appSetting = appconfig.appSetting(),
    execute_transaction = require('./../js/execute/transactions'),
    execute_master = require('./../js/execute/masters'),
    execute_list = require('./../js/execute/lists'),
    fs = require('fs');
    const https = require('https')
    formidable = require('formidable');
    fs = require('fs');
    path = require('path');
    app.set('view engine','ejs')
    app.set('views',path.join(__dirname,'../help'))
    //app.use(express.static(__dirname+'/../help'))
    app.use(express.static(__dirname+'/../'))




   // app.engine('html',require('ejs').renderFile)
    app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))

module.exports = {
    execute:{
        transaction:execute_transaction,
        master:execute_master,
        list:execute_list
    },
    app:app,
    appSetting:appSetting,
    https:https,
    fs:fs
}