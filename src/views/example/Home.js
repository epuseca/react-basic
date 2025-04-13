import React from "react";
import { withRouter } from "../Nav/withRouter";

class Home extends React.Component {
    componentDidMount() {
        console.log(this.props.router); // bạn sẽ thấy navigate, location, params ở đây

        setTimeout(() => {
            this.props.router.navigate('/todo');
        }, 3000);
    }
    render() {
        return (
            <div>
                Hello world from HOME page with gialoc
            </div>
        )
    }
}

export default withRouter(Home);