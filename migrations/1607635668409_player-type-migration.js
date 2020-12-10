/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TABLE player_types (
    id SERIAL PRIMARY KEY,
    name varchar(40) NOT NULL,
    max_health INTEGER NOT NULL,
    max_exp INTEGER NOT NULL
  );
`);
};

exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE player_types;
  `);
};
