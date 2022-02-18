const routines = require("../../execute/routines")

var quotation = {
    listall:obj=>{return routines.listall(obj)},
    list:obj=>{return routines.list(obj)},
    create:obj=>{return routines.create(obj)},
    update:obj=>{return routines.update(obj)},
    listallquotationservices:obj=>{return routines.list(obj)},
    updatequotationservice:obj=>{return routines.update(obj)},
    addquotationservice:obj=>{return routines.create(obj)}
}
module.exports = {
    listall:quotation.listall,list:quotation.list,create:quotation.create,update:quotation.update,
    listallquotationservices:quotation.listallquotationservices,
    updatequotationservice:quotation.updatequotationservice,
    addquotationservice:quotation.addquotationservice
}