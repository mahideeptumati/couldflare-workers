const getJson = async url => {
  console.log(url)
  const response = await fetch(url.toString())
  console.log(response)
  if (!response.ok) {
    throw new Error('Unexpected HTTP Response')
  }
  return await response.json()
}

export const fetchAllPeople = () => getJson('http://swapi.dev/api/people')

export const fetchPerson = id => getJson(`https://swapi.dev/api/people/${id}`)
