import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: []
    }
  }

  render() {
    return (
      <div>
        <h1>App Component rendering</h1>
      </div>
    )
  }
}

export default App;