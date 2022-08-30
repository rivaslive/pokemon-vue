<template>
  <ul class="w-full">
    <Option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :label="option.label"
      :disabled="disabled"
      :onClick="onItemClick"
      :is-active="internalValue === option.value"
    />
  </ul>
</template>

<script>
import Option from "./Option.vue";

export default {
  name: "option-group",
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: [String, Number, undefined],
    disabled: Boolean,
  },
  data() {
    return {
      internalValue: this.value,
    };
  },
  watch: {
    value(value) {
      this.internalValue = value;
    },
  },
  methods: {
    onItemClick(value) {
      if (this.disabled) return undefined;
      this.internalValue = value;
      this.$emit("onChange", value);
      return undefined;
    },
  },
  components: {
    Option,
  },
};
</script>
