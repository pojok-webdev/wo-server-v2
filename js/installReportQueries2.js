var con = require('./connection')
saveObj = (tableName,obj,outArray) => {
    out = {tableName:tableName,rows:[]}
    myPromise = new Promise((resolve,resek)=>{
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
                outArray.push({'tableName':tableName,insertId:result.insertId})
                out.rows.push({insertId:result.insertId}) 
            })
            resolve(outArray)
        })
        console.log(sql)    
    })
    return myPromise
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
    return myPromise
}
saveObjs = async obj => {
/*    let myPromise = new Promise((resolve,reject)=>{
        tmp = []
        for(let property in obj){
            doInsert(property,obj[property]).then(res=>{
                console.log('RES',res)
                tmp.push(res)
            })
        }
        resolve(tmp)
    })
    return myPromise*/
    let tables = Object.keys(obj)
    return (tables.map(table=>{
        doInsert(table,obj[table]).then(res=>{
            console.log('Res',res)
            return res
        })
    })
    )

}
testPromise = _ => {
    let a = 0
    let myPromise = new Promise((resolve,reject)=>{
        for(let x=0;x<10;x++){
            a+=x
        }
        if('a'=='b'){
            reject({error:'error'})
        }else{
            resolve(a)
        }
    })
    return myPromise
}
module.exports = {
    saveObjs:saveObjs,
    testPromise:testPromise
}