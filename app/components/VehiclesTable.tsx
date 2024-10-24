'use client';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

export default function VehiclesTable() {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/vehicles');
      const result = await res.json();
      setHeaders(result.headers);
      setData(result.data);
    };
    fetchData();
  }, []);

  // Calculate the records to display for the current page
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = data.slice(startIndex, startIndex + recordsPerPage);

  return (
    <div className="overflow-hidden">
      <div className="overflow-y-auto max-h-[400px]">
        {' '}
        {/* Set a max height and enable vertical scrolling */}
        <table className="min-w-full bg-white border text-slate-950">
          <thead className="bg-gray-200">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-2 border text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t">
                {headers.map((header) => (
                  <td
                    key={`${rowIndex}-${header}`}
                    className="px-4 py-2 border"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalRecords={data.length}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
