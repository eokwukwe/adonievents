<template>
  <Head title="Login" />

  <div class="p-1.5 min-h-screen flex flex-col justify-center items-center">
    <div class="w-full sm:max-w-md"><flash-messages /></div>
    <div
      class="
        w-full
        px-3
        pb-8
        pt-4
        bg-white
        shadow-md
        rounded-lg
        overflow-hidden
        sm:max-w-md sm:px-6
      "
    >
      <div class="mb-4 text-3xl text-indigo-800">Welcome Back!</div>

      <form @submit.prevent="submitForm">
        <div class="">
          <form-input
            v-model="form.email"
            label="email"
            type="email"
            id="email"
            placeholder="email"
            :error="form.errors.email"
          />
        </div>
        <div class="mt-3">
          <form-input
            v-model="form.password"
            label="password"
            type="password"
            id="password"
            placeholder="password"
            :error="form.errors.password"
          />
        </div>

        <div class="flex mt-4">
          <Link href="/register" class="underline text-blue-400">Register</Link>
          <loading-button :loading="form.processing" class="ml-auto btn-indigo" type="submit">
            Login
          </loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3'

import FormInput from '../../Components/Form/FormInput.vue'
import LoadingButton from '../../Components/Button/LoadingButton.vue'
import FlashMessages from '../../Components/Common/FlashMessages.vue'

export default {
  name: 'LoginPage',

  components: { FormInput, LoadingButton, FlashMessages },

  setup() {
    const form = useForm({
      email: '',
      password: '',
    })

    function submitForm() {
      form.clearErrors()

      form.post('/login', {
        onSuccess: () => {
          form.reset()
        },
      })
    }

    return { form, submitForm }
  },
}
</script>
