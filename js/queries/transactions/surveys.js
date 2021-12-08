routines = require('./../../execute/routines')
var transactionSurvey = {
    getLast : obj => {
        sql = 'select a.id,a.client_id,a.create_date,b.name from survey_requests a '
        sql+= 'left outer join clients b on b.id=a.client_id '
        sql+= 'order by create_date desc limit '+obj.segment+','+obj.offset+' '
        return sql
    },
    getByRequestId : obj => {
        sql = 'select id,address,city,client_site_id from survey_sites '
        sql+= 'where survey_request_id='+obj.survey_request_id+' '
        return sql
    },
    update : obj => {
        console.log('OBJ',obj)
        arr = []
            for(let el in obj){
                arr.push(el+'="'+obj[el]+'"')
            }
        sql = 'update survey_requests '
        sql+= 'set '+arr.join()+' '
        sql+= 'where id='+obj.id+' '
        console.log('SQL udpate req survey',sql)
        return sql
    },

}
site = {    
    create: obj => {
        return routines.create(obj)
    },
    update: obj =>{
        return routines.update(obj)
    },
},
bas =  {
    update: obj => {
        return routines.update(obj)
    }
},
bts_distance = {
    update: obj => {
        return routines.update(obj)
    }
},
client_distance = {
    create: obj => {
        return routines.create(obj)
    },
    update: obj => {
        return routines.update(obj)
    }
},
device = {
    create: obj => {
        return routines.create(obj)
    },
    update: obj => {
        return routines.update(obj)
    }
},
material = {
    create: obj => {
        return routines.create(obj)
    },
    update: obj => {
        return routines.update(obj)
    }
},
resume = {
    create: obj => {
        return routines.create(obj)
    },
    update: obj => {
        return routines.update(obj)
    }
},
site_distance = {
    create: obj => {
        return routines.create(obj)
    },
    update: obj => {
        return routines.update(obj)
    }
},
surveyor = {
    create: obj => {
        return routines.create(obj)
    },
    update: obj => {
        return routines.update(obj)
    }
},
imagesv2 = {
    create: obj => {
        return routines.create(obj)
    },
    update: obj => {
        return routines.update(obj)
    }
},


module.exports = {
    update:transactionSurvey.update,
    getLast:transactionSurvey.getLast,
    getByRequestId:transactionSurvey.getByRequestId,
    site:site,bas:bas,bts_distance:bts_distance,client_distance:client_distance,
    device:device,material:material,resume:resume,site_distance,surveyor:surveyor,imagesv2:imagesv2
}