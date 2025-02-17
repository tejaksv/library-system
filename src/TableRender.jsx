import React, { useEffect, useState } from 'react';
import Table from 'react-table';
import TableForm from './TableForm';

const TableRender = () => {
    const [data, setData] = useState([{}]);
    const [errors, setErrors] = useState({});
    const [editRecord, setEditRecord] = useState({});
    const [company, setCompany] = useState("");
    const [contact, setContact] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        setData([
            { id: 1, company: 'Blueverse', "contact-name": "XYZ", country: "uk" },
            { id: 2, company: 'Garudaven', "contact-name": "Chenna Reddy", country: "usa" }
        ])
    }, []);

    const selectedRow = (e) => {
        const findRecord = data.find(record => record.id === parseInt(e.target.id));
        setEditRecord(findRecord);
    }

    const onSave = () => {
        if (!company || !contact || country === "") {
            // alert("Please fill all the fields.");
            let errorsCopy = {};
            errorsCopy.company = !company ? true : false;
            errorsCopy.contact = !contact ? true : false;
            errorsCopy.country = !country ? true : false;
            setErrors(errorsCopy);
            return;
        }
        if (Object.keys(editRecord).length > 0) {
            let recordIndex = data.filter((record, index) => {
                if (record.company === editRecord.company) {
                    return index;
                }
            });
            recordIndex = recordIndex[0].id - 1;
            let actualData = data;
            actualData[recordIndex]["contact-name"]= contact;
            actualData[recordIndex].country= country;
            setData(actualData);
        } else {
            setData([...data, { company, "contact-name": contact, country: country }]);
        }
        setErrors({});
        setCompany("");
        setContact("");
        setCountry("");
        setEditRecord({});
    }

    return (
        <>
            <div className='row'>
                <div className='col-6 d-flex justify-content-end'>
                    <button className='btn btn-primary' style={{ float: 'right' }}>+</button>
                </div>
            </div>
            <div className='row'>
                <span className='col-1'></span>
                <table className='col-5' style={{ border: '1px solid black' }}>
                    <tr style={{ border: '1px solid black' }}>
                        <th style={{ border: '1px solid black' }}>Company</th>
                        <th style={{ border: '1px solid black' }}>Contact</th>
                        <th style={{ border: '1px solid black' }}>Country</th>
                    </tr>
                    {data.map((entry, index) => (
                        <tr style={{ border: '1px solid black' }}>
                            <td style={{ border: '1px solid black' }} onClick={selectedRow} id={entry.id}>{entry.company}</td>
                            <td style={{ border: '1px solid black' }}>{entry["contact-name"]}</td>
                            <td style={{ border: '1px solid black' }}>{entry?.country || "India"}</td>
                        </tr>
                    ))}
                </table>
                <div className='col-6'>
                    <TableForm
                        company={company}
                        contact={contact}
                        country={country}
                        errors={errors}
                        setCompany={setCompany}
                        setContact={setContact}
                        setCountry={setCountry}
                        editRecord={editRecord}
                        onSave={onSave}
                    />
                </div>
            </div>
        </>
    )
}

export default TableRender;