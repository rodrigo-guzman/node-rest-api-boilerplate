const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url= 'localhost:3000/api/users';

chai.use(chaiHttp);


describe('get all users: ',()=>{  
     it('should get all users', (done) => {
        chai.request(url)
          .get('/')
          .end( function(err,res){
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
          });
      });
    });
    