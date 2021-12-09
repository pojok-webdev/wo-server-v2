var i = require('./js/initapp')
i.app.get('/help',(req,res)=>{
    res.send(i.help.parse(i.help.common()))
})
i.app.get('/getclientpicbyclientid/:id',(req,res)=>{
    i.execute.master.getClientPicByClientId(req,res)
})
i.app.get('/getclientservicebyclientid/:id',(req,res)=>{
    i.execute.list.getClientServiceByClientId(req,res)
})
i.app.post('/insertsuspect',(req,res)=>{
    i.execute.transaction.insertSuspect(req,res)
})
i.app.post('/updateclient',(req,res)=>{
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
i.app.get('/getmasterservice',(req,res)=>{
    i.execute.master.getMasterService(req,res)
})
i.app.get('/getmasterservicebyname/:name',(req,res)=>{
    i.execute.master.getMasterServiceByName(req,res)
})
i.app.get('/getmasterservicebycategory/:category_id',(req,res)=>{
    i.execute.master.getMasterServiceByCategory(req,res)
})
i.app.get('/getmastermaterial', (req,res) => {
    i.execute.master.getMasterMaterial(req,res)
})
i.app.get('/getmastermaterialbyname/:name',(req,res)=>{
    i.execute.master.getMasterMaterialByName(req,res)
})
i.app.get('/getmasterdevice', (req,res) => {
    i.execute.master.getMasterDevice(req,res)
})
i.app.get('/getlistleadsbyname/:name', (req,res)=>{
    i.execute.list.getLeadsByName(req,res)
})
i.app.get('/getlistprospectsbyname/:name', (req,res)=>{
    i.execute.list.getProspectsByName(req,res)
})
i.app.get('/getlistclientsbyname/:name', (req,res)=>{
    i.execute.list.getClientsByName(req,res)
})
i.app.get('/getlistclientsbyid/:id',(req,res)=>{
    i.execute.list.getClientsById(req,res)
})
i.app.post('/getticketsbyclientname',(req,res)=>{
    i.execute.list.getTicketsByClientName(req,res)
})
i.app.get('/getticketsbyclientid/:id',(req,res)=>{
    i.execute.list.getTicketsByClientId(req,res)
})
i.app.get('/getticketsbyid/:id',(req,res)=>{
    i.execute.list.getTicketsById(req,res)
})
i.app.get('/getticketsbykdticket/:kdticket',(req,res)=>{
    i.execute.list.getTicketsByKdTicket(req,res)
})
i.app.post('/createsurveysite',(req,res)=>{
    i.execute.transaction.survey.site.create(req,res)
})
i.app.post('/updatesurveysite',(req,res)=>{
    i.execute.transaction.survey.site.update(req,res)
})
i.app.post('/updatesurveybas',(req,res)=>{
    i.execute.transaction.survey.bas.update(req,res)
})
i.app.post('/updatesurveybtsdistances',(req,res)=>{
    i.execute.transaction.survey.bts_distance.update(req,res)
})
i.app.post('/createsurveyclientdistances',(req,res)=>{
    i.execute.transaction.survey.client_distance.create(req,res)
})
i.app.post('/updatesurveyclientdistances',(req,res)=>{
    i.execute.transaction.survey.client_distance.update(req,res)
})
i.app.post('/createsurveydevices',(req,res)=>{
    i.execute.transaction.survey.device.create(req,res)
})
i.app.post('/updatesurveydevices',(req,res)=>{
    i.execute.transaction.survey.device.update(req,res)
})
i.app.post('/createsurveymaterials',(req,res)=>{
    i.execute.transaction.survey.material.create(req,res)
})
i.app.post('/updatesurveymaterials',(req,res)=>{
    i.execute.transaction.survey.material.update(req,res)
})
i.app.post('/createsurveyresumes',(req,res)=>{
    i.execute.transaction.survey.resume.create(req,res)
})
i.app.post('/updatesurveyresumes',(req,res)=>{
    i.execute.transaction.survey.resume.update(req,res)
})
i.app.post('/createsurveysitedistances',(req,res)=>{
    i.execute.transaction.survey.site_distance.create(req,res)
})
i.app.post('/updatesurveysitedistances',(req,res)=>{
    i.execute.transaction.survey.site_distance.update(req,res)
})
i.app.post('/createsurveysurveyors',(req,res)=>{
    i.execute.transaction.survey.surveyor.create(req,res)
})
i.app.post('/updatesurveysurveyors',(req,res)=>{
    i.execute.transaction.survey.surveyor.update(req,res)
})
i.app.post('/createsurveyimages',(req,res)=>{
    i.execute.transaction.survey.imagesv2.create(req,res)
})
i.app.post('/updatesurveyimages',(req,res)=>{
    i.execute.transaction.survey.imagesv2.update(req,res)
})
i.app.post('/createinstallsite',(req,res)=>{
    i.execute.transaction.install.site.create(req,res)
})
i.app.post('/updateinstallsite',(req,res)=>{
    i.execute.transaction.install.site.update(req,res)
})
i.app.post('/createinstallantenna',(req,res)=>{
    i.execute.transaction.install.antenna.create(req,res)
})
i.app.post('/updateinstallantenna',(req,res)=>{
    i.execute.transaction.install.antenna.update(req,res)
})
i.app.post('/createinstallapwifi',(req,res)=>{
    i.execute.transaction.install.ap_wifi.create(req,res)
})
i.app.post('/updateinstallapwifi',(req,res)=>{
    i.execute.transaction.install.ap_wifi.update(req,res)
})
i.app.post('/createinstallba',(req,res)=>{
    i.execute.transaction.install.ba.create(req,res)
})
i.app.post('/updateinstallba',(req,res)=>{
    i.execute.transaction.install.ba.update(req,res)
})
i.app.post('/createinstallclientservice',(req,res)=>{
    i.execute.transaction.install.client_service.create(req,res)
})
i.app.post('/updateinstallclientservice',(req,res)=>{
    i.execute.transaction.install.client_service.update(req,res)
})
i.app.listen(process.env.PORT||i.appSetting.port)
