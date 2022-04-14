inspect = {
    isNumber : indexes => {
        inspect._numberIndexes = indexes
        return inspect
    },
    setParam : param => {
        console.log(param)
        inspect._param = param
        return inspect
    },
    checkNumber : _ => {
        let keys = Object.keys(inspect._param)
        let myparam = inspect._param
        console.log('keys',keys)
        inspect._numberIndexes.forEach(element => {
            if(isNaN(myparam[element])){
                console.log('isNaN',element,myparam[element])
                inspect._err.push('element must a number')
                inspect._valid = inspect._valid && false
            }else{
                console.log('isNotNaN',element,myparam[element])
                inspect._valid = inspect._valid && true
            }
        })
        return inspect
    },
    checkComplete : _ => {
        let myparam = Object.keys(inspect._param)
        inspect._shouldhave.forEach(element => {
            if(!myparam.includes(element)){
                inspect._notExists.push(element)
                inspect._valid = inspect._valid && false
            }else{
                inspect._valid = inspect._valid && true
            }
        });
        return inspect
    },
    shouldHave: par => {
        inspect._shouldhave = par
        return inspect
    },
    printParameters:_=>{
        console.log(inspect._shouldhave)
        return inspect
    },
    printValid : _ =>{
        if(inspect._valid){
            console.log('valid')
        }else{
            console.log('not valid')
        }
        return inspect
    },
    printNotExists : _ => {
        console.warn('Not Exists:',inspect._notExists)
        return inspect
    },
    printErr : _ => {
        console.warn(inspect._err)
        return inspect
    },
    todo : (successAction,failAction)=>{
        if(inspect._valid){
            successAction({status:inspect._valid})
        }else{
            failAction({
                status:inspect._valid,
                'err':inspect._err,
                'not exists':inspect._notExists
            })
        }
        return inspect
    },
    init : _ => {
        inspect._valid = true
        inspect._notExists = []
        inspect._shouldhave = []
        inspect._param = {}
        inspect._err = []
        return inspect
    },
    _param:{},
    _shouldhave:[],
    _notExists:[],
    _numberIndexes:[],
    _err:[],
    _valid: true
}
module.exports = {
    inspect:inspect
}