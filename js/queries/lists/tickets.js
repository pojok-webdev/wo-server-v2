var listTicket = {
    getTicketByClientId : obj => {
        sql = 'select a.id,a.name,a.createdate from clients a '
        sql+= 'left outer join client_sites b on b.client_id=a.id '
        sql+= 'left outer join tickets c on c.client_site_id=b.id '
        sql+= 'where a.id='+obj.id+' '
        console.log('SQL',sql)
        return sql
    },
    getTicketByClientName : obj => {
        sql = 'select a.id,a.name,a.createdate from clients a '
        sql+= 'left outer join client_sites b on b.client_id=a.id '
        sql+= 'left outer join tickets c on c.client_site_id=b.id '
        sql+= 'where a.name like "%'+obj.name+'%" '
        console.log('SQL',sql)
        return sql
    },
    getTicketByKdticket : obj => {
        sql = 'select a.id,a.kdticket,a.clientname,a.create_date from tickets a '
        sql+= 'where a.kdticket="'+obj.kdticket+'" '
        return sql
    },
    getTicketById : obj => {
        sql = 'select a.id,a.kdticket,a.clientname,a.create_date from tickets a '
        sql+= 'where a.id="'+obj.id+'" '
        return sql
    }
}
module.exports = {
    getTicketByClientId:listTicket.getTicketByClientId,
    getTicketByClientName:listTicket.getTicketByClientName,
    getTicketByKdticket:listTicket.getTicketByKdticket,
    getTicketById:listTicket.getTicketById
}