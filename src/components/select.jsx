import React from "react";

function Select(props) {
    const { title, id, options, value, setChangeValue } = props;

    const onCommonChange = (e) => {
        setChangeValue(e.target.value);
    };

    return (
        <div className="row" style={{ marginBottom: "5px" }}>
            <label htmlFor={id} className="col-6">{title}</label>
            <select id={id} name={id} className="col-5" value={value} onChange={onCommonChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;