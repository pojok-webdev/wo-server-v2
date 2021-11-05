module.exports = {
    check: obj => {
        for(let property in obj){
            console.log(property,obj[property])
        }
        return true
    }
}