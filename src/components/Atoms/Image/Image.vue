<template>
  <img loading="lazy" :class="renderClass" :src="src" :alt="alt" />
</template>

<script>
import { FILTER_IMAGE, OBJECT_FIT } from "@/shared/utils/image";

export default {
  name: "my-image",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: String,
    objectFit: {
      type: String,
      default: "none",
      validator(value) {
        return Object.keys(OBJECT_FIT).includes(value);
      },
    },
    filter: {
      type: String,
      default: "none",
      validator(value) {
        return Object.keys(FILTER_IMAGE).includes(value);
      },
    },
  },
  computed: {
    renderClass() {
      const objectFit = OBJECT_FIT[this.objectFit] ?? "";
      const filter = FILTER_IMAGE[this.filter] ?? "";

      return `${objectFit} ${filter}`;
    },
  },
};
</script>
