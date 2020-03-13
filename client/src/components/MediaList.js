import React from 'react';
import MediaPlayer from './MediaPlayer.js';

const MediaList = ({songs}) => {
  return (
    <div>
      {songs.map(song => (
        <MediaPlayer
        key={song._id}
        song={song}
        />
      ))}
    </div>
  )
}

export default MediaList;