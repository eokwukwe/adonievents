<template>
  <details class="bg-white shadow">
    <summary>
      <slot name="title">Details</slot>
    </summary>

    <slot>This is the body</slot>
  </details>
</template>

<script>
export default {}
</script>

<style></style>
