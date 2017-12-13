const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db){
  const todoDB = db.db('Todo');
  const UsersDB = db.db('Users');

  if (err){
    return console.log('error occurd', err);
  }
  // todoDB.collection('Todos').find().count().then(function(count){
  //   console.log(`todos count: ${count}`);
  // }, function(err){
  //   console.log('ERROR', err);
  // });
  UsersDB.collection('Users').find({name: "Mike"}).toArray().then(function (docs){
    console.log(JSON.stringify(docs, undefined, 2));
  }, function (err){
    console.log(`err`, err);
  });
  db.close();
});
