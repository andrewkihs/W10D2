import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    }

    this.tick = this.tick.bind(this);
    // this.now = this.now.bind(this)
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    this.intervalID = null;
  }
  
  tick(){
    this.setState({
      time: new Date(),
    })
  }  

  render () {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    return (
      <div className="clock">
        <h1>Clock</h1>
        <span>Time: </span>
        <span>{hours}:{minutes}:{seconds}</span>
        <br/>
        <span>Date: </span>
        <span>{this.state.time.toDateString()}</span>
      </div>
    )
  }
}

export default Clock;