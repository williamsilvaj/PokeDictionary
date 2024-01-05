function searchPokemon() {
  const pokemonInput = document
    .getElementById("pokemonInput")
    .value.toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Pokemon não encontrado!`);
      }
      return response.json();
    })
    .then((data) => {
      displayPokemonInfo(data);
    })
    .catch((error) => {
      alert(error.message);
    });
}

function displayPokemonInfo(data) {
  document.getElementById("pokemonName").innerText = `Name: ${data.name}`;
  document.getElementById("pokemonImage").src = data.sprites.front_default;
  document.getElementById("baseExperience").innerText = data.base_experience;
  document.getElementById("moves").innerText = data.moves
    .map((move) => move.move.name)
    .join(", ");
  document.getElementById("weight").innerText = data.weight;
  document.getElementById("height").innerText = data.height;

  document.getElementById("pokemonInfo").classList.remove("hidden");
}
