import React from 'react';
import Input from './components/Input';
import Select from './components/select';
import Checkbox from './components/checkbox';
import RadioButton from './components/RadioButton'

function TableForm(props) {
    const { company, contact, country, errors, onSave, setCompany, setContact, setCountry } = props;
    const genderOptions = [{
        value: 'male',
        label: 'Male'
    }, {
        value: 'female',
        label: 'Female'
    }]

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
            <Select title="Country" id="country" setChangeValue={setCountry} />
            <Checkbox title="VIP" id="vip" defaultValue={true} />
            <RadioButton title="Gender" name="gender" id="gender" options={genderOptions} />
            <button className='btn btn-primary' onClick={onSave}>Add</button>
        </>
    )
}

export default TableForm;