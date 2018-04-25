/**
 * page2
 * create by lqy 2018/4/24
 */

import React from 'react';
import Page from './../../components/page/page1'

class Page2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: '2、为什么规定辅路车让主路车先行？',
      options: ['主路车流量大、速度快', '辅路车便于观察', '主路车流量小、速度快', '辅路车速度快'],
      answer: '主路车流量大、速度快',
    }
    this.nextPage = this.nextPage.bind(this);
  }
  
  nextPage() {
    this.props.history.push('/qpage3');
  }
  
  render() {
    return (
      <Page question={this.state.question} options={this.state.options} nextPage={this.nextPage} answer={this.state.answer}></Page>
    )
  }
}

export default Page2;