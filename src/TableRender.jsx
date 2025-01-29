import React, { useEffect, useState } from 'react';
import Table from 'react-table';

const TableRender = () => {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        setData([
            { company: 'Blueverse', "contact-name": "XYZ", country_name: "UK" },
            { company: 'Garudaven', "contact-name": "Chenna Reddy", country_name: "US" }
        ])
    }, [])

    return (
        <>
            <button>+</button>
            <table style={{ border: '1px solid black' }}>
                <tr style={{ border: '1px solid black' }}>
                    <th style={{ border: '1px solid black' }}>Company</th>
                    <th style={{ border: '1px solid black' }}>Contact</th>
                    <th style={{ border: '1px solid black' }}>Country</th>
                </tr>
                <tr style={{ border: '1px solid black' }}>
                    <td style={{ border: '1px solid black' }}>Garudaven</td>
                    <td style={{ border: '1px solid black' }}>Maria Anders</td>
                    <td style={{ border: '1px solid black' }}>Germany</td>
                </tr>
                <tr style={{ border: '1px solid black' }}>
                    <td style={{ border: '1px solid black' }}>Blueverse</td>
                    <td style={{ border: '1px solid black' }}>Francisco Chang</td>
                    <td style={{ border: '1px solid black' }}>Mexico</td>
                </tr>
                <tr style={{ border: '1px solid black' }}>
                    <td style={{ border: '1px solid black' }}>{data[0].company}</td>
                    <td style={{ border: '1px solid black' }}>{data?.[0]?.["contact-name"] || "abc"}</td>
                    <td style={{ border: '1px solid black' }}>{data && data[0].country_name || "India"}</td>
                </tr>
                {data.map((entry, index) => (
                    entry.company === "Garudaven" ? null : (
                        <tr style={{ border: '1px solid black' }}>
                            <td style={{ border: '1px solid black' }}>{entry.company}</td>
                            <td style={{ border: '1px solid black' }}>{entry["contact-name"]}</td>
                            <td style={{ border: '1px solid black' }}>{entry?.country_name || "India"}</td>
                        </tr>
                    )
                ))}
            </table>
        </>
    )
}

export default TableRender;