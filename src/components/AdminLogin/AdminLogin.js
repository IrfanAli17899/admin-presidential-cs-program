import React, { Component } from "react";
import { Input } from "../Input/input"
import AuthMiddleware from "../../store/middleware/authMiddleware";
import { connect } from "react-redux"



class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {
                hasError: false,
                errorsObj: {},
                simpleError: "",
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoggedIn && nextProps.user && nextProps.user.databaseToken) {
          this.props.history.replace("/admin-dashboard");
        }
      }

    Submit = (ev) => {
        ev.preventDefault();
        const { username, password, errors } = this.state;
        if (!username || !password) {
            errors.hasError = true;
            errors.simpleError = "Please Provide Valid Informations"
            this.setState({ errors })
            return;
        }
        this.props.authenticate({userName:username,password})
    }  


    render() {
        const { errors } = this.state;
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="form-container">
                        <div className="form-wrapper">
                            <form onSubmit={(ev) => this.Submit(ev)} method="post">
                                <h3>Admin Sign in</h3>
                                {errors.hasError && <p>{errors.simpleError}</p>}
                                <Input
                                    label="Username"
                                    type="text"
                                    name="username"
                                    id="username"
                                    onChange={(ev) => this.setState({ [ev.target.name]: ev.target.value })}
                                    errors={errors}                                
                                />

                                <Input
                                    label="Password "
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={(ev) => this.setState({ [ev.target.name]: ev.target.value })}
                                    errors={errors}                              
                                />
                                <button type="submit">Sign In</button>
                            </form>
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}


function mapStateToProps(state) {
    return {
        isLoading: state.authReducer.isLoading,
        isError: state.authReducer.isError,
        errorMessage: state.authReducer.errorMessage,
        userId: state.authReducer.userId,
        isLoggedIn: state.authReducer.isLoggedIn,
        authToken: state.authReducer.authToken,
        successMessage: state.authReducer.successMessage,
        user: state.authReducer.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authenticate: data => {
            dispatch(AuthMiddleware.authentication(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
