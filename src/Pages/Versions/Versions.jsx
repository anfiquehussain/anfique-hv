import React, { useState } from 'react';

function Versions() {

  const [Version2, setVersion2] = useState([
    { version: 'v2.6', date: '31-12-2025 : 12:01 AM' },
    { version: 'v2.5', date: '30-12-2025 : 11:56 PM' },
    { version: 'v2.4', date: '14-06-2025 : 11:06 AM' },
    { version: 'v2.3', date: '12-06-2025 : 03:14 PM' },
    { version: 'v2.2', date: '12-06-2025 : 03:06 PM' },
    { version: 'v2.1', date: '12-10-2024 : 8:32 PM' },
    { version: 'v2.0', date: '12-10-2024 : 8:15 PM' },
  ]);

  const [Version1, setVersion1] = useState([
    { version: 'v1.5', date: '29-08-2024 : 6:05 PM' },
    { version: 'v1.4', date: '13-08-2024 : 8:57 PM' },
    { version: 'v1.3', date: '13-08-2024 : 8:37 PM' },
    { version: 'v1.2', date: '10-08-2024 : 12:49 PM' },
    { version: 'v1.1', date: '10-08-2024 : 12:41 PM' },
    { version: 'v1.0', date: '08-08-2024 : 08:03 PM' }
  ]);
  const [betaVersion, setBetaVersion] = useState([
    { version: 'βv1.5', date: 'Aug 3, 2024' },
    { version: 'βv1.0', date: 'Jul 30, 2024' },
  ]);

  const [oldVersions, setOldVersions] = useState([
    { version: 'v12', dateTime: '10-08-2024 : 12:30 PM' },
    { version: 'v11', dateTime: '03-08-2024 : 06:10 PM' },
    { version: 'v10', dateTime: '01-07-2024 : 04:40 PM' },
    { version: 'v9', dateTime: '06-05-2023 : 04:41 PM' },
    { version: 'v8', dateTime: '12-11-2022 : 11:30 AM' },
  ]);

  return (
    <div className='flex flex-col items-center mx-5 text-center'>

      {/* Table for Versions Release */}
      <div className='mb-10 w-full max-w-md'>
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className='border border-gray-300 px-4 py-2' colSpan={3}>
                <a target="_blank" rel="noopener noreferrer">
                  Versions 2 Release
                </a>
                <a href="https://github.com/anfiquehussain/anfique-hv" target="_blank" rel="noopener noreferrer" className='ms-3'>
                  (GitHub)
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {Version2.map((item, index) => (
              <tr key={index}>
                <td className='border border-gray-300 px-4 py-2'>{index + 1}</td>
                <td className='border border-gray-300 px-4 py-2'>{item.version}</td>
                <td className='border border-gray-300 px-4 py-2'>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table for Versions 1 Release */}
      <div className='mb-10 w-full max-w-md'>
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className='border border-gray-300 px-4 py-2' colSpan={3}>
                <a  target="_blank" rel="noopener noreferrer">
                  Versions 1 Release
                </a>
                <a href="https://github.com/anfiquehussain/anfique-hv/tree/ec243d3d62c1bcdcd115428646332bfc7468b237" target="_blank" rel="noopener noreferrer" className='ms-3'>
                  (GitHub)
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {Version1.map((item, index) => (
              <tr key={index}>
                <td className='border border-gray-300 px-4 py-2'>{index + 1}</td>
                <td className='border border-gray-300 px-4 py-2'>{item.version}</td>
                <td className='border border-gray-300 px-4 py-2'>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table for Beta Versions */}
      <div className='mb-10 w-full max-w-md'>
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className='border border-gray-300 px-4 py-2' colSpan={3}>
                Beta Versions                 <a href="https://github.com/anfiquehussain/beta.anfique-hv" target="_blank" rel="noopener noreferrer" className='ms-3'>
                  (GitHub)
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {betaVersion.map((item, index) => (
              <tr key={index}>
                <td className='border border-gray-300 px-4 py-2'>{index + 1}</td>
                <td className='border border-gray-300 px-4 py-2'>{item.version}</td>
                <td className='border border-gray-300 px-4 py-2'>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table for Old Versions */}
      <div className='mb-4 w-full max-w-md'>
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className='border border-gray-300 px-4 py-2' colSpan={3}>
                <a href="https://anfiquehv1.netlify.app/" target='_blank' rel="noopener noreferrer">
                  Old Versions
                </a>
                <a href="https://github.com/anfiquehussain/anfique-hv1" target='_blank' rel="noopener noreferrer" className='ms-3'>
                  (GitHub)
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {oldVersions.map((item, index) => (
              <tr key={index}>
                <td className='border border-gray-300 px-4 py-2'>{index + 1}</td>
                <td className='border border-gray-300 px-4 py-2'>{item.version}</td>
                <td className='border border-gray-300 px-4 py-2'>{item.dateTime}</td>
              </tr>
            ))}
            <tr>
              <td className='border border-gray-300 px-4 py-2 text-center' colSpan={3}>
                Unrecorded
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Versions;
