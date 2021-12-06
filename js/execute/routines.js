routines = {
    update : obj =>{
        arr = []
        for(let e in obj.columns){
            arr.push(e+'="'+obj.columns[e]+'" ')
        }
        sql = 'update '+obj.tableName+' '
        sql+= 'set '+arr.join()+' '
        sql+= 'where ' + obj.identifier + ' = ' + obj.identifierValue
        return sql
    }
}
module.exports = {
    update:routines.update
}