import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import CourseList from './components/CourseList'
import CourseDetail from './components/CourseDetail'
function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">首页</Link>
        <Link to="/about">关于我们</Link>
        <Link to={{
          pathname: '/about',
          search: 'a=1&b=2',
          hash: '888',
          state: {
            name: 'zs',
            age: 18
          },
          query: {
            channel: 123
          }
        }}>关于我们 路由跳转传参</Link> | 
        <Link to="/CourseList">课程列表</Link>
        <Link to="/CourseDetail">课程详情</Link>
      </div>
      <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/CourseList" component={CourseList}></Route>
        <Route path="/CourseDetail/:id" component={CourseDetail}></Route>
      </div>
    </div>
  )
}

export default App;
