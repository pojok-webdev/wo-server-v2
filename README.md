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

