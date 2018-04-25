/**
 * page2
 * create by lqy 2018/4/24
 */

import React from 'react';
import Page from './../../components/page/page'

class Page5 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: '5、同车道行驶的车辆前方遇到下列哪种车辆不得超车？',
      options: ['执行任务的消防车', '公共汽车', '大型客货车', '出租汽车'],
      answer: '大型客货车',
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
    this.props.history.push('/complete');
  }
  
  render() {
    return (
      <Page question={this.state.question} options={this.state.options} nextPage={this.nextPage} choose={this.choose} answer={this.state.answer}></Page>
    )
  }
}

export default Page5;