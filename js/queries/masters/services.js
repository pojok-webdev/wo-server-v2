getMasterServices = _ => {
    sql = 'select id,category_id,product_id,name,price,discount from pricelists2.products    '
    console.log(sql)
    return sql
}
getMasterServiceByName = obj => {
    console.log('OBJ',obj)
    let sql = 'select id,category_id,product_id,name,price,discount from pricelists2.products '
    sql+= 'where name like "%'+obj.name+'%" '
    console.log('SQL',sql)
    return sql
}
getMasterServiceByCategory = obj => {
    console.log('OBJ',obj)
    let sql = 'select id,category_id,product_id,name,price,discount from pricelists2.products '
    sql+= 'where category_id="'+obj.category_id+'" '
    console.log('SQL',sql)
    return sql
}
module.exports = {
    getMasterServices:getMasterServices,
    getMasterServiceByName:getMasterServiceByName,
    getMasterServiceByCategory:getMasterServiceByCategory,
}