finditem = (keys,shouldhave,allcols) => {
    donthave = []
    shouldhave.forEach(element => {
        if(keys.indexOf(element)<0){
            console.log('Element',element)
            donthave.push(element)
        }
    });
    console.log('Donthave',donthave)
    if(donthave.length>0){
        return {result:false,description:{'dont have':donthave}}
    }else{
        return checkAllCols(keys,allcols)
        //return {result:true,description:'match'}
    }
}
checkAllCols = (keys,allcols) => {
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
check = (params,shouldhave,allcols) => {
    console.log('Shouldhava',JSON.stringify(shouldhave))
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