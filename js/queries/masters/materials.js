getMasterMaterials = _ => {
    sql = ' select a.id,b.name,a.name,a.satuan,a.description from materials a '
    sql+= 'left outer join materialtypes b on b.id=a.materialtype_id '
    console.log(sql)
    return sql
}
getMasterMaterialByName = obj => {
    sql = ' select a.id,b.name,a.name,a.satuan,a.description from materials a '
    sql+= 'left outer join materialtypes b on b.id=a.materialtype_id '
    sql+= 'where a.name like "%'+obj.name+'%" '
    console.log(sql)
    return sql
}
module.exports = {
    getMasterMaterials:getMasterMaterials,
    getMasterMaterialByName:getMasterMaterialByName
}