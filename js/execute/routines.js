routines = {
    create: obj => {
        keys = []
        vals = []
        for(let e in obj.columns){
            keys.push(e)
            vals.push(obj.columns[e])
        }
        sql = 'insert into ' + obj.tableName + ' '
        sql+= '('+keys.join()+')'
        sql+= 'values '
        sql+= '("'+vals.join('","')+'")'
        console.log('Create SQL',sql)
        return sql
    },
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
    create:routines.create,
    update:routines.update
}