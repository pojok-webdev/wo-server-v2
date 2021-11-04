
o = {
    "install_site_id":1,
    "antennas":[{"name":"","amount":1,"location":""}],
    "ap_wifis":[{"tipe":"","macboard":"","ip_address":"","essid":"","security_key":"","user":"","password":"","location":"","owner":""}],
    "bas":[{"name":"","img":"","path":"","description":""}],
    "client_services":[{"servicetype":"","service_id":0}],
    "images":[{"img":"","title":"","roworder":"","description":""}],
    "installers":[{"name":""}],
    "materials":[{"material_id":0,"tipe":"","name":"","description":""}],
    "pccards":[{"name":"","macaddress":"","description":""}],
    "resumes":[{"name":""}],
    "routers":[{"tipe":"","macboard":"","ip_public":"","ip_private":"","user":"","password":"","location":"","milikpadinet":"","serialno":"","barcode":""}],
    "switches":[{"name":"","port":"","ismanaged":"","user":"","password":""}],
    "wireless_radios":[{"tipe":"","macboard":"","bts":"","ip_radio":"","ip_ap":"","ip_ethernet":"","essid":"","freqwency":"","polarization":"","signal":"","quality":"","throughput_udp":"","throughput_tcp":"","noise":"","user":"","password":""}]
}


InstallReport = obj => {
    return {
        addAntennas:antennas => {
            antennas.forEach(element => {
                saveAntenna(element)
            });
        },
        addApWifis:ap_wifis => {},
        addBas:bas => {},
        addClientService:clientservices => {},
        addImages:images => {},
        addInstallers:installers => {},
        addMaterials:materials => {},
        addPCCards:pccards => {},
        addResumes:resumes => {},
        addRouters:routers => {},
        addBarcodes:barcodes => {},
        addSwitches:switches => {},
        addWirelessRadios:wirelessradios => {},
        addPolarization:polarization => {}
    }
}