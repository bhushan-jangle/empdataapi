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
router.get('/user/all', function (req, res) {
  Item.find({}, function (err, items) {
        if (err) return res.status(500).send("There was a problem finding the items.");
        res.status(200).send(items);
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

// DELETES A ITEM FROM THE DATABASE
router.delete('/item/byitemid/:id', function (req, res) {
  Item.findByIdAndRemove(req.params.id, function (err, items) {
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send("Item: "+ items.itemName +" was deleted.");
  });
});

// DELETES A ITEM FROM THE DATABASE
router.delete('/user/byempid/:empId', function (req, res) {
  Item.findOneAndDelete(req.params.empId, function (err, items) {
      if (err) return res.status(500).send("There was a problem deleting the group.");
      res.status(200).json({ message: "successfully deleted a "+ items.empName });
  });
});

// DELETES A GROUP FROM THE DATABASE
router.delete('/group/bygroupid/:id', function (req, res) {
  Group.findByIdAndRemove(req.params.id, function (err, groups) {
      if (err) return res.status(500).send("There was a problem deleting the group.");
      res.status(200).send("Group: "+ groups.groupName +" was deleted.");
  });
});

// DELETES A GROUP FROM THE DATABASE
router.delete('/group/bygroupnumber/:groupNumber', function (req, res) {
  Group.findOneAndDelete(req.params.groupNumber, function (err, groups) {
      if (err) return res.status(500).send("There was a problem deleting the group.");
      res.status(200).send("Group: "+ groups.groupName +" was deleted.");
  });
});

module.exports = router;
