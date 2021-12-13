var list = {
    mandatories : ['client_id'],
    allfields : ['id','client_id','name','prole','phone_area','telp_hp','position','hp','hp2','email','address','ktp'],
    numberfields : ['id','client_id'],
    create : {
        mandatories:['client_id'],
        allfields:['id','client_id','name','prole','phone_area','telp_hp','position','hp','hp2','email','address','ktp'],
        numberfields:['id','client_id']
    },
    update : {
        mandatories:['id'],
        allfields:['id','client_id','name','prole','phone_area','telp_hp','position','hp','hp2','email','address','ktp'],
        numberfields:['id','client_id']
    }
}
module.exports = {
    mandatories:list.mandatories,
    allfields:list.allfields,
    numberfields:list.numberfields,
    create:list.create,
    update:list.update,
}