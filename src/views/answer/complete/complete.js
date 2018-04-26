/**
 * complete
 * create by lqy 2018/4/25
 */

import React from 'react';
import './complete.scss';
import { currentNavIndex } from '../../../store/action'
import { connect } from 'react-redux'

class Complete extends React.Component {
  
  componentDidMount() {
    this.props.currentNavIndex('1');
  }
  
  render() {
    return (
      <div className="complete">
        <span className="icon iconfont icon-shouye"></span>
        <span className="text">恭喜你，答题完成！</span>
      </div>
    )
  }
}

export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Complete);