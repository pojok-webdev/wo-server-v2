var connection = require('./connection'),
    connectionChained = require('./connectionchained'),
    master = {
        client : require('./queries/masters/clients'),
        service : require('./queries/masters/services'), 
        vas : [], 
        device : require('./queries/masters/devices'),
        material : require('./queries/masters/materials')
    },
    check = {
        transactions : require('./checks/transactions'),
        report : require('./checks/reports'),
    },
    query = {
        client : require('./queries/client'),
        ticket : require('./queries/lists/tickets'),
        report : {
            install : require('./queries/reports/install'),
            survey : require('./queries/reports/survey'),
        },
        list:{
            lead: require('./queries/lists/leads'),
            prospect: require('./queries/lists/prospects'),
            client: require('./queries/lists/clients'),
        },
        propose:{
            survey:require('./queries/lists/survey_requests')
        }
    },
    field = {
        suspect : require('../app_modules/insertsuspect/fields'),
        updateclient : require('../app_modules/updateclient/fields'),
        proposesurvey : require('../app_modules/proposesurvey/fields'),
        proposeinstall : require('../app_modules/proposeinstall/fields'),
        createReport : {
            install : require('../app_modules/createreport/install/fields'),
            survey : require('../app_modules/createreport/survey/fields')
        }
    }
module.exports = {
    connection:connection,
    connectionChained:connectionChained,
    master:master,
    check:check,
    query:query,
    field:field
}
