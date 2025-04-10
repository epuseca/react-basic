import React from "react";

class ChildComponent extends React.Component {


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
        console.log("Check props>> ", this.props)
        let { name, age } = this.props
        return (
            <>
                <div>Child component: {name} and age: {age}</div>
            </>
        )
    }
}

export default ChildComponent;