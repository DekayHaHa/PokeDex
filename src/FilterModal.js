import React from 'react';

import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import CheckBox from './CheckBox'

const FilterModal = (props) => {
  //   const { isOpen, changeState, checkBoxFilters, weaknessFilters, typeFilters } = props;

  // const displayBoxes = key => {
  //   return props[key].map((val, i) => {
  //     return <CheckBox
  //       checkBoxFilters={checkBoxFilters}
  //       currentFilters={key === 'types' ? typeFilters : weaknessFilters}
  //       name={val}
  //       filter={key === 'types' ? 'type' : 'weakness'}
  //       key={i}
  //     />
  //   })
  // }
  //   return (
  //     <Modal
  //       show={isOpen}
  //       size="lg"
  //       centered
  //     >
  //       <Modal.Header>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           Filter By:
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  // <section class='checkbox-container'>
  //   <div class='filter-holder type'>
  //     <h3>Types</h3>
  //     <div class='checkboxes'>
  //       {
  //         displayBoxes('types')
  //       }
  //     </div>
  //   </div>
  //   <div class='filter-holder'>
  //     <h3>Weaknesses</h3>
  //     <div class='checkboxes'>
  //       {
  //         displayBoxes('weaknesses')
  //       }
  //     </div>
  //   </div>
  // </section>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button onClick={() => changeState({ isOpen: false })}>Close</Button>
  //       </Modal.Footer>
  //     </Modal>
  //   )
  // }
}
export default FilterModal;