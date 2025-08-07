<template>
  <!-- When user data exists -->
  <div v-if="userStore.selectedUser" class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6 text-primary">User Information Submitted</div>
      </q-card-section>
      <q-card-section>
        <div class="text-body1"><strong>Name:</strong> {{ userStore.selectedUser.name }}</div>
        <div class="text-body1"><strong>Age:</strong> {{ userStore.selectedUser.age }} years</div>
        <div class="text-body1">
          <strong>Location:</strong> {{ userStore.selectedUser.location }}
        </div>
        <div class="text-body1"><strong>Email:</strong> {{ userStore.selectedUser.email }}</div>
        <div class="text-body1"><strong>Phone:</strong> {{ userStore.selectedUser.phone }}</div>
        <div class="text-body1">
          <strong>Occupation:</strong> {{ userStore.selectedUser.occupation }}
        </div>
        <div class="text-body1"><strong>Gender:</strong> {{ userStore.selectedUser.gender }}</div>
        <div class="text-body1">
          <strong>Salary:</strong> NPR {{ userStore.selectedUser.salary }}
        </div>
        <div class="text-body1">
          <strong>Education:</strong> {{ userStore.selectedUser.education }}
        </div>

        <q-btn color="red q-ma-sm" label="Clear Form" @click="clearForm" />
      </q-card-section>
    </q-card>
  </div>

  <!-- When no user is selected -->
  <div v-else class="q-pa-md">
    <q-card>
      <q-card-section class="text-center">
        <h5 class="text-grey-7">No User Selected</h5>
        <p class="text-grey-6">Please go to User Form and select a user to view details here.</p>
        <q-btn color="primary" label="Go to User Form" to="/dashboard/user-form" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { useUserStore } from 'src/stores'

const userStore = useUserStore() // ✅ Fixed: Added parentheses

const clearForm = () => {
  userStore.clearUser()
}
</script>

<style scoped></style>
