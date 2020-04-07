import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class CourseList extends Component {
    constructor(params){
        super(params);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        fetch('data/courseList.json')
        .then(response=>{
            return response.json();
        })
        .then(res=>{
            this.setState({
                list:res.data
            });
        })
    }
    render() {
        return (
            <div>
               <h1>课程列表</h1> 
               <ul>{
                   this.state.list.map(item=>(
                   <li key={item.id}>
                    <Link to={`/Detail/${item.id}`}>
                    {item.title}
                    </Link>
                    </li>
                   ))
                   }
               </ul>
            </div>
        );
    }
}

export default CourseList;