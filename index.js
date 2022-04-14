var i = require('./js/initapp')
i.app.get('/help',(req,res)=>{
    res.render('home',{})
})

i.app.post('/getclientpicbyclientid',(req,res)=>{
    i.execute.master.getClientPicByClientId(req,res)
})
i.app.post('/getclientservicebyclientid',(req,res)=>{
    i.execute.list.getClientServiceByClientId(req,res)
})
i.app.post('/listsuspects',(req,res)=>{
    i.execute.transaction.listSuspect(req,res)
})
i.app.post('/insertsuspect',(req,res)=>{
    i.execute.transaction.insertSuspect(req,res)
})
i.app.post('/updateclient',(req,res)=>{
    console.log('RES',res)
    i.execute.transaction.updateClient(req,res)
})
i.app.post('/proposesurvey',(req,res)=>{
    i.execute.transaction.survey.propose(req,res)
})
i.app.post('/listsurveyproposal',(req,res)=>{
    i.execute.list.getSurveyProposal(req,res)
})
i.app.post('/listsurveysitesbysurveyproposalid',(req,res)=>{
    i.execute.list.getSurveySitesBySurveyProposalId(req,res)
})
i.app.post('/surveyupdate',(req,res)=>{
    i.execute.transaction.updateSurvey(req,res)
})
i.app.post('/proposeinstall',(req,res)=>{
    i.execute.transaction.proposeInstall(req,res)
})
i.app.post('/createinstallreport',(req,res)=>{
    i.execute.transaction.createInstallReport(req,res)
})
i.app.post('/createsurveyreport',(req,res)=>{
    i.execute.transaction.survey.createreport(req,res)
})
i.app.post('/getmasterservice',(req,res)=>{
    i.execute.master.getMasterService(req,res)
})
i.app.post('/getmasterservicebyid',(req,res)=>{
    i.execute.master.getMasterServiceById(req,res)
})
i.app.post('/getmasterservicebyname',(req,res)=>{
    i.execute.master.getMasterServiceByName(req,res)
})
i.app.post('/getmasterservicecategories',(req,res)=>{
    i.execute.master.getMasterServiceCategories(req,res)
})
i.app.post('/getmasterservicebycategory',(req,res)=>{
    i.execute.master.getMasterServiceByCategory(req,res)
})
i.app.post('/getmastermaterial', (req,res) => {
    i.execute.master.getMasterMaterial(req,res)
})
i.app.post('/getmastermaterialbyname',(req,res)=>{
    i.execute.master.getMasterMaterialByName(req,res)
})
i.app.post('/getmastermaterialbyid',(req,res)=>{
    i.execute.master.getMasterMaterialById(req,res)
})
i.app.post('/getmasterdevice', (req,res) => {
    i.execute.master.getMasterDevice(req,res)
})
i.app.post('/getmasterdevicebyname', (req,res) => {
    i.execute.master.getMasterDeviceByName(req,res)
})
i.app.post('/getmasterdevicebyid', (req,res) => {
    i.execute.master.getMasterDeviceById(req,res)
})
i.app.post('/getlistleadsbyname', (req,res)=>{
    i.execute.list.getLeadsByName(req,res)
})
i.app.post('/getlistprospectsbyname', (req,res)=>{
    i.execute.list.getProspectsByName(req,res)
})
i.app.post('/getlistclientsbyname', (req,res)=>{
    i.execute.list.getclientsbyname(req,res)
})
i.app.post('/getlistclientsbyid',(req,res)=>{
    i.execute.list.getClientsById(req,res)
})

