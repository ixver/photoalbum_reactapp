
export const getDataStart = async (endpoint) => {

  return fetch(endpoint)
  .then(response => response.json())
  .then(json => {
    if (json && json.length>0) {
      return json;  
    } else {
      return []
    }
  })

}

