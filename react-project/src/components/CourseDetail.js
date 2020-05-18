import React, { Component } from 'react';

class CourseDetail extends Component {
    constructor(params) {
        super(params)
        this.state = {
            details: {}
        }
    }
    componentDidMount() {
        fetch(`/data/course${this.props.match.params.id}.json`)
            .then(response => {
                return response.json()
            })
            .then(res => {
                this.setState({
                    details: res.data
                })
            })
    }
    render() {
        let { params } = this.props.match
        return (
            <div>
                <h1>课程详情</h1>
                <p>id:{params.id}</p>
                <p>{this.state.details.title}</p>
                <p>{this.state.details.teacher}</p>
                <p>{this.state.details.intro}</p>
            </div>
        );
    }
}

export default CourseDetail;