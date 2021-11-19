checkParentx = (params,mandatories) => {
    console.log('Req Body',params.parent_fields)
    console.log('Mandatories',mandatories)
    mandatories.forEach(mandatory=>{
        console.log('Each Mandatory',mandatory)
        for(let mandatory_key in mandatory){
            console.log('Param by Mandatory',params[mandatory_key])
            console.log('Key of mandatory',mandatory_key,mandatory[mandatory_key])
            //check if params have mandatory_key
            if(!params.hasOwnProperty(mandatory_key)){
                return {result:false,description:'Should have '+mandatory_key}
            }else{
                return {result: true,description:'COmplete'}
            }
        }
    })
//    return {result:true, mandatories:mandatories}
}
checkParent = (params,mandatories) => {
    //get the mandatories first
    console.log('Mandatories',mandatories)
    let checkman = new Promise((resolve,reject)=>{
        mandatories.forEach(mandatory=>{
            for(let mandatory_key in mandatory){
                console.log('Mandatory key',mandatory_key)
                //check if mandatory_key in params
                if(!(mandatory_key in params)){
                    console.log('It has no mandatory',mandatory_key)
                    reject ({result:false,description:'Has no',mandatory_key})
                }else{
                    console.log('It has mandatory',mandatory_key)
                    console.log('Parman',params[mandatory_key])
                }
            }
        })
        resolve({result:true,description:'OK'})
    })
    checkman.then(
        result=>{
            console.log('Result',result)
            return result
        },
        err=>{
            console.log('Err',err)
            return err
        }
    )
    //return mandatories
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
    checkParent:checkParent
}