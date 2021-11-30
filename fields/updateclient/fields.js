var updateClient = {
    mandatories : ['id'],
    allfields : ['id','name','phone_area','phone','address','city','end_of_contract','business_field','status','alias','user_id','sale_id','siup','npwp','clientcategory','isffr','isoryza','active','prospectdate'],
    numberfields : []
}
module.exports = {
    mandatories:updateClient.mandatories,
    allfields:updateClient.allfields,
    numberfields:updateClient.numberfields
}