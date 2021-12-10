routines = require('./../../execute/routines')
install = {
    site:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    antenna:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    ap_wifi:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    ba:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    client_service:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    date:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    file:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    image:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    installer:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    material:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    pccard:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    request:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    request_user:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    resume:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    router:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    wireless_radio:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    switches:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
    request:{
        create:obj=>{return routines.create(obj)},
        update:obj=>{return routines.update(obj)}
    },
}
module.exports = {
    site:install.site,
    antenna:install.antenna,
    ap_wifi:install.ap_wifi,
    ba:install.ba,
    client_service:install.client_service,
    date:install.date,
    file:install.file,
    image:install.image,
    installer:install.installer,
    material:install.material,
    pccard:install.pccard,
    request:install.request,
    request_user:install.request_user,
    resume:install.resume,
    router:install.router,
    wireless_radio:install.wireless_radio,switches:install.switches,request:install.request
}