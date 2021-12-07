var surveySiteUpdate = {
    mandatories : ['id'],
    allfields : ['id','survey_request_id','client_id','client_site_id','branch_id','service_id','sale_id','city','address','pic_name','pic_position','pic_phone_area','pic_phone','pic_email','location_e','location_e_d','location_e_m','location_e_s','location_s','location_s_d','location_s_m','location_s_s','bearing','amsl','agl','has_ladder','survey_date','execution_date','description','active','requestsent','resultsent'],
    numberfields : ['id']
}
module.exports = {
    mandatories:surveySiteUpdate.mandatories,
    allfields:surveySiteUpdate.allfields,
    numberfields:surveySiteUpdate.numberfields,
}