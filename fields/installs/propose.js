var installPropose = {
    mandatories : ['client_id','client_site_id','install_date','address','city','pic_name','pic_phone'],
    allfields : ['client_id','client_site_id','address','city','pic_name','pic_phone','pic_email','pic_position','install_date'],
    numberfields : ['client_id','client_site_id'],
    client_sites : {
        mandatories:[],
        allfields:[],
        numberfields:[]
    },
    survey_requests : {
        mandatories:[],
        allfields:[],
        numberfields:[]
    },
    survey_sites : {
        mandatories:[],
        allfields:[],
        numberfields:[]
    }
}
module.exports = {
    mandatories:installPropose.mandatories,
    allfields:installPropose.allfields,
    numberfields:installPropose.numberfields,
    client_sites:installPropose.client_sites,
    survey_requests:installPropose.survey_requests,
    survey_sites:installPropose.survey_sites
}