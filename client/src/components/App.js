import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import MediaPlayer from './MediaPlayer.js';
import MediaList from './MediaList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    this.getMusic();
  }

  getMusic() {
    axios.get('/songs')
      .then(music => this.setState({
          songs: music.data.data
        }))
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
        <MediaList songs={this.state.songs}/>
        </div>
      </div>
    )
  }
}

export default App;