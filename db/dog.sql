DROP DATABASE IF EXISTS dog_db;

CREATE DATABASE dog_db;

USE dog_db;

CREATE TABLE dogs
(
	id int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) not null,
  breed varchar(200) not null,
  age int,
	PRIMARY KEY (id)
);



INSERT INTO dogs (`name`, breed, age) VALUES ("shadow", "golden-retriever", 10);
INSERT INTO dogs (`name`, breed, age) VALUES ("chance", "pitbull", 5);
INSERT INTO dogs (`name`, breed, age) VALUES ("Lassie", "Rough Collie" );
