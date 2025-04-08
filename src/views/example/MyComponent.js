import React from "react";

class MyComponent extends React.Component {


    /* JSX html trong js
    fragment
    */
    state = {
        name: "LOC",
        channel: "HEHE"
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}/>
                    
                    This is my channel: {this.state.channel}
                </div>
                <div className="second">
                    Hello my component, My name is {this.state.name}
                </div>
            </>
        )
    }
}

export default MyComponent;