import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Link} from 'react-router-dom'
import CourseList from './components/CourseList'
import Detail from './components/Detail'
function App() {
  return (
    <div className="App">
     <div>
     <Link to="/CourseList">列表</Link>
     <Link to="/Detail/111">详情</Link>
     </div>
     <div>
       <Route path="/CourseList" component={CourseList}></Route>
       <Route path="/Detail/:id" component={Detail}></Route>
     </div>
    </div>
  );
}

export default App;
