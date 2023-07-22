// import { saveAs } from 'file-saver';
// import XLSX from 'xlsx';
// import Papa from 'papaparse';

// // Function to convert data to CSV format and trigger download
// // export const exportToCSV = (data, filename) => {
// //   const csv = Papa.unparse(data);
// //   const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
// //   saveAs(blob, filename);
// // };

// // Function to convert data to Excel format and trigger download
// export const exportToExcel = (data, filename) => {
//   const ws = XLSX.utils.json_to_sheet(data);
//   const wb = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
//   const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

//   function s2ab(s) {
//     const buf = new ArrayBuffer(s.length);
//     const view = new Uint8Array(buf);
//     for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
//     return buf;
//   }

//   const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
//   saveAs(blob, filename);
// };
