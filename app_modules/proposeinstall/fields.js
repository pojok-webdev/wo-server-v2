mandatories = ['client_id','client_site_id','install_date','address','city','pic_name','pic_phone']
allfields = ['client_id','address','city','pic_name','pic_phone','pic_email','pic_position','install_date']
numberfields = ['client_id','client_site_id']
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