/**
 * index
 * create by lqy 2018/4/25
 */
import React from 'react';
import './me.scss';
import { currentNavIndex } from '../../store/action'
import { connect } from 'react-redux'

class Me extends React.Component {
  
  componentDidMount() {
    this.props.currentNavIndex('3');
  }
  
  render() {
    return (
      <div className="me">
        <div className="img">
          <img src={require('./img.jpg')} alt=""/>
        </div>
        <p className="username">马路杀手</p>
      </div>
    )
  }
}

export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Me);