import React from "react";
import PropTypes from "prop-types";

const GlobalStyleProvider = ({ children }) => {
  return (
    <div
      style={{
        padding: "2.5rem",
        display: "flex",
        gap: "2.5rem",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

GlobalStyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyleProvider;
