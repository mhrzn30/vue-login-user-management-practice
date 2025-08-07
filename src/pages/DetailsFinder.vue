<template>
  <!-- <div style="max-width: 400px; margin: 0 auto; text-align: center">
    <q-card class="q-pa-md text-center">
      <q-select
        outlined
        v-model="selectedName"
        fill-input
        :options="names.map((n) => n.name)"
        @update:model-value="handleDetailSelection"
        label="Search Name"
        style="width: 250px; margin: 0 auto"
      />
    </q-card>
    <UserDetails :user="selectedDetail" />
  </div> -->

  <q-form class="q-pa-md q-gutter-md">
    <div class="row q-gutter-md">
      <div class="col color:">
        <q-select
          outlined
          v-model="nameInput"
          :options="filteredOptions"
          use-input
          @filter="filterFn"
          hide-selected
          fill-input
          input-debounce="300"
          label="Search or Type Name"
          color="primary"
        />
      </div>
      <div class="col">
        <q-input v-model="formData.age" label="Age" outlined />
      </div>
      <div class="col">
        <q-input v-model="formData.location" label="Location" outlined />
      </div>
    </div>

    <div class="row q-gutter-md">
      <div class="col">
        <q-input v-model="formData.email" label="Email" outlined />
      </div>
      <div class="col">
        <q-input v-model="formData.phone" label="Phone" outlined />
      </div>
      <div class="col">
        <q-input v-model="formData.occupation" label="Occupation" outlined />
      </div>
    </div>

    <div class="row q-gutter-md">
      <div class="col">
        <q-input v-model="formData.gender" label="Gender" outlined />
      </div>
      <div class="col">
        <q-input v-model="formData.salary" label="Salary" type="number" outlined />
      </div>
      <div class="col">
        <q-input v-model="formData.education" label="Education" outlined />
      </div>
    </div>
  </q-form>
</template>

<script setup>
import { onMounted, ref, watch, reactive } from 'vue'
import axios from 'axios'
// import UserDetails from 'src/components/UserDetails.vue'

const names = ref([])
const details = ref([])
// const selectedName = ref(null)
// const selectedDetail = ref(null)
const nameInput = ref('')
const formData = reactive({})
const filteredOptions = ref([])

onMounted(async () => {
  const nameRes = await axios.get('http://localhost:3000/names')
  const detailsRes = await axios.get('http://localhost:3000/users')

  names.value = nameRes.data
  details.value = detailsRes.data
  filteredOptions.value = names.value.map((n) => n.name) // Initialize with all names

  console.log(names.value, details.value)
})

// Filter function for q-select
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

// const handleDetailSelection = (name) => {
//   selectedDetail.value = details.value.find((detail) => detail.name === name)
// }

// Function to search and populate user data
const searchAndPopulateUser = (searchTerm) => {
  const matchedUser = details.value.find((u) => u.name.toLowerCase() === searchTerm?.toLowerCase())
  if (matchedUser) {
    Object.assign(formData, matchedUser)
  }
}

watch(nameInput, (newVal) => {
  searchAndPopulateUser(newVal)
})
</script>

<style scoped></style>
