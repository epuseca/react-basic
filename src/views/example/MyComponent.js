import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {


    /* JSX html trong js
    fragment
    */
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'abcJob1', title: 'developer', salary: '500'},
            {id: 'abcJob2', title: 'tester', salary: '400'},
            {id: 'abcJob3', title: 'projectmanager', salary: '800'}
        ]
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
                    name={this.state.firstName}
                    age={'24'}
                    address={'Hanoi'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;