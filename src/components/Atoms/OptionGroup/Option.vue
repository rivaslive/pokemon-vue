<template>
  <li @click="onInternalClick" :class="renderClass">
    {{ label }}
  </li>
</template>

<script>
export default {
  name: "my-option",
  props: {
    value: {
      type: [String, Number, undefined],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    isActive: Boolean,
    disabled: Boolean,
    onClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onInternalClick() {
      this.onClick(this.value, this.label);
    },
  },
  computed: {
    renderClass() {
      let className =
        "py-2 px-5 my-3 rounded border bg-white ease-in duration-300";
      if (this.isActive) {
        className += " bg-slate-600 text-white";
      }
      if (!this.disabled) {
        className +=
          " cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-105";
      }
      return `${className}`;
    },
  },
};
</script>
