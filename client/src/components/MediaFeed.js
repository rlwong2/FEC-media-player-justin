import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import MediaList from './MediaList.js';

class MediaFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: []
    }
  }

  componentDidMount() {
    this.getMusic();
  }

  getMusic() {
    axios.get('/songs')
      .then(music => this.setState({
        songs: music.data.data,
        currentSong: music.data.data[music.data.data.length - 1]
      }))
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <MediaList
            songs={this.state.songs}
            currentSong={this.state.currentSong}
          />
        </div>
      </div>
    )
  }
}

export default MediaFeed;