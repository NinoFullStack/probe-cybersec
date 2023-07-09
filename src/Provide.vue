<script setup>
import { provide } from 'vue'

import App from './App.vue'

provide(
  'log',
  ({
    type,
    action,
    cybersec_block = null,
    btn_next_id = null,
    btn_id_activity = null,
    btn_end_id = null,
  }) => {
    console.log({
      type,
      action,
      user_id: 1,
      created_at: new Date().toISOString(),
      probe_id: 1,
      cybersec_block,
      btn_next_id,
      btn_id_activity,
      btn_end_id,
    })
  }
)

provide('media', path => {
  return path
})

provide('translate', key => {
  return key
})
</script>

<template>
  <App />
</template>
