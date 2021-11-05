var express = require('express'),
    app = express(),
    connection = require('./connection'),
    clientqueries = require('./clientqueries'),
    installReportQueries = require('./installReportQueries2'),
    bodyParser = require('body-parser'),
    appconfig = require('./configs'),
    appSetting = appconfig.appSetting(),
    checkClient = require('./checks.js'),
    checkReport = require('./checkReport'),
    suspect = require('./../app_modules/insertsuspect/fields'),
    updateclient = require('./../app_modules/updateclient/fields'),
    proposesurvey = require('./../app_modules/proposesurvey/fields'),
    proposeinstall = require('./../app_modules/proposeinstall/fields'),
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
    connection:connection,
    check:{
        client:checkClient,
        report:checkReport
    },
    query:{
        client:clientqueries,
        report:{
            install:installReportQueries
        },    
    },
    app:app,
    appSetting:appSetting,
    fields:{
        suspect:suspect,
        updateclient:updateclient,
        proposesurvey:proposesurvey,
        proposeinstall:proposeinstall,
        createReport:createReport
    }
}