var bas = {
    update:{
        mandatories : ['id'],
        allfields : ['id','survey_site_id','name','img','description','createuser','createdate'],
        numberfields : ['id']
    },
    create:{
        mandatories : ['survey_site_id'],
        allfields : ['id','survey_site_id','name','img','description','createuser','createdate'],
        numberfields : ['id']
    }

},
sites = {
    update:{
    mandatories : ['id'],
    allfields : ['id','survey_request_id','client_id','client_site_id','branch_id','service_id','sale_id','city','address','pic_name','pic_position','pic_phone_area','pic_phone','pic_email','location_e','location_e_d','location_e_m','location_e_s','location_s','location_s_d','location_s_m','location_s_s','bearing','amsl','agl','has_ladder','survey_date','execution_date','description','active','requestsent','resultsent'],
    numberfields : ['id']
}},
bts_distance = {
    update:{
        mandatories : ['id'],
        allfields : ['id','survey_site_id','btstower_id','distance','los','ap','description','obstacle'],
        numberfields : ['id','survey_site_id']
    }
},
client_distance = {
    create:{
        mandatories : ['survey_site_id'],
        allfields : ['id','survey_site_id','distance','user_name'],
        numberfields : ['id','distance']
    },
    update:{
        mandatories : ['survey_site_id'],
        allfields : ['id','survey_site_id','distance','user_name'],
        numberfields : ['id','distance','survey_site_id']
    }
}
module.exports = {
    bas:bas,
    sites:sites,
    bts_distance:bts_distance,
    client_distance:client_distance
}
