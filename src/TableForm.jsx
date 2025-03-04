import React from 'react';
import Input from './components/Input';

function TableForm(props) {
    const { company, contact, country, errors, onSave, setCompany, setContact, setCountry } = props;
    return (
        <>
            <Input
                title="Company"
                id="company"
                placeholder="company name"
                value={company}
                setChangeValue={setCompany}
                error={errors.company || false}
            />
            <Input title="Contact" id="contact" placeholder="contact name" value={contact} setChangeValue={setContact} error={errors.contact || false} />
            <Input title="Country" id="country" placeholder="country name" value={country} setChangeValue={setCountry} error={errors.country || false} />
            <button className='btn btn-primary' onClick={onSave}>Add</button>
        </>
    )
}

export default TableForm;