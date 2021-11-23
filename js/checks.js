finditem = (keys,shouldhave,allcols) => {
    donthave = []
    shouldhave.forEach(element => {
        if(keys.indexOf(element)<0){
            donthave.push(element)
        }
    });
    if(donthave.length>0){
        return {result:false,description:{'dont have':donthave}}
    }else{
        return checkAllCols(keys,allcols)
    }
}
checkAllCols = (keys,allcols) => {
    console.log("Keys",keys)
    console.log("Allcols",allcols)
    not_member = []
    keys.forEach(element => {
        if(allcols.indexOf(element)<0){
            not_member.push(element)
        }
    })
    if(not_member.length>0){
        return {result:false,description:'unknown cols '+not_member}
    }else{
        return {result:true,description:'match'}
    }
}
checkInteger = (arr,b) => {
    console.log('ARR',arr)
    if(arr.length>0){
        x = arr.shift()
        if(Number.isInteger(b)){
            console.log("B",b)
            return checkInteger(arr,x)
        }else{
            console.log("F",b)
            return false
        }
    }else{
        console.log("Last",b)
        return Number.isInteger(b)
    }
}
check = (params,shouldhave,allcols,ints) => {
    console.log('Ints',ints)
    shouldInt = []
    ints.forEach(element=>{
        shouldInt.push(params[element])
    })

    if(checkInteger(shouldInt,1)){
        console.log('Should int Mengandung non integer')
    }else{
        console.log('Lolos integer')
    }
    keys = Object.keys(params)
    if(JSON.stringify(keys)===JSON.stringify(shouldhave)){
        return {result:true,description:'ok'}
    }else {
        return finditem(keys,shouldhave,allcols)
    }
}
module.exports = {
    check:check,
}