i.app.post('/getticketsbyclientname',(req,res)=>{
    i.execute.list.getTicketsByClientName(req,res)
})
i.app.post('/getticketsbyclientid',(req,res)=>{
    i.execute.list.getTicketsByClientId(req,res)
})
i.app.post('/getticketsbyid',(req,res)=>{
    i.execute.list.getTicketsById(req,res)
})
i.app.post('/getticketsbykdticket',(req,res)=>{
    i.execute.list.getTicketsByKdTicket(req,res)
})
i.app.post('/createsurveysite',(req,res)=>{
    i.execute.transaction.survey.site.create(req,res)
})
i.app.post('/updatesurveysite',(req,res)=>{
    i.execute.transaction.survey.site.update(req,res)
})
i.app.post('/createsurveybas',(req,res)=>{
    i.execute.transaction.survey.bas.create(req,res)
})
i.app.post('/updatesurveybas',(req,res)=>{
    i.execute.transaction.survey.bas.update(req,res)
})
i.app.post('/listsurveybas',(req,res)=>{
    i.execute.transaction.survey.bas.list(req,res);
})
i.app.post('/removesurveyba',(req,res)=>{
    i.execute.transaction.survey.bas.remove(req,res);
})
i.app.post('/listsurveybtsdistances',(req,res)=>{
    i.execute.transaction.survey.bts_distance.list(req,res)
})
i.app.post('/createsurveybtsdistances',(req,res)=>{
    i.execute.transaction.survey.bts_distance.create(req,res)
})
i.app.post('/updatesurveybtsdistances',(req,res)=>{
    i.execute.transaction.survey.bts_distance.update(req,res)
})
i.app.post('/removesurveybtsdistances',(req,res)=>{
    i.execute.transaction.survey.bts_distance.remove(req,res)
})
i.app.post('/createsurveyclientdistances',(req,res)=>{
    i.execute.transaction.survey.client_distance.create(req,res)
})
i.app.post('/listsurveyclientdistances',(req,res)=>{
    i.execute.transaction.survey.client_distance.list(req,res)
})
i.app.post('/updatesurveyclientdistances',(req,res)=>{
    i.execute.transaction.survey.client_distance.update(req,res)
})
i.app.post('/removesurveyclientdistances',(req,res)=>{
    i.execute.transaction.survey.client_distance.remove(req,res)
})
i.app.post('/listsurveydevices',(req,res)=>{
    i.execute.transaction.survey.device.list(req,res)
})
i.app.post('/createsurveydevices',(req,res)=>{
    i.execute.transaction.survey.device.create(req,res)
})
i.app.post('/updatesurveydevices',(req,res)=>{
    i.execute.transaction.survey.device.update(req,res)
})
i.app.post('/removesurveydevices',(req,res)=>{
    i.execute.transaction.survey.device.remove(req,res)
})
i.app.post('/createsurveymaterials',(req,res)=>{
    i.execute.transaction.survey.material.create(req,res)
})
i.app.post('/updatesurveymaterials',(req,res)=>{
    i.execute.transaction.survey.material.update(req,res)
})
i.app.post('/listsurveymaterials',(req,res)=>{
    i.execute.transaction.survey.material.list(req,res)
})
i.app.post('/removesurveymaterials',(req,res)=>{
    i.execute.transaction.survey.material.remove(req,res)
})
i.app.post('/listsurveyresumes',(req,res)=>{
    i.execute.transaction.survey.resume.list(req,res)
})
i.app.post('/removesurveyresumes',(req,res)=>{
    i.execute.transaction.survey.resume.remove(req,res)
})
i.app.post('/createsurveyresumes',(req,res)=>{
    i.execute.transaction.survey.resume.create(req,res)
})
i.app.post('/updatesurveyresumes',(req,res)=>{
    i.execute.transaction.survey.resume.update(req,res)
})
i.app.post('/listsurveysitedistances',(req,res)=>{
    i.execute.transaction.survey.site_distance.list(req,res)
})
i.app.post('/createsurveysitedistances',(req,res)=>{
    i.execute.transaction.survey.site_distance.create(req,res)
})
i.app.post('/removesurveysitedistances',(req,res)=>{
    i.execute.transaction.survey.site_distance.remove(req,res)
})
i.app.post('/updatesurveysitedistances',(req,res)=>{
    i.execute.transaction.survey.site_distance.update(req,res)
})
i.app.post('/listsurveysurveyors',(req,res)=>{
    i.execute.transaction.survey.surveyor.list(req,res)
})
i.app.post('/createsurveysurveyors',(req,res)=>{
    i.execute.transaction.survey.surveyor.create(req,res)
})
i.app.post('/updatesurveysurveyors',(req,res)=>{
    i.execute.transaction.survey.surveyor.update(req,res)
})
i.app.post('/removesurveysurveyors',(req,res)=>{
    i.execute.transaction.survey.surveyor.remove(req,res)
})
i.app.post('/listsurveyimages',(req,res)=>{
    i.execute.transaction.survey.imagesv2.list(req,res)
})
i.app.post('/createsurveyimages',(req,res)=>{
    i.execute.transaction.survey.imagesv2.create(req,res)
})
i.app.post('/updatesurveyimages',(req,res)=>{
    i.execute.transaction.survey.imagesv2.update(req,res)
})
i.app.post('/listinstallsites',(req,res)=>{
    i.execute.transaction.install.site.list(req,res)
})
i.app.post('/createinstallsite',(req,res)=>{
    i.execute.transaction.install.site.create(req,res)
})
i.app.post('/updateinstallsite',(req,res)=>{
    i.execute.transaction.install.site.update(req,res)
})
i.app.post('/removeinstallsite',(req,res)=>{
    i.execute.transaction.install.site.remove(req,res)
})
i.app.post('/listinstallantenna',(req,res)=>{
    i.execute.transaction.install.antenna.list(req,res)
})
i.app.post('/createinstallantenna',(req,res)=>{
    i.execute.transaction.install.antenna.create(req,res)
})
i.app.post('/updateinstallantenna',(req,res)=>{
    i.execute.transaction.install.antenna.update(req,res)
})
i.app.post('/removeinstallantenna',(req,res)=>{
    i.execute.transaction.install.antenna.remove(req,res)
})
i.app.post('/createinstallapwifi',(req,res)=>{
    i.execute.transaction.install.ap_wifi.create(req,res)
})
i.app.post('/listinstallapwifi',(req,res)=>{
    i.execute.transaction.install.ap_wifi.list(req,res)
})
i.app.post('/removeinstallapwifi',(req,res)=>{
    i.execute.transaction.install.ap_wifi.remove(req,res)
})
i.app.post('/updateinstallapwifi',(req,res)=>{
    i.execute.transaction.install.ap_wifi.update(req,res)
})
i.app.post('/listinstallbas',(req,res)=>{
    i.execute.transaction.install.ba.list(req,res)
})
i.app.post('/createinstallba',(req,res)=>{
    i.execute.transaction.install.ba.create(req,res)
})
i.app.post('/updateinstallba',(req,res)=>{
    i.execute.transaction.install.ba.update(req,res)
})
i.app.post('/removeinstallba',(req,res)=>{
    i.execute.transaction.install.ba.remove(req,res)
})
i.app.post('/listinstallclientservice',(req,res)=>{
    i.execute.transaction.install.client_service.list(req,res)
})
i.app.post('/createinstallclientservice',(req,res)=>{
    i.execute.transaction.install.client_service.create(req,res)
})
i.app.post('/updateinstallclientservice',(req,res)=>{
    i.execute.transaction.install.client_service.update(req,res)
})
i.app.post('/listinstallswitches',(req,res)=>{
    i.execute.transaction.install.switches.list(req,res)
})
i.app.post('/createinstallswitches',(req,res)=>{
    i.execute.transaction.install.switches.create(req,res)
})
i.app.post('/updateinstallswitches',(req,res)=>{
    i.execute.transaction.install.switches.update(req,res)
})
i.app.post('/removeinstallswitches',(req,res)=>{
    i.execute.transaction.install.switches.remove(req,res)
})
i.app.post('/listinstallwirelessradios',(req,res)=>{
    i.execute.transaction.install.wireless_radio.list(req,res)
})
i.app.post('/createinstallwirelessradio',(req,res)=>{
    i.execute.transaction.install.wireless_radio.create(req,res)
})
i.app.post('/updateinstallwirelessradio',(req,res)=>{
    i.execute.transaction.install.wireless_radio.update(req,res)
})
i.app.post('/removeinstallwirelessradio',(req,res)=>{
    i.execute.transaction.install.wireless_radio.remove(req,res)
})
i.app.post('/listinstallimages',(req,res)=>{
    i.execute.transaction.install.image.list(req,res)
})
i.app.post('/createinstallimage',(req,res)=>{
    i.execute.transaction.install.image.create(req,res)
})
i.app.post('/updateinstallimage',(req,res)=>{
    i.execute.transaction.install.image.update(req,res)
})
i.app.post('/removeinstallimage',(req,res)=>{
    i.execute.transaction.install.image.remove(req,res)
})
i.app.post('/listinstallrequest',(req,res)=>{
    i.execute.transaction.install.request.list(req,res)
})
i.app.post('/createinstallrequest',(req,res)=>{
    i.execute.transaction.install.request.create(req,res)
})
i.app.post('/updateinstallrequest',(req,res)=>{
    i.execute.transaction.install.request.update(req,res)
})
i.app.post('/getpics',(req,res)=>{
    i.execute.transaction.pic.list(req,res)
})
i.app.post('/getpicbyid',(req,res)=>{
    i.execute.transaction.pic.getbyid(req,res)
})
i.app.post('/createpic',(req,res)=>{
    console.log("req",req)
    i.execute.transaction.pic.create(req,res)
})
i.app.post('/updatepic',(req,res)=>{
    i.execute.transaction.pic.update(req,res)
})
i.app.post('/removepic',(req,res)=>{
    i.execute.transaction.pic.remove(req,res)
})
i.app.post('/createquotation',(req,res)=>{
    i.execute.transaction.quotation.create(req,res)
})
i.app.post('/listallquotation',(req,res)=>{
    i.execute.transaction.quotation.listall(req,res)
})
i.app.post('/listallquotationservices',(req,res)=>{
    i.execute.transaction.quotation.listallquotationservices(req,res)
})
i.app.post('/updatequotation',(req,res)=>{
    i.execute.transaction.quotation.update(req,res)
})
i.app.post('/updatequotationservice',(req,res)=>{
    i.execute.transaction.quotation.updatequotationservice(req,res)
})
i.app.post('/addquotationservice',(req,res)=>{
    i.execute.transaction.quotation.addquotationservice(req,res)
})
i.app.post('/removequotationservice',(req,res)=>{
    i.execute.transaction.quotation.removequotationservice(req,res)
})
i.app.post('/uplaa',(req,res)=>{
    var form = new formidable.IncomingForm()
    form.parse(req,(err,field,files)=>{
        oldpath = files.image.filepath;
        timestamp = Date.now()
        newpath = '/home/webdev/'+timestamp+'.jpg'
        fs.rename(oldpath,newpath,err=>{
            console.log(oldpath)
            res.send({result:'ok',id:timestamp})
        })
    })
})
getFileType_ = (fileName,callback)=>{
    console.log("fileName",fileName)
    //tmp = fileName.originalFilename
    tmp = fileName.name
    arr = tmp.split(".")
    callback(arr[1])
}
i.app.post('/surveyimages_',(req,res)=>{
    var form = new formidable.IncomingForm()
    form.parse(req,(err,field,files)=>{
        if(err){
            console.log("Err",err)
            res.send({result:false})
        }
        console.log('files',files)
        //oldpath = files.image.filepath;
        oldpath = files.image.path;
        timestamp = Date.now()
        getFileType(files.image,fType=>{
            newpath = i.appSetting.imagePath.surveys+timestamp+'.'+fType
            i.fs.rename(oldpath,newpath,err=>{
                res.send({result:true,id:timestamp})
            })    
        })
    })
})
/** start repair*/
getFileType = (fileName,callback)=>{
    //console.log("fileName",fileName)
    tmp = fileName.originalFilename
    console.log("tmp name",tmp)
    //tmp = fileName.name
    arr = tmp.split(".")
    callback(arr[1])
}
i.app.post('/surveyimages',(req,res)=>{
    var form = new formidable.IncomingForm()
    form.parse(req,(err,field,files)=>{
        if(err){
            console.log("Err",err)
            res.send({result:false})
        }
        console.log('files',files)
        //oldpath = files.image.filepath;
        oldpath = files.image.filepath;
        timestamp = Date.now()
        getFileType(files.image,fType=>{
            newpath = i.appSetting.imagePath.surveys+timestamp+'.'+fType
            i.fs.rename(oldpath,newpath,err=>{
                res.send({result:true,id:timestamp})
            })    
        })
    })
})
i.app.post('/installimages',(req,res)=>{
    var form = new formidable.IncomingForm()
    form.parse(req,(err,field,files)=>{
        //oldpath = files.image.filepath;
        oldpath = files.image.filepath;
        timestamp = Date.now()
        getFileType(files.image,fType=>{
            newpath = i.appSetting.imagePath.installs+timestamp+'.'+fType
            i.fs.rename(oldpath,newpath,err=>{
                console.log(oldpath)
                res.send({result:'ok',id:timestamp})
            })    
        })
    })
})

