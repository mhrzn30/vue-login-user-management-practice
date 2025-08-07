<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Users"
      :rows="filteredRows"
      :columns="columns"
      row-key="id"
      :loading="loading"
    >
      <template v-slot:top>
        <q-space />
        <q-input filled dense debounce="300" color="primary" v-model="searchInput">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const searchInput = ref('')
const loading = ref(false)

const props = defineProps({
  details: {
    type: Array,
    default: () => [],
  },
})

// const rows = computed(() => props.details)

const filteredRows = computed(() => {
  if (searchInput.value == null || searchInput.value.trim() == '') {
    return props.details
  }

  return props.details.filter((user) => {
    return user.name.toLowerCase().includes(searchInput.value.toLocaleLowerCase())
  })
})

const columns = [
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'age',
    label: 'Age',
    field: 'age',
    sortable: true,
    align: 'center',
  },
  {
    name: 'location',
    label: 'Location',
    field: 'location',
    sortable: true,
    align: 'left',
  },
  {
    name: 'email',
    label: 'Email',
    field: 'email',
    sortable: true,
    align: 'left',
  },
  {
    name: 'phone',
    label: 'Phone',
    field: 'phone',
    sortable: true,
    align: 'center',
  },
  {
    name: 'occupation',
    label: 'Occupation',
    field: 'occupation',
    sortable: true,
    align: 'left',
  },
  {
    name: 'gender',
    label: 'Gender',
    field: 'gender',
    sortable: true,
    align: 'center',
  },
  {
    name: 'salary',
    label: 'Salary',
    field: 'salary',
    sortable: true,
    align: 'right',
    format: (val) => `NPR ${val?.toLocaleString() || '0'}`,
  },
  {
    name: 'education',
    label: 'Education',
    field: 'education',
    sortable: true,
    align: 'left',
  },
]
</script>
