import React, { Component } from 'react' 

class Welcome extends Component {
    render() {
        const {name, job} = this.props
        return <h1>Welcome {name} A.k.a {job}</h1>
    } 
}

export default Welcome