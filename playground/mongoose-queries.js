const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '5a3462013dd07d2604675137';

User.findById('5a3462013dd07d2604675137').then(function(user){
    console.log(JSON.stringify(user, undefined, 2));
});
