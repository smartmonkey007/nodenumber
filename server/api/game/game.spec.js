
'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/game', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/game')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
            expect(res.body).to.not.be.instanceof(Array);
        done();
      });
  });
});
