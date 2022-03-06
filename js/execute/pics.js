create = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.pic.create.mandatories,
        i.field.pic.allfields,
        i.field.pic.numberfields
        )
        if(chk.result){
            params = {
                tableName:tableName,columns:req.body
            }
            console.log('query pic',i.query.pic)
            i.connection.doQuery(i.query.pic.create(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
},
update = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.pic.update.mandatories,
        i.field.pic.update.allfields,
        i.field.pic.update.numberfields
        )
    if(chk.result){
        params = {
            identifier:'id',identifierValue:req.body.id,
            columns:req.body,tableName:tableName
        }
        i.connection.doQuery(i.query.pic.update(params),result=>{
            res.send({result:true,description:result})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
},
list = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.pic.mandatories,
        i.field.pic.allfields,
        i.field.pic.numberfields
        )
    if(chk.result){
        params = {
            identifier:'client_id',identifierValue:req.body.client_id,
            columns:['id','name','position','hp'],tableName:tableName
        }
        i.connection.doQuery(i.query.pic.list(params),result=>{
            res.send({result:true,description:result})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
}
getbyid = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.pic.mandatories,
        i.field.pic.allfields,
        i.field.pic.numberfields
        )
    if(chk.result){
        params = {
            identifier:'id',identifierValue:req.body.id,
            columns:['id','name','position','hp'],tableName:tableName
        }
        i.connection.doQuery(i.query.pic.list(params),result=>{
            res.send({result:true,description:result})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
}
request = {
    create:(req,res)=>{create(req,res,'pic','pics')},
    update:(req,res)=>{update(req,res,'pic','pics')},
    list:(req,res)=>{list(req,res,'pic','pics')},
    getbyid:(req,res)=>{getbyid(req,res,'pic','pics')}
}

module.exports = {
    list:request.list,create:request.create,update:request.update,getbyid:request.getbyid
}