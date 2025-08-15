import React, { useMemo, useState } from "react";
import "../../style/Withdrawal_Transfer.css";

export default function Withdrawal_Transfer() {
  // ---- mock data (replace with API later) ----
  const WAREHOUSES = useMemo(
    () => [
      "Select warehouse",
      "Main Warehouse",
      "Secondary Warehouse",
      "Cold Storage",
    ],
    []
  );
  const PRODUCTS = useMemo(
    () => [
      { id: 101, name: "Black Welding Gloves" },
      { id: 102, name: "Waterproof Apron" },
      { id: 103, name: "20MPA Cement" },
      { id: 104, name: "Hard Hat" },
      { id: 105, name: "PVC Pipe 2 in." },
    ],
    []
  );

  // ---- form states ----
  const [warehouse, setWarehouse] = useState("");
  const [mode, setMode] = useState("Withdraw"); // Withdraw | Transfer
  const [receiver, setReceiver] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [note, setNote] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const [items, setItems] = useState([]); // {id, name, qty}

  // ---- handlers ----
  const onAddItem = () => {
    if (!selectedProductId) return;
    const prod = PRODUCTS.find(
      (p) => String(p.id) === String(selectedProductId)
    );
    if (!prod) return;

    // if already exists, +1 qty
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === prod.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { id: prod.id, name: prod.name, qty: 1 }];
    });

    setSelectedProductId("");
  };

  const onChangeQty = (id, val) => {
    const qty = Math.max(1, Number(val || 0));
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const onRemove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const onSave = () => {
    // very small validation (you can swap for real form lib later)
    if (!warehouse) return alert("Please select a destination warehouse.");
    if (!mode) return alert("Please choose an option.");
    if (items.length === 0) return alert("Please add at least one product.");

    const payload = {
      warehouse,
      mode,
      receiver,
      date,
      note,
      items,
    };
    // TODO: POST to backend
    console.log("Submit payload:", payload);
    alert("Saved! (mock)");
  };

  return (
    <div className="wt-wrapper">
      <h2 className="wt-title">Withdraw / Transfer</h2>

      {/* Top form grid */}
      <div className="wt-grid">
        <div className="wt-field">
          <label className="wt-label">
            Destination<span className="req">*</span>
          </label>
          <div className="wt-select-wrap">
            <select
              className="wt-input wt-select"
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
            >
              <option value="" hidden>
                Select warehouse
              </option>
              {WAREHOUSES.filter((w) => w !== "Select warehouse").map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
            <span className="wt-caret">▾</span>
          </div>
        </div>

        <div className="wt-field">
          <label className="wt-label">
            Option<span className="req">*</span>
          </label>
          <div className="wt-select-wrap">
            <select
              className="wt-input wt-select"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="Withdraw">Withdraw</option>
              <option value="Transfer">Transfer</option>
            </select>
            <span className="wt-caret">▾</span>
          </div>
        </div>

        <div className="wt-field">
          <label className="wt-label">Receiver name</label>
          <input
            className="wt-input"
            placeholder="Enter receiver name"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
        </div>

        <div className="wt-field">
          <label className="wt-label">Date</label>
          <input
            type="date"
            className="wt-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      {/* Note */}
      <div className="wt-field">
        <label className="wt-label">Note</label>
        <textarea
          className="wt-input wt-note"
          rows={4}
          placeholder="Write a note…"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      {/* Table header */}
      <div className="wt-table-header">
        <div className="col-index">No.</div>
        <div className="col-product">Product</div>
        <div className="col-qty">Quantity</div>
      </div>

      {/* Items */}
      <div className="wt-table-body">
        {items.length === 0 ? (
          <div className="wt-empty">No products added.</div>
        ) : (
          items.map((it, idx) => (
            <div className="wt-row" key={it.id}>
              <div className="col-index">{idx + 1}</div>
              <div className="col-product">{it.name}</div>
              <div className="col-qty">
                <input
                  type="number"
                  min={1}
                  className="qty-input"
                  value={it.qty}
                  onChange={(e) => onChangeQty(it.id, e.target.value)}
                />
                <button className="remove-btn" onClick={() => onRemove(it.id)}>
                  ×
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add product */}
      <div className="wt-add-row">
        <label className="wt-label">
          Add Product<span className="req">*</span>
        </label>
        <div className="wt-add-controls">
          <div className="wt-select-wrap wt-add-select">
            <select
              className="wt-input wt-select"
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
            >
              <option value="">Nothing selected</option>
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
            <span className="wt-caret">▲</span>
          </div>
          <button type="button" className="add-btn" onClick={onAddItem}>
            Add
          </button>
        </div>
      </div>

      {/* Save */}
      <div className="wt-actions">
        <button className="save-btn" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
}
