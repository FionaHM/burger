CREATE database burgers_db;

use burgers_db;

CREATE table burgers (
id int auto_increment,
burger_name VARCHAR(64) not null,
devoured BOOLEAN DEFAULT FALSE,
date_timestamp TIMESTAMP not null,
primary key(id));

select * from burgers_db.burgers;