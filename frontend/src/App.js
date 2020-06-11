import React, {Component} from 'react';

class App extends Component {
  state = {
    messages: [],
  }

  componentDidMount(){
    this.getMessages();
  }

  getMessages() {
    fetch(`http://localhost:3335/messages`)
      .then(response => response.json())
      .then(response => this.setState({messages: response.data}))
      .catch(err => console.log(err))
  }

  renderMessages = ({msgId, msg, user}) => <div key={msgId}>{user} - {msg}</div>

  render() {
    const {messages} = this.state;
    return (
      <div>
        {messages.map(this.renderMessages)}
      </div>
    )
  }
}

export default App;
