var mongoose = require('mongoose');

var promise = mongoose.createConnection('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
