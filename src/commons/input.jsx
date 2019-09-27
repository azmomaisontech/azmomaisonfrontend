import React from "react";

const Input = ({ name, placeholder, error, ...rest }) => {
  return (
    <div className="formitem">
      <input {...rest} placeholder={placeholder} name={name} id={name} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
