import { mockData } from "../SampleData/dummyData";
import React, { useState, useRef, useEffect } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { Resources } from "../Resources";
import Pagination from "react-js-pagination";
import '../style.css'
import { useNavigate } from "react-router-dom";

const TableComponent = ({onRowClick}) =>{
  const itemsPerPage = 10;
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const navigate = useNavigate();

    const filteredData = mockData.filter((row) => {
      const matchesFilter =
        filterValue === "all" || row.profession.toLowerCase() === filterValue;
      const matchesSearch = row.first_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  
   


  
  const getDataForPage = () => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  

  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  // Event handler for page change
 
  return (
    <div className="">
      <div className="text-5xl font-bold  text-black font-mulish">
        DashBoard
      </div>

      <div className="mx-32 mt-3 border-1 border-black  h-screen  bg-gradient-to-r from-amber-1800 via-amber-800  to-amber-1500 rounded-lg">
        <div className=" mx-15 mt-4 flex flex-row justify-between">
          <input
            className="relative m-0 bg-white rounded border border-solid  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search by name"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="flex flex-row">
            <button onClick={onDownload} className="mr-10">
              <img src={Resources.images.download} width="27" height="24"></img>
            </button>
            <select
              className="w-15 rounded"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="all">All</option>
              <option value="web dev">web dev</option>
              <option value="cloud dev">Cloud engineer</option>
              <option value="designer">Designer</option>
              {/* Add more filter options based on your data */}
            </select>

            {/* <button onClick={handleExportCSV}>Export to CSV</button>
        <button onClick={handleExportExcel}>Export to Excel</button> */}
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full  ">
              <div className="overflow-hidden ">
                <table
                  className="min-w-full text-left text-sm font-light "
                  ref={tableRef}
                >
                  <thead className="border-b font-medium dark:border-neutral-500  ">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Serial.No
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-15 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phone no.
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Level
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Profession
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getDataForPage()
                      .map((data
                        ) => (
                        <tr
                          key={data.id}
                          className="border-b cursor-pointer transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 bg-white"
                         onClick={()=>{onRowClick(data.id);navigate("/resume/" + `${data.id}`)
                          ;

                        }}
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium"
                         >
                            {data.id}
                            
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data.first_name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data.phone_number}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data.level}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data.profession}
                          </td>
                          
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="pagination-container">
                  <Pagination
                   
                   size = "lg"
                    activePage={activePage}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={filteredData.length}
                    pageRangeDisplayed={2}
                    onChange={handlePageChange}
                    itemClass="pagination-item"
          linkClass="pagination-link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default TableComponent;
