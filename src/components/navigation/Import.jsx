import React, { useState } from "react";
import { IoIosList } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../../style/Import.css";

const Import = () => {
  const [warehouse, setWarehouse] = useState("");
  const [receiveDate, setReceiveDate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productList, setProductList] = useState([]);

  const handleAddProduct = () => {
    if (!selectedProduct) return;
    const exists = productList.find((item) => item.name === selectedProduct);
    if (!exists) {
      setProductList([...productList, { name: selectedProduct, quantity: 0 }]);
      setSelectedProduct("");
    }
  };

  const handleQuantityChange = (index, value) => {
    const updatedList = [...productList];
    updatedList[index].quantity = value;
    setProductList(updatedList);
  };

  return (
    <>
      {/* === Navbar === */}
      <header className="flex items-center justify-between bg-white px-4 py-2 border-b shadow-sm">
        {/* Left side: Logo/Title */}
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

        {/* Right side: Super Admin */}
        <div className="super-admin">
          SUPER ADMIN
          <span className="drop-icon">
            <RiArrowDropDownLine />
          </span>
        </div>
      </header>

      {/* === Import Form === */}
      <div className="import-container">
        <h2>Receive Items</h2>

        <div className="form-row">
          <label>
            Warehouse <span className="required">*</span>
          </label>
          <select
            value={warehouse}
            onChange={(e) => setWarehouse(e.target.value)}
          >
            <option value="">Select warehouse</option>
            <option value="Warehouse A">Warehouse A</option>
            <option value="Warehouse B">Warehouse B</option>
          </select>

          <label>
            Receive Date <span className="required">*</span>
          </label>
          <input
            type="date"
            value={receiveDate}
            onChange={(e) => setReceiveDate(e.target.value)}
          />
        </div>

        <div className="table-header">
          <span>Product</span>
          <span>Quantity</span>
        </div>

        <div className="product-table">
          {productList.map((item, index) => (
            <div className="table-row" key={index}>
              <span>{item.name}</span>
              <input
                type="number"
                min="0"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="form-footer">
          <label>
            Add Product <span className="required">*</span>
          </label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">Select product</option>
            <option value="Product A">Product A</option>
            <option value="Product B">Product B</option>
          </select>

          <button className="save-btn" onClick={handleAddProduct}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Import;
