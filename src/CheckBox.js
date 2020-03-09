import React from 'react';

export default function CheckBox(props) {

  const filterCheck = () => {
    return <input
      type="checkbox"
      onChange={() => props.checkBoxFilters(`${props.filter}Filters`, props.name)}
    />
  }
  return (
    <div >
      <label htmlFor={props.name}>
        {filterCheck()}
        <div className="faux-box"></div>
        <p >{props.name}</p>
      </label>
    </div>
  );
}