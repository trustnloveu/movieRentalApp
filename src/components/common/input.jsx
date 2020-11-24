import React from "react";

// type, value, onChange > ...rest
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // type={type}
        // value={value}
        // onChange={onChange}
        {...rest}
        id={name}
        name={name}
        className="form-control"
        // ref={this.username}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
