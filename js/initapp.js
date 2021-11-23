var express = require('express'),
    app = express(),
    //connection = require('./connection'),
    connectionChained = require('./connectionchained'),
    clientqueries = require('./clientqueries'),
    masterClient = require('./../js/masters/clients'),
    installReportQueries = require('./installReportQueries'),
    bodyParser = require('body-parser'),
    appconfig = require('./configs'),
    appSetting = appconfig.appSetting(),
    checkClient = require('./checks.js'),
    checkReport = require('./checkReport'),
    suspect = require('./../app_modules/insertsuspect/fields'),
    updateclient = require('./../app_modules/updateclient/fields'),
    proposesurvey = require('./../app_modules/proposesurvey/fields'),
    proposeinstall = require('./../app_modules/proposeinstall/fields'),
    executor = require('./../js/executor'),
    createReport = require('./../app_modules/createreport/install/fields');
    app.engine('html',require('ejs').renderFile)
    app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))

module.exports = {
    //connection:connection,
    connectionChained:connectionChained,
    executor:executor,
    check:{
        client:checkClient,
        report:checkReport
    },
    query:{
        client:clientqueries,
        report:{
            install:installReportQueries
        },
        masters:{clients:masterClient}
    },
    app:app,
    appSetting:appSetting,
    fields:{
        suspect:suspect,
        updateclient:updateclient,
        proposesurvey:proposesurvey,
        proposeinstall:proposeinstall,
        createReport:{install:createReport}
    }
}