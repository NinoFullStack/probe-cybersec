<script setup>
import AOS from 'aos'
import { markRaw, onMounted, ref } from 'vue'

import {
  AdminPanelModals,
  MonitoringModals,
  NeutralizationModals,
} from './components'

import {
  AdminPanelView,
  MonitoringView,
  NeutralizationView,
  HomeView,
} from './views'

import { useLogging } from './hooks/useLogging'

const counter = ref(0)
const end = localStorage.getItem('end')
const cybersec_block = +localStorage.getItem('cybersec_block')

if (cybersec_block) {
  counter.value = cybersec_block
}

const { cancel, restored } = useLogging(counter.value)

const views = ref([
  markRaw(HomeView),
  markRaw(AdminPanelView),
  markRaw(NeutralizationView),
  markRaw(MonitoringView),
])

const nextBlock = () => {
  if (counter.value !== views.value.length - 1) {
    counter.value++
  }
}

onMounted(() => {
  AOS.init()
  window.addEventListener('beforeunload', cancel)

  if (cybersec_block && !end) {
    restored()
  }
})
</script>

<template>
  <div class="wrapper" :class="{ 'full-height': counter !== 0 }">
    <main class="main">
      <component
        :is="views[counter]"
        :cybersec_block="counter"
        @next="nextBlock"
      />
    </main>

    <AdminPanelModals
      v-if="counter === 1"
      cybersec_block="1"
      @next="nextBlock"
    />
    <NeutralizationModals
      v-if="counter === 2"
      cybersec_block="2"
      @next="nextBlock"
    />
    <MonitoringModals
      v-if="counter === 3"
      cybersec_block="3"
      @next="nextBlock"
    />
  </div>
</template>
