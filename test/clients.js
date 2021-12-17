var assert = require('assert'),
i = require('./../js/initapp'),
chai = require('chai'),
chaiHttp = require('chai-http'),
expect = require('chai').expect,
request = require('request'),
should = chai.should(),
server = 'localhost:'+i.appSetting.port
chai.use(chaiHttp)
describe('Test Client Functions ',_=>{
    it('Get List Client By Name', function(done) {
        request('http://localhost:20215/getlistclientsbyname/tdjak' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('GET all clients named tjakrindo', (done) => {
        chai.request(server)
        .get('/getlistclientsbyname/tjak')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.description.should.be.a('array');
              res.body.description.length.should.be.gte(0);
          done();
        });
  });
  it('Get Client PIC by Client ID, view the result by res.text',(done)=>{
      chai.request(server)
      .get('/getclientpicbyclientid/1818')
      .end((err,res) => {
          res.should.have.status(200)
          done()
      })
  })
  it('Get Clients service',done=>{
      chai.request(server)
      .get('/getclientservicebyclientid/818')
      .end((err,res)=>{
          done()
      })
  })
  it('Update Client', (done) => {
    let client = {
        id:"10324",
        name: "Tjakrindo",
        address: "Maydjen Soengkono",
    }
    chai.request(server)
        .post('/updateclient')
        .send(client)
        .end((err, res) => {
            obj = JSON.parse(res.text)
            res.should.have.status(200);
            obj.should.be.a('object');
            obj.result.should.be.eql(true);
        done();
        });
    });

})