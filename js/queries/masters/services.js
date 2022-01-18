var masterService = {
    getMasterServiceCategories : _=>{
        sql = 'select id,category_id,createdate from pricelists2.categories '
        return sql
    },
    getMasterServices : _ => {
        sql = 'select id,category_id,product_id,name,price,discount from pricelists2.products    '
        console.log(sql)
        return sql
    },
    getMasterServiceByName : obj => {
        console.log('OBJ',obj)
        let sql = 'select id,category_id,product_id,name,price,discount from pricelists2.products '
        sql+= 'where name like "%'+obj.name+'%" '
        console.log('SQL',sql)
        return sql
    },
    getMasterServiceByCategory : obj => {
        console.log('OBJ',obj)
        let sql = 'select id,category_id,product_id,name,price,discount from pricelists2.products '
        sql+= 'where category_id="'+obj.category_id+'" '
        console.log('SQL',sql)
        return sql
    }
}
module.exports = {
    getMasterServiceCategories:masterService.getMasterServiceCategories,
    getMasterServices:masterService.getMasterServices,
    getMasterServiceByName:masterService.getMasterServiceByName,
    getMasterServiceByCategory:masterService.getMasterServiceByCategory,
}