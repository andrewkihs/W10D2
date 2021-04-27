import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    this.state = {
      index: 0,

    }
  }
  render(){
    const content = this.props.tabs[{this.state.index}].content
    return(
      <div>
        <ul>
            <h1></h1>
            {this.props.tabs.map(el =>{
              
            })
            }
        </ul>
        <article>{content}</article>
      </div>
    )
  }
}

export default Tabs;