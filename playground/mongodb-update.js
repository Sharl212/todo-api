const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db){
  const todoDB = db.db('Todo');
  const UsersDB = db.db('Users');

  if (err){
    return console.log('error occurd', err);
  }
  console.log('Connected to MongoDB server');

  UsersDB.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a3450c26b6b1e0847e7f8ba")
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(function(result){
    console.log(result);
  });
  db.close();
});
