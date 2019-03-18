import React from 'react';

class Welcome extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      next: '',
      display: 'none'
    }
    /* change display back to block later */
  }

  componentDidMount() {
  
    setTimeout(() => {
      this.setState({ display: 'block' })
    }, 8000)

    
   
  }
  render() {
    return(
      <div className = 'welcome'>
      <style>{'body { background-color: black; }'}</style>
      <p>...</p>
<p>Where.. am I?</p>
<p>(You wake up in a generic forest)<span>|</span></p>
<p></p>

    <div style = {{display:this.state.display}}>

        <button className = 'button' onClick = {this.props.clickForm}>Continue</button>
    </div>





     
      </div>

    )
   
  }
}



export default Welcome