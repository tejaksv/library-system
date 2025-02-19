import React from "react";

function RadioButton(props) {
    const { title, options, setValue, name, id } = props;

    return (
        <div className="row">
            <label className="col-6">{title}</label>
            <span className="col-5">
                {options.map((option) => (
                    <>
                        {/* <input type="radio" id={option.value} name={id} value={option.value} /> */}
                        <label for={option.value} style={{paddingLeft: '2px', paddingRight: '7px'}}>{option.label}</label>
                    </>
                ))}
            </span>
        </div>
    )
}

export default RadioButton;