var assert = require('assert'),
i = require('./../js/initapp'),
chai = require('chai'),
chaiHttp = require('chai-http'),
expect = require('chai').expect,
request = require('request'),
should = chai.should(),
server = 'localhost:'+i.appSetting.port
chai.use(chaiHttp)
describe('Test Survey Functions', () => {
    it('it should propose survey',(done)=>{
        let client = {
            name: "Tjakrindow",
            phone_area: "031",
            phone: "1954",address:"Majyjen Sungkono",business_field:"COmpany"
        }
        chai.request(server)
            .post('/proposesurvey')
            .send(client)
            .end((err, res) => {
                console.log('should insert',res.text)
                obj = JSON.parse(res.text)
                res.should.have.status(200);
                obj.should.be.a('object');
                obj.result.should.be.eql(true);
            done();
            });

    })
})