var express = require('express'),
    app = express(),
    connection = require('./js/connection'),
    clientqueries = require('./js/clientqueries'),
    bodyParser = require('body-parser'),
    appconfig = require('./js/configs'),
    appSetting = appconfig.appSetting(),
    checkparams = require('./js/checks.js');
    app.engine('html',require('ejs').renderFile)
    app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))
insertProspect = (obj,callback)=>{
  connection.doQuery(clientqueries.insertProspect(obj),result=>{
    console.log('Result',result)
      callback(result)
  })
}
app.post('/insertsuspect',(req,res,next)=>{
    var shouldhave = ['name','phone_area','phone','address','end_of_contract','business_field']
    var allcols = ['name','phone_area','phone','address','city','end_of_contract','business_field','status','alias','user_id','sale_id','siup','npwp','clientcategory','isffr','isoryza']
    check = checkparams.check(req.body,shouldhave,allcols)
    if(check.result){
        connection.doQuery(clientqueries.insertSuspect(req.body),result=>{
            res.send({result:true,insertId:result.insertId})
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
app.post('/insertprospect',(req,res,next)=>{
    var shouldhave = ['name','email','sales_email','phone_area','phone','address','prospectdate','end_of_contract','business_field']
    var allcols = ['name','phone_area','phone','address','end_of_contract','business_field']
    check = checkparams.check(req.body,shouldhave,allcols)
    if(check.result){
        connection.doQuery(clientqueries.insertProspect(req.body),result=>{
            res.send({result:true,insertId:result.insertId})
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
app.post('/updateclientstatus',(req,res)=>{
    console.log("updateclientstatus invoked")
    var shouldhave = ['id','status','active']
    check = checkparams.check(req.body,shouldhave)
    if(check.result){
        connection.doQuery(clientqueries.updateClientStatus(req.body),result=>{
            res.send(result)
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
app.post('/updateclient',(req,res)=>{
    console.log("updateclients invoked")
    var shouldhave = ['id']
    check = checkparams.check(req.body,shouldhave,allcols)
    if(check.result){
        connection.doQuery(clientqueries.updateClient(req.body),result=>{
            res.send(result)
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
app.listen(process.env.PORT||appSetting.port)
