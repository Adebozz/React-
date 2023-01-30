import React, {Component} from "react";
import ChildComponent from './childComponent'

class ParentComponent extends Component{

    constructor(props) {
        super(props)

        this.state = {
            ParentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName) {
        alert(`Helo ${this.state.ParentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
} 

export default ParentComponent