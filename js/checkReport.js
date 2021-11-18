checkParent = (shouldhave,obj) => {
    console.log('Should have',shouldhave.parent_fields)
    console.log('OBJ',obj)
    obj.forEach(el=>{
        console.log('El',el)
        for(let attr in el){
            console.log('Attr',attr,el[attr])
        }
    })
    return obj
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