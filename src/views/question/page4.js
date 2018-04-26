/**
 * page2
 * create by lqy 2018/4/24
 */

import React from 'react';
import Page from './../../components/page/page1'
import { currentNavIndex } from '../../store/action'
import { connect } from 'react-redux'

class Page4 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: '4、为什么规定辅路车让主路车先行？',
      options: ['便于观察，有利于安全', '右侧为快速车道', '左侧为慢速车道', '我国实行左侧通行原则'],
      answer: '便于观察，有利于安全',
    }
    this.nextPage = this.nextPage.bind(this);
  }
  
  nextPage() {
    this.props.history.push('/qpage5');
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
})(Page4);