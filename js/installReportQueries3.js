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
    let savePromise = new Promise((resolve,reject)=>{
        for(let property in obj){
            //tmp.push(saveObj(property,obj[property]))
            doInsert(property,obj[property])
            .then(res=>{
                console.log("Final",property,res)
                tmp.push(res)
                //resolve(tmp)
            },err=>{
                console.log("Final err",err)
                reject(err)
            })
        }
        resolve(tmp)
    })
    savePromise
    .then(res=>{
        console.log('FINAL RES',res)
    },err=>{
        console.log('FINAL ERR',err)
    })
//console.log('stringified',JSON.stringify(tmp))
}
module.exports = {
    saveObjs:saveObjs
}