import React, { useEffect, useState } from 'react';
import Table from 'react-table';
import TableForm from './TableForm';
 
const TableRender = () => {
    const [data, setData] = useState([{}]);
    const [errors, setErrors] = useState({});
    const [editRecord, setEditRecord] = useState({});
    const [company, setCompany] = useState("");
    const [contact, setContact] = useState("");b
    const [country, setCountry] = useState("");
    const [formMode, setFormMode] = useState("create");
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
 
    useEffect(() => {
        setData([
            { company: 'Blueverse', "contact-name": "XYZ", country: "uk" },
            { company: 'Garudaven', "contact-name": "Chenna Reddy", country: "usa" }
        ])
    }, []);
 
    const selectedRow = (e) => {
        const findRecord = data[e.target.id];
        setEditRecord(findRecord);
        setFormMode("edit"); 
    }
    const handleCheckboxChange = (index) => {
        setSelectedRows((prevSelected) =>
            prevSelected.includes(index)
                ? prevSelected.filter((i) => i !== index)
                : [...prevSelected, index]
        );
    }
    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedRows([]);
        } else {
            setSelectedRows(data.map((_, index) => index));
        }
        setSelectAll(!selectAll);
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
            let recordIndex;
            data.find((record, index) => {
                if (record.company === editRecord.company) {
                    recordIndex = index;
                }
            });
            let actualData = data;
            actualData[recordIndex]["contact-name"] = contact;
            actualData[recordIndex].country = country;hb
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
 
//    // const deleteAllRecord = () => {
//        // setData([]);
//     }
    const deleteSelectedRecords = () => {
        setData((prevData) => prevData.filter((_, index) => !selectedRows.includes(index)));
        setSelectedRows([]);
        setSelectAll(false);
    };
 
    const deleteAllRecord = () => {
        setData([]);
        setSelectedRows([]);
        setSelectAll(false);
    };
 
    return (
        <>
            <div className='row'>
                <div className='col-6 d-flex justify-content-end'>
                    <button className='btn btn-primary' style={{ float: 'right' }}>+</button>
                    <button className='btn btn-danger' id="delete-all" onClick={deleteAllRecord} style={{ marginLeft: '5px' }}>-</button>
                   {/* <button className='btn btn-danger' onClick={deleteAllRecord} style={{ marginLeft: '5px' }}>Delete All</button> */}
                   {selectedRows.length > 0 && (
    <button className='btn btn-danger' onClick={deleteSelectedRecords} style={{ marginLeft: '5px' }}>
        Delete
    </button>
)}
 
 
                </div>
            </div>
            <div className='row'>
                <span className='col-1'></span>
                <table className='col-5' style={{ border: '1px solid black' }}>
                    <tr style={{ border: '1px solid black' }}>
                       <th><input type="checkbox"checked={selectAll} onChange={handleSelectAll}  /></th>
                        <th style={{ border: '1px solid black' }}>Company</th>
                        <th style={{ border: '1px solid black' }}>Contact</th>
                        <th style={{ border: '1px solid black' }}>Country</th>
                        {/* <th style={{ border: '1px solid black' }}>
 
                        </th> */}
                    </tr>
                    {data.map((entry, index) => (
                        <tr style={{ border: '1px solid black' }}>
                            <td><input type="checkbox"checked={selectedRows.includes(index)}onChange={() => handleCheckboxChange(index)} /></td>      
                            <td style={{ border: '1px solid black' }} onClick={selectedRow} id={index}>{entry.company}</td>
                            <td style={{ border: '1px solid black' }}>{entry["contact-name"]}</td>
                            <td style={{ border: '1px solid black' }}>{entry?.country || "India"}</td>
                            {/* <td style={{ border: '1px solid black' }}>
                                {/* <button className='btn btn-danger' id={index} onClick={deleteRecord}>-</button> */}
                            {/* </td> */}
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
};
 
export default TableRender;
 