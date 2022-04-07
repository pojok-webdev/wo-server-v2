routines = require('./routines')
site = {
    create: (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.sites.create.mandatories,
            i.field.survey.site.site.sites.create.allfields,
            i.field.survey.site.site.sites.create.numberfields
            )
            if(chk.result){
                params = {
                    tableName:'survey_sites',columns:req.body
                }
                i.connection.doQuery(i.query.survey.site.create(params),result=>{
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
    },
    update : (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.sites.update.mandatories,
            i.field.survey.site.site.sites.update.allfields,
            i.field.survey.site.site.sites.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_sites'
            }
            i.connection.doQuery(i.query.survey.site.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    },
    getByRequestId: obj =>{
        sql = 'select id from survey_sites '
        sql+= 'where survey_request_id = ' + obj.survey_request_id
        return sql
    }
}
request = {
    gets: obj => {
        sql = 'select id from survey_requests '
        sql+= 'order by create_date desc limit ' + obj.segment + ',' + obj.offset
        return sql
    },
    create: obj => {
        return routines.create(obj)
    }
}
bas =  {
    list:(req,res)=>{
        let sql = routines.list({
            columns:['tipe','macboard','bts','freqwency','polarization'],
            tableName:'survey_bas',
            identifier:'survey_site_id',
            identifierValue:req.body.install_site_id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    update:  (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.bas.update.mandatories,
            i.field.survey.site.site.bas.update.allfields,
            i.field.survey.site.site.bas.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_bas'
            }
            i.connection.doQuery(i.query.survey.bas.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    },
    remove: (req,res)=>{
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.bas.delete.mandatories,
            i.field.survey.site.site.bas.delete.allfields,
            i.field.survey.site.site.bas.delete.numberfields
            )
        if(chk.result){
            i.connection.doQuery(routines.remove({identifier:"id",identifierValue:req.body.id,tableName:'survey_bas'}),result=>{
                res.send({sql:routines.remove({identifier:"id",identifierValue:req.body.id,tableName:'survey_bas'})})
            })    
        }else{
            res.send({result:false,comment:chk.description})
        }
    },
    list: (req,res)=>{
        let sql = routines.list({columns:['id','name','description','survey_site_id'],identifier:'survey_site_id',identifierValue:req.body.survey_site_id,tableName:'survey_bas'})
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
}
bts_distance = {
    update:  (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.bts_distance.update.mandatories,
            i.field.survey.site.site.bts_distance.update.allfields,
            i.field.survey.site.site.bts_distance.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_bts_distances'
            }
            i.connection.doQuery(i.query.survey.bts_distance.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    },
    list : (req,res) => {
        let sql = routines.list({
            columns:['id','survey_site_id','btstower_id','distance','los','ap','description'],
            identifier:'survey_site_id',identifierValue:req.body.survey_site_id, tableName:'survey_bts_distances'})
            i.connection.doQuery(sql,result=>{
                res.send({sql:result})
            })
    },
    remove : (req,res) => {
        let sql = routines.remove({tableName:'survey_bts_distances',identifier:'id',identifierValue:req.body.id})
        i.connection.doQuery(sql,result=>{
            res.send({sql:sql})
        })
    },
    create : (req,res) => {
        let sql = routines.create({tableName:'survey_bts_distances',columns:req.body})
        i.connection.doQuery(sql,result=>{
            res.send({result:true,description:result})
        })

    }
}
client_distance = {
    create: (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.client_distance.create.mandatories,
            i.field.survey.site.site.client_distance.create.allfields,
            i.field.survey.site.site.client_distance.create.numberfields
            )
            if(chk.result){
                params = {
                    tableName:'survey_client_distances',columns:req.body
                }
                i.connection.doQuery(i.query.survey.client_distance.create(params),result=>{
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
    },
    update: (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.client_distance.update.mandatories,
            i.field.survey.site.site.client_distance.update.allfields,
            i.field.survey.site.site.client_distance.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_client_distances'
            }
            i.connection.doQuery(i.query.survey.client_distance.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    },
    list: (req,res) => {
        let sql = routines.list({
            columns:['client_id','distance'],
            tableName:'survey_client_distances',
            identifier:'survey_site_id',
            identifierValue:req.body.survey_site_id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
}
device = {
    list: (req,res) => {
        let sql = routines.list({
            columns:['device_id','name','amount','description'],
            tableName:'survey_devices',
            identifier:'survey_site_id',
            identifierValue:req.body.survey_site_id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create :  (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.device.create.mandatories,
            i.field.survey.site.site.device.create.allfields,
            i.field.survey.site.site.device.create.numberfields
            )
            if(chk.result){
                params = {
                    tableName:'survey_devices',columns:req.body
                }
                i.connection.doQuery(i.query.survey.device.create(params),result=>{
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
    },
    update : (req,res)=>{
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.device.update.mandatories,
            i.field.survey.site.site.device.update.allfields,
            i.field.survey.site.site.device.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_devices'
            }
            i.connection.doQuery(i.query.survey.device.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }

    }
}
material = {
    create :  (req,res) => {
        console.log('SURVEY SITE MATERIAL',i.field.survey.site.site.material)
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.material.create.mandatories,
            i.field.survey.site.site.material.create.allfields,
            i.field.survey.site.site.material.create.numberfields
            )
            if(chk.result){
                params = {
                    tableName:'survey_materials',columns:req.body
                }
                i.connection.doQuery(i.query.survey.material.create(params),result=>{
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
    },
    update : (req,res)=>{
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.material.update.mandatories,
            i.field.survey.site.site.material.update.allfields,
            i.field.survey.site.site.material.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_materials'
            }
            i.connection.doQuery(i.query.survey.material.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }
    },
    list : (req,res) => {
        let sql = routines.list({
            columns:i.field.survey.site.site.material.list.allfields,
            tableName:'survey_materials',
            identifier:'survey_site_id',
            identifierValue:req.body.survey_site_id})
            i.connection.doQuery(sql,result=>{
                res.send(result)
            })
    },
    remove : (req,res) => {
        sql = routines.remove({
            tableName:'survey_materials',
            identifier:'id',
            identifierValue:req.body.id
        })
        i.connection.doQuery(sql,result => {
            res.send(result)
        })
    }
}
resume = {
    create :  (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.resume.create.mandatories,
            i.field.survey.site.site.resume.create.allfields,
            i.field.survey.site.site.resume.create.numberfields
            )
            if(chk.result){
                params = {
                    tableName:'survey_resumes',columns:req.body
                }
                i.connection.doQuery(i.query.survey.resume.create(params),result=>{
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
    },
    update : (req,res)=>{
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.resume.update.mandatories,
            i.field.survey.site.site.resume.update.allfields,
            i.field.survey.site.site.resume.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_resumes'
            }
            i.connection.doQuery(i.query.survey.resume.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }

    },
    list : (req,res) => {
        sql = routines.list({
            tableName:'survey_resumes',
            columns:['name','survey_site_id'],
            identifier:'survey_site_id',
            identifierValue:req.body.survey_site_id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    remove : (req,res) => {
        sql = routines.remove({
            tableName:'survey_resumes',
            identifier:'id',identifierValue:req.body.id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
}
site_distance = {
    create :  (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.site_distance.create.mandatories,
            i.field.survey.site.site.site_distance.create.allfields,
            i.field.survey.site.site.site_distance.create.numberfields
            )
            if(chk.result){
                params = {
                    tableName:'survey_site_distances',columns:req.body
                }
                i.connection.doQuery(i.query.survey.site_distance.create(params),result=>{
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
    },
    update : (req,res)=>{
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.site_distance.update.mandatories,
            i.field.survey.site.site.site_distance.update.allfields,
            i.field.survey.site.site.site_distance.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_site_distances'
            }
            i.connection.doQuery(i.query.survey.site_distance.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }

    }
}
surveyor = {
    list : (req,res) => {
        sql = routines.list({
            tableName:'survey_surveyors',
            columns:['name','email','phone','survey_request_id'],
            identifier:'survey_request_id',
            identifierValue:req.body.survey_request_id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create :  (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.surveyor.create.mandatories,
            i.field.survey.site.site.surveyor.create.allfields,
            i.field.survey.site.site.surveyor.create.numberfields
            )
            if(chk.result){
                params = {
                    tableName:'survey_surveyors',columns:req.body
                }
                i.connection.doQuery(i.query.survey.surveyor.create(params),result=>{
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
    },
    update : (req,res)=>{
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.surveyor.update.mandatories,
            i.field.survey.site.site.surveyor.update.allfields,
            i.field.survey.site.site.surveyor.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_surveyors'
            }
            i.connection.doQuery(i.query.survey.surveyor.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }

    },
    remove : (req,res)=>{
        sql = routines.remove({
            tableName:'survey_surveyors',
            identifier:'id',identifierValue:req.body.id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    }
}
imagesv2 = {
    list : (req,res) => {
        routines.list({
            tableName:'survey_imagesv2',columns:['survey_site_id','path','description'],
            identifier:'survey_site_id',identifierValue:req.body.survey_site_id
        })
        i.connection.doQuery(sql,result=>{
            res.send(result)
        })
    },
    create :  (req,res) => {
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.imagesv2.create.mandatories,
            i.field.survey.site.site.imagesv2.create.allfields,
            i.field.survey.site.site.imagesv2.create.numberfields
            )
            if(chk.result){
                params = {
                    tableName:'survey_imagesv2',columns:req.body
                }
                i.connection.doQuery(i.query.survey.imagesv2.create(params),result=>{
                    res.send({result:true,description:result})
                })
            }else{
                res.send({result:false,comment:chk.description})
            }
    },
    update : (req,res)=>{
        chk = i.check.transactions.check(
            req.body,i.field.survey.site.site.imagesv2.update.mandatories,
            i.field.survey.site.site.imagesv2.update.allfields,
            i.field.survey.site.site.imagesv2.update.numberfields
            )
        if(chk.result){
            params = {
                identifier:'id',identifierValue:req.body.id,
                columns:req.body,tableName:'survey_imagesv2'
            }
            i.connection.doQuery(i.query.survey.surveyor.update(params),result=>{
                res.send({result:true,description:result})
            })
        }else{
            res.send({result:false,comment:chk.description})
        }

    }
}
module.exports = {
    site:site,
    request:request,
    bas:bas,bts_distance:bts_distance,
    client_distance:client_distance,
    device:device,material:material,resume:resume,site_distance:site_distance,surveyor:surveyor,imagesv2:imagesv2
}