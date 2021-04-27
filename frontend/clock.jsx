import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    }

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    console.log('component mounted')
  }
  
  tick(){
    this.setState({
      time: new Date(),
    })
  }  

  render () {
    console.log('rendered')
    return (
      <div className="clock">
        <h1>Clock</h1>
      </div>
    )
  }
}

export default Clock;