import React from 'react';
import MediaPlayer from './MediaPlayer.js';

const MediaList = ({ songs, currentSong }) => {
  return (
    <div>
      {songs.map(song => (
        <MediaPlayer
        key={song._id}
        song={song}
        currentSong={currentSong}
        />
      ))}
    </div>
  )
}

export default MediaList;