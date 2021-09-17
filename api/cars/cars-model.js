const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where({ id }).first();
};

const create = (car) => {
  // DO YOUR MAGIC
  return db('cars')
    .insert(car)
    .then(([id]) => {
      return db('cars').where('id', id).first();
    });
};

module.exports = {
  getAll,
  getById,
  create,
};
