i = require('./../../js/initmodules')
surveys = require('./surveys')
insertsuspect = (req,res) => {
    chk = i.check.transactions.check(req.body,i.field.suspect.mandatories,i.field.suspect.allfields,i.field.suspect.numberfields)
    if(chk.result){
        i.connection.doQuery(i.query.client.insertSuspect(req.body),result=>{
            res.send({result:true,insertId:result.insertId})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
}
updateclient = (req,res) => {
    chk = i.check.transactions.check(
        req.body,i.field.updateclient.mandatories,i.field.updateclient.allfields,i.field.updateclient.numberfields
        )
    if(chk.result){
        i.connection.doQuery(i.query.client.updateClient(req.body),result=>{
            res.send({result:true,description:result})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
}
install = {
    propose : (req,res) => {
        var pars = req.body
        chk = i.check.transactions.check(
            req.body,
            i.field.install.propose.mandatories,
            i.field.install.propose.allfields,
            i.field.install.propose.numberfields
            )
        if(chk.result){
            i.connection.doQuery(i.query.client.insertQuery({client_id:pars.client_id,pic_name:pars.pic_name,pic_phone:pars.pic_phone},'install_requests'),request=>{            
                i.connection.doQuery(i.query.client.insertQuery({client_site_id:pars.client_site_id,install_request_id:request.insertId,address:pars.address,city:pars.city,install_date:pars.install_date},'install_sites'),site=>{
                    res.send({result:true,install_request_id:request.insertId,install_site_id:site.insertId})
                })
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    },
    createreport : (req,res) => {
        let mdt = i.check.report.checkMandatory(req.body,i.field.report.install.mandatories)
        mdt.then(resu=>{
            let member = i.check.report.checkMandatoryMember(resu.params,resu.mandatory)
            member.then(resu=>{
                console.log('Install Report Body',req.body)
                i.query.report.install.saveObjs(
                    i.query.report.install.modifyTables(req.body)
                ).then(result=>{
                    res.send({result:true,"invoked_tables":result})
                },err=>{
                    res.send({result:false,description:err})
                })
            },err=>{
                res.send({result:false,description:err})
            })
        },err=>{
            res.send({result:false,description:err})
        })
    }
        
}
survey = {
    propose : (req,res) => {
        var pars = req.body
        chk = i.check.transactions.check(
            req.body,
            i.field.survey.propose.mandatories,
            i.field.survey.propose.allfields,
            i.field.survey.propose.numberfields
        )
        if(chk.result){
            i.connection.doQuery(i.query.client.insertQuery({client_id:pars.client_id,address:pars.address,city:pars.city,pic_name:pars.pic_name,pic_phone:pars.pic_phone},'client_sites'),clientsite=>{
                i.connection.doQuery(i.query.client.insertQuery({client_id:pars.client_id,branch_id:pars.branch_id,survey_date:pars.survey_date,address:pars.address,city:pars.city,pic_name:pars.pic_name,pic_phone:pars.pic_phone,client_site_id:clientsite.insertId},'survey_requests'),surveyrequest=>{
                    i.connection.doQuery(i.query.client.insertQuery({client_id:pars.client_id,address:pars.address,city:pars.city,branch_id:pars.branch_id,client_site_id:clientsite.insertId,survey_date:pars.survey_date,pic_name:pars.pic_name,pic_phone:pars.pic_phone,survey_request_id:surveyrequest.insertId},'survey_sites'),result=>{
                        res.send({result:true,client_site_id:clientsite.insertId,survey_request_id:surveyrequest.insertId,survey_site_id:result.insertId})
                    })
                })
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    },
    createreport : (req,res) => {
        let mdt = i.check.report.checkMandatory(req.body,i.field.survey.report.mandatories)
        mdt.then(resu=>{
            let member = i.check.report.checkMandatoryMember(resu.params,resu.mandatory)
            member.then(resu=>{
                i.query.report.survey.saveObjs(
                    i.query.report.survey.modifyTables(req.body)

                ).then(result=>{

                    res.send({result:true,"invoked_tables":result})

                },err=>{

                    res.send({result:false,description:err})
                })
            })
        },err=>{
            res.send({result:false,description:err})
        })
    },
    update : (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.update.mandatories,
            i.field.survey.update.allfields,
            i.field.survey.update.numberfields
            )
        if(chk.result){
            i.connection.doQuery(i.query.survey.update(req.body),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    },
    site:surveys.site,
    bas:surveys.bas,
    bts_distance:surveys.bts_distance,
    client_distance:surveys.client_distance
}

module.exports = {
    insertSuspect:insertsuspect,
    updateClient:updateclient,
    proposeInstall:install.propose,
    createInstallReport:install.createreport,
    proposeSurvey:survey.propose,
    createSurveyReport:survey.createreport,
    updateSurvey:survey.update,
    survey:survey
}