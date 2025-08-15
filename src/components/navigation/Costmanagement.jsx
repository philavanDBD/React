// import React, { useState } from "react";
// import "./Costmanagement.css";

// const CostManagement = () => {
//   const [warehouse, setWarehouse] = useState("");

//   const handleSave = () => {
//     alert("Saved successfully!");
//   };

//   return (
//     <div className="cost-container">
//       <h2>Cost Management</h2>

//       <div className="form-group">
//         <label>
//           Warehouse Name <span className="required">*</span>
//         </label>
//         <select
//           value={warehouse}
//           onChange={(e) => setWarehouse(e.target.value)}
//         >
//           <option value="">Select warehouse</option>
//           <option value="Warehouse A">Warehouse A</option>
//           <option value="Warehouse B">Warehouse B</option>
//         </select>
//       </div>

//       <div className="table-header">
//         <span>Received Date</span>
//         <span>Product</span>
//         <span>Quantity</span>
//         <span>Price</span>
//       </div>

//       <div className="product-table">
//         {/* No rows yet – this is just the table layout */}
//       </div>

//       <div className="save-section">
//         <button className="save-btn" onClick={handleSave}>
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CostManagement;
import React, { useState } from "react";
import { IoIosList } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../../style/Costmanagement.css";

const CostManagement = () => {
  const [warehouse, setWarehouse] = useState("");

  const handleSave = () => {
    alert("Saved successfully!");
  };

  return (
    <>
      {/* Navbar */}
      <header className="flex items-center justify-between bg-white px-4 py-2 border-b shadow-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-[#333] flex items-center">
            <span className="menu-icon flex items-center mr-2">
              <IoIosList />
            </span>
            <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold mr-1">
              U
            </span>
            <span className="text-black">LaLa</span>
            <span className="Dev text-green-500">Dev</span>
          </h1>
        </div>
        <div className="super-admin">
          SUPER ADMIN
          <span className="drop-icon">
            <RiArrowDropDownLine />
          </span>
        </div>
      </header>

      {/* Cost Management Section */}
      <div className="cost-container">
        <h2>Cost Management</h2>

        <div className="form-group">
          <label>
            Warehouse Name <span className="required">*</span>
          </label>
          <select
            value={warehouse}
            onChange={(e) => setWarehouse(e.target.value)}
          >
            <option value="">Select warehouse</option>
            <option value="Warehouse A">Warehouse A</option>
            <option value="Warehouse B">Warehouse B</option>
          </select>
        </div>

        <div className="table-header">
          <span>Received Date</span>
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
        </div>

        <div className="product-table">
          {/* You can add dynamic rows here later */}
        </div>

        <div className="save-section">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CostManagement;
