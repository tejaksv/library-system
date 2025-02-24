import React from "react";

function Select(props) {
    const { title, id, options = [], value, setChangeValue } = props; // Default options to an empty array

    const onCommonChange = (e) => {
        setChangeValue(e.target.value);
    };
    
    return (
        <div className="row" style={{ marginBottom: "5px" }}>
        <label htmlFor={id} className="col-6">{title}</label>
        <select 
            id={id} 
            name={id} 
            className="col-5" 
            onChange={onCommonChange} 
            value={value}
        >
            {options.length > 0 ? (
                options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))
            ) : (
                <option disabled>No options available</option>
            )}
        </select>
    </div>
);
}


export default Select;
