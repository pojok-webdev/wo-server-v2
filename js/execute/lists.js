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
getclientsbyid = (req,res) =>{
    i.connection.doQuery(
        i.query.list.client.getClientsById(req.params),result=>{
            res.send({result:true,description:result})
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
        i.query.propose.survey.getLast(req.body),result=>{
            res.send({result:true,description:result})
        }
    )
}
module.exports = {
    getLeadsByName:getleadsbyname,
    getProspectsByName:getprospectsbyname,
    getClientsByName:getclientsbyname,
    getClientsById:getclientsbyid,
    getTicketsByClientName:getticketsbyclientname,
    getTicketsByClientId:getticketsbyclientid,
    getTicketsByKdTicket:getticketsbykdticket,
    getTicketsById:getticketsbyid,
    getClientServiceByClientId:getclientservicebyclientid,
    getSurveyProposal:getsurveyproposal
}