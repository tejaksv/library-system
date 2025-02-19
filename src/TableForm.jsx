import Input from "./components/Input";
import Select from "./components/select";
import Checkbox from "./components/checkbox";
import RadioButton from "./components/RadioButton";


function TableForm(props) {
    const { company, contact, country, errors, onSave, setCompany, setContact, setCountry } = props;
 
 
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
   
    <Select
        title="Country"
        id="country"
        name="country"
        options={countryOptions}
        value={country}
        setValue={setCountry}
    />
   
    return (
        <>
            <Input
                title="Company"
                id="company"
                placeholder="Enter company name"
                value={company}
                setChangeValue={setCompany}
                error={errors.company || false}
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
                setChangeValue={setCountry}
            />
 
            <Checkbox title="VIP" id="vip" defaultValue={true} />
 
            <RadioButton
                title="Gender"
                name="gender"
                id="gender"
                options={genderOptions}
            />
 
            <button className='btn btn-primary' onClick={onSave}>Add</button>
        </>
    );
}
 
export default TableForm;