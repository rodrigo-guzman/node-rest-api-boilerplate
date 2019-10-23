const express = require('express');
const router = new express.Router();
const HelloWorldCtrl = new (require('../controllers/helloWorld.controller'))();
const usersCtrl = new (require('../controllers/users.controller'))();

router
	.route('/hello-world')
	.get(HelloWorldCtrl.sayHi);

router
	.route('/users')
	.get(usersCtrl.getUsers);


module.exports = router;
