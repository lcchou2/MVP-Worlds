import React from 'react'

class CowieChoice extends React.Component {
  constructor(props){
    super(props);
  }

  
  render() {
    return(
      <div className = 'cowcontainer'>
      
        <div className = 'containerleft'>
        <button onClick = {this.props.clickForm} className = 'decisions'>Kill her</button>
        </div>
        
        <div className = 'containerright'>

        <button onClick = {this.props.clickForm2} className = 'decisions'>Kill Cowie</button>
        </div>
        
     
      </div>

    )
   
  }
}

export default CowieChoice