import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = () => {
        // alert('Click me')
        if (!this.state.title || !this.state.salary) {
            alert('MIssing required params')
            return;
        }
        console.log('>>> Check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job title:</label><br />
                    <input
                        type="text"
                        value={this.state.title} onChange=
                        {
                            (event) => this.handleChangeTitleJob(event)
                        } /><br />

                    <label htmlFor="lname">Salary:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br /><br />
                    <input
                        type="button"
                        value="Submit"
                        onClick={() => this.handleSubmit()}
                    />
                </form>
            </>
        )
    }
}

export default AddComponent;