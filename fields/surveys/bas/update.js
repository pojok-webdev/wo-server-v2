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

}
module.exports = {
    bas:bas
}