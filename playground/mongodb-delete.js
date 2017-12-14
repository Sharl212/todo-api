const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db){
  const todoDB = db.db('Todo');
  const UsersDB = db.db('Users');

  if (err){
    return console.log('error occurd', err);
  }
  console.log('Connected to MongoDB server');

  // UsersDB.collection('Users').deleteOne({name : 'Shady'}).then(function(result){
  //   console.log(result);
  // });
  UsersDB.collection('Users').findOneAndDelete({completed: false}).then(function(result){
    console.log(result);
  });

  db.close();
});
