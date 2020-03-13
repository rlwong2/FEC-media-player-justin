import React from 'react';

const MediaPlayer = ({song}) => {
  return (
    <div className="media-player-container">
      <audio controls src={song.s3_song_key}></audio>
      <span>
        {song.song_title}
      </span>
      <span>
        {song.album_name}
      </span>
      <span>
        <img src={song.album_image}/>
      </span>
    </div>
  )
}

export default MediaPlayer;