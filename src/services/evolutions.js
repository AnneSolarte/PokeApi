const getEvolutions = async(id) => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/evolution-chain/" + id );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
export {
    getEvolutions
}