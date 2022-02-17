routines = {
    listall:obj=>{
        cols = []
        obj.columns.forEach(el=>{
            cols.push(el)
        })
        sql = 'select '+cols.join()+' from '+obj.tableName+' '
        console.log('SQL',sql)
        return sql
    },
    list:obj=>{
        cols = []
        obj.columns.forEach(el=>{
            cols.push(el)
        })
        sql = 'select '+cols.join()+' from '+obj.tableName+' '
        sql+= 'where '+obj.identifier+' = ' + obj.identifierValue
        console.log('SQL',sql)
        return sql
    },
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
        console.log('Create '+obj.tableName+' SQL',sql)
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
        console.log('Update '+obj.tableName+' SQL',sql)
        return sql
    },
    exclude: (objs,props) => {
        props.forEach(p=>{
            delete objs[p]
        })
        return objs
    },
    salemailtoid: (obj) => {
        console.log("OBJ got",obj)
        sql = 'select id from users where email = "' + obj.sale_email + '" ';
        return sql
    },
    saleidtomail: (obj) => {
        sql = 'select email from users where id = ' + obj.id + ' ';
        return sql
    }

}
module.exports = {
    listall:routines.listall,
    list:routines.list,
    create:routines.create,
    update:routines.update,
    exclude:routines.exclude,
    salemailtoid:routines.salemailtoid,
    saleidtomail:routines.saleidtomail
}