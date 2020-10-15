import React from 'react';
import {Table} from 'reactstrap';

const recentFiles = [{
    filename: 'filename1',
    lastAccess: 'Mon, 12 Oct 2020, 14:00:30 IST',
    link: 'https://google.com'
},{
    filename: 'filename2',
    lastAccess: 'Mon, 13 Oct 2020, 12:45:10 IST',
    link: 'https://github.com'
},{
    filename: 'filename3',
    lastAccess: 'Mon, 12 Oct 2020, 18:00:00 IST',
    link: 'https://gitter.im'
}];

const header = ["Filename", "Last Accessed"];

const RecentlyAccessed = () => {
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
                            {/*eslint-disable-next-line react/jsx-no-target-blank*/} 
                            <td><a href={data.link} target="_blank">{data.filename}</a></td>
                            <td>{data.lastAccess}</td>
                        </tr>
                    )
                })}
            
            </tbody>
        </Table>
        </div>
    )
}

export default RecentlyAccessed;