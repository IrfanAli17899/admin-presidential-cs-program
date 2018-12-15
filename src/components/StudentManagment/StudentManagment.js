import React, { Component } from "react";
import { Select, Input } from "../Input/input"
import StudentMiddleware from "../../store/middleware/studentMiddleware";
import { connect } from "react-redux"

class StudentManagment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identity:"",
            identityValue:""
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("Student in componentWillReceiveProps",nextProps.student);
      }

    submit = (ev) => {
        ev.preventDefault();
        const { identity, identityValue } = this.state;
        this.props.search({ type:identity, value:identityValue, databaseToken:this.props.user.databaseToken });
    }

    render() {
        return (
            <div className="container-fluid">
            
                <div className="container">
                    <div className="student-form-wrapper">
                        <form onSubmit={(ev) => this.submit(ev)} method="post">
                            <Select
                                label="Select Identity"
                                name="identity"
                                id="identity"
                                options={[
                                    { name: "CNIC", value: "cnic" },
                                    { name: "Number", value: "phoneNumber" },
                                    { name: "Roll Number", value: "rollNo" },
                                    { name: "Email", value: "email" },

                                ]}
                                onChange={(ev) => this.setState({ [ev.target.name]: ev.target.value })}
                            />

                            <Input
                                label="Value"
                                type="text"
                                name="identityValue"
                                id="identityValue"
                                onChange={(ev) => this.setState({ [ev.target.name]: ev.target.value })}
                            />

                                <button type="submit">Search</button>

                        </form>
                    </div>
                </div>
                {this.props.student? this.props.student.fullName:"Not found"}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.authReducer.user,
        isLoading: state.studentReducer.isLoading,
        isError: state.studentReducer.isError,
        errorMessage: state.studentReducer.errorMessage,
        successMessage: state.studentReducer.successMessage,
        student: state.studentReducer.student
    };
}

function mapDispatchToProps(dispatch) {
    return {
        search: data => {
            dispatch(StudentMiddleware.search(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentManagment);