import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
      this.state={
        jokes:''
      }
}


  componentDidMount(){
      return fetch('http://api.icndb.com/jokes/random/1http://api.icndb.com/jokes/random/')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({jokes: responseJson})
      })
      .catch(error => {
        console.error(error);
      });
    }

    renderJokes(){
      if(this.state.jokes) {
        console.log('test')
        return (
          <div>
            <h3>{this.state.jokes.value[0].joke}</h3>
          </div>
          )

      }
    }


handleClick(){
  return fetch('http://api.icndb.com/jokes/random/1http://api.icndb.com/jokes/random/')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({jokes: responseJson})
      })
      .catch(error => {
        console.error(error);
      });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Joke Generator</h1>
        </header>
        <p className="App-intro">
          Click the HaHa button for a laugh?
        </p>
        <RaisedButton onClick={(e) => this.handleClick()} label="HaHa" primary={true} />
      <div>
        {this.renderJokes()}
      </div>
      </div>
    );
  }
}

export default App;
