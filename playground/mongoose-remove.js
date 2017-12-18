const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(function(result){
//   console.log(result);
// });

Todo.findByIdAndRemove('5a3720ca1e87fed1af8a6b0a').then(function(todo){
  console.log(todo)
});
