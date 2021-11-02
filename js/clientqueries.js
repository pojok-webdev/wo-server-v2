insertSuspect = obj => {
    let keys = []
    let vals = []
    for(let property in obj){
        keys.push(''+property+'')
        vals.push(''+obj[property])
    }
    sql = 'insert into clients '
    sql+= '('+keys.join(',')+')'
    sql+= 'values '
    sql+= "('"+vals.join("','")+"')"
    console.log('insertSuspect Query:',sql)
    return sql
}
updateClient = obj => {
    let tmp = []
    sql = 'update clients set '
    for(let property in obj){
        tmp.push(''+property+'="'+obj[property]+'" ')
    }
    sql+= tmp.join(",")
    sql+= 'where id='+obj.id
    console.log('updateClient Query:',sql)
    return sql
}
insertQuery = (obj,tableName) => {
    let keys = []
    let vals = []
    for(let property in obj){
        keys.push(''+property+'')
        vals.push(''+obj[property])
    }
    sql = 'insert into '+tableName+' '
    sql+= '('+keys.join(',')+')'
    sql+= 'values '
    sql+= "('"+vals.join("','")+"')"
    console.log('insert'+tableName+' Query:',sql)
    return sql
}
module.exports = {
    insertSuspect:insertSuspect,
    updateClient:updateClient,
    insertQuery:insertQuery
}