<template>
  <div class="q-pa-md">
    <!-- Button to open dialog -->
    <div class="row q-mb-md">
      <q-btn color="primary" label="Open User Form" @click="openDialog" icon="person_add" />
    </div>

    <!-- Display submitted data (if any) -->
    <div v-if="submittedUserData" class="q-mb-md">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-primary">User Information Submitted</div>
        </q-card-section>
        <q-card-section>
          <div class="text-body1"><strong>Name:</strong> {{ submittedUserData.name }}</div>
          <div class="text-body1"><strong>Age:</strong> {{ submittedUserData.age }} years</div>
          <div class="text-body1"><strong>Location:</strong> {{ submittedUserData.location }}</div>
          <div class="text-body1"><strong>Email:</strong> {{ submittedUserData.email }}</div>
          <div class="text-body1"><strong>Phone:</strong> {{ submittedUserData.phone }}</div>
          <div class="text-body1">
            <strong>Occupation:</strong> {{ submittedUserData.occupation }}
          </div>
          <div class="text-body1"><strong>Gender:</strong> {{ submittedUserData.gender }}</div>
          <div class="text-body1"><strong>Salary:</strong> NPR {{ submittedUserData.salary }}</div>
          <div class="text-body1">
            <strong>Education:</strong> {{ submittedUserData.education }}
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- Dialog Component -->
    <UserForm
      :names="names"
      :details="details"
      :filteredOptions="filteredOptions"
      :visible="dialogVisible"
      :formTemplate="formTemplate"
      @update:visible="dialogVisible = $event"
      @submit="handleSubmit"
      @cancel="handleCancel"
      @filter="filterFn"
    />

    <UserTable :details="details" />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios'
import UserForm from 'src/components/UserForm.vue'
import UserTable from 'src/components/UserTable.vue'

const names = ref([])
const details = ref([])
const filteredOptions = ref([])
const dialogVisible = ref(false)
const submittedUserData = ref(null)
const formTemplate = reactive({})

onMounted(async () => {
  const nameRes = await axios.get('http://localhost:3000/names')
  const detailsRes = await axios.get('http://localhost:3000/users')

  names.value = nameRes.data
  details.value = detailsRes.data
  filteredOptions.value = names.value.map((n) => n.name) // Initialize with all names

  console.log(names.value, details.value)
})

const filterFn = (val, update) => {
  update(() => {
    if (val === '') {
      // Show all options when input is empty
      filteredOptions.value = names.value.map((n) => n.name)
    } else {
      // Filter options based on partial match
      const searchText = val.toLowerCase()
      filteredOptions.value = names.value
        .map((n) => n.name)
        .filter((name) => name.toLowerCase().includes(searchText))
    }
  })
}

const openDialog = () => {
  dialogVisible.value = true
}

const handleSubmit = (userData) => {
  submittedUserData.value = userData
  dialogVisible.value = false
}

const handleCancel = () => {
  dialogVisible.value = false
}
</script>

<style scoped></style>
