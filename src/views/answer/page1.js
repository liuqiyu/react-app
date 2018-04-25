/**
 * page1
 * create by lqy 2018/4/24
 */

import React from 'react';
import Page from './../../components/page/page'

class Page1 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: '1、驾驶人连续驾驶不得超过多长时间？',
      options: ['4小时', '6小时', '10小时', '8小时'],
      answer: '4小时',
      value: 0,
    }
    this.nextPage = this.nextPage.bind(this);
    this.choose = this.choose.bind(this);
  }
  
  choose(value) {
    this.setState({
      value,
    });
  }
  
  nextPage() {
    this.props.history.push('/page2');
  }
  
  render() {
    return (
      <Page question={this.state.question} options={this.state.options} nextPage={this.nextPage} choose={this.choose} answer={this.state.answer}></Page>
    )
  }
}

export default Page1;