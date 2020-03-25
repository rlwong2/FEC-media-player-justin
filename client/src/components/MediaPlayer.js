import React, { useState } from 'react';
import moment from 'moment';
import TogglePlay from './TogglePlay.js';
import ProgressBar from './ProgressBar.js';

// styles
import Container from '../styled-components/Container.js';
import Image from '../styled-components/Image.js';
import Date_Genre_Style from '../styled-components/Date-Genre.js';
import Band from '../styled-components/BandName.js';
import SongStyle from '../styled-components/SongName.js';
import NameContainer from '../styled-components/SongBandContainer.js';

const MediaPlayer = ({ song, currentSong }) => {
  const now = moment();
  const created = moment(song.release_date);
  const timeElapsed = created.from(now);

  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <Container>
      <Image src={song.album_image} />
      <Date_Genre_Style>
        {timeElapsed}<br />
        {song.music_genre}
      </Date_Genre_Style>
      <NameContainer>
        <TogglePlay
          currentSong={currentSong}
          setTime={setTime}
          setDuration={setDuration}
        />
        <Band>{song.band_name}</Band>
        <SongStyle>{song.song_name}</SongStyle>
      </NameContainer>
      <ProgressBar
        currentTime={time}
        duration={duration}
      />
    </Container>
  )
}

export default MediaPlayer;