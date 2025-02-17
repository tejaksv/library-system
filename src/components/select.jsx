import React from "react";

function Select({ title, options, value, setValue, id, name }) {
    return (
        <div className="row">
            <label className="col-6">{title}</label>
            <span className="col-5">
                <select id={id} name={name} value={value} onChange={(e) => setValue(e.target.value)}>
                    <option value="">Select {title}</option> 
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </span>
        </div>
    );
}

export default Select;
