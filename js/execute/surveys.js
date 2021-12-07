routines = require('./routines')
site = {
    update : (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.mandatories,
            i.field.survey.site.allfields,
            i.field.survey.site.numberfields
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
    update: obj => {
        arr = []
        for(let e in obj){
            arr.push(  e + '="' + obj[e] + '" ')
        }
        sql = 'update survey_bas '
        sql+= 'set ' + arr.join() + ' '
        sql+= 'where survey_site_id = ' + obj.survey_site_id
    }
}
module.exports = {
    site:site,
    request:request,
    bas:bas
}