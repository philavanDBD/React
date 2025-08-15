// import React, { useState } from "react";
// // ✅ Make sure this path matches where you saved the CSS file
// import "../../style/Ching1.css"; // e.g. src/style/Ching1.css

// export default function Ching1() {
//   const [name, setName] = useState("Saxaythong Warehouse"); // demo value

//   const goBack = () => {
//     // Works without React Router
//     if (window.history.length > 1) window.history.back();
//     else window.location.href = "/"; // fallback
//   };

//   const onSave = (e) => {
//     e.preventDefault();
//     if (!name.trim()) return;
//     console.log("Save warehouse:", name);
//     // TODO: call your API here
//   };

//   const onDelete = () => {
//     // TODO: call your API here
//     console.log("Delete warehouse clicked");
//   };

//   return (
//     <div className="ching1-wrapper">
//       {/* Header */}
//       <header className="ching1-header">
//         <button className="ching1-back" onClick={goBack} aria-label="Back">
//           ←
//         </button>
//         <h1 className="ching1-title">Edit Warehouse</h1>
//         <nav className="ching1-breadcrumb">
//           <span className="crumb crumb-muted">Warehouse</span>
//           <span className="crumb-sep">›</span>
//           <span className="crumb">Edit Warehouse</span>
//         </nav>
//       </header>

//       {/* Card */}
//       <section className="ching1-card">
//         <form onSubmit={onSave} className="ching1-form">
//           <label htmlFor="wname" className="ching1-label">
//             Warehouse name <span className="req">*</span>
//           </label>

//           <input
//             id="wname"
//             className="ching1-input"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter warehouse name"
//           />

//           <div className="ching1-actions">
//             <button type="submit" className="btn btn-primary">
//               Save
//             </button>
//           </div>
//         </form>
//       </section>

//       {/* Right-side delete */}
//       <div className="ching1-delete-wrap">
//         <button className="btn btn-danger" onClick={onDelete}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import "../../style/Ching1.css"; // e.g. src/style/Ching1.css

export default function Ching1() {
  const [name, setName] = useState("Saxaythong Warehouse"); // demo value

  const goBack = () => {
    if (window.history.length > 1) window.history.back();
    else window.location.href = "/";
  };

  const onSave = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    console.log("Save warehouse:", name);
    // TODO: call your API here
  };

  const onDelete = () => {
    // TODO: call your API here
    console.log("Delete warehouse clicked");
  };

  return (
    <div className="ching1-wrapper">
      {/* Header */}
      <header className="ching1-header">
        <button className="ching1-back" onClick={goBack} aria-label="Back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="11" />
            <polyline points="12 8 8 12 12 16" />
            <line x1="16" y1="12" x2="8" y2="12" />
          </svg>
        </button>

        <h1 className="ching1-title">Edit Warehouse</h1>
        <nav className="ching1-breadcrumb">
          <span className="crumb crumb-muted">Warehouse</span>
          <span className="crumb-sep">›</span>
          <span className="crumb">Edit Warehouse</span>
        </nav>
      </header>

      {/* Card */}
      <section className="ching1-card">
        <form onSubmit={onSave} className="ching1-form">
          <label htmlFor="wname" className="ching1-label">
            Warehouse name <span className="req">*</span>
          </label>

          <input
            id="wname"
            className="ching1-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter warehouse name"
          />

          <div className="ching1-actions">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </section>

      {/* Right-side delete */}
      <div className="ching1-delete-wrap">
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
