DROP DATABASE chat;
CREATE DATABASE chat;
USE chat;
CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  message varchar(255),
  roomname varchar(20),
  PRIMARY KEY (ID)
);
CREATE TABLE users (
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (ID)
);



-- INSERT INTO messages (username, text, roomname)
-- VALUES ('name1','text input','codestates');



/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/