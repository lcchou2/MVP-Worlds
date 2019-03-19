import React from 'react';

class CowieYes extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      
      displayGame: 'none',
      displayMike: 'block'
    }
  }

  componentDidMount() {
  
    setTimeout(() => {
      this.setState({ displayGame: 'block', displayMike: 'none' })
    }, 5000)

    
   
  }
  
  render() {
    return(
      <div>
        <div className = 'containerSpace' style = {{display:this.state.displayMike}}>
        <div className = 'game'>
          (You gather the courage and follow through. She indeed looked very affected)<br/>
          {'                              '}<br/>
          (You wake up in a room on a spaceship)<br/>
          {'                              '}<br/>
          Intercom: Subject passed. HR accepted. XXXXXXXing complete<br/>
          {'                              '}<br/>
          (You feel somethings off.., but continues to put on your uniform)<br/>
        
        </div>

       
  
     
        </div>
        <div  className = 'over' style = {{display:this.state.displayGame}}>
        <button className = 'decisions' onClick = {this.props.setHome}>Retry?</button>
            

        </div>

      


      </div>
      

    )
   
  }
}

export default CowieYes