import React from 'react';

export default function CheckBox(props) {

  const filterCheck = id => {
    return <input
      id={id}
      type="checkbox"
      onChange={() => props.checkBoxFilters(`${props.filter}Filters`, props.name)}
    />
  }
  // for linking for and id properly
  const id = props.name + '-' + props.filter

  return (
    <div >
      <label htmlFor={id}>
        <p><span>{filterCheck(id)}</span> {props.name}</p>
      </label>
    </div>
  );
}