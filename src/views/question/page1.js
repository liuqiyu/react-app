/**
 * page1
 * create by lqy 2018/4/24
 */

import React from 'react';
import Page from './../../components/page/page1'

class Page1 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: '1、驾驶人连续驾驶不得超过多长时间？',
      options: ['4小时', '6小时', '10小时', '8小时'],
      answer: '4小时',
    }
    this.nextPage = this.nextPage.bind(this);
  }
  
  nextPage() {
    this.props.history.push('/qpage2');
  }
  
  render() {
    return (
      <Page question={this.state.question} options={this.state.options} nextPage={this.nextPage} answer={this.state.answer}></Page>
    )
  }
}

export default Page1;