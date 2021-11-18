<template>
  <div>User Dashboard  {{ $page.props.auth?.user.first_name }}</div>
</template>

<script>
import AuthenticatedLayout from '../../Components/Layouts/Authenticated.vue'

export default {
  name: 'UserDashboard',
  layout: AuthenticatedLayout,
}
</script>

<style></style>
