const _ = require('lodash');
const {MongoDB, ObjectID} = require('mongodb');
const port = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

app.use(bodyParser.json());

app.post('/todos', function(req, res){
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(function(doc){
    res.send(doc);
  }, function(e){
    res.status(400).send(e);
  });
});
app.get('/todos', function(req, res){
  Todo.find().then(function(todos){
    res.send({
      todos
    });
  }, function(e){
    res.status(400).send(e);
  });
});

app.get('/todos/:id', function(req, res){
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  };
  Todo.findById(id).then(function(todo){
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch(function(e){
    res.status(404).send(e);
  });
});

app.delete('/todos/:id', function(req, res){
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then(function(todo){
    if(!todo){
      return res.status(404).send();
    };
    res.send({todo});
  }).catch(function(e){
    res.status(404).send(e);
  });
});

app.patch('/todos/:id', function(req, res){
    var id = req.params.id;
    var body = _.pick(req.body, ['text','completed']);

    if(!ObjectID.isValid(id)){
      return res.status(404).send();
    };

    if(_.isBoolean(body.completed) && body.completed){
      body.completedAt = new Date().getTime();
    }else {
      body.completed = false;
      body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set :body}, {new: true}).then(function(todo){
      if(!todo){
        return res.status(404).send()
      }
      res.send({todo});
    }).catch(function(e){
      res.status(404).send();
    });
  });
app.listen(port, function (){
  console.log(`up on ${port}`);
});
