import React, { Component } from 'react';

class CourseDetail extends Component {
    render() {
        let { params } = this.props.match
        return (
            <div>
                <h1>课程详情</h1>
                <p>id:{params.id}</p>
            </div>
        );
    }
}

export default CourseDetail;