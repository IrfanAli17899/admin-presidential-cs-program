import React, { Component } from "react";
import { Select, Input } from "../Input/input"
import StudentMiddleware from "../../store/middleware/studentMiddleware";
import { connect } from "react-redux"
import StudentData from "./StudentData"
import { validateForm } from "./helper"

class StudentManagment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identity: "",
            identityValue: "",
            disabled: true,
            errors: {
                hasError: false,
                errorsObj: {}
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("Student in componentWillReceiveProps", nextProps.student);
        this.setState({
            studentData: nextProps.student,
            originalCnic: nextProps.student
                ? nextProps.student.studentCnic
                : null
        })
    }

    submit = (ev) => {
        ev.preventDefault();
        const { identity, identityValue } = this.state;
        this.props.search({ type: identity, value: identityValue, databaseToken: this.props.user.databaseToken });
    }
    edit = (ev) => {
        const { studentData, errors } = this.state;
        switch (ev.target.name) {
            case "imageSelector":
                studentData.image = this.imageFile.files[0]
                this.setState({
                    newImage: this.imageFile.files[0]
                        ? URL.createObjectURL(this.imageFile.files[0])
                        : null,
                    imageFile: this.imageFile.files[0],
                    errors: validateForm("each", studentData, ev.target.name, errors)
                })
                break;
            case "distanceLearning":
                studentData['distanceLearning'] = !studentData.distanceLearning;
                this.setState({
                    studentData
                });
                break;

            default:
                studentData[ev.target.name] = ev.target.value;
                this.setState({
                    studentData,
                    errors: validateForm("each", studentData, ev.target.name, errors)
                });
                break;
        }

    }
    submitEdit = (ev) => {
        ev.preventDefault();
        const { studentData, imageFile, originalCnic } = this.state;
        studentData.image = imageFile;
        var validate = validateForm("all", studentData);
        if (validate.hasError) {
            this.setState({ errors: validate });
            return
        }
        const data = {
            userData: studentData,
            originalCnic,
            databaseToken: this.props.user.databaseToken
        };
        console.log({
            userData: studentData,
            studentCnic: originalCnic,
            databaseToken: this.props.user.databaseToken
        });
        
        // console.log(this.props);


        this.props.update(data);


    }

    render() {
        const { student } = this.props;
        const { studentData, disabled, errors, newImage } = this.state;
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
                                errors={errors}
                            />

                            <Input
                                label="Value"
                                type="text"
                                name="identityValue"
                                id="identityValue"
                                onChange={(ev) => this.setState({ [ev.target.name]: ev.target.value })}
                                errors={errors}
                            />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
                {this.props.student && <StudentData onSubmit={this.submitEdit} newImage={newImage} errors={errors} data={studentData} parentThis={this} onChange={(ev) => this.edit(ev)} disabled={disabled} />}
                {this.props.student && disabled && <button type="button" onClick={(ev) => this.setState({ disabled: false })}>Edit</button>}
                {this.props.student && <button type="button">Approve</button>}
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
        },
        update: data => {
            dispatch(StudentMiddleware.update(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentManagment);