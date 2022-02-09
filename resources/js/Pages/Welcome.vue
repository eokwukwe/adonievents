<template>
  <flash-messages />
  <div class="h-screen flex flex-col items-center justify-center">
    <div>
      <h1 class="text-2xl md:text-7xl capitalize text-gray-600 font-semibold">
        welcome to adonievents
      </h1>
      <div class="text-center mt-3">
        <Link href="/register" class="underline text-blue-400"> Register </Link>
      </div>
    </div>
  </div>
</template>

<script>
import FlashMessages from '../Components/Common/FlashMessages.vue'

export default {
  components: { FlashMessages },
}
</script>

<style></style>
