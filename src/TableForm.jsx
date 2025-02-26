import React, { useEffect } from 'react';
import Input from './components/Input';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';

function TableForm(props) {
<<<<<<< HEAD
    const {
        company, contact, country, errors, onSave,
        setCompany, setContact, setCountry, formMode 
    } = props;
=======
    const { company, contact, country, errors, onSave, setCompany, setContact, setCountry, editRecord, formMode, setView } = props;
    const genderOptions = [{
        value: 'male',
        label: 'Male'
    }, {
        value: 'female',
        label: 'Female'
    }]
>>>>>>> fa4b5cd7e61153fa034b4f76eda2f24eeeb9ccd5

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ];

    const countryOptions = [
        { value: 'india', label: 'India' },
        { value: 'uk', label: 'UK' },
        { value: 'usa', label: 'USA' },
        { value: 'australia', label: 'Australia' }
    ];

    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h4>{formMode === "edit" ? "Edit Record" : "Add Record"}</h4>

            <Input
                title="Company"
                id="company"
                placeholder="company name"
                value={company}
                setChangeValue={setCompany}
                error={errors.company || false}
                isDisable={formMode === "edit"}
            />

            <Input
                title="Contact"
                id="contact"
                placeholder="Enter contact name"
                value={contact}
                setChangeValue={setContact}
                error={errors.contact || false}
            />

            <Select
                title="Country"
                id="country"
                value={country}
                options={countryOptions}
                setValue={setCountry}
            />

            <Checkbox title="VIP" id="vip" defaultValue={true} />
<<<<<<< HEAD

            <RadioButton
                title="Gender"
                name="gender"
                id="gender"
                options={genderOptions}
            />

            <div style={{ marginTop: '10px' }}>
                <button className='btn btn-primary' onClick={onSave}>
                    {formMode === "edit" ? "Update" : "Add"}
                </button>
                <button
                    className='btn btn-secondary'
                    onClick={() => { setCompany(""); setContact(""); setCountry(""); }}
                    style={{ marginLeft: '5px' }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
=======
            <RadioButton title="Gender" name="gender" id="gender" options={genderOptions} />
            <button className='btn btn-primary' onClick={onSave}>Add</button>
            <button className='btn btn-secondary' style={{marginLeft: "5px"}} onClick={() => setView("table")}>Cancel</button>
        </>
    )
>>>>>>> fa4b5cd7e61153fa034b4f76eda2f24eeeb9ccd5
}

export default TableForm;
