import Vue from "vue";

/**
 * Component description
 */

export default Vue.extend({
  name: "component",

  props: {
    /**
     * Color
     * @values red, green
     */
    intent: {
      required: true,
      type: String,
      validator: (value: string) => ["red", "green"].includes(value)
    }
  }, // props

  render() {
    return (
      <span class={[`color-${this.color}`]}>
        {/** @slot Default slot */}
        {this.$slots.default}
      </span>
    );
  } // render
});