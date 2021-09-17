exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments('id');
    tbl.string('vin').unique().notNullable();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.float('mileage').notNullable();
    tbl.string('title');
    tbl.string('transmission');
  });
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars');
};
