<template>
  <details class="bg-white shadow">
    <summary>
      <slot name="title">Details</slot>
    </summary>

    <slot>This is the body</slot>
  </details>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style></style>
