const express = require('express');

const server = express();

// DO YOUR MAGIC
const carsRouter = require('./cars/cars-router');
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require('./cars/cars-middleware');

server.use(express.json());
server.use('/api/cars', carsRouter);

module.exports = server;
