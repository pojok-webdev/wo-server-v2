var routines = require('./../execute/routines')
var saveServices = (obj)=>{
    obj.services.forEach(service=>{
        console.log("Result",obj.offer_id)
        console.log("name",service.servicename)
        console.log("price",service.price)
        console.log("price",service.capacity)
        i.connection.doQuery(routines.create({
            tableName:"offer_services",
            columns:{
                servicename:service.servicename,
                price:service.price,
                capacity:service.capacity,
                offer_id:obj.offer_id
            }
        }),result=>{
            console.log("Execution result",result)
        })
    })
},
create = (req,res,field,tableName) => {
    console.log("SQL",routines.salemailtoid(req.body))
    i.connection.doQuery(routines.salemailtoid(req.body),result=>{
        console.log("email sales",req.body.sale_email)
        console.log("ID From Email",result[0].id)
        chk = i.check.transactions.check(
            req.body,i.field.quotation.create.mandatories,
            i.field.quotation.create.allfields,
            i.field.quotation.numberfields
            )
            if(chk.result){
                req.body.sale_id = result[0].id
                delete req.body.sale_email
                services = req.body.services
                delete req.body.services
                params = {
                    tableName:tableName,columns:req.body
                }
                console.log("Params req body",params.columns)
                console.log('query quotation',i.query.quotation)
                i.connection.doQuery(i.query.quotation.create(params),result=>{
                    saveServices({offer_id:result.insertId,services:services})
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
        })
},checkSalemail = (obj,callback) => {
    if(obj.hasOwnProperty('sale_email')){
        console.log("OBJ got",obj)
        i.connection.doQuery(routines.salemailtoid(obj),result=>{
            console.log('salemailtoid result',result)
            obj.sale_id = result[0].id
            delete obj.sale_email
            callback(obj)
        })
    }else{
        callback(obj)
    }
},
update = (req,res,field,tableName) => {
    checkSalemail(req.body,obj=>{
        console.log("OBJ after remove sales email",obj)
        chk = i.check.transactions.check(
            obj,i.field.quotation.update.mandatories,
            i.field.quotation.update.allfields,
            i.field.quotation.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:obj.id,
                columns:obj,tableName:tableName
            }
            i.connection.doQuery(i.query.quotation.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }    
    })
},
list = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.quotation.mandatories,
        i.field.quotation.allfields,
        i.field.quotation.numberfields
        )
    if(chk.result){
        params = {
            identifier:'id',identifierValue:req.body.client_id,
            columns:['kdoffer','clientname','email'],tableName:tableName
        }
        i.connection.doQuery(i.query.quotation.list(params),result=>{
            res.send({result:true,description:result})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }    
},
listall = (req,res,field,tableName) => {
    console.log('execute listall invoked')
    chk = i.check.transactions.check(
        req.body,i.field.quotation.listall.mandatories,
        i.field.quotation.allfields,
        i.field.quotation.numberfields
        )
    if(chk.result){
        params = {
            identifier:'id',identifierValue:req.body.client_id,
            columns:['id','kdoffer','clientname','email'],tableName:tableName
        }
        i.connection.doQuery(i.query.quotation.listall(params),result=>{
            res.send({result:true,description:result})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
},
listallquotationservices = (req,res,field,tableName) => {
    console.log('execute listall invoked')
    chk = i.check.transactions.check(
        req.body,i.field.quotation.listallquotationservices.mandatories,
        i.field.quotation.listallquotationservices.allfields,
        i.field.quotation.listallquotationservices.numberfields
        )
    if(chk.result){
        params = {
            identifier:'offer_id',identifierValue:req.body.offer_id,
            columns:i.field.quotation.listallquotationservices.allfields,tableName:tableName
        }
        i.connection.doQuery(i.query.quotation.listallquotationservices(params),result=>{
            res.send({result:true,description:result})
        })
    }else{addquotationservice
        res.send({result:false,comment:chk.description})
    }
},
updatequotationservice = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.quotation.updatequotationservice.mandatories,
        i.field.quotation.updatequotationservice.allfields,
        i.field.quotation.updatequotationservice.numberfields
        )
    if(chk.result){
        params = {
            identifier:'id',identifierValue:req.body.id,
            columns:req.body,tableName:tableName
        }
        i.connection.doQuery(i.query.quotation.updatequotationservice(params),result=>{
            res.send({result:true,description:result})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }    
},
addquotationservice = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.quotation.addquotationservice.mandatories,
        i.field.quotation.addquotationservice.allfields,
        i.field.quotation.addquotationservice.numberfields
        )
        if(chk.result){
            params = {
                tableName:tableName,columns:req.body
            }
            console.log("TABLENAME",tableName)
            console.log("Params req body",params.columns)
            console.log('query quotation',i.query.quotation)
            i.connection.doQuery(i.query.quotation.addquotationservice(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }

},
removequotationservice = (req,res,field,tableName)=>{
    chk = i.check.transactions.check(
        req.body,i.field.quotation.removequotationservice.mandatories,
        i.field.quotation.removequotationservice.allfields,
        i.field.quotation.numberfields
        )
        if(chk.result){
            params = {
                tableName:tableName,columns:req.body
            }
            i.connection.doQuery(routines.remove({
                tableName:'offer_services',identifier:'id',identifierValue:req.body.id
            }),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }    
}
request = {
    create:(req,res)=>{create(req,res,'quotation','offers')},
    update:(req,res)=>{update(req,res,'quotation','offers')},
    list:(req,res)=>{list(req,res,'quotation','offers')},
    listall:(req,res)=>{listall(req,res,'quotation','offers')},
    listallquotationservices:(req,res)=>{listallquotationservices(req,res,'quotationservices','offer_services')},
    updatequotationservice:(req,res)=>{updatequotationservice(req,res,'quotationservices','offer_services')},
    addquotationservice:(req,res)=>{addquotationservice(req,res,'quotationservices','offer_services')},
    removequotationservice:(req,res)=>{removequotationservice(req,res,'quotationservices','offer_services')}
}

module.exports = {
    listall:request.listall,
    list:request.list,
    create:request.create,
    update:request.update,
    listallquotationservices:request.listallquotationservices,
    updatequotationservice:request.updatequotationservice,
    addquotationservice:request.addquotationservice,
    removequotationservice:request.removequotationservice
}