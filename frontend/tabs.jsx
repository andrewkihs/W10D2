import React from 'react';

class Tabs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
    this.changeIndex = this.changeIndex.bind(this);
  }

  
  changeIndex(index) {
    
    return () => {
      
      this.setState({index: index})
    }
  }
 
  render(){
    const tabArr = this.props.items
    const content = tabArr[this.state.index].content
    let selected = 'unselected';

    return (
      <div className="tab-container">
        <h1 className="title">Tabs</h1>
        <ul className="tab">
          {tabArr.map((el, idx) => {
            if (idx===this.state.index){
              selected = "selected";
            } else {
              selected = 'unselected'
            }
            return (<li key={idx} id={selected} onClick={this.changeIndex(idx)}><h1 key={idx} >{el.title}</h1></li>)
          })}
      
        </ul>
        <article className="content">{content}</article>
      </div>
    )
  }
}

export default Tabs;