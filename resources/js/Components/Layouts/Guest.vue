<template>
  <div class="p-1.5 min-h-screen flex flex-col justify-center items-center bg-indigo-800">
    <div class="w-full sm:max-w-md">
      <flash-messages />
    </div>

    <slot />
  </div>
</template>

<script>
import FlashMessages from '../Common/FlashMessages.vue'
export default {
  components: { FlashMessages },
  name: 'GuestLayout',
}
</script>

<style></style>
