var i = require('./js/initapp')
i.app.post('/insertsuspect',(req,res,next)=>{
    check = i.check.client.check(req.body,i.fields.suspect.mandatories,i.fields.suspect.allfields,i.fields.suspect.numberfields)
    if(check.result){
        i.connection.doQuery(i.query.client.insertSuspect(req.body),result=>{
            res.send({result:true,insertId:result.insertId})
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
i.app.post('/updateclient',(req,res)=>{
    check = i.check.client.check(
        req.body,i.fields.updateclient.mandatories,i.fields.updateclient.allfields,i.fields.updateclient.numberfields
        )
    if(check.result){
        i.connection.doQuery(i.query.client.updateClient(req.body),result=>{
            res.send(result)
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
i.app.post('/proposesurvey',(req,res)=>{
    var pars = req.body
    check = i.check.client.check(req.body,i.fields.proposesurvey.mandatories,i.fields.proposesurvey.allfields,i.fields.proposesurvey.numberfields)
    if(check.result){
        i.connection.doQuery(i.query.client.insertQuery({client_id:pars.client_id,address:pars.address,city:pars.city,pic_name:pars.pic_name,pic_phone:pars.pic_phone},'client_sites'),clientsite=>{
            i.connection.doQuery(i.query.client.insertQuery({client_id:pars.client_id,branch_id:pars.branch_id,survey_date:pars.survey_date,address:pars.address,city:pars.city,pic_name:pars.pic_name,pic_phone:pars.pic_phone,client_site_id:clientsite.insertId},'survey_requests'),surveyrequest=>{
                i.connection.doQuery(i.query.client.insertQuery({client_id:pars.client_id,address:pars.address,city:pars.city,branch_id:pars.branch_id,client_site_id:clientsite.insertId,survey_date:pars.survey_date,pic_name:pars.pic_name,pic_phone:pars.pic_phone,survey_request_id:surveyrequest.insertId},'survey_sites'),result=>{
                    res.send({client_site_id:clientsite.insertId,survey_request_id:surveyrequest.insertId,survey_site_id:result.insertId})
                })
            })
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
i.app.post('/proposeinstall',(req,res)=>{
    var pars = req.body
    check = i.check.client.check(req.body,i.fields.proposeinstall.mandatories,i.fields.proposeinstall.allfields,i.fields.proposeinstall.numberfields)
    if(check.result){
        i.connection.doQuery(i.query.client.insertQuery({client_id:pars.client_id,pic_name:pars.pic_name,pic_phone:pars.pic_phone},'install_requests'),request=>{            
            i.connection.doQuery(i.query.client.insertQuery({client_site_id:pars.client_site_id,install_request_id:request.insertId,address:pars.address,city:pars.city,install_date:pars.install_date},'install_sites'),site=>{
                res.send({result:true,install_request_id:request.insertId,install_site_id:site.insertId})
            })
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
i.app.post('/createreport',(req,res)=>{
    check = i.check.report.check(
        req.body,
        i.fields.createReport.install.mandatories,
        i.fields.createReport.install.allfields,
        i.fields.createReport.install.numberfields
    )
    if(check.result){
        i.query.report.install.saveObjs(
            i.query.report.install.modifyTables(req.body)
        ).then(result=>{
            console.log('Result',result)
            res.send({result:true,"invoked_tables":result})
        },err=>{
            console.log("Err",err)
            res.send(err)
        })
    }else{
        res.send({result:false,comment:check.description})
    }
})
i.app.post('/check',(req,res)=>{
    let mdt = i.check.report.checkMandatory(req.body,i.fields.createReport.install.mandatories)
    mdt.then(resu=>{
        console.log("Res",resu)
        res.send(resu)
    },err=>{
        console.log("Err",err)
        res.send(err)
    })
})
i.app.post('/checkdbl',(req,res)=>{
        let mdt = i.check.report.checkMandatory(req.body,i.fields.createReport.install.mandatories)
        mdt.then(resu=>{
            console.log("Resmdt",resu)
            //res.send(i.check.report.checkMandatoryMember(resu.params,resu.mandatory))
            let member = i.check.report.checkMandatoryMember(resu.params,resu.mandatory)
            member.then(resu=>{
                console.log('Resu',resu)
                res.send({result:true,description:resu})
            },err=>{
                console.log('False',err)
                res.send({result:false,description:err})
            })
        },err=>{
            console.log("Err",err)
            res.send(err)
        })
    })
    
i.app.listen(process.env.PORT||i.appSetting.port)
