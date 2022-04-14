i = require('./../initmodules')
r = require('./routines')
inspe = require('./../checks/padicheck')
getclientpicbyclientid = (req,res) => {
    i.connectionChained.doQuery(i.master.client.getClientById({id:req.body.id,chain:'pic'}))
    .then(x=>{
        new Promise((resolve,reject)=>x.map(row=>{
            i.connectionChained.doQuery(i.master.client.getPicByClientId({id:row.id}))
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

getmasterservice = (req,res) => {
    i.connection.doQuery(
        r.list({
            tableName:'pricelists2.products',
            columns:['id','category_id','product_id','name','price','discount'],
            conditions:[{identifier:'1',identifierValue:'1'}]
        }),result=>{
            res.send({result:true,description:result})
        }
    )
}
getmasterservicebyname = (req,res) => {
    inspe.inspect.init()
    .shouldHave(['name'])
    .setParam(req.body)
    .checkComplete()
    .todo(success=>{
        i.connection.doQuery(
            r.listlike({
                tableName:'pricelists2.products',
                columns:['id','category_id','product_id','name','price','discount'],
                identifier:'name',identifierValue:req.body.name
            }),result=>{
                res.send({result:true,description:result})
            }
        )
    },err=>{
        res.send({result:false,description:err})
    })
}
getmasterservicebyid = (req,res) => {
    inspe.inspect.init()
    .shouldHave(['id'])
    .setParam(req.body)
    .checkComplete()
    .todo(
        success=>{
            i.connection.doQuery(
                r.list({
                    tableName:'pricelists2.products',
                    columns:['id','category_id','product_id','name','price','discount'],
                    conditions:[{identifier:'id',identifierValue:req.body.id}]
                }),result=>{
                    res.send({result:true,description:result})
                }
            )        
        },
        err=>{
            res.send({result:false,description:err})
        }
    )
}
getmasterservicebycategory = (req,res) => {
    inspe.inspect.init()
    .shouldHave(['category_id'])
    .setParam(req.body)
    .checkComplete()
    .todo(
        success=>{
            i.connection.doQuery(
                r.list({
                    tableName:'pricelists2.products',
                    columns:['id','category_id','product_id','name','price','discount'],
                    conditions:[{identifier:'category_id',identifierValue:'"'+req.body.category_id+'"'}]
                }),result=>{
                    res.send({result:true,description:result})
                }
            )
        },
        err=>{
            res.send({result:false,description:err})
        }
    )
}
getmasterservicecategories = (req,res) => {
    i.connection.doQuery(
        r.listall({
            tableName:'pricelists2.products',
            columns:['id','category_id','product_id','name','price','discount']
        }),result=>{
            res.send({result:true,description:result})
        }
    )
}
getmastermaterial = (req,res) => {
    i.connection.doQuery(
        i.master.material.getMasterMaterials(),result=>{
            res.send({result:true,description:result})
        }
    )
}
getmastermaterialbyname = (req,res) => {
    i.connection.doQuery(
        i.master.material.getMasterMaterialByName(req.body),result=>{
            res.send({result:true,description:result})
        }
    )
}
getmastermaterialbyid = (req,res) => {
    i.connection.doQuery(
        i.master.material.getMasterMaterialById(req.body),result=>{
            res.send({result:true,description:result})
        }
    )
}
getmasterdevice = (req,res) => {
    i.connection.doQuery(
        i.master.device.getMasterDevice(),result=>{
            res.send({result:true,description:result})
        }
    )
}
getMasterDeviceByName = (req,res) => {
    i.connection.doQuery(
        i.master.device.getMasterDeviceByName(req.body),result=>{
            res.send({result:true,description:result})
        }
    )
}
getMasterDeviceById = (req,res) => {
    i.connection.doQuery(
        i.master.device.getMasterDeviceById(req.body),result=>{
            res.send({result:true,description:result})
        }
    )
}
getlistleadsbyname = (req,res) => {
    console.log("Whats up ?")
    i.connection.doQuery(
        //i.list.lead.getLeadsByName()
        r.listlike({
            tableName:'clients',
            columns:['id','name'],
            conditions:[{identifier:'name',identifierValue:req.body.name}]
        }),result=>{
            res.send({result:true,description:result})
        }
    )
}
module.exports = {
    getClientPicByClientId:getclientpicbyclientid,
    getMasterServiceCategories:getmasterservicecategories,
    getMasterService:getmasterservice,
    getMasterServiceByName:getmasterservicebyname,
    getMasterServiceById:getmasterservicebyid,
    getMasterServiceByCategory:getmasterservicebycategory,
    getMasterMaterial:getmastermaterial,
    getMasterMaterialByName:getmastermaterialbyname,
    getMasterMaterialById:getmastermaterialbyid,
    getMasterDevice:getmasterdevice,
    getListLeadsByName:getlistleadsbyname,
    getMasterDeviceByName:getMasterDeviceByName,
    getMasterDeviceById:getMasterDeviceById
}
