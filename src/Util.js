export const fetchData = url => {
  try {
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
  } catch (error) {
    return error.message || error
  }
}

const filterBy = (mon, name, filters) => {
  mon[name].forEach(val => {
    if (!filters.includes(val)) {
      filters.push(val)
    }
  })
  return filters
}

export const getFilters = mons => {
  return mons.reduce((acc, mon) => {
    acc.pokemonTypes = filterBy(mon, "type", acc.pokemonTypes)
    acc.pokemonWeaknesses = filterBy(mon, "weaknesses", acc.pokemonWeaknesses)
    return acc;
  }, {
    pokemonTypes: [],
    pokemonWeaknesses: []
  })
};

