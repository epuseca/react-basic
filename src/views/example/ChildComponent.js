import React from "react";

class ChildComponent extends React.Component {
    // re-render
    render() {
        // console.log("Call render>> ", this.state)
        console.log("Check props>> ", this.props)
        let { name, age, address, arrJobs } = this.props
        return (
            <>
                <div>Child component: {name} and age: {age} - {address}</div>
                <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log('>>> check child props', props)
//     let { arrJobs } = props
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;