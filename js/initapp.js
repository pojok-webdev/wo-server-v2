var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    appconfig = require('./configs'),
    appSetting = appconfig.appSetting(),
    help = require('./../js/help/index'),
    execute_transaction = require('./../js/execute/transactions'),
    execute_master = require('./../js/execute/masters'),
    execute_list = require('./../js/execute/lists');
    app.engine('html',require('ejs').renderFile)
    app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))

module.exports = {
    execute:{
        help:help,
        transaction:execute_transaction,
        master:execute_master,
        list:execute_list
    },
    help:help,
    app:app,
    appSetting:appSetting,
}