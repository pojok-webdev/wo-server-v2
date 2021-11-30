var surveyPropose = {
    mandatories : ['client_id','branch_id','survey_date','address','city','pic_name','pic_phone'],
        allfields : ['client_id','branch_id','survey_date','address','city','pic_name','pic_phone','pic_email','pic_position','has_ladder'],
        numberfields : ['client_id'],
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
    mandatories:surveyPropose.mandatories,
    allfields:surveyPropose.allfields,
    numberfields:surveyPropose.numberfields,
    client_sites:surveyPropose.client_sites,
    survey_requests:surveyPropose.survey_requests,
    survey_sites:surveyPropose.survey_sites
}