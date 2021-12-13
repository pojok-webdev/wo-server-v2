var pic = {
    list:obj=>{return routines.list(obj)},
    create:obj=>{return routines.create(obj)},
    update:obj=>{return routines.update(obj)}

}
module.exports = {
    list:pic.list,create:pic.create,update:pic.update
}