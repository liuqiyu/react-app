/**
 * page2
 * create by lqy 2018/4/24
 */

import React from 'react';
import Page from './../../components/page/page'
import { currentNavIndex } from '../../store/action'
import { connect } from 'react-redux'

class Page3 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: '3、在什么情况下不得行车？',
      options: ['车门没关闭', '音响没关闭', '车窗没关闭', '顶窗没关闭'],
      answer: '车门没关闭',
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
    this.props.history.push('/page4');
  }
  
  componentDidMount() {
    this.props.currentNavIndex('1');
  }
  
  render() {
    return (
      <Page question={this.state.question} options={this.state.options} nextPage={this.nextPage} choose={this.choose} answer={this.state.answer}></Page>
    )
  }
}

export default connect(state => ({
  text: state.text,
}), {
  currentNavIndex,
})(Page3);