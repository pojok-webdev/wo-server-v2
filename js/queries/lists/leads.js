var listLead = {
    getLeadsByName : obj => {
        sql = 'select id,name from clients '
        sql+= 'where name like "%'+obj.name+'%"'
        return sql
    }
}
module.exports = {
    getLeadsByName:listLead.getLeadsByName
}