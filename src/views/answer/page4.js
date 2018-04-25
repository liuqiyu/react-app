/**
 * page2
 * create by lqy 2018/4/24
 */

import React from 'react';
import Page from './../../components/page/page'

class Page4 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: '4、为什么规定辅路车让主路车先行？',
      options: ['每1年', '每3年', '每2年', '每6个月'],
      answer: '每1年',
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
    this.props.history.push('/page5');
  }
  
  render() {
    return (
      <Page question={this.state.question} options={this.state.options} nextPage={this.nextPage} choose={this.choose} answer={this.state.answer}></Page>
    )
  }
}

export default Page4;