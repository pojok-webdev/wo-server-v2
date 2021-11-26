mandatories = ['id']
allfields = ['id','client_id','branch_id','survey_date','address','city','pic_name','pic_phone','pic_email','pic_position','has_ladder']
numberfields = ['id']
client_sites = {
    mandatories:[],
    allfields:[],
    numberfields:[]
}
survey_requests = {
    mandatories:[],
    allfields:[],
    numberfields:[]
}
survey_sites = {
    mandatories:[],
    allfields:[],
    numberfields:[]
}
module.exports = {
    mandatories:mandatories,
    allfields:allfields,
    numberfields:numberfields,
    client_sites:client_sites,
    survey_requests:survey_requests,
    survey_sites:survey_sites
}