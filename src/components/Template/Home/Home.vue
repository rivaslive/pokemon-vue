<template>
  <div class="container px-2 py-8 mx-auto">
    <MyTitle level="h1" align="center" content="¿Quién es este pokémon?" />

    <PokemonPicture
      :showImage="selectedOption && !isLoading"
      :isCorrectAnswer="isCorrectAnswer"
      :pokemonId="pokemon.id"
    />

    <div class="w-full max-w-xs mx-auto" v-show="!isLoading">
      <OptionGroup
        :value="selectedOption"
        :options="pokemon.options"
        :disabled="!!selectedOption"
        @on-change="onChangeOption"
      />

      <MyTitle
        level="h2"
        align="center"
        v-if="selectedOption"
        class="text-2xl mt-10"
        :content="renderResult"
      />

      <MyButton
        class="w-full"
        text="Volver a jugar"
        @click="tryAgain"
        v-if="selectedOption"
      />
    </div>
  </div>
</template>

<script>
import MyTitle from "@/components/Atoms/Title";
import PokemonPicture from "@/components/Molecules/PokemonPicture";
import OptionGroup from "@/components/Atoms/OptionGroup";
import MyButton from "@/components/Atoms/Button/Button";
import getPokemonOptions from "@/services/data";

const defaultPokemon = {
  id: undefined,
  name: "",
  options: [],
};

export default {
  name: "HomeTemplate",
  components: {
    MyButton,
    MyTitle,
    PokemonPicture,
    OptionGroup,
  },
  data() {
    return {
      isLoading: true,
      isCorrectAnswer: false,
      pokemon: defaultPokemon,
      selectedOption: undefined,
    };
  },
  methods: {
    onChangeOption(value) {
      this.selectedOption = value;
      this.isCorrectAnswer = value === this.pokemon.id;
    },
    tryAgain() {
      this.selectedOption = undefined;
      this.getPokemonOptions();
    },
    async getPokemonOptions() {
      this.isLoading = true;
      this.pokemon = defaultPokemon;
      const pokemon = await getPokemonOptions();
      this.isLoading = false;
      this.pokemon = pokemon;
    },
  },
  computed: {
    renderResult() {
      if (!this.isCorrectAnswer) {
        return `Ooop era ${this.pokemon.name} :(`;
      }

      return "Felicidades adivininaste correctamente";
    },
  },
  mounted() {
    this.getPokemonOptions();
  },
};
</script>

<style scoped></style>
