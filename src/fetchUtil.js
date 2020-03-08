export const fetchData = url => {
  try {
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
  } catch (error) {
    return error.message || error
  }
}