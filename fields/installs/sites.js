var site = {
    antenna : {
        update:{
            mandatories:['id'],
            allfields:['id','install_site_id','name','amount','location','createuser','createdate'],
            numberfields:['id','install_site_id']
        },
        create:{            
            mandatories:['install_site_id'],
            allfields:['id','install_site_id','name','amount','location','createuser','createdate'],
            numberfields:['id','install_site_id']
        }
    },
    ap_wifi : {
        update:{
            mandatories:['id'],
            allfields:['id','install_site_id','tipe','macboard','ip_address','essid','security_key','user','password','location','owner','user_name','createuser','create_date'],
            numberfields:['id','install_site_id']
        },
        create:{            
            mandatories:['install_site_id'],
            allfields:['id','install_site_id','tipe','macboard','ip_address','essid','security_key','user','password','location','owner','user_name','createuser','create_date'],
            numberfields:['id','install_site_id']
        }
    },
    ba : {
        update:{
            mandatories : ['id'],
            allfields : ['id','install_site_id','name','path','description','createuser','createdate'],
            numberfields : ['id','install_site_id']
        },
        create:{
            mandatories : ['install_site_id'],
            allfields : ['id','install_site_id','name','path','description','createuser','createdate'],
            numberfields : ['id','install_site_id']
        }
    },
    client_service: {
        create:{
            mandatories:['client_site_id'],
            allfields:['client_id','client_site_id','servicetype','service_id'],
            numberfields:['client_id','client_site_id']
        },
        update:{
            mandatories:['client_site_id'],
            allfields:['client_id','client_site_id','servicetype','service_id'],
            numberfields:['client_id','client_site_id']
        }
    },
    installer:{
        create:{
            mandatories:['install_site_id'],
            allfields:['id','install_site_id','name','user_name'],
            numberfields:['id','install_site_id']
        },
        update:{
            mandatories:['id'],
            allfields:['id','install_site_id','name','user_name'],
            numberfields:['id','install_site_id']
        },

    },
    material:{
        create:{
            mandatories:['install_site_id'],
            allfields:['id','install_site_id','material_id','tipe','name','description','createuser'],
            numberfields:['id','install_site_id']
        },
        update:{
            mandatories:['id'],
            allfields:['id','install_site_id','material_id','tipe','name','description','createuser'],
            numberfields:['id','install_site_id']
        },

    },
    pc_card:{
        create:{
            mandatories:['install_site_id'],
            allfields:['id','install_site_id','name','macaddress','description','createuser'],
            numberfields:['id','install_site_id']
        },
        update:{
            mandatories:['id'],
            allfields:['id','install_site_id','name','macaddress','description','createuser'],
            numberfields:['id','install_site_id']
        },
    },
    resume:{
        create:{
            mandatories:['install_site_id'],
            allfields:['id','install_site_id','name','createuser'],
            numberfields:['id','install_site_id']
        },
        update:{
            mandatories:['id'],
            allfields:['id','install_site_id','name','createuser'],
            numberfields:['id','install_site_id']
        },
    },
    site : {
        create:{
            mandatories : ['install_request_id'],
            allfields : ['id','install_request_id','client_site_id','address','city','pic_name','pic_position','pic_phone_area','pic_phone','pic_email','install_date','permit','resume','description','active','requestsent','resultsent'],
            numberfields : ['id']
        },
        update:{
            mandatories : ['id'],
            allfields : ['id','install_request_id','client_site_id','address','city','pic_name','pic_position','pic_phone_area','pic_phone','pic_email','install_date','permit','resume','description','active','requestsent','resultsent'],
            numberfields : ['id']
        }
    },
    router : {
        create:{
            mandatories : ['install_site_id'],
            allfields : ['id','install_site_id','tipe','macboard','ip_public','ip_private','user','password','location','milikpadinet','serialno','barcode'],
            numberfields : ['id','install_site_id']
        },
        update:{
            mandatories : ['id'],
            allfields : ['id','install_site_id','tipe','macboard','ip_public','ip_private','user','password','location','milikpadinet','serialno','barcode'],
            numberfields : ['id']
        }
    },
    wireless_radio : {
        create:{
            mandatories : ['install_site_id'],
            allfields : ['id','install_site_id','tipe','macboard','bts','ip_radio','ip_ap','ip_ethernet','essid','freqwency','polarization','signal','quality','througput_udp','througput_tcp','noise','user','password','createuser'],
            numberfields : ['id','install_site_id']
        },
        update:{
            mandatories : ['id'],
            allfields : ['id','install_site_id','tipe','macboard','bts','ip_radio','ip_ap','ip_ethernet','essid','freqwency','polarization','signal','quality','througput_udp','througput_tcp','noise','user','password','createuser'],
            numberfields : ['id']
        }
    },
    client_service : {
        create:{
            mandatories : ['install_site_id'],
            allfields : ['id','install_site_id','name','port','ismanaged','user','password','createuser'],
            numberfields : ['id','install_site_id']
        },
        update:{
            mandatories : ['id'],
            allfields : ['id','install_site_id','name','port','ismanaged','user','password'],
            numberfields : ['id']
        }
    },
    switches : {
        create:{
            mandatories : ['install_site_id'],
            allfields : ['id','install_site_id','name','port','ismanaged','user','password','createuser'],
            numberfields : ['id','install_site_id']
        },
        update:{
            mandatories : ['id'],
            allfields : ['id','install_site_id','name','port','ismanaged','user','password'],
            numberfields : ['id']
        }
    },
    image : {
        create:{
            mandatories : ['install_site_id'],
            allfields : ['id','install_site_id','path','title','roworder','description','username'],
            numberfields : ['id','install_site_id','roworder']
        },
        update:{
            mandatories : ['id'],
            allfields : ['id','install_site_id','path','title','roworder','description','username'],
            numberfields : ['id','install_site_id','roworder']
        }
    },
    request : {
        create:{
            mandatories : ['survey_request_id'],
            allfields : ['id','survey_request_id','client_id','client_site_id','service_id','direction','pic_name','pic_position','pic_phone_area','pic_phone','pic_email','install_date','withtrial','trialdistance','trial_permanent','trial_periode1','trial_period1exec','trial_periode2','trial_period2exec','accepted','permit','reschedule1','reschedule2','fix_install_date','description','status','createuser'],
            numberfields : ['id','survey_request_id','roworder']
        },
        update:{
            mandatories : ['id'],
            allfields : ['id','survey_request_id','client_id','client_site_id','service_id','direction','pic_name','pic_position','pic_phone_area','pic_phone','pic_email','install_date','withtrial','trialdistance','trial_permanent','trial_periode1','trial_period1exec','trial_periode2','trial_period2exec','accepted','permit','reschedule1','reschedule2','fix_install_date','description','status'],
            numberfields : ['id','survey_request_id','roworder']
        }
    },
}
module.exports = {
    site:site.site,
    antenna:site.antenna,
    ap_wifi:site.ap_wifi,
    ba:site.ba,
    client_service:site.client_service,
    switches:site.switches,wireless_radio:site.wireless_radio,image:site.image,request:site.request
}
