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
getclientsbyname_ = (req,res) =>{
    i.connection.doQuery(
        i.query.list.client.getClientsByName(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getclientsbyname = (req,res) =>{
    i.connection.doQuery(
        routines.listlike({
            tableName:'clients',
            columns:['id','name','npwp','siup','address','city','billaddress','business_field','phone_area','phone','fax_area','fax','sale_id','user_id','period1','period2','createdate'],
            identifier:'name',
            identifierValue:req.body.name}),
        result=>{
            res.send({"description":result})
        }
    )
}
getclientsbyid_ = (req,res) =>{
    i.connection.doQuery(
        i.query.list.client.getClientsById(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getclientsbyid = (req,res) =>{
    i.connection.doQuery(
        routines.list({
            tableName:'clients',
            columns:['id','name','npwp','siup','address','city','billaddress','business_field','phone_area','phone','fax_area','fax','sale_id','user_id','period1','period2','createdate'],
            identifier:'id',
            identifierValue:req.body.id
        }),
        result=>{
            res.send({"description":result})
        }
    )
}
getticketsbyclientname = (req,res) => {
    i.connection.doQuery(
        i.query.ticket.getTicketByClientName(req.body),result=>{
            res.send({result:true,description:result})
        }
    )
}
getticketsbyclientid = (req,res) => {
    i.connection.doQuery(
        i.query.ticket.getTicketByClientId(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getticketsbyid = (req,res) => {
    i.connection.doQuery(
        i.query.ticket.getTicketById(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getticketsbykdticket = (req,res) => {
    i.connection.doQuery(
        i.query.ticket.getTicketByKdticket(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getclientservicebyclientid = (req,res) => {
    i.connection.doQuery(
        i.query.list.client.getClientServiceByClientId(req.params),result=>{
            res.send({result:true,description:result})
        }
    )
}
getsurveyproposal = (req,res) => {
    i.connection.doQuery(
        i.query.survey.getLast(req.body),result=>{
            res.send({result:true,description:result})
        }
    )
}
getsurveysitesbysurveyproposalid = (req,res) => {
    i.connection.doQuery(
        i.query.survey.getByRequestId(req.body),result=>{
            res.send({result:true,description:result})
        }
    )
}
module.exports = {
    getLeadsByName:getleadsbyname,
    getProspectsByName:getprospectsbyname,
    getClientsByName_:getclientsbyname_,
    getclientsbyname:getclientsbyname,
    getClientsById:getclientsbyid,
    getTicketsByClientName:getticketsbyclientname,
    getTicketsByClientId:getticketsbyclientid,
    getTicketsByKdTicket:getticketsbykdticket,
    getTicketsById:getticketsbyid,
    getClientServiceByClientId:getclientservicebyclientid,
    getSurveyProposal:getsurveyproposal,
    getSurveySitesBySurveyProposalId:getsurveysitesbysurveyproposalid
}