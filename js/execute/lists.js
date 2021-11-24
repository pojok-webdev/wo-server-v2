i = require('./../../js/initmodules')
getleadsbyname = (req,res) =>{
    i.connection.doQuery(
        i.query.list.lead.getLeadsByName(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getprospectsbyname = (req,res) =>{
    i.connection.doQuery(
        i.query.list.prospect.getProspectsByName(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getclientsbyname = (req,res) =>{
    i.connection.doQuery(
        i.query.list.client.getClientsByName(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
module.exports = {
    getLeadsByName:getleadsbyname,
    getProspectsByName:getprospectsbyname,
    getClientsByName:getclientsbyname
}