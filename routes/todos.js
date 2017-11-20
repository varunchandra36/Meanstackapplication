//todos

const express = require('express');
const todorouter = express.Router();
const User = require('../models/userModel');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Todo = require('../models/todo')
const {ObjectID} = require('mongodb');
const _ = require('lodash');
todorouter.post('/addtodo', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log(req.body.todo);
    var todo = new Todo({
        text: req.body.text,
        _creator: req.user._id
    });

    todo.save().then((doc) => {
    res.send(doc);
    console.log(doc);
    },
    (e) => {
    res.status(400).send(e);
    });
    });

todorouter.get('/todo', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log("getrouter");
    Todo.find({
    _creator: req.user._id
}).then((todos) => {
    res.send({todos});
}, (e) => {
    res.status(400).send(e);
});
});

todorouter.get('/todos/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    var id = req.params.id;

if (!ObjectID.isValid(id)) {
    return res.status(404).send();
}

Todo.findOne({
    _id: id,
    _creator: req.user._id
}).then((todo) => {
    if (!todo) {
    return res.status(404).send();
}
res.send({todo});
}).catch((e) => {
    res.status(400).send();
});
});

todorouter.delete('/:id',passport.authenticate('jwt', {session: false}), (req, res) => {
    var id = req.params.id;

if (!ObjectID.isValid(id)) {
    return res.status(404).send();
}

Todo.findOneAndRemove({
    _id: id,
    _creator: req.user._id
}).then((todo) => {
    if (!todo) {
    return res.status(404).send();
}

res.send({todo});
}).catch((e) => {
    res.status(400).send();
});
});

todorouter.patch('/:id',passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log('todopatch');
    var id = req.params.id;
var body = _.pick(req.body, ['text', 'completed']);

if (!ObjectID.isValid(id)) {
    return res.status(404).send();
    console.log('todopatch1');
}

if (_.isBoolean(body.completed)) {
    body.completedAt = new Date().getTime();
    body.completed = true;
    console.log('todopatch2');
} else {
    body.completed = false;
    body.completedAt = null;
    console.log('todopatch3');
}

Todo.findOneAndUpdate({_id: id, _creator: req.user._id}, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
    return res.status(404).send();
    console.log('todopatch5');
}

res.send({todo});
}).catch((e) => {
    res.status(400).send();
})
});
module.exports = todorouter;