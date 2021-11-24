var i = require('./js/initapp')
i.app.get('/help',(req,res)=>{
    res.send(i.help.parse(i.help.common()))
})
i.app.get('/getclientpicbyclientid/:id',(req,res)=>{
    i.execute.master.getClientPicByClientId(req,res)
})
i.app.post('/insertsuspect',(req,res)=>{
    i.execute.transaction.insertSuspect(req,res)
})
i.app.post('/updateclient',(req,res)=>{
    i.execute.transaction.updateClient(req,res)
})
i.app.post('/proposesurvey',(req,res)=>{
    i.execute.transaction.proposeSurvey(req,res)
})
i.app.post('/proposeinstall',(req,res)=>{
    i.execute.transaction.proposeInstall(req,res)
})
i.app.post('/createinstallreport',(req,res)=>{
    i.execute.transaction.createInstallReport(req,res)
})
i.app.post('/createsurveyreport',(req,res)=>{
    i.execute.transaction.createSurveyReport(req,res)
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
i.app.listen(process.env.PORT||i.appSetting.port)
