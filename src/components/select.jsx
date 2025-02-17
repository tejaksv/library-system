import React from "react";

function Select(props) {
    const { title, id, options, value, setChangeValue } = props;

    const onCommonChange = (e) => {
        setChangeValue(e.target.value);
    };
    
    return (
        <div className="row" style={{ marginBottom: "5px" }}>
            <label htmlFor={id} className="col-6">{title}</label>
            <select id="country" name="country" className="col-5" onChange={onCommonChange} value={value}>
                <option value="uk">UK</option>
                <option value="usa">USA</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
            </select>
        </div>
    )
}

export default Select;