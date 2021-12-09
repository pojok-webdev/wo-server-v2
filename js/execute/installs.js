var create = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.install.transaction[field].create.mandatories,
        i.field.install.transaction[field].create.allfields,
        i.field.install.transaction[field].create.numberfields
        )
        if(chk.result){
            params = {
                tableName:tableName,columns:req.body
            }
            i.connection.doQuery(i.query.install[field].create(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
},
update = (req,res,field,tableName) => {
    chk = i.check.transactions.check(
        req.body,i.field.install.transaction[field].update.mandatories,
        i.field.install.transaction[field].update.allfields,
        i.field.install.transaction[field].update.numberfields
        )
    if(chk.result){
        params = {
            identifier:'id',identifierValue:req.body.id,
            columns:req.body,tableName:tableName
        }
        i.connection.doQuery(i.query.install[field].update(params),result=>{
            res.send({result:true,description:result})
        })
    }else{
        res.send({result:false,comment:chk.description})
    }
},
antenna = {
    create:(req,res)=>{create(req,res,'antenna','install_antennas')},
    update:(req,res)=>{update(req,res,'antenna','install_antennas')}
},
ap_wifi = {
    create:(req,res)=>{create(req,res,'ap_wifi','install_ap_wifis')},
    update:(req,res)=>{update(req,res,'ap_wifi','install_ap_wifis')}
},
site = {
    create:(req,res)=>{create(req,res,'site','install_sites')},
    update:(req,res)=>{update(req,res,'site','install_sites')}
},
ba = {
    create:(req,res)=>{create(req,res,'ba','install_bas')},
    update:(req,res)=>{update(req,res,'ba','install_bas')}
}

module.exports = {
    site:site,
    antenna:antenna,
    ap_wifi:ap_wifi,
    ba:ba
}