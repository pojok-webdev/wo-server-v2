saveObj = (tableName,obj) => {
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
        sql+= '("'+vals.join("','")+'")'
    })
    console.log(sql)
}
saveObjs = obj => {
    for(let property in obj){
        saveObj(property,obj[property])
    }
}
module.exports = {
    saveObjs:saveObjs
}