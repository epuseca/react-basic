import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {


    /* JSX html trong js
    fragment
    */
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: '500' },
            { id: 'abcJob2', title: 'tester', salary: '400' },
            { id: 'abcJob3', title: 'projectmanager', salary: '800' }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        console.log('Check jobbbb: ', job)
    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('>>Run component did update', "prev state: ", prevState, "Current state: ", this.state)
    }
    componentDidMount() {
        console.log('>>Run component did mount')
    }

    // re-render
    render() {
        console.log("Call render>> ", this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;