const getCharacter = async(name) => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
      const data = await response.json();
      console.log(data);
      return data
    } catch (error) {
      console.log(error.message);
    }
  };
export {
    getCharacter
}