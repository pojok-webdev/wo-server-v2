var con = require('./connection')
doInsert = (tableName,obj) => {
    const myPromise = new Promise((resolve,reject)=>{
        obj.forEach(e=>{
            keys = []
            vals = []
            sql = 'insert into install_' + tableName
            for(let el in e){
                keys.push(el)
                vals.push(e[el])
            }
            sql+= '('+keys.join(',')+')'
            sql+= 'values '
            sql+= '("'+vals.join('","')+'")'
            con.doQuery(sql,result=>{
                console.log(tableName+' InsertId',result.insertId)
                resolve({'tableName':tableName,insertId:result.insertId}) 
            })
        })    
    })
    return myPromise
}
insertParents = (obj,parents) => {
    parents.forEach(parent=>{
        for(let el in parent){
            obj[el] = parent[el]
        }
    })

    parent_fields = obj['parent_fields']
    console.log('Parent Fields',parent_fields)
    let idx = tables.indexOf('parent_fields')
    console.log("Spliced",tables.splice(idx,1))
    splicedkey = tables.splice(idx,1)

}
saveObjs = async obj => {
    let tables = Object.keys(obj)
    
    const out = tables.map(async table=>{
        return await doInsert(table,obj[table]).then(res=>{
            console.log('Res',res)
            return res
        })
    })
    const prm = await Promise.all(out)
    return prm
}
module.exports = {
    saveObjs:saveObjs,
}