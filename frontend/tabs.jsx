import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
    this.changeIndex = this.changeIndex.bind(this);
  }

  // changeIndex(e) {
  //   console.log(e.target)
  //   this.setState({
  //     index: e.currentTarget.key
  //   })
  // }
  changeIndex(index) {
    return () => {
      this.setState({index: index})
    }
  }
 
  render(){
    const tabArr = this.props.items
    const content = tabArr[this.state.index].content
    return(
      <div className="tab-container">
        <ul className="tab">
            <li>{tabArr.map((el, idx) => {
            return <h1 key={idx} onClick={this.changeIndex(idx)}>{el.title}</h1>
            })}</li>
        </ul>
        <article className="content">{content}</article>
      </div>
    )
  }
}

export default Tabs;