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
    list:(req,res)=>{
        let sql = routines.list({
            columns:['id','name','amount','location'],
            tableName:'install_antennas',
            conditions:[{identifier:'install_site_id',
            identifierValue:req.body.install_site_id}]
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create:(req,res)=>{create(req,res,'antenna','install_antennas')},
    update:(req,res)=>{update(req,res,'antenna','install_antennas')},
    remove:(req,res)=>{
        let sql = routines.remove({
            columns:['title','description'],
            tableName:'install_antennas',
            identifier:'id',
            identifierValue:req.body.id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
},
ap_wifi = {
    list:(req,res)=>{
        let sql = routines.list({
            columns:['id','tipe','macboard'],
            tableName:'install_ap_wifis',
            conditions:[{identifier:'install_site_id',
            identifierValue:req.body.install_site_id}]
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create:(req,res)=>{create(req,res,'ap_wifi','install_ap_wifis')},
    update:(req,res)=>{update(req,res,'ap_wifi','install_ap_wifis')},
    remove:(req,res)=>{
        let sql = routines.remove({
            columns:['title','description'],
            tableName:'install_ap_wifis',
            identifier:'id',
            identifierValue:req.body.id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
},
site = {
    list:(req,res)=>{
        let sql = routines.list({
            columns:['id','install_request_id','address','city'],
            tableName:'install_sites',
            conditions:[{identifier:'install_request_id',
            identifierValue:req.body.install_request_id}]
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create:(req,res)=>{create(req,res,'site','install_sites')},
    update:(req,res)=>{update(req,res,'site','install_sites')},
    remove:(req,res)=>{
        let sql = routines.remove({
            columns:['title','description'],
            tableName:'install_sites',
            identifier:'id',
            identifierValue:req.body.id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
},
ba = {
    list:(req,res)=>{
        let sql = routines.list({
            columns:['id','name'],
            tableName:'install_bas',
            conditions:[{identifier:'install_site_id',
            identifierValue:req.body.install_site_id}]
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create:(req,res)=>{create(req,res,'ba','install_bas')},
    update:(req,res)=>{update(req,res,'ba','install_bas')},
    remove:(req,res)=>{
        let sql = routines.remove({
            columns:['title','description'],
            tableName:'install_bas',
            identifier:'id',
            identifierValue:req.body.id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
},
client_service = {
    list:(req,res)=>{
        let sql = routines.list({
            columns:['servicetype','service_id'],
            tableName:'install_client_services',
            conditions:[{identifier:'client_site_id',
            identifierValue:req.body.client_site_id}]
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create:(req,res)=>{create(req,res,'client_service','install_client_services')},
    update:(req,res)=>{update(req,res,'client_service','install_client_services')}
},
switches = {
    list:(req,res)=>{
        let sql = routines.list({
            columns:['name','port'],
            tableName:'install_switches',
            conditions:[{identifier:'install_site_id',
            identifierValue:req.body.install_site_id}]
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create:(req,res)=>{create(req,res,'switches','install_switches')},
    update:(req,res)=>{update(req,res,'switches','install_switches')},
    remove:(req,res)=>{
        let sql = routines.remove({
            columns:['title','description'],
            tableName:'install_switches',
            identifier:'id',
            identifierValue:req.body.id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
},
wireless_radio = {
    list:(req,res)=>{
        let sql = routines.list({
            columns:['tipe','macboard','bts','freqwency','polarization'],
            tableName:'install_wireless_radios',
            conditions:[{identifier:'install_site_id',
            identifierValue:req.body.install_site_id}]
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create:(req,res)=>{create(req,res,'wireless_radio','install_wireless_radios')},
    update:(req,res)=>{update(req,res,'wireless_radio','install_wireless_radios')},
    remove:(req,res)=>{
        let sql = routines.remove({
            columns:['title','description'],
            tableName:'install_wireless_radios',
            identifier:'id',
            identifierValue:req.body.id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
},
image = {
    list:(req,res)=>{
        let sql = routines.list({
            columns:['id','title','description'],
            tableName:'install_imagesv2',
            conditions:[{identifier:'install_site_id',
            identifierValue:req.body.install_site_id}]
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create:(req,res)=>{create(req,res,'image','install_imagesv2')},
    update:(req,res)=>{update(req,res,'image','install_imagesv2')},
    remove:(req,res)=>{
        let sql = routines.remove({
            columns:['title','description'],
            tableName:'install_imagesv2',
            identifier:'id',
            identifierValue:req.body.id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
}
request = {
    list:(req,res)=>{
        let sql = routines.list({
            columns:['id','client_site_id'],
            tableName:'install_requests',
            conditions:[{identifier:'1',
            identifierValue:'1'}]
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create:(req,res)=>{create(req,res,'request','install_requests')},
    update:(req,res)=>{update(req,res,'request','install_requests')}
}
module.exports = {
    site:site,
    antenna:antenna,
    ap_wifi:ap_wifi,
    ba:ba,client_service:client_service,switches:switches,wireless_radio:wireless_radio,image:image,request:request
}