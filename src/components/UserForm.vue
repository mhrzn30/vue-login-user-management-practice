<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card>
      <q-card-section>
        <q-form class="q-pa-md q-gutter-md">
          <div class="row q-gutter-md">
            <div class="col">
              <q-select
                outlined
                v-model="localNameInput"
                :options="filteredOptions"
                use-input
                hide-selected
                fill-input
                input-debounce="300"
                label="Search or Type Name"
                color="primary"
                @filter="(val, update) => $emit('filter', val, update)"
              />
            </div>
            <div class="col">
              <q-input v-model="localFormData.age" label="Age" outlined />
            </div>
            <div class="col">
              <q-input v-model="localFormData.location" label="Location" outlined />
            </div>
          </div>

          <div class="row q-gutter-md">
            <div class="col">
              <q-input v-model="localFormData.email" label="Email" outlined />
            </div>
            <div class="col">
              <q-input v-model="localFormData.phone" label="Phone" outlined />
            </div>
            <div class="col">
              <q-input v-model="localFormData.occupation" label="Occupation" outlined />
            </div>
          </div>

          <div class="row q-gutter-md">
            <div class="col">
              <q-input v-model="localFormData.gender" label="Gender" outlined />
            </div>
            <div class="col">
              <q-input v-model="localFormData.salary" label="Salary" type="number" outlined />
            </div>
            <div class="col">
              <q-input v-model="localFormData.education" label="Education" outlined />
            </div>
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" @click="closeDialog"></q-btn>
        <q-btn color="primary" label="Submit" @click="submitForm"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useUserStore } from 'src/stores'
import { ref, reactive, computed, watch } from 'vue'

const props = defineProps({
  names: Array,
  details: Array,
  filteredOptions: Array,
  visible: Boolean,
  formTemplate: Object,
})

const userStore = useUserStore()

const emit = defineEmits(['update:visible', 'submit', 'cancel', 'filter'])

const localNameInput = ref()
const localFormData = reactive({ ...props.formTemplate })

const searchAndPopulateUser = (searchTerm) => {
  const matchedUser = props.details.find((u) => u.name.toLowerCase() === searchTerm?.toLowerCase())
  if (matchedUser) {
    Object.assign(localFormData, matchedUser)
  }
}

watch(localNameInput, (newVal) => {
  searchAndPopulateUser(newVal)
})

const isDialogOpen = computed({
  get: () => props.visible,
  set: (value) => emit('update:visible', value),
})

const closeDialog = () => {
  emit('cancel')
  isDialogOpen.value = false
}

const submitForm = () => {
  emit('submit', { ...localFormData })
  onUserClick(localFormData)
  isDialogOpen.value = false
}

const onUserClick = (localFormData) => {
  userStore.setUser(localFormData)
}
</script>

<style scoped></style>
