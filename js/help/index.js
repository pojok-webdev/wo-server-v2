common = _ => {
    return {
        '1. menu':[
            {1:'GET CLIENTS'},
            {2:'GET SERVICES'}
        ],
        '2. syntax':[]
    }
}
parse = obj => {
    let str = ''
    for(let el in obj){
        str+=el+'\n'
    }
    return str
}
module.exports = {
    common:common,
    parse:parse
}