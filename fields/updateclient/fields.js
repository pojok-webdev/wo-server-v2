var updateClient = {
    mandatories : ['id','useremail'],
    allfields : ['id','name','phone_area','phone','fax_area','fax','address','billaddress','city','end_of_contract','business_field','status','alias','user_id','sale_id','siup','npwp','clientcategory','isffr','isoryza','active','prospectdate','period1','period2','useremail'],
    numberfields : []
}
module.exports = {
    mandatories:updateClient.mandatories,
    allfields:updateClient.allfields,
    numberfields:updateClient.numberfields
}