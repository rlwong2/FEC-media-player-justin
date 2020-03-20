import React from 'react';
import moment from 'moment';
import Container from '../css-modules/Container.js';
import Image from '../css-modules/Image.js';
import Date_Genre_Style from '../css-modules/Date-Genre.js';
import Band from '../css-modules/BandName.js';
import SongStyle from '../css-modules/SongName.js';

const MediaPlayer = ({ song }) => {
  const now = moment();
  const created = moment(song.release_date);
  const timeElapsed = created.from(now);

  return (
    <Container>
      <Image src={song.album_image} />
      <Date_Genre_Style>
        {timeElapsed}<br />
        {song.music_genre}
      </Date_Genre_Style>
      <audio controls src={song.song_url}></audio>
      <Band>{song.band_name}</Band>
      <SongStyle>{song.song_name}</SongStyle>
    </Container>
  )
}

export default MediaPlayer;