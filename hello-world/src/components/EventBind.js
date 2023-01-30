import React, {Component} from 'react'
import message from './message'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        // binding in the constructor
        // this.clickHandeler = this.clickHandeler.bind(this)
    }
        // clickHandeler(){
        //     this.setState({
        //         message: 'Good Bye'
        //     })
           
        // }
        // class property as arrow function
        clickHandeler = () => {
            this.setState({
                message: 'GoodBye!'
            })
        }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* binding in the reder method */}
                {/* <button onClick={this.clickHandeler.bind(this)} >Click</button> */}
                {/* Using arrow function in render*/}
                  {/* <button onClick={() => this.clickHandeler()}>Click</button> */} 
                  <button onClick={this.clickHandeler}>Click</button>

            </div>
        )
    }
}

export default EventBind

