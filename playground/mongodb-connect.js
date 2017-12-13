const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db){
  const todo = db.db('Todo');
  const users = db.db('Users');

  if (err){
    return console.log('error occurd', err);
  }
  console.log('Connected to MongoDB server');

  // todo.collection('Todos').insertOne({
  //   text: 'something',
  //   completed:false
  // }, function(err, result){
  //   if (err){
  //     return console.log('Unable to insert Todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  users.collection('Users').insertOne({
    name: 'Sharl',
    age: 19,
    location: 'cairo',
    completed: false
  }, function(err, result){
    if (err){
      console.log('ERROR', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })
  db.close();
});
