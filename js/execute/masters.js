i = require('./../initmodules')
getclientpicbyclientid = (req,res) => {
    i.connectionChained.doQuery(i.master.client.getClientById({id:req.params.id,chain:'pic'}))
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
    i.connection.doQuery(i.master.service.getMasterServices(),result=>{
        res.send({result:true,description:result})
    })
}
getmasterservicebyname = (req,res) => {
    i.connection.doQuery(
        i.master.service.getMasterServiceByName(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getmasterservicebyid = (req,res) => {
    i.connection.doQuery(
        i.master.service.getMasterServiceById(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getmasterservicebycategory = (req,res) => {
    i.connection.doQuery(
        i.master.service.getMasterServiceByCategory(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getmasterservicecategories = (req,res) => {
    i.connection.doQuery(
        i.master.service.getMasterServiceCategories(req.params),result=>{
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
        i.master.material.getMasterMaterialByName(req.params),result=>{
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
        i.master.device.getMasterDeviceByName(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getMasterDeviceById = (req,res) => {
    i.connection.doQuery(
        i.master.device.getMasterDeviceById(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getlistleadsbyname = (req,res) => {
    i.connection.doQuery(
        i.list.lead.getLeadsByName()
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
    getMasterDevice:getmasterdevice,
    getListLeadsByName:getlistleadsbyname,
    getMasterDeviceByName:getMasterDeviceByName,
    getMasterDeviceById:getMasterDeviceById
}
