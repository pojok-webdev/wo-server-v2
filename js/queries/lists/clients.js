var listClient = {
    getClientsByName : obj => {
        sql = 'select id,name from clients '
        sql+= 'where name like "%'+obj.name+'%"'
        return sql
    },
    getClientsById : obj => {
        sql = 'select id,name from clients '
        sql+= 'where id = '+obj.id+' '
        return sql
    },
    getclientservicebyclientid : obj => {
        sql = 'select category, ';
        sql+= ' fb_id,c.name,bandwidth,upstr,dnstr,space '
        sql+= 'from clients a '
        sql+= 'left outer join fbs b on b.client_id=a.id '
        sql+= 'left outer join fbservices c on c.fb_id=b.nofb '
        sql+= 'where a.id = ' + obj.id + ' '
        sql+= 'and b.status="1" '
        console.log(sql)
        return sql
    }
}
module.exports = {
    getClientsByName:listClient.getClientsByName,
    getClientsById:listClient.getClientsById,
    getClientServiceByClientId:listClient.getclientservicebyclientid
}