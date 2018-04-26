/**
 * question
 * create by lqy 2018/4/25
 */

import React from 'react';
import { Button } from 'antd-mobile';
import './index.scss';
import { currentNavIndex } from '../../../store/action'
import { connect } from 'react-redux'

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.start = this.start.bind(this);
  }
  
  start() {
    this.props.history.push('/qpage1');
  };
  
  componentDidMount() {
    this.props.currentNavIndex('2');
  }
  
  render() {
    return (
      <div className="question-wrap">
        <Button className="button" type="primary" inline onClick={this.start}>开始练习</Button>
      </div>
    )
  }
}

export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Question);