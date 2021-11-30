var params = {
    check : (params,shouldhave) => {
        keys = Object.keys(params)
        if(keys.length<shouldhave.length){
            return {result:false,description:'Your params less than required params'}
        }else if(JSON.stringify(keys)===JSON.stringify(shouldhave)){
            return {result:true,description:'ok'}
        }else{
            donthave = []
            shouldhave.forEach(element => {
                if(keys.indexOf(element)<0){
                    console.log('Element',element)
                    donthave.push(element)
                }
            });
            console.log('Donthave',donthave)
            return {result:false,description:{'dont have':donthave}}
        }
    }
}
module.exports = {
    check:params.check,
}