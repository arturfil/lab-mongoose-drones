// Iteration #1
const mongoose = require('mongoose');

const DroneModel = require('../models/drone-model.js');

mongoose.connect('mongodb://localhost/droneShop');

const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

DroneModel.create(
  droneData,

  (err,dronesAfterSave) => {
    if(err) {
      console.log(err);
      console.log('error');
      return
    }

    dronesAfterSave.forEach((oneDrone) => {
      console.log('Drone ------>' + oneDrone.droneName);
    });
  }
);
