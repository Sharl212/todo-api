var mongoose = require('mongoose');

var Users = mongoose.model('Usersinfos', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Users};
