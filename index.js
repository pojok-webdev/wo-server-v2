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
app.post('/updateclient',(req,res)=>{
    var shouldhave = ['id']
    var allcols = ['name','phone_area','phone','address','city','end_of_contract','business_field','status','alias','user_id','sale_id','siup','npwp','clientcategory','isffr','isoryza','active','prospectdate']
    check = checkparams.check(req.body,shouldhave,allcols)
    if(check.result){
        connection.doQuery(clientqueries.updateClient(req.body),result=>{
            res.send(result)
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
app.post('/proposesurvey',(req,res)=>{
    var shouldhave = ['client_id','branch_id','survey_date','address','city','pic_name','pic_phone']
    var allcols = ['client_id','branch_id','survey_date','address','city','pic_name','pic_phone','pic_email','pic_position','has_ladder']
    var pars = req.body
    check = checkparams.check(req.body,shouldhave,allcols,['client_id'])
    if(check.result){
        connection.doQuery(clientqueries.insertQuery({client_id:pars.client_id,address:pars.address,city:pars.city,pic_name:pars.pic_name,pic_phone:pars.pic_phone},'client_sites'),clientsite=>{
            
            
            connection.doQuery(clientqueries.insertQuery({client_id:pars.client_id,branch_id:pars.branch_id,survey_date:pars.survey_date,address:pars.address,city:pars.city,pic_name:pars.pic_name,pic_phone:pars.pic_phone,client_site_id:clientsite.insertId},'survey_requests'),surveyrequest=>{

            
                connection.doQuery(clientqueries.insertQuery({client_id:pars.client_id,address:pars.address,city:pars.city,branch_id:pars.branch_id,client_site_id:clientsite.insertId,survey_date:pars.survey_date,pic_name:pars.pic_name,pic_phone:pars.pic_phone,survey_request_id:surveyrequest.insertId},'survey_sites'),result=>{
                    res.send({client_site_id:clientsite.insertId,survey_request_id:surveyrequest.insertId,survey_site_id:result.insertId})
                })
            })    
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
app.post('/proposeinstall',(req,res)=>{
    var shouldhave = ['client_id','client_site_id','install_date','address','city','pic_name','pic_phone']
    var allcols = ['client_id','address','city','pic_name','pic_phone','pic_email','pic_position','install_date']
    var pars = req.body
    check = checkparams.check(req.body,shouldhave,allcols,['client_id','client_site_id'])
    if(check.result){
        connection.doQuery(clientqueries.insertQuery({client_id:pars.client_id,pic_name:pars.pic_name,pic_phone:pars.pic_phone},'install_requests'),request=>{
            
            connection.doQuery(clientqueries.insertQuery({client_site_id:pars.client_site_id,install_request_id:request.insertId,address:pars.address,city:pars.city,install_date:pars.install_date},'install_sites'),site=>{
                res.send({result:true,install_request_id:request.insertId,install_site_id:site.insertId})
            })
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
app.post('/test',(req,res)=>{
    if(checkparams.checkInteger(['1'],1)){
        res.send({result:'ok'})
    }else{
        res.send({result:'false'})
    }
})
app.listen(process.env.PORT||appSetting.port)
