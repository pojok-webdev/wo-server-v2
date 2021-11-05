# Work Order API
## _PT Padi Internet_

## Create Suspect
- Yang perlu dicreate adalah _suspect_, selanjutnya suspect ini berubah menjadi _prospect_ dan kemudian _client_
- Suspect, Prospect, dan Client mengacu pada _Table_ yang sama, yaitu _client_
- Untuk merubah dari Suspect ke Prospect, adalah dengan menyematkan _prospectdate_ pada table _client_
- Untuk merubah dari Prospect ke Client adalah dengan merubah value kolom _active_ menjadi _1_
### Syntax
```sh
curl -d 'name=clientname&phone_area=xxx&phone=xxxxxxx&address=clientaddress&city=clientcity&end_of_contract=YYY-MM-DD&business_field=clientbusinessfield' -X POST http://server:port/insertsuspect
```

#### Kolom2 yang available:
- name
- phone_area
- phone
- address
- city
- end_of_contract
- business_field
- status
- alias
- user_id
- sale_id
- siup
- npwp
- clientcategory
- isffr
- isoryza
#### Kolom2 yang harus diisi
- name
- phone_area
- phone
- address
- end_of_contract
- business_field

## Update Client
- Update client dipergunakan untuk konversi dari Suspect (Lead) menjadi Prospect, atau konversi dari Prospect menjadi Pelanggan
- Suspect (Lead) berubah menjadi Prospect dengan mengupdate prospectdate dari semula null menjadi tanggal dengan format YYYY-MM-DD
- Prospect berubah menjadi Pelanggan dengan mengupdate kolom active menjadi "1"

### Syntax
dari Lead ke Prospect
```sh
curl -d 'id=client_id&prospectdate=YYY-MM-DD' -X POST http://server:port/updateclient
```
dari Prospect ke Pelanggan
```sh
curl -d 'id=client_id&active=1' -X POST http://server:port/updateclient
```

#### Kolom2 yang available:
- name
- phone_area
- phone
- address
- city
- end_of_contract
- business_field
- status
- alias
- user_id
- sale_id
- siup
- npwp
- clientcategory
- isffr
- isoryza
#### Kolom2 yang harus diisi
- id (client_id)

## createreport

syntax
```sh
curl -H 'Content-Type: application/json' -H 'Accept: application/json' -X POST -d '{"tags":["tag1","tag2"],"question":"Which band?","answers":[{"id":"a0","answer":"Answer1"},{"id":"a1","answer":"answer2"}]}' http://localhost:20215/createreport
```


```sh
curl -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{
        "antennas":[{"name":"Grid 27 dBi 5.8 GHz","amount":1,"location":"Tower 20 meter"}],
        "ap_wifis":[{
            "tipe":"Linksys WRT54GL",
            "macboard":"B4750EBA5538",
            "owner":"Pak Kris/Bu Linda",
            "ip_address":"192.168.1.2","essid":"sni","security_key":"freddy123","user":"root","password":"admin","location":"depan pintu"}
        ],
        "bas":[{"name":"ba"}]}' -X POST localhost:20215/createreport
```