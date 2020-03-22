import React from 'react';
import moment from 'moment';
import TogglePlay from './TogglePlay.js';

// styles
import Container from '../css-modules/Container.js';
import Image from '../css-modules/Image.js';
import Date_Genre_Style from '../css-modules/Date-Genre.js';
import Band from '../css-modules/BandName.js';
import SongStyle from '../css-modules/SongName.js';
import NameContainer from '../css-modules/SongBandContainer.js';

const MediaPlayer = ({ song, currentSong }) => {
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
      <NameContainer>
        <TogglePlay currentSong={currentSong} />
        <Band>{song.band_name}</Band>
        <SongStyle>{song.song_name}</SongStyle>
      </NameContainer>
    </Container>
  )
}

export default MediaPlayer;