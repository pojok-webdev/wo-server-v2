create = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.quotation.create.mandatories,
        i.field.quotation.allfields,
        i.field.quotation.numberfields
        )
        if(chk.result){
            params = {
                tableName:tableName,columns:req.body
            }
            console.log('query quotation',i.query.quotation)
            i.connection.doQuery(i.query.quotation.create(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
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
}
request = {
    create:(req,res)=>{create(req,res,'quotation','offers')},
    update:(req,res)=>{update(req,res,'quotation','offers')},
    list:(req,res)=>{list(req,res,'quotation','offers')}
}

module.exports = {
    list:request.list,create:request.create,update:request.update
}