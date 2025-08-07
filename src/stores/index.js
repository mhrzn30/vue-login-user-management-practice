import { defineStore } from 'pinia'
import { createPinia } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    selectedUser: null,
  }),
  actions: {
    setUser(userData) {
      this.selectedUser = userData
    },
    clearUser() {
      this.selectedUser = null
    },
  },
})

export default function (/* { ssrContext } */) {
  // Also simplified this
  const pinia = createPinia()
  return pinia
}
