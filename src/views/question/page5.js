/**
 * page2
 * create by lqy 2018/4/24
 */

import React from 'react';
import Page from './../../components/page/page1'
import { currentNavIndex } from '../../store/action'
import { connect } from 'react-redux'

class Page5 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: '5、同车道行驶的车辆前方遇到下列哪种车辆不得超车？',
      options: ['执行任务的消防车', '公共汽车', '大型客货车', '出租汽车'],
      answer: '大型客货车',
    }
    this.nextPage = this.nextPage.bind(this);
  }
  
  nextPage() {
    this.props.history.push('/');
  }
  
  componentDidMount() {
    this.props.currentNavIndex('2');
  }
  
  render() {
    return (
      <Page question={this.state.question} options={this.state.options} nextPage={this.nextPage} answer={this.state.answer}></Page>
    )
  }
}

export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Page5);