import React from 'react'

class Key extends React.Component {
  constructor(props){
    super(props);
  }

  
  render() {
    return(
      <div className = 'containerKey'>
      
        <div className = 'containerleft'>
        <button onClick = {this.props.clickForm} className = 'decisions'>Follow Them</button>
        </div>
        
        <div className = 'containerright'>

        <button onClick = {this.props.clickForm2} className = 'decisions'>Screw Cowie <br/>and Run</button>
        </div>
        
     
      </div>

    )
   
  }
}

export default Key