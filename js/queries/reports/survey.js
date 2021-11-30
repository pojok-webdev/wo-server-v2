var con = require('./../../connection'),
reportSurvey = {
    doInsert : (tableName,obj) => {
        console.log("Survey invoked",tableName)
        const myPromise = new Promise((resolve,reject)=>{
            obj.forEach(e=>{
                keys = []
                vals = []
                sql = 'insert into survey_' + tableName
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
    },
    modifyTables : obj => {
        let parent_fields = obj.parent_fields
        delete obj.parent_fields
        for(let el in obj){
            parent_fields.forEach(parent=>{
                for(let elem in parent){
                    obj[el][0][elem] = parent[elem]
                }
            })
        }
        return obj
    },
    saveObjs : async obj => {
        let tables = Object.keys(obj)
        const out = tables.map(async table=>{
            return await reportSurvey.doInsert(table,obj[table]).then(res=>{
                console.log('Res',res)
                return res
            })
        })
        const prm = await Promise.all(out)
        return prm
    }
}
module.exports = {
    saveObjs:reportSurvey.saveObjs,
    modifyTables:reportSurvey.modifyTables
}