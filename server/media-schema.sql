CREATE DATABASE media;

USE media;

CREATE TABLE songs (

  song_id int NOT NULL AUTO_INCREMENT,
  song_title varchar(100) NOT NULL,
  album_name varchar(100) NOT NULL,
  artist_name varchar(100) NOT NULL,
  album_image varchar(200) NOT NULL,
  song_comments varchar(100) NOT NULL,
  s3_song_key varchar(200) NOT NULL,
  PRIMARY KEY (song_id)
);