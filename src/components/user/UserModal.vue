<template>
  <div
    id="user-modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="user-modal-label"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="user-modal-label" class="modal-title">Register or Login</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="userStore.user">
          <template v-if="userStore.user.email">
            <p class="mb-6">
              You are logged in as <strong>{{ userStore.user.email }}</strong>
            </p>
            <button @click="onLogout" ref="logoutBtn" type="button" class="btn btn-primary w-100">
              Logout
            </button>
          </template>
          <template v-else>
            <p class="mb-6">
              Register to save your current projects. Already have an account? Login instead.
            </p>
            <div ref="formAlert" class="alert" role="alert" hidden></div>
            <ul class="nav nav-tabs mb-5" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="user-register-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#user-register-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="user-register-tab-pane"
                  aria-selected="true"
                >
                  Register
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="user-login-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#user-login-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="user-login-tab-pane"
                  aria-selected="false"
                >
                  Login
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="user-register-tab-pane"
                role="tabpanel"
                aria-labelledby="user-reigster-tab"
                tabindex="0"
              >
                <form @submit.prevent="onRegister">
                  <div class="form-floating mb-5">
                    <input
                      v-model="email"
                      id="user-register-email"
                      type="email"
                      class="form-control"
                      placeholder="name@example.com"
                    />
                    <label for="user-register-email">Email address</label>
                  </div>
                  <div class="form-floating mb-5">
                    <input
                      v-model="password"
                      id="user-register-password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                    <label for="user-register-password">Password</label>
                  </div>
                  <div class="mb-0">
                    <button ref="registerBtn" type="submit" class="btn btn-primary w-100">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="user-login-tab-pane"
                role="tabpanel"
                aria-labelledby="user-login-tab"
                tabindex="0"
              >
                <form @submit.prevent="onLogin">
                  <div class="form-floating mb-5">
                    <input
                      v-model="email"
                      id="user-login-email"
                      type="email"
                      class="form-control"
                      placeholder="name@example.com"
                    />
                    <label for="user-login-email">Email address</label>
                  </div>
                  <div class="form-floating mb-5">
                    <input
                      v-model="password"
                      id="user-login-password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                    <label for="user-login-password">Password</label>
                  </div>
                  <div class="mb-0">
                    <button ref="loginBtn" type="submit" class="btn btn-primary w-100 mb-4">
                      Login
                    </button>
                    <button type="submit" class="btn btn-light btn-sm w-100 mb-0">
                      Forgot your password?
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { ref } from 'vue'
import { Modal } from 'bootstrap'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const email = ref(null)
const password = ref(null)
const formAlert = ref(null)
const registerBtn = ref(null)
const loginBtn = ref(null)
const logoutBtn = ref(null)

async function onRegister() {
  registerBtn.value.setAttribute('disabled', 'disabled')
  formAlert.value.classList.remove('alert-warning', 'alert-success')
  const error = await userStore.registerUser(email.value, password.value)
  if (error) {
    formAlert.value.classList.add('alert-warning')
    formAlert.value.textContent = error.message
    formAlert.value.removeAttribute('hidden')
  } else {
    formAlert.value.classList.add('alert-success')
    formAlert.value.textContent = 'Registration successful'
    formAlert.value.removeAttribute('hidden')
  }
  registerBtn.value.removeAttribute('disabled')
}

async function onLogin() {
  loginBtn.value.setAttribute('disabled', 'disabled')
  formAlert.value.classList.remove('alert-warning', 'alert-success')
  const error = await userStore.loginUser(email.value, password.value)
  if (error) {
    formAlert.value.classList.add('alert-warning')
    formAlert.value.textContent = error.message
    formAlert.value.removeAttribute('hidden')
  } else {
    formAlert.value.classList.add('alert-success')
    formAlert.value.textContent = 'Login successful'
    formAlert.value.removeAttribute('hidden')
  }
  loginBtn.value.removeAttribute('disabled')
}

async function onLogout() {
  logoutBtn.value.setAttribute('disabled', 'disabled')
  await userStore.logoutUser()
  logoutBtn.value.removeAttribute('disabled')
  const modal = Modal.getOrCreateInstance('#user-modal')
  modal.hide()
}
</script>
