import React from "react";
import './Demo.scss'
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDelete = (job) => {
        // alert("Click me")
        console.log(">>>>CHECK JOB TO DELETE:", job)
        this.props.deleteAJob(job)
    }

    // re-render
    render() {
        console.log("Check props>> ", this.props)

        let { arrJobs } = this.props
        let { showJobs } = this.state
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        console.log(">>CHeck conditional", check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-class"
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;