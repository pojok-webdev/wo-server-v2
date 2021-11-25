getClientsByName = obj => {
    sql = 'select id,name from clients '
    sql+= 'where name like "%'+obj.name+'%"'
    return sql
}
getClientsById = obj => {
    sql = 'select id,name from clients '
    sql+= 'where id = '+obj.id+' '
    return sql
}
module.exports = {
    getClientsByName:getClientsByName,
    getClientsById:getClientsById
}