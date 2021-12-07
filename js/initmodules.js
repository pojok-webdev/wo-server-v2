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
        survey:require('./queries/transactions/surveys')
    },
    field = {
        suspect : require('../fields/insertsuspect/fields'),
        updateclient : require('../fields/updateclient/fields'),
        survey : {
            propose:require('../fields/surveys/propose'),
            update:require('../fields/surveys/update'),
            report:require('../fields/report/survey/create'),
            site:require('./../fields/surveys/site/update')
        },
        install : {
            propose:require('../fields/installs/propose'),
            report:require('../fields/report/install/create')
        },
        report : {
            install : require('../fields/report/install/create')
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
