const mocha = require('mocha');
const assert = require('assert');

//ES6 Promise  because apparently defaults are deprecated
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//untilizing the schema from the users.js file
const User = require('../app/models/users');

describe('some demo tests',function(){
    
    
    it('saves a record to the ddb', function(){
        var user0 = new User({
            userName: 'test',
            passWord: 'password'
        });
        //remember, save() is an async process so before further actions can happen the code has to know when the process has ended -- using promise methods
        user0.save().then(function(){
            assert(user0.isNew === false);
        });
        
        
        
    });
            
});