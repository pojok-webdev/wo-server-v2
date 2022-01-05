var masterDevice = {
    getMasterDevice : _ => {
        sql = ' select a.id,b.name category,a.name,a.unit,a.brand,a.description from pricelists2.devices a '
        sql+= 'left outer join pricelists2.devicecategories b on b.id=a.category_id '
        console.log(sql)
        return sql
    },
    getMasterDeviceByName : obj => {
        sql = ' select a.id,b.name category,a.name,a.unit,a.brand,a.description from pricelists2.devices a '
        sql+= 'left outer join pricelists2.devicecategories b on b.id=a.category_id '
        sql+= 'where a.name like "%' + obj.name + '%" '
        console.log(sql)
        return sql
    }
}
module.exports = {
    getMasterDevice:masterDevice.getMasterDevice,
    getMasterDeviceByName:masterDevice.getMasterDeviceByName
}