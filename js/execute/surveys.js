routines = require('./routines')
site = {
    update : (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.sites.update.mandatories,
            i.field.survey.site.sites.update.allfields,
            i.field.survey.site.sites.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_sites'
            }
            i.connection.doQuery(i.query.survey.site.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    },
    getByRequestId: obj =>{
        sql = 'select id from survey_sites '
        sql+= 'where survey_request_id = ' + obj.survey_request_id
        return sql
    }
}
request = {
    gets: obj => {
        sql = 'select id from survey_requests '
        sql+= 'order by create_date desc limit ' + obj.segment + ',' + obj.offset
        return sql
    }
}
bas =  {
    update:  (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.bas.update.mandatories,
            i.field.survey.site.bas.update.allfields,
            i.field.survey.site.bas.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_bas'
            }
            i.connection.doQuery(i.query.survey.bas.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    }
}
bts_distance = {
    update:  (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.bts_distance.update.mandatories,
            i.field.survey.site.bts_distance.update.allfields,
            i.field.survey.site.bts_distance.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_bts_distances'
            }
            i.connection.doQuery(i.query.survey.bts_distance.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    }
}
client_distance = {
    create: (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.client_distance.create.mandatories,
            i.field.survey.site.client_distance.create.allfields,
            i.field.survey.site.client_distance.create.numberfields
            )
            if(chk.result){
                params = {
                    tableName:'survey_client_distances',columns:req.body
                }
                i.connection.doQuery(i.query.survey.client_distance.create(params),result=>{
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
    },
    update: (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.client_distance.update.mandatories,
            i.field.survey.site.client_distance.update.allfields,
            i.field.survey.site.client_distance.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_client_distances'
            }
            i.connection.doQuery(i.query.survey.client_distance.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    }
}
module.exports = {
    site:site,
    request:request,
    bas:bas,bts_distance:bts_distance,
    client_distance:client_distance
}