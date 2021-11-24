getTicketByClientId = obj => {
    sql = 'select a.id,a.clientname,a.create_date from clients a '
    sql+= 'left outer join client_sites b on b.client_id=a.id '
    sql+= 'left outer join tickets c on c.client_site_id=b.id '
    sql+= 'where a.id='+obj.id+' '
    return sql
}
getTicketByClientName = obj => {
    sql = 'select a.id,a.clientname,a.create_date from clients a '
    sql+= 'left outer join client_sites b on b.client_id=a.id '
    sql+= 'left outer join tickets c on c.client_site_id=b.id '
    sql+= 'where a.name like "%'+obj.id+'%" '
    return sql
}
module.exports = {
    getTicketByClientId:getTicketByClientId,
    getTicketByClientName:getTicketByClientName
}