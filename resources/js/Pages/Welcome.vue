<template>
    <flash-messages />
  <div class="h-screen flex flex-col items-center justify-center">
    <div>
      <h1 class="text-2xl md:text-7xl capitalize text-gray-600 font-semibold">
        welcome to adoinertia
      </h1>
      <div class="text-center mt-3">
        <Link href="/register" class="underline text-blue-400"> Register </Link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FlashMessages from '../Components/Common/FlashMessages.vue'

export default defineComponent({
  components: { FlashMessages },})
</script>

<style></style>
