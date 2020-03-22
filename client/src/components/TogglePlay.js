import React from 'react';
import ButtonStyle from '../css-modules/Play-Pause.js';

class TogglePlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    let myAudio = document.getElementById('myAudio');
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      this.state.isPlaying ? myAudio.play() : myAudio.pause();
    });
  }

  render() {
    const playImg = 'https://fec-media-player.s3.us-east-2.amazonaws.com/play.png';
    const pauseImg = 'https://fec-media-player.s3.us-east-2.amazonaws.com/pause.png';
    return (
      <span>
        <audio
          id="myAudio"
          src={this.props.currentSong.song_url}
          preload="auto">
        </audio>
        <a onClick={this.toggle}>
          {this.state.isPlaying ?
            <ButtonStyle
              src={require = (pauseImg)} /> :
            <ButtonStyle
              src={require = (playImg)} />}
        </a>
      </span>
    )
  }
}

export default TogglePlay;