<template>
  <button :disabled="disabled" :class="renderClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    text: {
      type: String,
      required: true,
    },
    disabled: Boolean,
  },
  computed: {
    renderClass() {
      let className =
        "bg-gray-600 text-white cursor-pointer py-2 px-5 my-3 rounded border ease-in duration-300 hover:scale-105";

      if (this.disabled) {
        className +=
          "pointer-events-none cursor-no-drop bg-zinc-300 text-black";
      }
      return `${className}`;
    },
  },
};
</script>
