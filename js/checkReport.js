checkMandatory = (params,mandatories) => {
    let x = new Promise((resolve,reject)=>{
        let paramtables = Object.keys(params)
        mandatories.forEach(mandatory=>{
            for(let mdt in mandatory){
                if(paramtables.indexOf(mdt)<0){
                    reject({result:false,description:mdt,params:params[mdt],mandatory:mandatory[mdt]})
                }else{
                    resolve({
                        result:true,
                        description:'mandatory exists',
                        params:params[mdt],
                        mandatory:mandatory[mdt]
                    })
                }
            }
        })
    })
    return x
}
checkMandatoryMember = (params,mandatories) => {
    let pro = new Promise((resolve,reject)=>{
        params.forEach(el=>{
            for(let e in el){
                if(mandatories.indexOf(e)<0){
                    console.log(e,' NOT IN MANDATORIES',mandatories)
                    reject({result: false,description:e+' not exists'})
                }else{
                    console.log(e,'in MANDATORIES',mandatories)
                    resolve({result:true,description:e+' exists in '+ mandatories})
                }
                
            }
        })
    })
    return pro
}
module.exports = {
    check: (obj,mandatory,allfields) => {
        let table = Object.keys(obj)
        let notExist = []
        mandatory.forEach(el=>{
            if(table.indexOf(el)<0){
                notExist.push(el)
            }
        })
        if(notExist.length>0){
            return {result:false,description:{'dont have':notExist}}
        }else{
            return {result:true,description:'auto OK'}
        }
    },
    checkMandatory:checkMandatory,
    checkMandatoryMember:checkMandatoryMember
}