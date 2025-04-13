import React from "react";
import { withRouter } from "../HOC/withRouter";
import Color from "../HOC/Color";
class Home extends React.Component {
    // componentDidMount() {
    //     console.log(this.props.router); // bạn sẽ thấy navigate, location, params ở đây

    //     setTimeout(() => {
    //         this.props.router.navigate('/todo');
    //     }, 3000);
    // }
    render() {
        return (
            <div>
                Hello world from HOME page with gialoc
            </div>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);
