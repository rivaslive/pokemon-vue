import HttpClient, { Http } from "@/services/httpClient";

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  return await getPokemonName(mixedPokemons.splice(0, 4));
};

const getPokemonName = async (pokemons = []) => {
  const [pokemon1, pokemon2, pokemon3, pokemon4] = pokemons;
  const selectedPoke = pokemons[getRandomArbitrary()];

  let output = {
    name: "",
    options: [],
    id: undefined,
  };
  const httpInstance = new Http();
  const api = new HttpClient(httpInstance);

  const getAllPokemonsName = await Promise.all([
    api.get(`/pokemon/${pokemon1}`),
    api.get(`/pokemon/${pokemon2}`),
    api.get(`/pokemon/${pokemon3}`),
    api.get(`/pokemon/${pokemon4}`),
  ]);

  getAllPokemonsName.forEach(({ data }) => {
    if (selectedPoke === data.id) {
      output.name = data.name;
      output.id = data.id;
    }
    output.options.push({
      label: data.name,
      value: data.id,
    });
  });

  return output;
};

function getRandomArbitrary(max = 3) {
  return Math.floor(Math.random() * max);
}

export default getPokemonOptions;
