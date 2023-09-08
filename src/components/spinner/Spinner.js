import React from "react";

const Spinner1 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div class="spinner-border text-dark" role="status" style={{width: "40px", height: "40px"}}>
          <span class="visually-hidden">Loading...</span>
        </div>
        <div style={{fontSize: "24px"}}>Loading...</div>
      </div>
    </>
  );
};

export default Spinner1;
