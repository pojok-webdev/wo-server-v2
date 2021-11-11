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