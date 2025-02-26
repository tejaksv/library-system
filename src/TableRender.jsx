import React, { useEffect, useState } from 'react';
import Table from 'react-table';
import TableForm from './TableForm';

const TableRender = () => {
    const [data, setData] = useState([{}]);
    const [errors, setErrors] = useState({});
    const [editIndex, setEditIndex] = useState(null);
    const [company, setCompany] = useState("");
    const [contact, setContact] = useState("");
    const [country, setCountry] = useState("");
    const [formMode, setFormMode] = useState("create");
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        setData([
            { company: 'Blueverse', contactName: "XYZ", country: "UK" },
            { company: 'Garudaven', contactName: "Chenna Reddy", country: "USA" }
        ]);
    }, []);

    const selectedRow = (index) => {
        const findRecord = data[index];
        if (!findRecord || !findRecord.company) return;

        setEditIndex(index);
        setFormMode("edit");
        setCompany(findRecord.company);
        setContact(findRecord.contactName);
        setCountry(findRecord.country);
    };

    const onSave = () => {
        const errorsCopy = {
            company: !company,
            contact: !contact,
            country: !country
        };
        setErrors(errorsCopy);

        if (Object.values(errorsCopy).includes(true)) return;

        if (formMode === "edit" && editIndex !== null) {
            let updatedData = [...data];
            updatedData[editIndex] = { company, contactName: contact, country };
            setData(updatedData);
            setEditIndex(null);
            setFormMode("create");
        } else {
            setData([...data, { company, contactName: contact, country }]);
        }

        setErrors({});
        setCompany("");
        setContact("");
        setCountry("");
    }

    const deleteRecord = (index) => {
        setData(data.filter((_, i) => i !== index));
        setSelectedRows(selectedRows.filter((i) => i !== index)); // Remove from selection
    };

    const deleteAllRecord = () => {
        setData([]);
        setSelectedRows([]);
    };

    // 🟢 Select / Deselect Individual Rows
    const toggleRowSelection = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter(i => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    // 🟢 Select Only One Row
    const selectOnlyOne = (index) => {
        setSelectedRows([index]);
    };

    // 🟢 Select All Rows
    const selectAllRows = () => {
        setSelectedRows(data.map((_, index) => index));
    };

    // 🟢 Deselect All Rows
    const deselectAllRows = () => {
        setSelectedRows([]);
    };

    return (
        <>
            <div className="row">
                <div className="col-6 d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={() => setFormMode("create")}>+</button>
                    <button className="btn btn-danger" id="delete-all" onClick={deleteAllRecord} style={{ marginLeft: '5px' }}>-</button>
                </div>
            </div>

            <div className="row">
                <div className="col-5">
                    <table style={{ width: "100%", border: "1px solid black" }}>
                        <thead>
                            <tr>
                                <th style={{ border: "1px solid black" }}>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => e.target.checked ? selectAllRows() : deselectAllRows()}
                                        checked={selectedRows.length === data.length && data.length > 0}
                                    /> Select All
                                </th>
                                <th style={{ border: "1px solid black" }}>Company</th>
                                <th style={{ border: "1px solid black" }}>Contact</th>
                                <th style={{ border: "1px solid black" }}>Country</th>
                                <th style={{ border: "1px solid black" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((entry, index) => (
                                <tr key={index} style={{ border: "1px solid black" }}>
                                    <td style={{ border: "1px solid black" }}>
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(index)}
                                            onChange={() => toggleRowSelection(index)}
                                        />
                                    </td>
                                    <td
                                        style={{ border: "1px solid black", cursor: "pointer" }}
                                        onClick={() => selectedRow(index)}
                                    >
                                        {entry.company}
                                    </td>
                                    <td style={{ border: "1px solid black" }}>{entry.contactName}</td>
                                    <td style={{ border: "1px solid black" }}>{entry.country || "India"}</td>
                                    <td style={{ border: "1px solid black" }}>
                                        <button className="btn btn-danger" onClick={() => deleteRecord(index)}>-</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Selection Controls */}
                    <div style={{ marginTop: "10px" }}>
                        <input
                            type="checkbox"
                            onChange={() => setSelectedRows([])}
                            checked={selectedRows.length === 0}
                        /> Deselect All
                        <br />
                        <input
                            type="checkbox"
                            onChange={() => selectOnlyOne(selectedRows[0] ?? 0)}
                            checked={selectedRows.length === 1}
                        /> Select Only One
                    </div>
                </div>

                <div className="col-6">
                    <TableForm
                        company={company}
                        contact={contact}
                        country={country}
                        errors={errors}
                        setCompany={setCompany}
                        setContact={setContact}
                        setCountry={setCountry}
                        onSave={onSave}
                        formMode={formMode}
                    />
                </div>
            </div>
        </>
    );
};

export default TableRender;
