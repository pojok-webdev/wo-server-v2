var list = {
    mandatories : ['clientname'],
    allfields : ['id','branch','kdoffer','offerdate','client_id','client_site_id','clientname','address','city','email','pic','phone','service','price','uc','source','description','sale_id','img'],
    numberfields : ['id','client_id','client_site_id'],

    listall : {
        mandatories:[],
        allfields:['id','branch','kdoffer','offerdate','client_id','client_site_id','clientname','address','city','email','pic','phone','service','price','uc','source','description','sale_id','img'],
        numberfields:['id','client_id','client_site_id']
    },

    create : {
        mandatories:['clientname'],
        allfields:['id','branch','kdoffer','offerdate','client_id','client_site_id','clientname','address','city','email','pic','phone','service','price','uc','source','description','sale_id','sale_email','img','services'],
        numberfields:['id','client_id','client_site_id'],
        columntoskip:['sale_email','services']
    },
    update : {
        mandatories:['id'],
        allfields:['id','branch','kdoffer','offerdate','client_id','client_site_id','clientname','address','city','email','pic','phone','service','price','uc','source','description','sale_id','sale_email','img'],
        numberfields:['id','client_id','client_site_id'],
        columntoskip:['sale_email']
    },
    listallquotationservices:{
        mandatories:['offer_id'],
        allfields:['id','servicename','offer_id','capacity','price','createdate'],
        numberfields:['id','offer_id'],
        columntoskip:['offer_id']
    },
    updatequotationservice:{
        mandatories:['id'],
        allfields:['id','servicename','offer_id','capacity','price','createdate'],
        numberfields:['id','offer_id'],
        columntoskip:['offer_id']
    },
    addquotationservice:{
        mandatories:['servicename'],
        allfields:['id','servicename','offer_id','capacity','price','createdate'],
        numberfields:['id','offer_id'],
        columntoskip:[]
    },
    removequotationservice:{
        mandatories:['id'],
        allfields:['id'],
        numberfields:['id'],
        columntoskip:[]
    }
}
module.exports = {
    mandatories:list.mandatories,
    allfields:list.allfields,
    numberfields:list.numberfields,
    create:list.create,
    update:list.update,
    listall:list.listall,
    listallquotationservices:list.listallquotationservices,
    updatequotationservice:list.updatequotationservice,
    addquotationservice:list.addquotationservice,
    removequotationservice:list.removequotationservice
}
