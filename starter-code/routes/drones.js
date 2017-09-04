const express = require('express');

const DroneModel = require('../models/drone-model.js');
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  DroneModel.find((err, allDrones) => {
    if(err) {
      console.log('error');
      console.log(err);
      return
    }
    res.locals.listOfDrones = allDrones;
    console.log(allDrones);
    res.render('drones/index.ejs');
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new')
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const theDrone = new DroneModel({
    droneName: req.body.droneName,
    propellers: req.body.dronePropeller,
    maxSpeed: req.body.droneMaxSpeed
  });

  theDrone.save((err) => {
    if(err) {
      next(err);
      return;
    }

    res.redirect('/drones');

  });
});

module.exports = router;
