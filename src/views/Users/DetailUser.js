import React from "react";
import { withRouter } from "../HOC/withRouter";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.router && this.props.router.params) {
            let id = this.props.router.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }

    }
    handleBackBtn = () => {
        this.props.router.navigate(`/user`)
    }
    render() {
        console.log("Check props: ", this.props)
        let { user } = this.state
        let isEmpty = Object.keys(user).length === 0;
        return (
            <>
                <div>Hello detail user with id::: {this.props.router.params.id}</div>
                {isEmpty === false &&
                    <>
                        <div>User's name: {user.first_name} - {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackBtn()}>
                                Back
                            </button>
                        </div>
                    </>
                }

            </>
        )
    }
}
export default withRouter(DetailUser);