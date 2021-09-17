// DO YOUR MAGIC
const express = require('express');
const db = require('../../data/db-config');

const router = express.Router();

const Cars = require('./cars-model');

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require('./cars-middleware');

router.get('/', (req, res, next) => {
  Cars.getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch(next);
});

router.get('/:id', checkCarId, (req, res, next) => {
  res.status(200).send(req.car);
});

router.post('/', checkCarPayload, checkVinNumberValid, (req, res, next) => {
  Cars.create(req.body)
    .then((car) => {
      console.log(car);
      res.status(200).json(car);
    })
    .catch(next);
});

module.exports = router;
