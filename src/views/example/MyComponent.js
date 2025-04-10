import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {


    /* JSX html trong js
    fragment
    */
    state = {
        firstName: '',
        lastName: ''
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = () => {
        alert('Click me')
    }
    // re-render
    render() {
        console.log("Call render>> ", this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName} onChange=
                        {
                            (event) => this.handleChangeFirstName(event)
                        } /><br />

                    <label htmlFor="lname">Last name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)}
                    /><br /><br />
                    <input
                        type="button"
                        value="Submit"
                        onClick={() => this.handleSubmit()}
                    />
                </form>
                <ChildComponent 
                name={'Gia Loc MA'} 
                age={'24'}
                />
            </>
        )
    }
}

export default MyComponent;