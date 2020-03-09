import React from 'react'

export const PokemonCard = props => {

  const displayListItems = items => {
    return items.map(item => <p>{item}</p>)
  }

  return (
    <div class='pokemon-card'>
      <h3 class='pokemon-name'>{props.name} {props.num}</h3>
      <div class='card-info'>
        <img src={props.img} alt={props.name} />
        <div>
          <h4>Type</h4>
          {displayListItems(props.type)}
        </div>
        <div>
          <h4>Weaknesses</h4>
          <div class='weaknesses'>
            {displayListItems(props.weaknesses)}
          </div>
        </div>
      </div>
    </div>
  )
}