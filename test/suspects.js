var assert = require('assert'),
i = require('./../js/initapp'),
chai = require('chai'),
chaiHttp = require('chai-http'),
expect = require('chai').expect,
request = require('request'),
should = chai.should(),
server = 'localhost:20215'
chai.use(chaiHttp)
describe.skip('Test Suspect Functions', () => {
    it('it should not POST a suspect without mandatory field', (done) => {
        let client = {
            name: "Tjakrindow",
            address: "Maydjen Soengkono",
            year: 1954
        }
        chai.request(server)
            .post('/insertsuspect')
            .send(client)
            .end((err, res) => {
                obj = JSON.parse(res.text)
                res.should.have.status(200);
                obj.should.be.a('object');
                obj.result.should.be.eql(false);
                obj.comment.should.have.property('dont have');
            done();
            });
    });
    it('it should POST a suspect', (done) => {
        let client = {
            name: "Tjakrindow",
            phone_area: "031",
            phone: "1954",address:"Majyjen Sungkono",business_field:"COmpany"
        }
        chai.request(server)
            .post('/insertsuspect')
            .send(client)
            .end((err, res) => {
                console.log('should insert',res.text)
                obj = JSON.parse(res.text)
                res.should.have.status(200);
                obj.should.be.a('object');
                obj.result.should.be.eql(true);
            done();
            });
    });
})