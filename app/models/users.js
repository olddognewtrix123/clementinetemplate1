'use strict';

//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

//var User = new Schema({
//	github: {
//		id: String,
//		displayName: String,
//		username: String,
//      publicRepos: Number
//	},
//   nbrClicks: {
//      clicks: Number
//   }
//});

//module.exports = mongoose.model('User', User);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  const OptionSchema = new Schema({
     optionName: String,
     numClick: Number
  });

  const SurveySchema = new Schema({
     surveyName: String,
     options: [OptionSchema]
  })

  const UserSchema = new Schema({
     userName: String,
     passWord: String,
     surveys: [SurveySchema]
  });

//'user' is the collection name in the database
const User = mongoose.model('user', UserSchema);

module.exports = mongoose.model('User', UserSchema);