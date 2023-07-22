// MainComponent.js
import React, { useState } from 'react';
import TableComponent from './TableComponent';


const MainComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

 const handleRowClick=(id) =>{
    setSelectedItem(id);

    
  };
  return (
    <div>
        
      <TableComponent onRowClick={handleRowClick}  />
     
     
    </div>
  );
};

export default MainComponent;
