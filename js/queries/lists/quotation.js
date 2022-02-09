var quotation = {
    list:obj=>{return routines.list(obj)},
    create:obj=>{return routines.create(obj)},
    update:obj=>{return routines.update(obj)}

}
module.exports = {
    list:quotation.list,create:quotation.create,update:quotation.update
}