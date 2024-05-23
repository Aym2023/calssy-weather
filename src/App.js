import React from 'react';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {loacation : 'lispon'};
  this.handelfetch = this.handelfetch.bind(this);
  }

  handelfetch () {
  // this.setState();
  console.log(this);
  }

  render() {
    return (
      <div className='app'>
        <h3>Classy Weather</h3>
        <div>
          <input 
          type='text'
          placeholder='Search from location  ....'
          value={this.state.loacation}
          />
          <button onClick={(e) => this.setState({ location: e.target.value })}>get location</button>
        </div>
      </div>
    )
  }
}

export default App;

