var transactionSurvey = {
    getLast : obj => {
        sql = 'select a.id,a.client_id,a.create_date,b.name from survey_requests a '
        sql+= 'left outer join clients b on b.id=a.client_id '
        sql+= 'order by create_date desc limit '+obj.segment+','+obj.offset+' '
        return sql
    },
    getByRequestId : obj => {
        sql = 'select id,address,city,client_site_id from survey_sites '
        sql+= 'where survey_request_id='+obj.survey_request_id+' '
        return sql
    },
    update : obj => {
        console.log('OBJ',obj)
        arr = []
            for(let el in obj){
                arr.push(el+'="'+obj[el]+'"')
            }
        sql = 'update survey_requests '
        sql+= 'set '+arr.join()+' '
        sql+= 'where id='+obj.id+' '
        return sql
    }
}
module.exports = {
    update:transactionSurvey.update,
    getLast:transactionSurvey.getLast,
    getByRequestId:transactionSurvey.getByRequestId
}