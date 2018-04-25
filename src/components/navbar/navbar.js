/**
 * navbar
 * create by lqy 2018/4/25
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-item">
          <Link to="" className="link">
            <span className="iconfont icon-tiku"></span>
            <p>开始答题</p>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/question" className="link">
            <span className="iconfont icon-chakandati"></span>
            <p>题库</p>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/me" className="link">
            <span className="iconfont icon-wode"></span>
            <p>关于我</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar;