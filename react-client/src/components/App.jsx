import React from 'react';
import First from './First.jsx'
import Welcome from './Welcome.jsx'
import Beginning from './Beginning.jsx'
import Decision from './Decision.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 3
    }
    this.clickForm = this.clickForm.bind(this)
    this.Form = this.Form.bind(this)
    this.setHome = this.setHome.bind(this)
  }

  clickForm(){
    this.setState({
      count: this.state.count + 1
    })
  }

  Form(num) {

    if (num === 0) {
      return (
        <div><First clickForm = {this.clickForm}/></div>
      )
    }
    if (num === 1) {
      return (
        <div><Welcome clickForm = {this.clickForm}/></div>
      )
    }
    if (num === 2) {
      return (
        <div><Beginning clickForm = {this.clickForm}/></div>
      )
    }
    if (num === 3) {
      return (
        <div><Decision clickForm = {this.clickForm}/></div>
      )
    }
    // if (num === 4) {
    //   return (
    //     <div><Purchase setHome = {this.setHome}/></div>
    //   )
    // }
  }

  setHome() {
    this.setState({
      count: 0
    })

  }

  render() {
    return (
        this.Form(this.state.count)
    )
  }
}
export default App;

