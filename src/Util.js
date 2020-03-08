export const fetchData = url => {
  try {
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
  } catch (error) {
    return error.message || error
  }
}

export const getFilters = mons => {
  return mons.reduce((acc, mon) => {
    const { pokemonWeaknesses, pokemonTypes } = acc;
    mon.type.forEach(val => {
      if (!pokemonTypes.includes(val)) {
        pokemonTypes.push(val)
      }
    })
    mon.weaknesses.forEach(val => {
      if (!pokemonWeaknesses.includes(val)) {
        pokemonWeaknesses.push(val)
      }
    })
    return acc;
  }, {
    pokemonTypes: [],
    pokemonWeaknesses: []
  })
};
