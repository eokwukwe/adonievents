<template>
  <Head title="Verification Link" />

  <div
    class="
      w-full
      px-6
      pb-8
      pt-4
      bg-white
      shadow-md
      rounded-lg
      overflow-hidden
      sm:max-w-md
    "
  >
    <div class="mb-4 text-3xl text-indigo-800">Verification Link</div>

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

      <div class="flex mt-4">
        <loading-button
          :loading="form.processing"
          class="ml-auto btn-indigo"
          type="submit"
        >
          Send Verification Link
        </loading-button>
      </div>
    </form>
  </div>
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3'

import FormInput from '../../Components/Form/FormInput.vue'
import GuestLayout from '../../Components/Layouts/Guest.vue'
import LoadingButton from '../../Components/Button/LoadingButton.vue'
import FlashMessages from '../../Components/Common/FlashMessages.vue'

export default {
  name: 'VerificationLinkPage',

  components: { FormInput, LoadingButton, FlashMessages },

  layout: GuestLayout,

  setup() {
    const form = useForm({
      email: '',
    })

    function submitForm() {
      form.clearErrors()

      form.post('/verification-link', {
        onError: () => {
          let errObj = {}

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
}
</script>
