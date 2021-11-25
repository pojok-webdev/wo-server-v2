getByRequestId = obj => {
    sql = 'select id from survey_sites '
    sql+= 'where survey_request_id='+obj.survey_request_id+' '
    return sql
}
module.exports = {
    getByRequestId:getByRequestId
}