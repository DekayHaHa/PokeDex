import React from 'react'

export const PokemonCard = props => {

  // displays the weaknesses/types of approriate pokemon on its card
  const displayListItems = items => {
    return items.map((item, i) => <p key={i}>{item}</p>)
  }

  return (
    <div className='pokemon-card'>
      <h3 className='pokemon-name'>{props.name} {props.num}</h3>
      <div className='card-info'>
        <img src={props.img} alt={props.name} />
        <div>
          <h4>Type</h4>
          {displayListItems(props.type)}
        </div>
        <div>
          <h4>Weaknesses</h4>
          <div className='weaknesses'>
            {displayListItems(props.weaknesses)}
          </div>
        </div>
      </div>
    </div>
  )
}