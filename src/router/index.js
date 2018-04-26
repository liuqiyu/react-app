/**
 * index
 * create by lqy 2018/4/24
 */
import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom'
import {Icon } from 'antd-mobile';
import './index.scss';

const loadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <span className="loading"><Icon type="loading" size="large" color="red" /></span>
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

const Answer = Loadable({
  loader: () => import('../views/answer/index/index'),
  loading: loadingComponent
});

const Page1 = Loadable({
  loader: () => import('../views/answer/page1'),
  loading: loadingComponent
});

const Page2 = Loadable({
  loader: () => import('../views/answer/page2'),
  loading: loadingComponent
});

const Page3 = Loadable({
  loader: () => import('../views/answer/page3'),
  loading: loadingComponent
});

const Page4 = Loadable({
  loader: () => import('../views/answer/page4'),
  loading: loadingComponent
});

const Page5 = Loadable({
  loader: () => import('../views/answer/page5'),
  loading: loadingComponent
});

const Complete = Loadable({
  loader: () => import('../views/answer/complete/complete'),
  loading: loadingComponent
});

const Question = Loadable({
  loader: () => import('../views/question/index/question'),
  loading: loadingComponent
});

const qPage1 = Loadable({
  loader: () => import('../views/question/page1'),
  loading: loadingComponent
});

const qPage2 = Loadable({
  loader: () => import('../views/question/page2'),
  loading: loadingComponent
});

const qPage3 = Loadable({
  loader: () => import('../views/question/page3'),
  loading: loadingComponent
});

const qPage4 = Loadable({
  loader: () => import('../views/question/page4'),
  loading: loadingComponent
});

const qPage5 = Loadable({
  loader: () => import('../views/question/page5'),
  loading: loadingComponent
});


const Me = Loadable({
  loader: () => import('./../views/about-me/me'),
  loading: loadingComponent
});

const route = () => {
  return (
    <Switch>
      <Route path='/' component={Answer} exact></Route>
      <Route path='/page1' component={Page1}></Route>
      <Route path='/page2' component={Page2}></Route>
      <Route path='/page3' component={Page3}></Route>
      <Route path='/page4' component={Page4}></Route>
      <Route path='/page5' component={Page5}></Route>
      <Route path='/complete' component={Complete}></Route>
      <Route path='/question' exact component={Question}></Route>
      <Route path='/qpage1' component={qPage1}></Route>
      <Route path='/qpage2' component={qPage2}></Route>
      <Route path='/qpage3' component={qPage3}></Route>
      <Route path='/qpage4' component={qPage4}></Route>
      <Route path='/qpage5' component={qPage5}></Route>
      <Route path='/me' exact component={Me}></Route>
    </Switch>
  )
}

export default route;