/** end repair*/
i.app.post('/removesurveyimage',(req,res)=>{
    console.log('REQ',req.body)
    newpath = i.appSetting.imagePath.surveys
    i.fs.unlink(newpath+req.body.filename,err=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            res.send({result:true,description:'remove file success'})
        }
    })
})
i.app.post('/installimages_',(req,res)=>{
    var form = new formidable.IncomingForm()
    form.parse(req,(err,field,files)=>{
        //oldpath = files.image.filepath;
        oldpath = files.image.path;
        timestamp = Date.now()
        getFileType(files.image,fType=>{
            newpath = i.appSetting.imagePath.installs+timestamp+'.'+fType
            i.fs.rename(oldpath,newpath,err=>{
                console.log(oldpath)
                res.send({result:'ok',id:timestamp})
            })    
        })
    })
})
i.app.post('/removeinstallimage',(req,res)=>{
    console.log('REQ',req.body)
    newpath = i.appSetting.imagePath.installs
    i.fs.unlink(newpath+req.body.filename,err=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            res.send({result:true,description:'remove file success'})
        }
    })
})
/*i.app.listen(i.appSetting.port,_=>{
    console.log('Work Order Server start at port ',i.appSetting.port)
})*/
i.https.createServer(
    {
        cert:i.fs.readFileSync('selfsigned.crt'),
        key:i.fs.readFileSync('selfsigned.key')
    },i.app)
    .listen(i.appSetting.port)