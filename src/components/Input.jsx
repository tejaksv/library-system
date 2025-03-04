import React from "react";

function Input(props) {
    const { title, id, placeholder, setChangeValue, value, error } = props;

    const onCommonChange = (e) => {
        setChangeValue(e.target.value);
        console.log()
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
            />
        </div>
    )
}

export default Input;