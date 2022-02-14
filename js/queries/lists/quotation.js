const routines = require("../../execute/routines")

var quotation = {
    listall:obj=>{return routines.listall(obj)},
    list:obj=>{return routines.list(obj)},
    create:obj=>{return routines.create(obj)},
    update:obj=>{return routines.update(obj)}

}
module.exports = {
    listall:quotation.listall,list:quotation.list,create:quotation.create,update:quotation.update
}