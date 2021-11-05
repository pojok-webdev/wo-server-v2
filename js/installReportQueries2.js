var con = require('./connection')
saveObj = (tableName,obj) => {
    out = {tableName:tableName,rows:[]}
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
            out.rows.push({insertId:result.insertId}) 
        })
        return out
    })
    console.log(sql)
}
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
    myPromise.then(res=>{
        console.log('1234',res)
        return(res)
    },err=>{
        console.log('Rejected',err)
    })
    return myPromise
}

saveObjs = obj => {
    tmp = []
    let myPromise = new Promise((resolve,reject)=>{
        for(let property in obj){
            tmp.push(saveObj(property,obj[property]))
        }
        resolve(tmp)
    })
    return myPromise.then(res=>{
        return res
    },err=>{
        return err
    })
}
module.exports = {
    saveObjs:saveObjs
}