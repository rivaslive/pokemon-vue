<template>
  <my-image
    style="width: 150px; height: 250px"
    alt="pokemon"
    :filter="getFilter"
    v-if="pokemonId"
    object-fit="contain"
    class="mx-auto mt-7 mb-5 pointer-events-none"
    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`"
  />
  <div
    v-if="!pokemonId"
    style="width: 150px; height: 250px"
    class="text-center mt-7 mb-5 flex items-center justify-center mx-auto font-bold"
  >
    Cargando...
  </div>
</template>

<script>
import MyImage from "@/components/Atoms/Image";

export default {
  name: "pokemon-picture",
  props: {
    pokemonId: {
      type: [Number, String],
    },
    showImage: Boolean,
    isCorrectAnswer: Boolean,
  },
  components: {
    MyImage,
  },
  computed: {
    getFilter() {
      if (!this.showImage) return "shadow";
      return this.isCorrectAnswer ? "success" : "error";
    },
  },
};
</script>
