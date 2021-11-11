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
    check = i.check.client.check(req.body,i.fields.updateclient.mandatories,i.fields.updateclient.allfields,i.fields.updateclient.numberfields)
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
    i.query.report.install.saveObjs(req.body).then(result=>{
        console.log('Result',result)
        res.send(result)
    },err=>{
        console.log("Err",err)
        res.send(err)
    })

/*x = i.query.report.install.saveObjs(req.body)
    console.log(x)
    res.send(x)*/
})
i.app.post('/testpromise',(req,res)=>{
    i.query.report.install.testPromise().then(result=>{
        console.log(result)
        res.send({ok:result})
    },err=>{
        console.log(err)
        res.send(err)
    })
})
i.app.post('/test',(req,res)=>{
    i.query.report.install.saveObjs({
        antennas:[{name:"Grid 27 dBi 5.8 GHz",amount:1,location:"Tower 20 meter"}],
        ap_wifis:[{
            tipe:"Linksys WRT54GL",
            macboard:"B4750EBA5538",
            owner:"Bp.Kris/Ibu.Linda",
            ip_address:"192.168.1.2",essid:"sni",security_key:"freddy123",user:"root",password:"admin",location:"depan pintu"}
        ],
        bas:[{name:"ba"}]})
})
i.app.listen(process.env.PORT||i.appSetting.port)
