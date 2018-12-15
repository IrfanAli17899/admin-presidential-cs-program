import React, { Component } from "react";

const Input = (props) => {
    const { type, name, id, onChange, label, value, disabled ,errors } = props;

    return (
        <div className="input-container">
            <div className="input-wrapper">
                <label htmlFor={id}>
                    <span className="label">{label}</span>
                    <input type={type} value={value} disabled={disabled} name={name} id={id} onChange={(ev) => onChange(ev)} />
                </label>
                {
                    errors.errorsObj[name] && <p className="error"  >{errors.errorsObj[name].message}</p>
                }
            </div>
        </div>
    )
}

const Select = (props) => {
    const { name, id, onChange, label, options, value, disabled ,errors} = props;

    return (
        <div className="select-container">
            <div className="select-wrapper">
                <label htmlFor={id}>
                    <span className="label">{label}</span>
                    <select value={value} disabled={disabled} onChange={(ev) => onChange(ev)} name={name} id={id}>
                        <option value="Select">Select</option>
                        {options.map((item, index) => {
                            return <option value={item.value} key={index}>{item.name}</option>
                        })}

                    </select>
                    {
                        errors.errorsObj[name] && errors.errorsObj[name].message && < p className="error"  >{errors.errorsObj[name].message}</p>
                    }

                </label>
            </div>
        </div>
    )
}


export { Input, Select };