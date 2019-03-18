import React from 'react';

class Gameover extends React.Component {
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
        <div className = 'containerMike' style = {{display:this.state.displayMike}}>
        <div className = 'game'>
          Mike Hamm: Ah, you've gone astray again. Got to let HR know I've gotta reset you again.<br/>
          {'                              '}<br/>
          (Mike pulls out some weapon you've never seen before)<br/>
          {'                              '}<br/>
          Mike Hamm: I'm sending you back to the shadow realm buddy.<br/>
          {'                              '}<br/>
          Me: Wait.. I
        </div>

       
  
     
        </div>
        <div  className = 'over' style = {{display:this.state.displayGame}}>
        <button className = 'decisions' onClick = {this.props.setHome}>Retry?</button>
            

        </div>

      


      </div>
      

    )
   
  }
}

export default Gameover