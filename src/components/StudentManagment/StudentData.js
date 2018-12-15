import React, { Component } from "react";
import { Input, Select } from "../Input/input"
import cities from "../../cities.json"

class StudentData extends Component {

    render() {
        const { disabled, onChange, parentThis, errors } = this.props;
        const { course, distanceLearning, fullName, studentCnic, fatherName, fatherCnic, email, phoneNumber, homeAddress
            , province, lastQualification, dob, city, gender, imageUrl
        } = this.props.data;
        
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="admit-card-image-con">
                        <div className="admit-card-image" style={{ backgroundImage: `url(${imageUrl})` }}>

                        </div>

                        <input type="file"
                            disabled={disabled}
                            name="imageSelector"
                            id="imageSelector"
                            onChange={(ev) => onChange(ev)}
                            ref={(el) => parentThis.imageFile = el}
                        />

                    </div>
                    <Select
                        label="Course"
                        name="course"
                        id="course"
                        value={course}
                        disabled={disabled}
                        options={[
                            { name: "Artificial Inteligence", value: "AIC" },
                            { name: "Block Chain", value: "BCC" },
                            { name: "Cloud Native Computing", value: "CNC" }
                        ]}
                        onChange={onChange}
                        errors={errors}
                    />
                    <div className="check-container">
                        <div className="check-wrapper">
                            <label htmlFor="distanceLearning">
                                <span className="label">Online Learning</span>
                                <input type="checkbox"
                                    name="distanceLearning"
                                    id="distanceLearning"
                                    checked={distanceLearning}
                                    disabled={disabled}
                                    onChange={(ev) => onChange(ev)}
                                />
                            </label>
                        </div>
                    </div>

                    <Input
                        label="Full Name"
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={fullName}
                        disabled={disabled}
                        onChange={(ev) => onChange(ev)}
                        errors={errors}
                    />

                    <Input
                        label="CNIC or B-FORM"
                        type="text"
                        name="studentCnic"
                        id="studentCnic"
                        value={studentCnic}
                        disabled={disabled}
                        onChange={(ev) => onChange(ev)}
                        errors={errors}
                    />

                    <Input
                        label="Father Full Name"
                        type="text"
                        name="fatherName"
                        id="fatherName"
                        value={fatherName}
                        disabled={disabled}
                        onChange={(ev) => onChange(ev)}
                        errors={errors}
                    />

                    <Input
                        label="Father CNIC"
                        type="text"
                        name="fatherCnic"
                        id="fatherCnic"
                        value={fatherCnic}
                        disabled={disabled}
                        onChange={(ev) => onChange(ev)}
                        errors={errors}
                    />

                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        disabled={disabled}
                        onChange={(ev) => onChange(ev)}
                        errors={errors}
                    />
                    <Input
                        label="Phone Number"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={phoneNumber}
                        disabled={disabled}
                        onChange={(ev) => onChange(ev)}
                        errors={errors}
                    />
                    <Input
                        label="Address"
                        type="text"
                        name="homeAddress"
                        id="homeAddress"
                        value={homeAddress}
                        disabled={disabled}
                        onChange={(ev) => onChange(ev)}
                        errors={errors}
                    />
                    <Select
                        label="Province"
                        name="province"
                        id="province"
                        value={province}
                        disabled={disabled}
                        options={[
                            { name: "Sindh", value: "sindh" },
                            { name: "Bloachistan", value: "blochistan" },
                            { name: "Punjab", value: "punjab" },
                            { name: "KPK", value: "kpk" }

                        ]}
                        onChange={onChange}
                        errors={errors}
                    />
                    <Select
                        label="City"
                        name="city"
                        id="city"
                        value={city}
                        disabled={disabled}
                        options={cities[province].map((item) => {
                            return { name: item, value: item }
                        })}
                        onChange={onChange}
                        errors={errors}
                    />
                    <Input
                        label="Date Of Birth"
                        type="date"
                        name="dob"
                        id="dob"
                        value={dob}
                        disabled={disabled}
                        onChange={(ev) => onChange(ev)}
                        errors={errors}
                    />
                    <div className="radio-container">
                        <div className="radio-wrapper">
                            <h3>Gender</h3>
                            <label htmlFor="male">
                                <span className="label">Male</span>
                                <input type="radio"
                                    name="gender"
                                    id="male"
                                    value="male"
                                    checked={gender === "male"}
                                    disabled={disabled}
                                    onChange={(ev) => onChange(ev)}
                                />
                            </label>
                            <label htmlFor="female">
                                <span className="label">Female</span>
                                <input type="radio"
                                    name="gender"
                                    id="female"
                                    value="female"
                                    checked={gender === "female"}
                                    disabled={disabled}
                                    onChange={(ev) => onChange(ev)}
                                />
                            </label>
                        </div>
                    </div>
                    <Select
                        label="Highest Qualification"
                        name="lastQualification"
                        id="lastQualification"
                        value={lastQualification}
                        disabled={disabled}
                        options={[
                            { name: "Matric", value: "Matric" },
                            { name: "O Levels", value: "O Levels" },
                            { name: "Intermediate", value: "Intermediate" },
                            { name: "A Levels", value: "A Levels" },
                            { name: "Undergraduate", value: "Undergraduate" },
                            { name: "Graduate", value: "Graduate" },
                            { name: "Post-Graduate", value: "Post-Graduate" },
                        ]}
                        onChange={onChange}
                        errors={errors}
                    />
                </div>
            </div>
        )
    }
}

export default StudentData;