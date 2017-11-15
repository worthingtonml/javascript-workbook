import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        timelineInfo:[
         {name: 'renee', post: 'I love kitties', id: 1},
         {name: 'stevie', post: 'I love dogs', id: 2},
         {name: 'groot', post: 'I Am Groot', id: 3},
         {name: 'luke', post: 'blah blah blah', id: 4},
         {name: 'vader', post: 'I am your father', id: 5},
         {name: 'lea', post: 'Pizza', id: 6},
         {name: 'tamra', post: 'Workout', id: 7},
         {name: 'vicky', post: 'Coto Insurance', id: 8},
     ]
   }
 };
  renderPost = () => {
  return this.state.timelineInfo.map((item, key) => {
      return <div> <p>{this.state.timelineInfo.name}</p> <p>{this.state.timelineInfo.post}</p> <a>like</a></div>
  });
}
    //  /*User inputs task, on submit it's added to list */
    // return(
    //     <div>
    //         <h3>To Do App</h3>
    //         <input
    //             type="text"
    //             value={this.state.inputValue}
    //             onChange={this.handleInputChange}
    //         />
    //         <button onClick={this.handleItemSubmit}>Submit</button>
    //         {this.renderList()}
    //     </div>
    // );


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">wtf</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
