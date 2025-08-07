<template>
  <div class="q-pa-md" style="max-width: 400px; margin: 0 auto">
    <div class="text-center q-mb-md">
      <q-img
        src="public\logo\logo.png"
        alt="Khojnus"
        style="width: 150px; height: auto; margin: 0 auto"
      />
    </div>

    <q-form @submit="handleLogin">
      <q-card class="q-gutter-sm q-pa-sm">
        <q-card-section>
          <div class="text-h6 text-light-blue-4 text-center q-mb-md">Welcome to Khojnus</div>
          <q-input
            outlined
            v-model="email"
            type="email"
            label="Enter your Email"
            lazy-rules
            :rules="emailRule"
          />
          <q-input
            outlined
            v-model="password"
            type="password"
            label="Enter Your Password"
            lazy-rules
            :rules="passwordRules"
          />

          <q-btn label="Login" type="submit" color="primary" class="full-width" />
          <div class="text-center q-mt-md">
            <q-item-label>Dont Have an Account?</q-item-label>
            <q-btn flat @click="redirectToSignUp" color="primary" label="Sign Up" />
          </div>
        </q-card-section>
      </q-card>
    </q-form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const router = useRouter()

const emailRule = [
  (val) => !!val || 'Email is required',
  (val) => /.+@.+\..+/.test(val) || 'Invalid email',
]

const passwordRules = [(val) => !!val || 'Password is required']

const redirectToSignUp = () => {
  router.push('/SignUp')
}

const handleLogin = () => {
  if (email.value && password.value) {
    localStorage.setItem('auth', 'user-logged-in-tokken')
    localStorage.setItem('userEmail', email.value)
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/dashboard')
  } else {
    console.log('fill in all the fields')
  }
}
</script>

<style lang="scss" scoped></style>
