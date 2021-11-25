getLast = obj => {
    sql = 'select a.id,a.client_id,a.create_date,b.name from survey_requests a '
    sql+= 'left outer join clients b on b.id=a.client_id '
    sql+= 'order by create_date desc limit '+obj.segment+','+obj.offset+' '
    return sql
}
module.exports = {
    getLast:getLast
}