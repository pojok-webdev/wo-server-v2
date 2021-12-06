var surveyUpdate = {
    mandatories : ['id'],
    allfields : ['id','client_id','branch_id','survey_date','address','city','pic_name','pic_phone','pic_email','pic_position','has_ladder'],
    numberfields : ['id'],
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
    mandatories:surveyUpdate.mandatories,
    allfields:surveyUpdate.allfields,
    numberfields:surveyUpdate.numberfields,
    client_sites:surveyUpdate.client_sites,
    survey_requests:surveyUpdate.survey_requests,
    survey_sites:surveyUpdate.survey_sites
}