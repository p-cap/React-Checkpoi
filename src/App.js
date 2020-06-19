import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    emails: []
  }
}
  async componentDidMount() {
      fetch('http://localhost:3001/emails')
      .then(response => response.json())
      .then(json => this.setState ({emails: json}))
    }

  render() {
    const senders = this.state.emails.map(senders => <li>{senders.sender}</li>)
    const subjects = this.state.emails.map(subjects => <li>{subjects.subject}</li>)
    return (      
      <div>
        <table>
          <tr>
            <th>Subject Line</th>
            <th>Sender</th>
          </tr>
          <tr>
            <td>{subjects}</td>
            <td>{senders}</td>
          </tr>
        </table>
      </div>
    ) 
  }

}
export default App;


 //const options = this.state.try.map((item, index) => <li key={index}>{`${item.test} in ${item.test1}`}</li>)
 