/**
 * page
 * create by lqy 2018/4/25
 */
import React from 'react';
import { List, Radio, Button } from 'antd-mobile';
import './page.scss';

const RadioItem = Radio.RadioItem;

class Page extends React.Component {
  constructor (props) {
    super(props);
    this.next = this.next.bind(this);
    this.state = {
      value: 0,
      disabled: true,
    };
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
    const value = this.props.answer;
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
        <Button inline type="primary" className="next" size="small" onClick={this.next}>下一页</Button>
      </div>
    )
  }
}

export default Page;