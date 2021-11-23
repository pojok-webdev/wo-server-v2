var connection = require('./connection'),
    connectionChained = require('./connectionchained'),
    master = {
        client : require('./../js/masters/clients'),
        service : [], vas : [], device : []
    },
    check = {
        client : require('./checks.js'),
        report : require('./checkReport'),
    },
    query = {
        client : require('./clientqueries'),
        report : {
            install : require('./installReportQueries')
        }
    },
    field = {
        suspect : require('./../app_modules/insertsuspect/fields'),
        updateclient : require('./../app_modules/updateclient/fields'),
        proposesurvey : require('./../app_modules/proposesurvey/fields'),
        proposeinstall : require('./../app_modules/proposeinstall/fields'),
        createReport : {
            install : require('./../app_modules/createreport/install/fields')
        }
    },
getclientpicbyclientid = (req,res) => {
    connectionChained.doQuery(master.client.getClientById({id:req.params.id,chain:'pic'}))
    .then(x=>{
        new Promise((resolve,reject)=>x.map(row=>{
            connectionChained.doQuery(master.client.getPicByClientId({id:row.id}))
            .then(pic=>{
                row.pic = pic
                resolve (row)
            },picerr=>{
                reject (picerr)
            })
        }))
        .then(pic=>{
            console.log('PIC res',pic)
            res.send ({'result':pic})
        },errpic=>{
            console.log('PIC err',errpic)
            res.send ({'result':errpic})
        })
    },err=>{
        console.log('Err',err)
        res.send({'result':err})
    })
}
insertsuspect = (req,res) => {
    chk = check.client.check(req.body,field.suspect.mandatories,field.suspect.allfields,field.suspect.numberfields)
    if(chk.result){
        connection.doQuery(query.client.insertSuspect(req.body),result=>{
            res.send({result:true,insertId:result.insertId})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
}
updateclient = (req,res) => {
    chk = check.client.check(
        req.body,field.updateclient.mandatories,field.updateclient.allfields,field.updateclient.numberfields
        )
    if(chk.result){
        connection.doQuery(query.client.updateClient(req.body),result=>{
            res.send(result)
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
}
proposesurvey = (req,res) => {
    var pars = req.body
    chk = check.client.check(req.body,field.proposesurvey.mandatories,field.proposesurvey.allfields,field.proposesurvey.numberfields)
    if(chk.result){
        connection.doQuery(query.client.insertQuery({client_id:pars.client_id,address:pars.address,city:pars.city,pic_name:pars.pic_name,pic_phone:pars.pic_phone},'client_sites'),clientsite=>{
            connection.doQuery(query.client.insertQuery({client_id:pars.client_id,branch_id:pars.branch_id,survey_date:pars.survey_date,address:pars.address,city:pars.city,pic_name:pars.pic_name,pic_phone:pars.pic_phone,client_site_id:clientsite.insertId},'survey_requests'),surveyrequest=>{
                connection.doQuery(query.client.insertQuery({client_id:pars.client_id,address:pars.address,city:pars.city,branch_id:pars.branch_id,client_site_id:clientsite.insertId,survey_date:pars.survey_date,pic_name:pars.pic_name,pic_phone:pars.pic_phone,survey_request_id:surveyrequest.insertId},'survey_sites'),result=>{
                    res.send({client_site_id:clientsite.insertId,survey_request_id:surveyrequest.insertId,survey_site_id:result.insertId})
                })
            })
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
}
proposeinstall = (req,res) => {
    var pars = req.body
    console.log('PInumberfields',field.proposeinstall.numberfields)
    console.log('PIallfields',field.proposeinstall.allfields)
    console.log('PImandatories',field.proposeinstall.mandatories)
    chk = check.client.check(req.body,field.proposeinstall.mandatories,field.proposeinstall.allfields,field.proposeinstall.numberfields)
    if(chk.result){
        connection.doQuery(query.client.insertQuery({client_id:pars.client_id,pic_name:pars.pic_name,pic_phone:pars.pic_phone},'install_requests'),request=>{            
            connection.doQuery(query.client.insertQuery({client_site_id:pars.client_site_id,install_request_id:request.insertId,address:pars.address,city:pars.city,install_date:pars.install_date},'install_sites'),site=>{
                res.send({result:true,install_request_id:request.insertId,install_site_id:site.insertId})
            })
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
}
createinstallreport = (req,res) => {
    let mdt = check.report.checkMandatory(req.body,field.createReport.install.mandatories)
    mdt.then(resu=>{
        console.log("Resmdt",resu)
        let member = check.report.checkMandatoryMember(resu.params,resu.mandatory)
        member.then(resu=>{
            console.log('Resu',resu)
            query.report.install.saveObjs(
                query.report.install.modifyTables(req.body)
            ).then(result=>{
                console.log('Result',result)
                res.send({result:true,"invoked_tables":result})
            },err=>{
                console.log("Err",err)
                res.send(err)
            })    
        },err=>{
            console.log('False',err)
            res.send({result:false,description:err})
        })
    },err=>{
        console.log("Err",err)
        res.send(err)
    })
}
module.exports = {
    getClientPicByClientId:getclientpicbyclientid,
    insertSuspect:insertsuspect,
    updateClient:updateclient,
    proposeSurvey:proposesurvey,
    proposeInstall:proposeinstall,
    createInstallReport:createinstallreport
}