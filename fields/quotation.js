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
    }
}
module.exports = {
    mandatories:list.mandatories,
    allfields:list.allfields,
    numberfields:list.numberfields,
    create:list.create,
    update:list.update,
    listall:list.listall
}
