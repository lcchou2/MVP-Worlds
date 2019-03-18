
import React from 'react';

class Decision extends React.Component {
  constructor(props){
    super(props);
  }

  
  render() {
    return(
      <div className = 'container'>
      
        <div className = 'containerleft'>
        <button onClick = {this.props.clickForm} className = 'decisions'>Strive Forward</button>
        </div>
        
        <div className = 'containerright'>

        <button onClick = {this.props.clickForm2} className = 'decisions'>Turn back</button>
        </div>
        
     
      </div>

    )
   
  }
}

export default Decision