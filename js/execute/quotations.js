var routines = require('./../execute/routines')
var create = (req,res,field,tableName) => {
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
                params = {
                    tableName:tableName,columns:req.body
                }
                console.log("Params req body",params.columns)
                console.log('query quotation',i.query.quotation)
                i.connection.doQuery(i.query.quotation.create(params),result=>{
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
        })
//    req.body.sale_id = routines.salemailtoid(req.body.sale_email)
},
update = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.quotation.update.mandatories,
        i.field.quotation.update.allfields,
        i.field.quotation.update.numberfields
        )
    if(chk.result){
        params = {
            identifier:'id',identifierValue:req.body.id,
            columns:req.body,tableName:tableName
        }
        i.connection.doQuery(i.query.quotation.update(params),result=>{
            res.send({result:true,description:result})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
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
request = {
    create:(req,res)=>{create(req,res,'quotation','offers')},
    update:(req,res)=>{update(req,res,'quotation','offers')},
    list:(req,res)=>{list(req,res,'quotation','offers')},
    listall:(req,res)=>{listall(req,res,'quotation','offers')}
}

module.exports = {
    listall:request.listall,list:request.list,create:request.create,update:request.update
}