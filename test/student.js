//http://unitjs.com/guide/should-js.html

var should = require('should-http'),
	request = require('supertest');

describe('student', function(){
	var url = "http://localhost:5000";

	describe("find()",  function(){
		it('should retrieve all student record', function(done){
			request(url)
			.get('/students')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);                    
				done();
			});
		});
	});

	describe("findOne()",  function(){
		it('should retrieve a specific student record', function(done){
			request(url)
			.get('/students/1')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				done();
			});
		});
	});

	describe("insert()",  function(){
		it('should insert a student to the student record', function(done){

			var studrec = {
				'name': 'Narom Santos',
				'studno': '2013-23228'
			};

			request(url)
			.post('/students')
			.send(studrec)
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				studrec.should.have.properties('name', 'studno');
				studrec['name'].should.be.type('string');
				studrec['studno'].should.be.type('string');
				studrec['studno'].should.have.length(10);
				done();
			});
		});
	});

});