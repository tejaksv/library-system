import React, { useState } from "react";
import { userName } from './FormValidators'

function Input(props) {
    const { title, id, placeholder, setChangeValue, value, error, isDisable, validators } = props;
    const [fieldTitle, setFieldTitle] = useState("");

    const onCommonChange = (e) => {
        const fieldValue = e.target.value
        var fieldError = false;
        if (validators && validators.includes('required')) {
            if (!fieldValue) {
                fieldError = true;
            }
        }
        if (validators && validators.includes('userName')) {
            const validationDetails = userName(fieldValue);
            if (!validationDetails.isValid) {
                fieldError = true;
                setFieldTitle(validationDetails.message);
            } else {
                setFieldTitle(fieldValue);
            }
        }
        setChangeValue(fieldValue, fieldError, id);
    };

    return (
        <div className="row" style={{ marginBottom: "5px" }}>
            <label
                className="col-6"
                htmlFor={title}>
                {title}
            </label>
            <input
                className="col-5"
                style={error ? { border: '1px solid red' } : { border: '1px solid black' }}
                id={id} type="text"
                placeholder={"Enter " + placeholder}
                onChange={onCommonChange}
                value={value}
                disabled={isDisable}
                title={fieldTitle}
            />
        </div>
    )
}

export default Input;