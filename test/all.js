var assert = require('assert');
var i = require('./../js/initapp');
describe('test all functions ',_=>{
    it('Should return ',_=>{
        assert.equal()
    })
    it('should equal 2', () => {
        const result = i.execute.transaction.updateClient({id:1818,alias:'PRATAMA CELLss'},res);
        expect(result).to.equal(2);
    });
    it('should equal 4', () => {
        const result = math.add(2, 2);
        expect(result).to.equal(4);
    });
})