import React from 'react';
import {Table} from 'reactstrap';

const recentFiles = [{
    filename: 'filename1',
    lastAccess: 'Mon, 12 Oct 2020, 14:00:30 IST'
},{
    filename: 'filename2',
    lastAccess: 'Mon, 13 Oct 2020, 12:45:10 IST'
},{
    filename: 'filename3',
    lastAccess: 'Mon, 12 Oct 2020, 18:00:00 IST'
}];

const header = ["Filename", "Last Accessed"];

const RecentlyAccesed = () => {
    return(
        <div>
        <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
                <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
                {Object.keys(recentFiles).map((k, i) => {
                    let data = recentFiles[k];
                    return(
                        <tr key={i}>
                            <td>{data.filename}</td>
                            <td>{data.lastAccess}</td>
                        </tr>
                    )
                })}
            
            </tbody>
        </Table>
        </div>
    )
}

export default RecentlyAccesed;