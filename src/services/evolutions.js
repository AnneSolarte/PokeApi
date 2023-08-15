const getEvolutions = async(id) => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const data = await response.json();
    console.log(data);
    return data
  } catch (error) {
    console.log(error.message);
  }
};
export {
  getEvolutions
}