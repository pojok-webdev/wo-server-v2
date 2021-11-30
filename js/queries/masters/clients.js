var masterClient = {
    getClientById : param => {
        if(param.chain){
            sql = 'select id,name,alias,"" '+param.chain+' from '
            sql+= ' clients '
            sql+= 'where id='+param.id
        }else{
            sql = 'select id,name,alias from '
            sql+= ' clients '
            sql+= 'where id='+param.id
        }
        console.log('GetClientById',sql)
        return sql
    },
    getPicByClientId : obj => {
        sql = 'select c.email,c.role,c.name,c.position from clients a '
        sql+= 'left outer join fbs b on b.client_id=a.id '
        sql+= 'left outer join fbpics c on c.nofb=b.nofb '
        sql+= 'where a.id = ' + obj.id + ' '
        console.log(sql)
        return sql
    }
}
module.exports = {
    getClientById:masterClient.getClientById,
    getPicByClientId:masterClient.getPicByClientId
}