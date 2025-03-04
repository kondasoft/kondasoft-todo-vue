<template>
  <div id="app-inner">
    <Navbar />
    <RouterView />
  </div>
  <OffcanvasSidebar />
  <UserModal />
</template>

<style lang="scss">
// CSS variables
:root {
  --bs-success: #15803d;
  --bs-success-rgb: 21, 128, 61;
  --bs-warning: #a16207;
  --bs-warning-rgb: 161, 98, 7;
  --bs-danger: #b91c1c;
  --bs-danger-rgb: 185, 28, 28;
  --bs-info: #0369a1;
  --bs-info-rgb: 3, 105, 161;
}

[data-bs-theme='dark'] {
  --bs-light: #1a1d20;
  --bs-light-rgb: 26, 29, 32;
  --bs-border-color: rgba(var(--bs-white-rgb), 0.1);
  --bs-link-color: rgba(var(--bs-white-rgb), 0.75);
  --bs-link-hover-color: rgba(var(--bs-white-rgb), 1);
}

// Body
body {
  background-color: var(--bs-light);
}

// Container
.container {
  --bs-gutter-x: 2rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
  max-width: 860px;
}

.container-fluid {
  --bs-gutter-x: 2rem;
  --bs-gutter-y: 0;
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  padding-right: calc(var(--bs-gutter-x) * 0.5);
}

// Main
@media (min-width: 1200px) {
  #app-inner {
    transition: all 0.3s ease-in-out;
  }
  #app[sidebar-open] #app-inner {
    margin-left: 360px;
  }
}

// Alerts
.alert {
  padding: 0.75rem 1rem;
  line-height: normal;
}

.alert-primary {
  --bs-alert-color: var(--bs-primary);
  --bs-alert-bg: rgba(var(--bs-primary-rgb), 0.1);
  --bs-alert-border-color: rgba(var(--bs-primary-rgb), 0.2);
}

[data-bs-theme='dark'] .alert-primary {
  --bs-alert-color: var(--bs-white);
  --bs-alert-bg: rgba(var(--bs-white-rgb), 0.1);
  --bs-alert-border-color: rgba(var(--bs-white-rgb), 0.2);
}

.alert-secondary {
  --bs-alert-color: var(--bs-secondary);
  --bs-alert-bg: rgba(var(--bs-secondary-rgb), 0.1);
  --bs-alert-border-color: rgba(var(--bs-secondary-rgb), 0.2);
}

.alert-dark {
  --bs-alert-color: var(--bs-dark);
  --bs-alert-bg: rgba(var(--bs-dark-rgb), 0.1);
  --bs-alert-border-color: rgba(var(--bs-dark-rgb), 0.2);
}

.alert-success {
  --bs-alert-color: var(--bs-success);
  --bs-alert-bg: rgba(var(--bs-success-rgb), 0.1);
  --bs-alert-border-color: rgba(var(--bs-success-rgb), 0.2);
}

.alert-warning {
  --bs-alert-color: var(--bs-warning);
  --bs-alert-bg: rgba(var(--bs-warning-rgb), 0.1);
  --bs-alert-border-color: rgba(var(--bs-warning-rgb), 0.2);
}

.alert-danger {
  --bs-alert-color: var(--bs-danger);
  --bs-alert-bg: rgba(var(--bs-danger-rgb), 0.1);
  --bs-alert-border-color: rgba(var(--bs-danger-rgb), 0.2);
}

.alert-info {
  --bs-alert-color: var(--bs-info);
  --bs-alert-bg: rgba(var(--bs-info-rgb), 0.1);
  --bs-alert-border-color: rgba(var(--bs-info-rgb), 0.2);
}

// Placeholder
.placeholder {
  background-color: rgba(var(--bs-dark-rgb), 0.1);
  border-radius: var(--bs-border-radius);
  width: 100%;
  height: 1.5rem;
  opacity: 1;
  margin: 0.5rem 0;
  [data-bs-theme='dark'] & {
    background-color: rgba(var(--bs-white-rgb), 0.05);
  }
}

// Buttons
[data-bs-theme='dark'] {
  --primary-color: 97, 115, 142;
  .btn-primary {
    --bs-btn-color: #fff;
    --bs-btn-bg: rgba(var(--primary-color), 1);
    --bs-btn-border-color: rgba(var(--primary-color), 1);
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: rgba(var(--primary-color), 0.9);
    --bs-btn-hover-border-color: rgba(var(--primary-color), 0.9);
    --bs-btn-focus-shadow-rgb: var(--primary-color);
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: rgba(var(--primary-color), 0.7);
    --bs-btn-active-border-color: rgba(var(--primary-color), 0.7);
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: rgba(var(--primary-color), 1);
    --bs-btn-disabled-border-color: rgba(var(--primary-color), 1);
  }
  .btn-outline-primary {
    --color: 97, 115, 142;
    --bs-btn-color: rgba(var(--primary-color), 1);
    --bs-btn-border-color: rgba(var(--primary-color), 1);
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: rgba(var(--primary-color), 1);
    --bs-btn-hover-border-color: rgba(var(--primary-color), 1);
    --bs-btn-focus-shadow-rgb: var(--primary-color);
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: rgba(var(--primary-color), 0.7);
    --bs-btn-active-border-color: rgba(var(--primary-color), 0.7);
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: rgba(var(--primary-color), 1);
    --bs-btn-disabled-border-color: rgba(var(--primary-color), 1);
  }
}

// Cards
.card {
  --bs-card-border-color: var(--bs-border-color);
}
</style>

<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from './stores/user'
import Navbar from './components/layout/NavBar.vue'
import OffcanvasSidebar from './components/layout/OffcanvasSidebar.vue'
import UserModal from '@/components/user/UserModal.vue'

const userStore = useUserStore()
userStore.listenUser()
</script>
