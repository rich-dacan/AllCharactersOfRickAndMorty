import React from "react";
import "./styles.css"; // Importe o arquivo CSS para estilizar o spinner

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
