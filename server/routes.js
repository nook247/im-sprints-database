var controller = require('./controllers');
var router = require('express').Router();

// let target = {
//     username : 'myname333',
//     message : 'why not test333',
//     roomname : 'codestates3333'
//   }
//   controller.messages.post(target);
//   controller.messages.get();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

