export async function getUsers (pageNumber = 1) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error
  }
}

export async function getCharacteryByName (name) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error
  }
}

export async function getBySpecies (specie) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?species=${specie}`)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}