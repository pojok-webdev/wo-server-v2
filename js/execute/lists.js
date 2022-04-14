i = require('./../../js/initmodules')
r = require('./routines')
getleadsbyname = (req,res) =>{
    i.connection.doQuery(
        r.listlike({
            tableName:'clients',
            columns:['id','name'],
            identifier:'name',
            identifierValue:req.body.name
        }),result=>{
            res.send({result:true,description:result})
        }
    )
}
getprospectsbyname = (req,res) =>{
    i.connection.doQuery(
        /*i.query.list.prospect.getProspectsByName(req.params),result=>{
            res.send({result:true,description:result})
        }*/
        r.listlike({
            tableName:"clients",
            columns:['id','name'],
            identifier:'name',identifierValue:req.body.name
        }),result=>{
            res.send({result:true,description:result})
        }
    )
}
getclientsbyname_ = (req,res) =>{
    i.connection.doQuery(
        /*i.query.list.client.getClientsByName(req.params),result=>{
            res.send({result:true,description:result})
        }*/
        r.listlike({
            tableName:'clients',
            columns:['id','name','alias','npwp','siup','address','city','billaddress','business_field','phone_area','phone','fax_area','fax','sale_id','user_id','period1','period2'],identifier:'name',identifierValue:req.body.name
        }),result=>{
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
        /*i.query.ticket.getTicketByClientId(req.params),result=>{
            res.send({result:true,description:result})
        }*/
        r.list({
            tableName:"tickets",
            columns:['id','kdticket','clientname','create_date'],
            conditions:[{identifier:"client_id",identifierValue:req.body.client_id}]
        }),result=>{
            res.send({result:true,description:result})
        }
    )
}
getticketsbyid = (req,res) => {
    i.connection.doQuery(
        /*i.query.ticket.getTicketById(req.params),result=>{
            res.send({result:true,description:result})
        }*/
        r.list({
            tableName:'tickets',
            columns:['id','kdticket','clientname','create_date'],
            conditions:[{identifier:"id",identifierValue:req.body.id}]
        }),result=>{
            res.send({result:true,description:result})
        }
    )
}
getticketsbykdticket = (req,res) => {
    i.connection.doQuery(
     /*   i.query.ticket.getTicketByKdticket(req.params),result=>{
            res.send({result:true,description:result})
        }*/
        r.list({
            tableName:'tickets',
            columns:['id','kdticket','clientname','create_date'],
            conditions:[{identifier:"kdticket",identifierValue:'"'+req.body.kdticket+'"'}]
        }),result=>{
            res.send({result:true,description:result})
        }
        )
}
getclientservicebyclientid = (req,res) => {
    i.connection.doQuery(
        i.query.list.client.getClientServiceByClientId(req.body),result=>{
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
        r.list({tableName:'survey_sites',columns:['id','address','city','client_site_id'],conditions:[{identifier:'survey_request_id',identifierValue:req.body.survey_request_id}]}),result=>{
            res.send({result:result})
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