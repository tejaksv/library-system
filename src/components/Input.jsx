import React from "react";

function Input(props) {
    const { title, id, placeholder, setChangeValue, value, error, isDisable } = props;

    const onCommonChange = (e) => {
        setChangeValue(e.target.value);
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
            />
        </div>
    )
}

export default Input;