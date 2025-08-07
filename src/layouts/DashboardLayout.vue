<template>
  <q-layout view="lHh lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Dashboard</q-toolbar-title>
        <q-btn flat icon="logout" @click="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDraweOpen" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple to="/dashboard">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/dashboard/user-form">
          <q-item-section avatar>
            <q-icon name="person_add" />
          </q-item-section>
          <q-item-section>User Form</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/dashboard/user-details">
          <q-item-section avatar>
            <q-icon name="person_detail" />
          </q-item-section>
          <q-item-section>User Details</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const leftDraweOpen = ref(true)

function logout() {
  //clear auth token/ localStorage
  localStorage.setItem('isAithenticated', 'false')
  router.push('/login')
}
</script>

<style scoped></style>
