var assert = require('assert'),
i = require('./../js/initapp'),
chai = require('chai'),
chaiHttp = require('chai-http'),
expect = require('chai').expect,
request = require('request'),
should = chai.should(),
server = 'localhost:'+i.appSetting.port
chai.use(chaiHttp)
describe('TEST SURVEY FUNCTIONS', () => {
    it('it should not propose survey, check don have item',(done)=>{
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
                obj.result.should.be.eql(false);
            done();
            });

    })
    it('it should propose survey, complete mandatories',(done)=>{
        let client = {
            name: "Tjakrindow",
            client_id:1,
            branch_id:1,survey_date:'2021-12-01',city:'Surayba',pic_name:'Jojo',pic_phone:'',
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