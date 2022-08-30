<script>
import { h } from "vue";
import {
  ALIGN_CLASS,
  TRANSFORM_CLASS,
  LEVEL_TITLE,
} from "@/shared/utils/typography";

export default {
  name: "my-title",
  props: {
    content: {
      type: String,
      required: true,
    },
    align: {
      type: String,
      default: "left",
      validator(value) {
        return Object.keys(ALIGN_CLASS).includes(value);
      },
    },
    level: {
      type: String,
      default: "h2",
      validator(value) {
        return Object.keys(LEVEL_TITLE).includes(value);
      },
    },
    transform: {
      type: String,
      default: "none",
      validator(value) {
        return Object.keys(TRANSFORM_CLASS).includes(value);
      },
    },
  },
  computed: {
    renderClass() {
      const className = "text-4xl font-black";
      const align = ALIGN_CLASS[this.align] ?? "";
      const transform = TRANSFORM_CLASS[this.transform] ?? "";
      return `${className} ${align} ${transform}`;
    },
  },
  render() {
    const tag = LEVEL_TITLE[this.level] ?? "div";
    return h(tag, { class: this.renderClass }, this.content);
  },
};
</script>
