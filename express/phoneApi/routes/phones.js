var express = require('express');
var router = express.Router();

const Phone = require('../models/phone')

/* GET users listing. */

var phones = []

router.get('/phones', function(req, res, next) {
  Phone.find({}, function(erro, phoneList){
    if (err) {
      res.json(err)
    } else {
      res.json(phoneList)
    }
  })
  // res.send('list all phones');
});

router.post('/phones', function(req, res, next) {
  var newPhone = new Phone({
    brand: req.body.brand,
    name: req.body.name,
    specs: req.body.sprecs,
    image: req.body.image, || ''
  })

  newPhone.save(( function(err){
    if (err) {
      res.json(err)
    } else {
      res.json({
        message: "created",
        id: newPhone._id
      })
    }
  })

  // res.send('create new phone')
})

router.get('/phones/:id', function(req, res, next) {
  var id = req.params.id

  Phone.findById(id, function(err, phone){
    if (err) {
      res.json(err)
    } else {
      res.json(phone)
    }
  })
  // res.send('show a phone ' + id)
})

router.put('/phones/:id', function(req, res, next) {

  var id = req.params.id;

  var phoneToUpdate = {
    brand: req.body.brand,
    name: req.body.name,
    specs: req.body.sprecs,
    image: req.body.image, || ''
  }

  Phone.findByIdAndUpdate(id, phoneToUpdate, function(err){
    if (err) {
      res.json(err)
    } else {
      res.json({message: "update"})
    }
  })
  // res.send('edit a phone ' + id)
})




router.delete('/phones/:id', function(req, res, next) {
  var id = req.params.id

  Phone.remove({ _id: id}, function(err){
    if (err) {
      res.json(err);
    } else {
      res.json({ message: "delete"});
    }
  })
  // res.send('delete a phone ' + id)
})

module.exports = router;
