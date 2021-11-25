<template>
  <div class="min-h-full">
    <Disclosure
      as="nav"
      class="bg-indigo-800 transition-all fixed w-full left-0 top-0 z-20"
      v-slot="{ open }"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-12 py-1">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
          </div>
          <div class="hidden md:flex">
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <Link
                  href="#"
                  :class="[
                    current
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                    'px-5 py-2 rounded-sm text-xs font-medium',
                  ]"
                  :aria-current="current ? 'page' : undefined"
                >
                  Events
                </Link>
              </div>
            </div>

            <!-- Profile dropdown -->
            <div class="ml-4 flex items-center md:ml-6">
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton
                    class="
                      max-w-xs
                      bg-gray-800
                      rounded-full
                      flex
                      items-center
                      text-sm
                      focus:outline-none
                      focus:ring-1
                      focus:ring-offset-2
                      focus:ring-offset-gray-800
                      focus:ring-white
                    "
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      :src="profileImg"
                      alt="profile header image"
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="
                      origin-top-right
                      absolute
                      right-0
                      mt-2
                      w-48
                      rounded-md
                      shadow-lg
                      py-1
                      bg-white
                      ring-1 ring-black ring-opacity-5
                      focus:outline-none
                    "
                  >
                    <MenuItem>
                      <Link
                        as="button"
                        href="/users"
                        class="
                          w-full
                          block
                          px-4
                          py-2
                          text-sm text-left text-gray-700
                          hover:bg-gray-200
                        "
                      >
                        Your Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        as="button"
                        href="/logout"
                        method="post"
                        class="
                          w-full
                          block
                          px-4
                          py-2
                          text-sm text-left text-gray-700
                          hover:bg-gray-200
                        "
                      >
                        Logout
                      </Link>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="
                bg-indigo-900
                inline-flex
                items-center
                justify-center
                p-1
                rounded-md
                text-gray-400
                hover:text-white hover:bg-gray-700
                focus:outline-none
                focus:ring-1
                focus:ring-offset-2
                focus:ring-offset-gray-800
                focus:ring-white
              "
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#"
            :class="[
              current
                ? 'bg-indigo-700 text-white'
                : 'text-indigo-300 hover:bg-indigo-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium',
            ]"
            :aria-current="current ? 'page' : undefined"
          >
            <DisclosureButton> Events </DisclosureButton>
          </Link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="profileImg" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                {{ user.first_name }}
                {{ user.last_name }}
              </div>
              <div class="text-sm font-medium leading-none text-gray-400 mt-1">
                {{ user.email }}
              </div>
            </div>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <Link
              href="/users"
              as="button"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-400
                hover:text-white hover:bg-gray-700
              "
            >
              <DisclosureButton> Profile </DisclosureButton>
            </Link>
            <Link
              href="/logout"
              method="post"
              as="button"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-400
                hover:text-white hover:bg-gray-700
              "
            >
              <DisclosureButton> Logout </DisclosureButton>
            </Link>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <main>
      <div class="max-w-7xl mx-auto px-3 pb-6 pt-16 sm:px-6 lg:px-8">
        <flash-messages />
        <slot />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import FlashMessages from '../Common/FlashMessages.vue'
import { usePage } from '@inertiajs/inertia-vue3'
import { ref, defineComponent } from 'vue'
import { IAuthUser } from '../../@types/user'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [{ name: 'Your Profile', href: '/users' }]

export default defineComponent({
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    FlashMessages,
  },
  setup() {
    const current = ref(true)
    const user = usePage<IAuthUser>().props.value.auth.user

    const profileImg = user.profile_img ?? user.avatar

    return {
      user,
      current,
      profileImg,
      navigation,
      userNavigation,
    }
  },
})
</script>
