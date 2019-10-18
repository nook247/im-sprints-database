var models = require('../models');
var express = require('express');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get().then(function (last) {
        res.status(200).send(JSON.stringify(last));
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log(req);
      const{body} = req; 
      console.log("this is messagebody ", body)
      models.messages.post(body);
      res.status(201).send('"post success"');

    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get().then(function (data) {
        res.status(200).send(JSON.stringify(data))
      })
      // res.status(200).send(messages);
    }, // a function which handles a get request for all users
    post: function (req, res) {
       const{body} = req;
       console.log("this is userbody ", body)
      models.users.post(body);
        res.status(201).send('"post success"');

    } // a function which handles posting a user to the database
  }
};



/*
const models = require('./models');
    
    const getMessageController = function(req, res) {
      const messages = models.getMessageModels();
    // require 해온 models 에 getMessageModels 을 사용할 수 있습니다.
      res.status(200).send(messages);
    };
    
    const postMessageController = function(req, res) {
      const { body } = req;
      models.postMessageModels(body);
      res.status(201).send('success');
    };
    
    module.exports = {
      getMessageController,
      postMessageController
    };
*/