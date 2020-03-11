CREATE DATABASE media;

USE media;

CREATE TABLE songs (

  song_id int NOT NULL AUTO_INCREMENT,
  song_title varchar(100) NOT NULL,
  album_name varchar(100) NOT NULL,
  artist_name varchar(100) NOT NULL,
  individual_song varchar(250) NOT NULL,
  album_image varchar(250) NOT NULL,
  song_comments varchar(200) NOT NULL,
  PRIMARY KEY (song_id)
);