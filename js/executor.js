var connection = require('./connection'),
    connectionChained = require('./connectionchained'),
    masterClient = require('./../js/masters/clients'),
    checkClient = require('./checks.js'),
    fieldSuspect = require('./../app_modules/insertsuspect/fields'),
    queryClient = require('./clientqueries'),
    fieldupdateclient = require('./../app_modules/updateclient/fields'),

getclientpicbyclientid = (req,res) => {
    connectionChained.doQuery(masterClient.getClientById({id:req.params.id,chain:'pic'}))
    .then(x=>{
        new Promise((resolve,reject)=>x.map(row=>{
            connectionChained.doQuery(masterClient.getPicByClientId({id:row.id}))
            .then(pic=>{
                row.pic = pic
                resolve (row)
            },picerr=>{
                reject (picerr)
            })
        }))
        .then(pic=>{
            console.log('PIC res',pic)
            res.send ({'result':pic})
        },errpic=>{
            console.log('PIC err',errpic)
            res.send ({'result':errpic})
        })
    },err=>{
        console.log('Err',err)
        res.send({'result':err})
    })
}
insertsuspect = (req,res) => {
    check = checkClient.check(req.body,fieldSuspect.mandatories,fieldSuspect.allfields,fieldSuspect.numberfields)
    if(check.result){
        connection.doQuery(queryClient.insertSuspect(req.body),result=>{
            res.send({result:true,insertId:result.insertId})
        })
    }else{
        res.send({result:false,comment:check.description})
    }
}
updateclient = (req,res) => {
    check = checkClient.check(
        req.body,fieldupdateclient.mandatories,fieldupdateclient.allfields,fieldupdateclient.numberfields
        )
    if(check.result){
        connection.doQuery(queryClient.updateClient(req.body),result=>{
            res.send(result)
        })
    }else{
        res.send({result:false,comment:check.description})
    }
}
module.exports = {
    getClientPicByClientId:getclientpicbyclientid,
    insertSuspect:insertsuspect,
    updateClient:updateclient
}