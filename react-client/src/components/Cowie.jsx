import React from 'react';

class Cowie extends React.Component {
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
      <div className = 'cowcontainer'>
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
      Cowie: Much of the humans are infected. We need help ridding of them.<br/>
      (He hands you a gun and points to a girl in the distance)<br/>
      Cowie: There's one right there, take care of it.<br/>
      (An innumerable amount of questions bombard your head when you realize that girl is the same supposedly deceased friend)<br/>
      (You gather the energy to make a choice)

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

export default Cowie