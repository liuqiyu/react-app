# Subject-1

这是一个基于create-react-app脚手架搭建的react项目。逻辑业务是科目1的考试系统，包含答题、检查正确性、题库等等的功能

前端UI框架采用ant-design。

## 目录

* [技术栈](#technology)
* [文件夹结构](#structure)
* [react-router](#router)
* [redux](#redux)


<a name="technology"></a>

## 技术栈

`react` `react-router` `redux` `ant-design` `create-react-app` `scss`

<a name="structure"></a>

## 文件夹结构

```
├── build      // 打包后文件夹
├── public     // 模板文件
├── src
    ├── components
        ├── navbar
        ├── page
    ├── containers
        ├── App.js
    ├── images
    ├── router
    ├── store
    ├── style
    ├── views
    ├── index.js
    ├── registerServiceWorker.js 
├── .gitignore
├── config-overrides.js
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── README.old.md
```

<a name="router"></a>

## 使用react-router

#### 安装

`npm install --save react-router-dom`

#### 按需加载

为了优化加载，避免一次性加载所有的路由导致卡顿。我们采用了路由按需加载。
```
// 安装依赖
npm i -D babel-plugin-syntax-dynamic-import
npm i -S react-loadable
```

```js
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

// 路由加载判断
const loadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

// 异步加载
const Home = Loadable({
  loader: () => import('../../views/home/index'),
  loading: loadingComponent
});

...
<Router>
     <Switch>
        <Route path='/' component={Home} exact></Route>
     </Switch>
</Router>
...
```

<a name="redux"></a>

## redux

说完了react-router，我们会选用一种状态管理工具。没错，说的就是redux。

#### 安装

```
npm install --save redux
npm install --save react-redux
```

#### 文件结构

```
├── store
    ├── action.js
    ├── reducer.js
    ├── index.js
```




