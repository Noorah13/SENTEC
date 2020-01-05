
 const mongoose = require('mongoose');

 //ES6 promises
 mongoose.Promise = global.Promise; 
 
 
 //connect to the db before tests run
 before(function(done){
 
 //connect to mongodb
 mongoose.connect('mongodb://localhost/testaroo', { useMongoClient : true});
 
 
     //Listen to connection
      mongoose.connection.once('open', function(){
       console.log('Connection successfully established..');
        done();
       }).on('error', function(error){
 
     console.log("Connection error: ", error);
   });
 
 });

 //Drop the characters collection before each test
 beforeEach(function(done){
     //Drop the collection
     mongoose.connection.collections.mariochars.drop(function(){
         done();
     });

 });