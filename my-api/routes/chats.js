var express = require('express');
var router = express.Router();
var Chats = require ('../models/Chats');
const { response } = require('../app');

//================GET===================
router.get('/', function (req, res) {
    let response = [];
    
    Chats.find({})
    .then(data => {
        response = data.map(item => {
            return {
            id : item.id,
            name : item.name,
            message : item.message
            }
        })  
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//======================POST=============

router.post('/', function (req, res) {
    let { id, name, message } = req.body

    let response = {
        status : '',
        data : {}
    }
    Chats.create({
        id, name, message
    })
    .then(data => {
        response.status = 'success'
        response.data.id = data.id
        response.data.name = data.name
        response.data.message = data.message 
        res.status(201).json(response) 
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//==================DELETE==========

router.delete('/:id', function (req, res, next) {
    const { id } = req.params

    let response = {
        status: '',
        message: "",
        data: {},
    }

    Chats.findOneAndRemove({id : Number(id)})
        .then(data => {
            console.log('id', id);
            console.log('data delete', data);
            response.status = 'success'
            response.message = "data have been daleted"
            response.data.id = id
            response.data.name = data.name
            response.data.message = data.message
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

module.exports = router;