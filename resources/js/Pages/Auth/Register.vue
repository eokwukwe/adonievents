<template>
  <Head title="Register" />

  <div class="p-1.5 min-h-screen flex flex-col justify-center items-center">
    <flash-messages />
    <div class="w-full px-3 pb-8 pt-4 bg-white shadow-md rounded-lg overflow-hidden sm:max-w-md sm:px-6">
      <div class="mb-4 text-3xl text-indigo-800">Register</div>

      <form @submit.prevent="submitForm">
        <div>
          <form-input
            v-model="form.firstName"
            label="first name"
            type="text"
            id="firstName"
            placeholder="first name"
            :error="form.errors.firstName"
          />
        </div>
        <div class="mt-3">
          <form-input
            v-model="form.lastName"
            label="lastName"
            type="text"
            id="lastName"
            placeholder="last name"
            :error="form.errors.lastName"
          />
        </div>
        <div class="mt-3">
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
          <Link  href="/login" class="underline text-blue-400">Login</Link>
          <loading-button :loading="form.processing" class="ml-auto btn-indigo" type="submit">
            Register
          </loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useForm } from '@inertiajs/inertia-vue3'

import { IUserRegister } from '../../@types/user'
import FormInput from '../../Components/Form/FormInput.vue'
import LoadingButton from '../../Components/Button/LoadingButton.vue'
import FlashMessages from '../../Components/Common/FlashMessages.vue'

export default defineComponent({
  name: 'RegisterPage',

  components: { FormInput, LoadingButton, FlashMessages },

  setup() {
    const form = useForm<IUserRegister>({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    })

    function submitForm() {
      form.clearErrors()

      form.post('/register', {
        onError: () => {
          let errObj: Record<string, string> = {}

          for (const [key, value] of Object.entries(form.errors)) {
            errObj[key] = value[0]
          }

          form.errors = errObj
        },
        onSuccess: () => {
          form.reset()
        },
      })
    }

    return { form, submitForm }
  },
})
</script>
