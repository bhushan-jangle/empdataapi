var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Item = require('../users/item.model');

// CREATES A NEW ITEM
router.post('/user/add', function (req, res) {
  Item.create({
            empId : req.body.empId,
            empName : req.body.empName,
            address : req.body.address,
            prefTech : req.body.prefTech,
            mobileNo : req.body.mobileNo,
            deptAllocated : req.body.deptAllocated,
            deptId : req.body.deptId,
            techId : req.body.techId
        },
      function (err, items) {
          if (err) return res.status(500).send(err);
          res.status(200).send(items);
      });
});

// RETURNS ALL THE ITEMS IN THE DATABASE
router.get('/get/all', function (req, res) {
  Item.find({}, function (err, items) {
        if (err) return res.status(500).send("There was a problem finding the items.");
        res.status(200).send(items);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/get/byid/:id', function (req, res) {
  Item.findById(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      res.status(200).send(user);
  });
});

// GETS A SINGLE ITEM FROM THE DATABASE
router.get('/user/byempid/:empId', function(req, res) {
  Item.find({}, function(err,items){
    if(err){
      console.log(err);
    }else{
      console.log(req.params.empId);
      js = req.params.empId !== undefined ? items.filter(function(obj) {return obj.empId== req.params.empId}): items;
      res.send(js);
    }
  })
});

// UPDATES A SINGLE ITEM IN THE DATABASE
router.put('/user/byempid/:empId', function (req, res) {
  Item.findOneAndUpdate(req.params.empId, req.body, {new: true}, function (err, items) {
      if (err) return res.status(500).send(err);
      res.status(200).send(items);
  });
});

// UPDATES A SINGLE ITEM IN THE DATABASE
router.put('/update/byid/:id', function (req, res) {
  Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, items) {
      if (err) return res.status(500).send("There was a problem updating the item.");
      res.status(200).send(items);
  });
});


// DELETES A GROUP FROM THE DATABASE
router.delete('/delete/byid/:id', function (req, res) {
  Item.findByIdAndRemove(req.params.id, function (err, resp) {
      if (err) return res.status(500).send("There was a problem deleting the group.");
      res.status(200).json({message:"user: "+ resp.id +" was deleted."});
  });
});

// DELETES A ITEM FROM THE DATABASE
router.delete('/user/byempid/:empId', function (req, res) {
  Item.findOneAndDelete(req.params.empId, function (err, items) {
      if (err) return res.status(500).send("There was a problem deleting the group.");
      res.status(200).send(items);
  });
});

module.exports = router;
