import React, { useEffect, useState } from 'react';
import TableForm from './TableForm';

const TableRender = () => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});
  // We'll store the index of the record being edited instead of the record itself.
  const [editIndex, setEditIndex] = useState(null);
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [formMode, setFormMode] = useState("create");

  useEffect(() => {
    setData([
      { id: 1, company: 'Blueverse', "contact-name": "XYZ", country: "uk" },
      { id: 2, company: 'Garudaven', "contact-name": "Chenna Reddy", country: "usa" }
    ]);
  }, []);

  // Now the function receives the index directly.
  const selectedRow = (index) => {
    const record = data[index];
    setEditIndex(index);
    setFormMode("edit");
    // Populate the form fields with the selected record's data.
    setCompany(record.company);
    setContact(record["contact-name"]);
    setCountry(record.country);
  };

  const onSave = () => {
    // Create a new errors object for validation.
    const errorsCopy = {
      company: !company,
      contact: !contact,
      country: !country
    };
    setErrors(errorsCopy);

    if (Object.values(errorsCopy).includes(true)) {
      return;
    }

    if (formMode === "edit" && editIndex !== null) {
      // Create a new array with the updated record.
      const updatedData = data.map((record, i) => {
        if (i === editIndex) {
          return { ...record, "contact-name": contact, country: country };
        }
        return record;
      });
      setData(updatedData);
      setEditIndex(null);
      setFormMode("create");
    } else {
      // Generate a new id; here we simply add 1 to the maximum current id.
      const newId = data.length ? Math.max(...data.map(r => r.id)) + 1 : 1;
      setData([...data, { id: newId, company, "contact-name": contact, country }]);
    }
    // Reset form fields and errors.
    setErrors({});
    setCompany("");
    setContact("");
    setCountry("");
  };

  const deleteRecord = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

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
          <thead>
            <tr style={{ border: '1px solid black' }}>
              <th style={{ border: '1px solid black' }}>Company</th>
              <th style={{ border: '1px solid black' }}>Contact</th>
              <th style={{ border: '1px solid black' }}>Country</th>
              <th style={{ border: '1px solid black' }}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={entry.id} style={{ border: '1px solid black' }}>
                <td
                  style={{ border: '1px solid black', cursor: 'pointer' }}
                  onClick={() => selectedRow(index)}
                >
                  {entry.company}
                </td>
                <td style={{ border: '1px solid black' }}>{entry["contact-name"]}</td>
                <td style={{ border: '1px solid black' }}>{entry.country || "India"}</td>
                <td style={{ border: '1px solid black' }}>
                  <button className='btn btn-danger' onClick={() => deleteRecord(index)}>
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
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
            // Pass the record index (if needed) or the record data.
            editRecord={editIndex !== null ? data[editIndex] : {}}
            onSave={onSave}
            formMode={formMode}
          />
        </div>
      </div>
    </>
  );
};

export default TableRender;
