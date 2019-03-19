import React from 'react';

class Encounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'none',
      displaybook: 'none',
      displayInv: 'none',
      displayNote: 'none'
    }

    this.switchBack = this.switchBack.bind(this);
    this.switchOn = this.switchOn.bind(this);
    this.showNote = this.showNote.bind(this);

  }

  switchBack() {
    this.setState({
      displayInv: 'none',
      displayNote: 'none'
    })
  }

  showNote(e) {
    e.stopPropagation();
    this.setState({

      displayNote: 'block'
    })
  }

  switchOn() {
    this.setState({
      displayInv: 'block'
    })
  }

  componentDidMount() {
    
    this.setState({
      displayInv: 'none'
    })

    // setTimeout(() => {
    //   this.setState({ displaybook: 'block' })
    // }, 3000)

    setTimeout(() => {
      this.setState({ display: 'block' })
    }, 5000)

    
   
  }

  
  render() {
    return(
      <div className = 'enccontainer'>
      <div onClick = {this.switchBack} className = 'modal'style = {{display:this.state.displayInv}} >
          <div className = 'modalInv' >
            <div  className = 'textcolor2'>Inventory</div><br/>
            <div className = 'Inv'>
            {''}<br/>
            1. <button onClick={(e) => { this.showNote(e) }} className = 'buttoninv'>Notes</button>
            {''}<br/>
            2. Empty
            {''}<br/>
            3. Empty
            {''}<br/>
            4. Empty
            {''}<br/>
            5. Empty
            {''}<br/>
            6. Empty

            </div>

          <div style = {{display:this.state.displayNote}} className = 'modalNotes'>
          <div  className = 'textcolor2'>Notes</div>
            {''}<br/>
            <div className = 'notes'>
            Don't trust them... XXXXXXXXing is in its infancy and working. Break out ____!
            </div>
          </div>
           

            
            
          </div>
      </div>
      {/* <div className = 'book' style = {{display:this.state.displaybook}}>
        <img src = 'book.jpg'></img>
      </div> */}
      <div className = 'biggertext'>
      <button onClick = {this.switchOn}>Inventory</button><br/>
      (You see two figures in the distance. They are next to 2 unresponsive bodies. They approach you)<br />
      Cowie: Don't worry kid, we didn't touch them<br/>
      Steve: Yeah, not like we physically c-<br/>
      Cowie: Shut up steve. Anyways, we need your help. We'll debrief you while we walk<br/>
      (You hear a whisper in a bush behind)<br/>
      ?Bush?: Run. Now.
      <div className = 'choiceonce'>
      <div  style = {{display:this.state.display}}>

      <button className = 'buttono' onClick = {this.props.clickForm}>Continue</button>
      </div>

      </div>

      </div>
      </div>

    )
   
  }
}

export default Encounter