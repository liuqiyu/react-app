/**
 * index
 * create by lqy 2018/4/24
 */

import React from 'react';
import { Button } from 'antd-mobile';
import './index.scss';

class Answer extends React.Component {
  constructor (props) {
    super(props);
    this.start = this.start.bind(this);
  }
  
  start() {
    this.props.history.push('/page1');
  };
  
  render() {
    return (
      <div className="answer">
        <Button className="button" type="primary" inline onClick={this.start}>开始答题</Button>
      </div>
    )
  }
}

export default Answer;