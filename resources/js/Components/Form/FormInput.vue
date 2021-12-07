<template>
  <label
    v-if="label"
    :for="inputId"
    class="block font-medium text-sm text-gray-700 cursor-pointer mb-1 capitalize"
    >{{ label }}</label
  >
  <input
    :id="inputId"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
    class="
      w-full
      leading-normal
      px-2
      py-1.5
      block
      border
      text-gray-700
      border-gray-300
      bg-white
      font-sans
      rounded
      text-left
      appearance-none
      focus:border-indigo-600 focus:ring-0
    "
    :class="{ 'border-red-600': error }"
  />
  <p v-show="error" class="text-xs text-red-600">
    {{ error }}
  </p>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },

  setup(props, ctx) {
    const inputId = computed(() => (ctx.attrs.id ? ctx.attrs.id : ctx.attrs.label))

    return { inputId }
  },

  methods: {
    focus() {
      this.$refs.input.focus()
    },
  },
}
</script>

<style></style>
