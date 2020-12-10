/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE enemy_types (
      id SERIAL PRIMARY KEY,
      name VARCHAR(40) NOT NULL,
      health INTEGER NOT NULL,
      exp_value INTEGER NOT NULL
    );
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE enemy_types;
  `);
};
