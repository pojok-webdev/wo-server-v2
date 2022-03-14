var site = {
    bas : {
        update:{
            mandatories : ['id'],
            allfields : ['id','survey_site_id','name','img','description','createuser','createdate'],
            numberfields : ['id']
        },
        create:{
            mandatories : ['survey_site_id'],
            allfields : ['id','survey_site_id','name','img','description','createuser','createdate'],
            numberfields : ['id']
        },
        delete:{
            mandatories : ['id'],
            allfields : ['id','survey_site_id','name','img','description','createuser','createdate'],
            numberfields : ['id']
        },
    },
    sites : {
        create:{
            mandatories : ['survey_request_id'],
            allfields : ['id','survey_request_id','client_id','client_site_id','branch_id','service_id','sale_id','city','address','pic_name','pic_position','pic_phone_area','pic_phone','pic_email','location_e','location_e_d','location_e_m','location_e_s','location_s','location_s_d','location_s_m','location_s_s','bearing','amsl','agl','has_ladder','survey_date','execution_date','description','active','requestsent','resultsent'],
            numberfields : ['id']
        },
        update:{
            mandatories : ['id'],
            allfields : ['id','survey_request_id','client_id','client_site_id','branch_id','service_id','sale_id','city','address','pic_name','pic_position','pic_phone_area','pic_phone','pic_email','location_e','location_e_d','location_e_m','location_e_s','location_s','location_s_d','location_s_m','location_s_s','bearing','amsl','agl','has_ladder','survey_date','execution_date','description','active','requestsent','resultsent'],
            numberfields : ['id']
        }
    },
    bts_distance : {
        update:{
            mandatories : ['id'],
            allfields : ['id','survey_site_id','btstower_id','distance','los','ap','description','obstacle'],
            numberfields : ['id','survey_site_id']
        }
    },
    client_distance : {
        create:{
            mandatories : ['survey_site_id'],
            allfields : ['id','survey_site_id','distance','user_name','client_id'],
            numberfields : ['id','distance']
        },
        update:{
            mandatories : ['id'],
            allfields : ['id','survey_site_id','distance','user_name'],
            numberfields : ['id','distance','survey_site_id']
        }
    },
    device : {
        create:{
            mandatories : ['survey_site_id'],
            allfields: ['id','survey_site_id','device_id','name','amount','description','status'],
            numberfields:['id','survey_site_id','device_id']
        },
        update:{
            mandatories : ['id'],
            allfields: ['id','survey_site_id','device_id','name','amount','description','status'],
            numberfields:['id','survey_site_id','device_id']
        }
    },
    material : {
        create:{
            mandatories : ['survey_site_id'],
            allfields: ['id','survey_site_id','material_type','name','amount'],
            numberfields:['id','survey_site_id']
        },
        update:{
            mandatories : ['id'],
            allfields: ['id','survey_site_id','material_type','name','amount'],
            numberfields:['id','survey_site_id']
        },
        list:{
            mandatories:['survey_site_id'],
            allfields: ['id','survey_site_id','material_type','name','amount'],
            numberfields:['id','survey_site_id']
        }
    },
    resume : {
        create:{
            mandatories : ['survey_site_id'],
            allfields: ['id','survey_site_id','name'],
            numberfields:['id','survey_site_id']
        },
        update:{
            mandatories : ['id'],
            allfields: ['id','survey_site_id','name'],
            numberfields:['id','survey_site_id']
        }
    },
    site_distance : {
        create:{
            mandatories : ['survey_site_id'],
            allfields: ['id','survey_site_id','address','distance','los','obstacle','description','createuser'],
            numberfields:['id','survey_site_id']
        },
        update:{
            mandatories : ['id'],
            allfields: ['id','survey_site_id','address','distance','los','obstacle','description','createuser'],
            numberfields:['id','survey_site_id']
        }
    },
    surveyor : {
        create:{
            mandatories : ['survey_request_id'],
            allfields: ['id','survey_request_id','name','email','phone','createuser'],
            numberfields:['id','survey_request_id']
        },
        update:{
            mandatories : ['id'],
            allfields: ['id','survey_request_id','name','email','phone','createuser'],
            numberfields:['id','survey_request_id']
        }
    },
    imagesv2 : {
        create:{
            mandatories : ['survey_site_id'],
            allfields: ['id','survey_site_id','path','roworder','description','createuser'],
            numberfields:['id','survey_site_id']
        },
        update:{
            mandatories : ['id'],
            allfields: ['id','survey_site_id','path','roworder','description','createuser'],
            numberfields:['id','survey_site_id']
        }
    }
}
module.exports = {
    site:site
}
