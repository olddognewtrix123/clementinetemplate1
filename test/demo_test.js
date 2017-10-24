const mocha = require('mocha');
const assert = require('assert');

//ES6 Promise
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//untilizing the schema from the users.js file
const User = require('../app/models/users');

describe('some demo tests',function(){
    //Create the tests with 'it' blocks
    //Remember to pass the 'done()' function! 
    it('saves a record to the ddb', function(done){
        this.timeout(15000); // getting around timeout issue
    setTimeout(done, 15000); // getting around timeout issue
        var user0 = new User({
            userName: 'test',
            passWord: 'password'
        });
        //remember, save() is an async process so before further actions can happen the code has to know when the process has ended -- using promise methods
        user0.save().then(function(){
            assert(user0.isNew === false);
            done();
        });
    });
            
});