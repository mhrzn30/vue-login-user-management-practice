<template>
  <router-view />
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function onPopState() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  const path = window.location.pathname.toLowerCase()

  if (isAuthenticated && (path === '/login' || path === '/signup')) {
    router.replace('/Dashboard')
  }
}

onMounted(() => {
  window.addEventListener('popstate', onPopState)
})

onBeforeMount(() => {
  window.removeEventListener('popstate', onPopState)
})
</script>
