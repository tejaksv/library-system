import React from "react";

function Checkbox(props) {
    const {title, id, defaultValue} = props;

    return (
        <div className="row">
            <label htmlFor={"label-" + id} className="col-6">{title}</label>
            <input type="checkbox" id={id} name={id} value="yes" className="col-5" checked={defaultValue || false} />
        </div>
    )
}

export default Checkbox;