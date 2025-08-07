<template>
  <div class="q-pa-md" style="max-width: 400px; margin: 0 auto">
    <div class="text-center q-mb-md">
      <q-img
        src="public\logo\logo.png"
        alt="Khojnus"
        style="width: 150px; height: auto; margin: 0 auto"
      />
    </div>
    <q-form ref="formRef" @submit="onSubmit" class="flex: flex-center">
      <q-card class="q-gutter-sm q-pa-md">
        <q-card-section>
          <div class="text-h6 text-light-blue-4 text-center q-,">SignUp to Khojnus</div>
          <q-input
            outlined
            v-model="fullName"
            label="Full Name"
            type="text"
            required
            lazy-rules
            :rules="fullNameRule"
          />
          <q-input
            outlined
            v-model="email"
            label="Enter Email"
            type="email"
            lazy-rules
            :rules="emailRule"
          />
          <q-input
            outlined
            v-model="password"
            label="Enter Password"
            type="password"
            lazy-rules
            :rules="passwordRules"
          />
          <q-input
            outlined
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            lazy-rules
            :rules="confirmPasswordRules"
          />
          <q-btn label="Sign Up" type="submit" color="primary" class="full-width" />
          <div class="text-center q-mt-md">
            <q-item-label>Already Have an Account?</q-item-label>
            <q-btn flat @click="redirectToLogin" color="primary" label="Login" />
          </div>
        </q-card-section>
      </q-card>
    </q-form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const formRef = ref(null)
const router = useRouter()

const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const fullNameRule = [
  (val) => !!val || 'Full Name required',
  (val) => val.length >= 2 || 'Name must have atleast 2 character',
]

const emailRule = [
  (val) => !!val || 'Email is required',
  (val) => /.+@.+\..+/.test(val) || 'Invalid email',
]

const passwordRules = [
  (val) => !!val || 'Password is required',
  (val) => val.length >= 6 || 'password must be atleast 6 characters',
  (val) => /[A-Z]/.test(val) || 'Must contain uppercase letter',
]

const confirmPasswordRules = [
  (val) => !!val || 'Please confirm password',
  (val) => val === password.value || 'Passwords donot match',
]

const onSubmit = () => {
  formRef.value.validate().then((success) => {
    if (success) {
      console.log('Submitted Form')
    } else {
      console.log('Validate all the  field')
    }
  })
}

const redirectToLogin = () => {
  router.push('/Login')
}
</script>

<style lang="scss" scoped></style>
