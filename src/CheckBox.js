import React from 'react';

export default function CheckBox(props) {

  const filterCheck = () => {
    const checked = <input
      type="checkbox"
      onChange={() => props.checkBoxFilters(`${props.filter}Filters`, props.name)}
      checked
    />
    const unchcecked = <input
      type="checkbox"
      onChange={() => props.checkBoxFilters(`${props.filter}Filters`, props.name)}
    />
    return props.currentFilters.includes(props.name) ? checked : unchcecked;
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