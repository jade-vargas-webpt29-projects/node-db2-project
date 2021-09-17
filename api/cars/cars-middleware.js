const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  Cars.getById(id).then((car) => {
    if (car) {
      req.car = car;
      next();
    } else if (!car) {
      next({ message: 'car not found', status: 404 });
    }
  });
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body;

  if (!vin || !make || !model || !mileage) {
    res.status(400).json({ message: 'vin, make, model, mileage are required' });
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  const trimmed = vin.trim();

  if (!vinValidator.validate(vin)) {
    res.status(400).json({ message: `vin: ${vin} is invalid` });
  } else {
    next();
  }
};

const checkVinNumberUnique = (req, res, next) => {
  const { vin } = req.body;
  const trimmed = vin.trim();
  console.log(trimmed);
  const allCars = Cars.getAll();

  const indexOfName = allCars.indexOf(trimmed);
  if (indexOfName < 0) {
    res.status(400).json({ message: `vin: ${trimmed} already exists` });
  } else {
    next();
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
