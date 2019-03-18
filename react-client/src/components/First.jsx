
import React from 'react';

class First extends React.Component {
  constructor(props){
    super(props);
  }

  
  render() {
    return(
      <div >
      <style>{'body { background-color: black; }'}</style>
        <form onSubmit = {this.onSubmit}>
          Please enter your desired user name
          <input type="text" name = 'username' ></input>
          <button className = 'button' onClick = {this.props.clickForm}>Enter</button>
        </form>
  
     
      </div>

    )
   
  }
}

export default First