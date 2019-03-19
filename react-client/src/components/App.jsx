import React from 'react';
import First from './First.jsx'
import Welcome from './Welcome.jsx'
import Beginning from './Beginning.jsx'
import Decision from './Decision.jsx'
import Path from './Path.jsx'
import Gameover from './Gameover.jsx'
import Encounter from './Encounter.jsx'
import Key from './Key.jsx'
import Cowie from './Cowie.jsx'
import CowieChoice from './CowieChoice.jsx'
import CowieYes from './CowieYes.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 10
    }
    this.clickForm = this.clickForm.bind(this)
    this.Form = this.Form.bind(this)
    this.setHome = this.setHome.bind(this)
    this.clickForm2 = this.clickForm2.bind(this)
  }

  clickForm(){
    this.setState({
      count: this.state.count + 1
    })
  }

  clickForm2(){
    this.setState({
      count: this.state.count + 2
    })
  }

  clickForm5(){
    this.setState({
      count: this.state.count + 5
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
        <div><Decision clickForm = {this.clickForm} clickForm2 = {this.clickForm2}/></div>
      )
    }
    if (num === 4) {
      return (
        <div> <Gameover setHome = {this.setHome}/></div>
      )
    }

    if (num === 5) {
      return (
        <div><Path clickForm = {this.clickForm}/></div>
      )
    }
    if (num === 6) {
      return (
        <div><Encounter clickForm = {this.clickForm}/></div>
      )
    }

    if (num === 7) {
      return (
        <div><Key clickForm = {this.clickForm} clickForm5 = {this.clickForm5}/></div>
      )
    }

    if (num === 8) {
      return (
        <div><Cowie clickForm = {this.clickForm}/></div>
      )
    }

    if (num === 9) {
      return (
        <div><CowieChoice clickForm = {this.clickForm} clickForm2 = {this.clickForm2}/></div>
      )
    }
    if (num === 10) {
      return (
        <div><CowieYes setHome = {this.setHome} clickForm = {this.clickForm}/></div>
      )
    }

    if (num === 11) {
      return (
        <div><CowieNo clickForm = {this.clickForm}/></div>
      )
    }

    if (num === 12) {
      return (
        <div><NoCowie clickForm = {this.clickForm}/></div>
      )
    }


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

