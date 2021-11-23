<template>
  <div class="">
    <div class="p-8 pb-2 bg-white shadow mt-20">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <!-- Profile Stats -->
        <div class="grid grid-cols-3 text-center order-last md:order-first mt-6 md:mt-0">
          <div>
            <p class="font-bold text-gray-700 text-base">22</p>
            <p class="text-gray-400 text-sm">Friends</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-base">10</p>
            <p class="text-gray-400 text-sm">Photos</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-base">89</p>
            <p class="text-gray-400 text-sm">Comments</p>
          </div>
        </div>

        <div class="relative">
          <div
            class="
              w-24
              h-24
              md:w-48 md:h-48
              bg-indigo-100
              mx-auto
              rounded-full
              shadow-xl
              absolute
              inset-x-0
              top-0
              -mt-20
              md:-mt-24
              flex
              items-center
              justify-center
              text-indigo-500
            "
          >
            <img
              class="w-24 h-24 md:w-48 md:h-48 rounded-full"
              :src="profileImg"
              alt="profile image"
            />
          </div>
        </div>

        <!-- Buttons -->
        <!-- <div class="space-x-8 flex justify-between mt-3 md:mt-0 md:justify-center">
          <button
            class="
              text-white
              py-2
              px-4
              uppercase
              rounded
              bg-blue-400
              hover:bg-blue-500
              shadow
              hover:shadow-lg
              font-medium
              transition
              transform
              hover:-translate-y-0.5
            "
          >
            Connect
          </button>
          <button
            class="
              text-white
              py-2
              px-4
              uppercase
              rounded
              bg-gray-700
              hover:bg-gray-800
              shadow
              hover:shadow-lg
              font-medium
              transition
              transform
              hover:-translate-y-0.5
            "
          >
            Message
          </button>
        </div> -->
      </div>

      <div class="mt-2 md:mt-20 text-center pb-4">
        <h1 class="text-3xl font-medium text-gray-700 capitalize">
          {{ user.first_name }} {{ user.last_name }}
        </h1>
        <p class="font-light text-gray-600 mt-3">090912344566 - {{ user.email }}</p>

        <hr class="my-4" />

        <p class="font-light text-gray-500">
          An artist of considerable range, Ryan the name taken by Melbourne-raised, Brooklyn-based
          Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate
          feel with a solid groove structure. An artist of considerable range.
        </p>
      </div>
    </div>

    <accordion-component>
      <template #title>This is ttitle</template>

      <p>Lorem ipsum dolor sit amet consectetur. Incidunt, ad voluptas!</p>
    </accordion-component>
  </div>
</template>

<script>
import { usePage } from '@inertiajs/inertia-vue3'
import AuthenticatedLayout from '../../Components/Layouts/Authenticated.vue'
import AccordionComponent from '../../Components/Common/Accordion'

export default {
  name: 'UserDashboard',
  layout: AuthenticatedLayout,

  components: {
    AccordionComponent,
  },

  setup() {
    const user = usePage().props.value.auth.user

    const profileImg = user.profile_img ?? user.avatar

    return {
      user,
      profileImg,
    }
  },
}
</script>

<style></style>
