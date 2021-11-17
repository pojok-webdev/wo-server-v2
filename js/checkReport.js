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
    }
}