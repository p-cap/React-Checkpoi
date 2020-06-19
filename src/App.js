import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    emails: ''
  }

  async componentDidMount() {
    fetch('http://localhost:3001/emails')
    .then(response => response.json())
    .then(json => this.setState ({emails: json[1].sender}))
  }

  render() {
    return (
      <ul>
      this still works!
      sitll works!
       <li>{this.state.emails}</li>
      </ul>
    )
  }

}

export default App;
