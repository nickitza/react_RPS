import React from 'react'
import { Header } from 'semantic-ui-react';

class Scorekeeper extends React.Component {
  state = { value: 0 }

  win = () => {
    this.setState( (state) =>{
      return {value: state.value + 1}
    })
  }

  loss = () => {
    this.setState( (state) =>{
      return {value: state.value - 1}
    })
  }


  render() {
    return (
      <div>
        <Header as='h4'>{this.props.name} Score: </Header>
        <Header as='h4'>{this.state.value} </Header>
        
      </div>
    )
  }
}

export default Scorekeeper;