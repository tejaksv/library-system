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
    const [formMode, setFormMode] = useState("create");

    useEffect(() => {
        setData([
            { id: 1, company: 'Blueverse', "contact-name": "XYZ", country: "uk" },
            { id: 2, company: 'Garudaven', "contact-name": "Chenna Reddy", country: "usa" }
        ])
    }, []);

    const selectedRow = (e) => {
        const findRecord = data.find(record => record.id === parseInt(e.target.id));
        setEditRecord(findRecord);
        setFormMode("edit");
    }

    const onSave = () => {
        if (!company || !contact || country === "") {
            let errorsCopy = errors;
            errorsCopy.company = !company ? true : false;
            errorsCopy.contact = !contact ? true : false;
            errorsCopy.country = !country ? true : false;
            setErrors(errorsCopy);
            if (Object.values(errorsCopy).includes(true)) {
                return;
            }
        }
        if (formMode === "edit") {
            let recordIndex = data.filter((record, index) => {
                if (record.company === editRecord.company) {
                    return index;
                }
            });
            recordIndex = recordIndex[0].id - 1;
            let actualData = data;
            actualData[recordIndex]["contact-name"] = contact;
            actualData[recordIndex].country = country;
            setData(actualData);
            setEditRecord({});
            setFormMode("create");
        } else {
            setData([...data, { company, "contact-name": contact, country: country }]);
        }
        setErrors({});
        setCompany("");
        setContact("");
        setCountry("");
    }

    const deleteRecord = (e) => {
        let copyData = data;
        const id = parseInt(e.target.id);
        copyData.splice(id, 1);
        setData([...copyData]);
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
                        <th style={{ border: '1px solid black' }}></th>
                    </tr>
                    {data.map((entry, index) => (
                        <tr style={{ border: '1px solid black' }}>
                            <td style={{ border: '1px solid black' }} onClick={selectedRow} id={entry.id}>{entry.company}</td>
                            <td style={{ border: '1px solid black' }}>{entry["contact-name"]}</td>
                            <td style={{ border: '1px solid black' }}>{entry?.country || "India"}</td>
                            <td style={{ border: '1px solid black' }}>
                                {/* <button className='btn btn-primary' id={entry.index} onClick={deleteRecord}>-</button> */}
                                <button className='btn btn-danger' id={index} onClick={deleteRecord}>-</button>
                            </td>
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
                        formMode={formMode}
                    />
                </div>
            </div>
        </>
    )
}

export default TableRender;