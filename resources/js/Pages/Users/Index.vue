<template>
  <div class="">
    <div class="py-8 pb-2 bg-white shadow mt-20 border-b-2">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <!-- Profile Stats -->
        <div class="grid grid-cols-3 text-center order-last md:order-first mt-6 md:mt-0">
          <div>
            <p class="font-bold text-gray-700 text-base">22</p>
            <p class="text-gray-400 text-sm">Followers</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-base">10</p>
            <p class="text-gray-400 text-sm">Followings</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-base">89</p>
            <p class="text-gray-400 text-sm">Events</p>
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
              :src="userWhosProfileIsViewedImg"
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

      <div class="mt-2 md:mt-20 text-center pb-2">
        <h1 class="text-3xl font-medium text-gray-700 capitalize">
          {{ user.firstName }} {{ user.lastName }}
        </h1>
        <p class="font-light text-gray-600"> {{user.phone}} {{ user.email }}</p>
      </div>
    </div>

    <accordion-component>
      <template #title>Bio</template>

      <p class="font-light text-gray-500">
        An artist of considerable range, Ryan the name taken by Melbourne-raised,
        Brooklyn-based Nick Murphy writes, performs and records all of his own music,
        giving it a warm, intimate feel with a solid groove structure. An artist of
        considerable range.
      </p>
    </accordion-component>

    <TabGroup>
      <TabList class="w-full mt-5 shadow flex space-x-1 bg-white border-b-2">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full py-2.5 text-sm leading-5 font-medium',
              'focus:outline-none',
              selected ? 'bg-indigo-800 text-white' : 'text-gray-700 hover:bg-gray-200',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="shadow">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'bg-white py-3',
            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
          ]"
        >
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative p-3 rounded-md hover:bg-coolGray-100"
            >
              <h3 class="text-sm font-medium leading-5">
                {{ post.title }}
              </h3>

              <ul
                class="
                  flex
                  mt-1
                  space-x-1
                  text-xs
                  font-normal
                  leading-4
                  text-coolGray-500
                "
              >
                <li>{{ post.date }}</li>
                <li>&middot;</li>
                <li>{{ post.commentCount }} comments</li>
                <li>&middot;</li>
                <li>{{ post.shareCount }} shares</li>
              </ul>

              <a
                href="#"
                :class="[
                  'absolute inset-0 rounded-md',
                  'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400',
                ]"
              />
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script>
import { ref } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import AuthenticatedLayout from '../../Components/Layouts/Authenticated.vue'
import AccordionComponent from '../../Components/Common/Accordion.vue'

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default {
  name: 'UserDashboard',
  layout: AuthenticatedLayout,

  components: {
    AccordionComponent,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },

  props: {
    user: Object,
  },

  setup(props) {
    console.log({user: props.user})
    const authUser = usePage().props.value.auth.user
    const authUserProfileImg = authUser.profileImg ?? authUser.avatar

    const userWhosProfileIsViewedImg = props.user.profileImg ?? props.user.avatar

    let categories = ref({
      'Update Profile': [
        {
          id: 1,
          title: 'Does drinking coffee make you smarter?',
          date: '5h ago',
          commentCount: 5,
          shareCount: 2,
        },
        {
          id: 2,
          title: "So you've bought coffee... now what?",
          date: '2h ago',
          commentCount: 3,
          shareCount: 2,
        },
      ],
      'Total Events': [
        {
          id: 1,
          title: 'Is tech making coffee better or worse?',
          date: 'Jan 7',
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: 'The most innovative things happening in coffee',
          date: 'Mar 19',
          commentCount: 24,
          shareCount: 12,
        },
      ],
      'Followers': [
        {
          id: 1,
          title: 'Ask Me Anything: 10 answers to your questions about coffee',
          date: '2d ago',
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: '4d ago',
          commentCount: 1,
          shareCount: 2,
        },
      ],
    })

    return {
      authUser,
      categories,
      authUserProfileImg,
      userWhosProfileIsViewedImg
    }
  },
}
</script>

<style></style>
