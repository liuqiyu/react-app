/**
 * page
 * create by lqy 2018/4/25
 */
import React from 'react';
import { List, Radio, Toast, Button, Icon } from 'antd-mobile';
import './page.scss';

function failToast() {
  Toast.offline('请选择答案！', 1);
}

const RadioItem = Radio.RadioItem;

class Page extends React.Component {
  constructor (props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      value: 0,
      showNext: false,
      disabled: false,
      correct: false,
    };
  }
  
  submit() {
    if (this.state.value) {
      this.setState({
        showNext: true,
        disabled: true,
      });
      console.log(this.props.answer)
      console.log(this.state.value)
      if (this.props.answer === this.state.value) {
        this.setState({
          correct: true,
        });
      }
    } else {
      failToast()
    }
  }
  
  next() {
      this.props.nextPage();
  }
  
  onChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  };
  
  render() {
    const value = this.state.value;
    const listItems = this.props.options.map((item, index) => {
      let key = '';
      switch (index) {
        case 0:
          key = 'A';
          break;
        case 1:
          key = 'B';
          break;
        case 2:
          key = 'C';
          break;
        case 3:
          key = 'D';
          break;
        default:
          break;
      }
      return (
        <RadioItem key={index} checked={value === item} onChange={() => this.onChange(item)} disabled={this.state.disabled}>
          {key}、{item}
        </RadioItem>
      )
    });
    return (
      <div className="page">
        <div className="question">{this.props.question}</div>
        <div className="options">
          <List>
            {listItems}
          </List>
        </div>
        {this.state.showNext ? (
          <div className="answer">
            {
              this.state.correct ? (
                <div className="correct">
                  <Icon type="check-circle-o" /> 恭喜你，回答正确！！！
                </div>) : (
                  <div className="wrong">
                  <Icon type="cross-circle" /> 很遗憾，回答错误！！！
                  <p className="true-answer">正确答案是：{this.props.answer}</p>
              </div>)
            }
          </div>
          ) : null }
        <Button inline type="primary" className="submit" size="small" onClick={this.submit} disabled={this.state.disabled}>提交</Button>
        {this.state.showNext ? <Button inline type="primary" className="next" size="small" onClick={this.next}>下一题</Button> : null}
      </div>
    )
  }
}

export default Page;