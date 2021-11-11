testPromise = _ => {
    let a = 0
    let myPromise = new Promise((resolve,reject)=>{
        for(let x=0;x<10;x++){
            a+=x
        }
        if('a'=='b'){
            reject({error:'error'})
        }else{
            resolve(a)
        }
    })
    return myPromise
}

module.exports = {
    testPromise:testPromise
}