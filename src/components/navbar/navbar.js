/**
 * navbar
 * create by lqy 2018/4/25
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { currentNavIndex } from './../../store/action';
import './navbar.scss';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="navbar">
        <div className={this.props.text === '1' ? 'active nav-item' : 'nav-item'}>
          <Link to="" className="link">
            <span className="iconfont icon-tiku"></span>
            <p>开始答题</p>
          </Link>
        </div>
        <div className={this.props.text === '2' ? 'active nav-item' : 'nav-item'}>
          <Link to="/question" className="link">
            <span className="iconfont icon-chakandati"></span>
            <p>题库</p>
          </Link>
        </div>
        <div className={this.props.text === '3' ? 'active nav-item' : 'nav-item'}>
          <Link to="/me" className="link">
            <span className="iconfont icon-wode"></span>
            <p>关于我</p>
          </Link>
        </div>
      </div>
    )
  }
}

// export default Navbar;
export default connect(state => ({
  text: state.text,
}), dispatch => ({
  currentNavIndex: () => dispatch(currentNavIndex),
}))(Navbar);