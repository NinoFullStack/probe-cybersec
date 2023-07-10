<script setup>
import { inject, onMounted } from 'vue'

import { monitoring } from '../utils/index'
import { useLogging } from '../hooks/useLogging'

const { cybersec_block } = defineProps(['cybersec_block'])
const { activity } = useLogging(cybersec_block)

const translate = inject('translate')
const media = inject('media')

onMounted(() => {
  monitoring()
})
</script>

<template>
  <section class="main__desk desk desk_stage2">
    <div class="desk__container">
      <div class="desk__wrapper">
        <div
          class="desk-head desk__part"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-duration="800"
        >
          <span class="desk-head__part">{{ translate('Часть 3') }}</span>
          <h2>{{ translate('Мониторинг и решение проблем') }}</h2>
        </div>
        <div
          class="desk-todo desk-todo_stage2 desk__part"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <div class="desk-todo__header">
            <h2>{{ translate('IP-адреса') }}</h2>
          </div>
          <div class="desk-todo__main">
            <div class="todo-steps">
              <div
                class="todo-steps__step todo-steps__step_active todo-steps__step_current"
                data-correct="0"
              >
                <span class="todo-steps__title">102.255.167.31</span>
                <span class="todo-steps__icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.26541 7L0 1.73459L1.73459 0L7 5.26541L12.2654 0L14 1.73459L8.73459 7L14 12.2654L12.2654 14L7 8.73459L1.73459 14L0 12.2654L5.26541 7Z"
                      fill="#75797B"
                    />
                  </svg>
                </span>
              </div>
              <div
                class="todo-steps__step todo-steps__step_active"
                data-correct="1"
              >
                <span class="todo-steps__title">15.219.215.198</span>
                <span class="todo-steps__icon blue-bird"> </span>
              </div>
              <div
                class="todo-steps__step todo-steps__step_active"
                data-correct="0"
              >
                <span class="todo-steps__title">204.139.229.216</span>
                <span class="todo-steps__icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.26541 7L0 1.73459L1.73459 0L7 5.26541L12.2654 0L14 1.73459L8.73459 7L14 12.2654L12.2654 14L7 8.73459L1.73459 14L0 12.2654L5.26541 7Z"
                      fill="#75797B"
                    />
                  </svg>
                </span>
              </div>
              <div
                class="todo-steps__step todo-steps__step_active"
                data-correct="1"
              >
                <span class="todo-steps__title">37.219.106.88</span>
                <span class="todo-steps__icon blue-bird"> </span>
              </div>
              <div
                class="todo-steps__step todo-steps__step_active"
                data-correct="1"
              >
                <span class="todo-steps__title">190.192.89.77</span>
                <span class="todo-steps__icon blue-bird"> </span>
              </div>
              <div
                class="todo-steps__step todo-steps__step_active"
                data-correct="1"
              >
                <span class="todo-steps__title">250.95.131.205</span>
                <span class="todo-steps__icon blue-bird"> </span>
              </div>
              <div
                class="todo-steps__step todo-steps__step_active"
                data-correct="0"
              >
                <span class="todo-steps__title">59.136.47.94</span>
                <span class="todo-steps__icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.26541 7L0 1.73459L1.73459 0L7 5.26541L12.2654 0L14 1.73459L8.73459 7L14 12.2654L12.2654 14L7 8.73459L1.73459 14L0 12.2654L5.26541 7Z"
                      fill="#75797B"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="workflow desk__part"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <div class="workflow__content">
            <div
              class="workflow__section-content manage-devices workflow__section-content_current"
            >
              <div class="manage-devices__wrapper">
                <h2 class="manage-devices__title">
                  {{ translate('Управление устройствами сети') }}
                </h2>
                <div class="manage-devices__statistic">
                  <span>{{ translate('Статистика сети:') }}</span>
                  <span class="text"
                    >{{ translate('есть проблемы') }} [
                    <span class="dangerous-devices">0</span> /
                    <span class="total-count-devices">0</span> ]</span
                  >
                </div>
                <div class="manage-devices__devices">
                  <div
                    class="manage-devices__device device-control device-control_danger"
                    data-btn_id_activity="monitoring-btn-1"
                    @click="activity($event)"
                  >
                    <div class="device-control__preview">
                      <svg
                        viewBox="0 0 68 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M62.7419 50.2059H55.4375L58.0838 52.838C59.0747 53.8236 58.3672 55.5 56.9784 55.5H11.0216C9.63277 55.5 8.92535 53.8236 9.91625 52.838L12.5625 50.2059H5.25806C2.63279 50.2059 0.5 48.0883 0.5 45.4706V5.23529C0.5 2.61754 2.63279 0.5 5.25806 0.5H62.7419C65.3672 0.5 67.5 2.61754 67.5 5.23529V45.4706C67.5 48.0883 65.3672 50.2059 62.7419 50.2059ZM5.25806 2.55882H62.7419C64.2321 2.55882 65.4355 3.75964 65.4355 5.23529V45.4706C65.4355 46.9462 64.2321 48.1471 62.7419 48.1471H5.25806C3.76793 48.1471 2.56452 46.9462 2.56452 45.4706V5.23529C2.56452 3.75964 3.76793 2.55882 5.25806 2.55882ZM14.6969 50.9908C15.2018 50.4885 15.8872 50.2059 16.6025 50.2059H51.3976C52.1128 50.2059 52.7982 50.4885 53.3031 50.9908L55.7667 53.4412H12.2333L14.6969 50.9908Z"
                          fill="#75797B"
                        />
                      </svg>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_good"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/good.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_warn"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/warn.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="device-control__body">
                      <h3 class="device-control__device-name">
                        {{ translate('Компьютер 1') }}
                      </h3>
                      <button class="device-control__control-btn">
                        {{ translate('Есть проблемы') }}
                      </button>
                    </div>
                  </div>

                  <div
                    class="manage-devices__device device-control"
                    data-btn_id_activity="monitoring-btn-2"
                    @click="activity($event)"
                  >
                    <div class="device-control__preview">
                      <svg
                        viewBox="0 0 68 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M62.7419 50.2059H55.4375L58.0838 52.838C59.0747 53.8236 58.3672 55.5 56.9784 55.5H11.0216C9.63277 55.5 8.92535 53.8236 9.91625 52.838L12.5625 50.2059H5.25806C2.63279 50.2059 0.5 48.0883 0.5 45.4706V5.23529C0.5 2.61754 2.63279 0.5 5.25806 0.5H62.7419C65.3672 0.5 67.5 2.61754 67.5 5.23529V45.4706C67.5 48.0883 65.3672 50.2059 62.7419 50.2059ZM5.25806 2.55882H62.7419C64.2321 2.55882 65.4355 3.75964 65.4355 5.23529V45.4706C65.4355 46.9462 64.2321 48.1471 62.7419 48.1471H5.25806C3.76793 48.1471 2.56452 46.9462 2.56452 45.4706V5.23529C2.56452 3.75964 3.76793 2.55882 5.25806 2.55882ZM14.6969 50.9908C15.2018 50.4885 15.8872 50.2059 16.6025 50.2059H51.3976C52.1128 50.2059 52.7982 50.4885 53.3031 50.9908L55.7667 53.4412H12.2333L14.6969 50.9908Z"
                          fill="#75797B"
                        />
                      </svg>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_good"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/good.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_warn"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/warn.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="device-control__body">
                      <h3 class="device-control__device-name">
                        {{ translate('Компьютер 2') }}
                      </h3>
                      <span class="device-control__control-btn">{{
                        translate('Угрозы отсутствуют')
                      }}</span>
                    </div>
                  </div>

                  <div
                    class="manage-devices__device device-control"
                    data-btn_id_activity="monitoring-btn-3"
                    @click="activity($event)"
                  >
                    <div class="device-control__preview">
                      <svg
                        viewBox="0 0 68 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M62.7419 50.2059H55.4375L58.0838 52.838C59.0747 53.8236 58.3672 55.5 56.9784 55.5H11.0216C9.63277 55.5 8.92535 53.8236 9.91625 52.838L12.5625 50.2059H5.25806C2.63279 50.2059 0.5 48.0883 0.5 45.4706V5.23529C0.5 2.61754 2.63279 0.5 5.25806 0.5H62.7419C65.3672 0.5 67.5 2.61754 67.5 5.23529V45.4706C67.5 48.0883 65.3672 50.2059 62.7419 50.2059ZM5.25806 2.55882H62.7419C64.2321 2.55882 65.4355 3.75964 65.4355 5.23529V45.4706C65.4355 46.9462 64.2321 48.1471 62.7419 48.1471H5.25806C3.76793 48.1471 2.56452 46.9462 2.56452 45.4706V5.23529C2.56452 3.75964 3.76793 2.55882 5.25806 2.55882ZM14.6969 50.9908C15.2018 50.4885 15.8872 50.2059 16.6025 50.2059H51.3976C52.1128 50.2059 52.7982 50.4885 53.3031 50.9908L55.7667 53.4412H12.2333L14.6969 50.9908Z"
                          fill="#75797B"
                        />
                      </svg>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_good"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/good.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_warn"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/warn.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="device-control__body">
                      <h3 class="device-control__device-name">
                        {{ translate('Компьютер 3') }}
                      </h3>
                      <span class="device-control__control-btn">{{
                        translate('Угрозы отсутствуют')
                      }}</span>
                    </div>
                  </div>

                  <div
                    class="manage-devices__device device-control"
                    data-btn_id_activity="monitoring-btn-4"
                    @click="activity($event)"
                  >
                    <div class="device-control__preview">
                      <svg
                        viewBox="0 0 68 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M62.7419 50.2059H55.4375L58.0838 52.838C59.0747 53.8236 58.3672 55.5 56.9784 55.5H11.0216C9.63277 55.5 8.92535 53.8236 9.91625 52.838L12.5625 50.2059H5.25806C2.63279 50.2059 0.5 48.0883 0.5 45.4706V5.23529C0.5 2.61754 2.63279 0.5 5.25806 0.5H62.7419C65.3672 0.5 67.5 2.61754 67.5 5.23529V45.4706C67.5 48.0883 65.3672 50.2059 62.7419 50.2059ZM5.25806 2.55882H62.7419C64.2321 2.55882 65.4355 3.75964 65.4355 5.23529V45.4706C65.4355 46.9462 64.2321 48.1471 62.7419 48.1471H5.25806C3.76793 48.1471 2.56452 46.9462 2.56452 45.4706V5.23529C2.56452 3.75964 3.76793 2.55882 5.25806 2.55882ZM14.6969 50.9908C15.2018 50.4885 15.8872 50.2059 16.6025 50.2059H51.3976C52.1128 50.2059 52.7982 50.4885 53.3031 50.9908L55.7667 53.4412H12.2333L14.6969 50.9908Z"
                          fill="#75797B"
                        />
                      </svg>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_good"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/good.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_warn"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/warn.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="device-control__body">
                      <h3 class="device-control__device-name">
                        {{ translate('Компьютер 4') }}
                      </h3>
                      <span class="device-control__control-btn">{{
                        translate('Угрозы отсутствуют')
                      }}</span>
                    </div>
                  </div>

                  <div
                    class="manage-devices__device device-control"
                    data-btn_id_activity="monitoring-btn-5"
                    @click="activity($event)"
                  >
                    <div class="device-control__preview">
                      <svg
                        viewBox="0 0 68 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M62.7419 50.2059H55.4375L58.0838 52.838C59.0747 53.8236 58.3672 55.5 56.9784 55.5H11.0216C9.63277 55.5 8.92535 53.8236 9.91625 52.838L12.5625 50.2059H5.25806C2.63279 50.2059 0.5 48.0883 0.5 45.4706V5.23529C0.5 2.61754 2.63279 0.5 5.25806 0.5H62.7419C65.3672 0.5 67.5 2.61754 67.5 5.23529V45.4706C67.5 48.0883 65.3672 50.2059 62.7419 50.2059ZM5.25806 2.55882H62.7419C64.2321 2.55882 65.4355 3.75964 65.4355 5.23529V45.4706C65.4355 46.9462 64.2321 48.1471 62.7419 48.1471H5.25806C3.76793 48.1471 2.56452 46.9462 2.56452 45.4706V5.23529C2.56452 3.75964 3.76793 2.55882 5.25806 2.55882ZM14.6969 50.9908C15.2018 50.4885 15.8872 50.2059 16.6025 50.2059H51.3976C52.1128 50.2059 52.7982 50.4885 53.3031 50.9908L55.7667 53.4412H12.2333L14.6969 50.9908Z"
                          fill="#75797B"
                        />
                      </svg>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_good"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/good.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_warn"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/warn.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="device-control__body">
                      <h3 class="device-control__device-name">
                        {{ translate('Компьютер 5') }}
                      </h3>
                      <span class="device-control__control-btn">{{
                        translate('Угрозы отсутствуют')
                      }}</span>
                    </div>
                  </div>

                  <div
                    class="manage-devices__device device-control"
                    data-btn_id_activity="monitoring-btn-6"
                    @click="activity($event)"
                  >
                    <div class="device-control__preview">
                      <svg
                        viewBox="0 0 68 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M62.7419 50.2059H55.4375L58.0838 52.838C59.0747 53.8236 58.3672 55.5 56.9784 55.5H11.0216C9.63277 55.5 8.92535 53.8236 9.91625 52.838L12.5625 50.2059H5.25806C2.63279 50.2059 0.5 48.0883 0.5 45.4706V5.23529C0.5 2.61754 2.63279 0.5 5.25806 0.5H62.7419C65.3672 0.5 67.5 2.61754 67.5 5.23529V45.4706C67.5 48.0883 65.3672 50.2059 62.7419 50.2059ZM5.25806 2.55882H62.7419C64.2321 2.55882 65.4355 3.75964 65.4355 5.23529V45.4706C65.4355 46.9462 64.2321 48.1471 62.7419 48.1471H5.25806C3.76793 48.1471 2.56452 46.9462 2.56452 45.4706V5.23529C2.56452 3.75964 3.76793 2.55882 5.25806 2.55882ZM14.6969 50.9908C15.2018 50.4885 15.8872 50.2059 16.6025 50.2059H51.3976C52.1128 50.2059 52.7982 50.4885 53.3031 50.9908L55.7667 53.4412H12.2333L14.6969 50.9908Z"
                          fill="#75797B"
                        />
                      </svg>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_good"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/good.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_warn"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/warn.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="device-control__body">
                      <h3 class="device-control__device-name">
                        {{ translate('Компьютер 6') }}
                      </h3>
                      <span class="device-control__control-btn">{{
                        translate('Угрозы отсутствуют')
                      }}</span>
                    </div>
                  </div>

                  <div
                    class="manage-devices__device device-control device-control_danger"
                    data-btn_id_activity="monitoring-btn-7"
                    @click="activity($event)"
                  >
                    <div class="device-control__preview">
                      <svg
                        viewBox="0 0 68 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M62.7419 50.2059H55.4375L58.0838 52.838C59.0747 53.8236 58.3672 55.5 56.9784 55.5H11.0216C9.63277 55.5 8.92535 53.8236 9.91625 52.838L12.5625 50.2059H5.25806C2.63279 50.2059 0.5 48.0883 0.5 45.4706V5.23529C0.5 2.61754 2.63279 0.5 5.25806 0.5H62.7419C65.3672 0.5 67.5 2.61754 67.5 5.23529V45.4706C67.5 48.0883 65.3672 50.2059 62.7419 50.2059ZM5.25806 2.55882H62.7419C64.2321 2.55882 65.4355 3.75964 65.4355 5.23529V45.4706C65.4355 46.9462 64.2321 48.1471 62.7419 48.1471H5.25806C3.76793 48.1471 2.56452 46.9462 2.56452 45.4706V5.23529C2.56452 3.75964 3.76793 2.55882 5.25806 2.55882ZM14.6969 50.9908C15.2018 50.4885 15.8872 50.2059 16.6025 50.2059H51.3976C52.1128 50.2059 52.7982 50.4885 53.3031 50.9908L55.7667 53.4412H12.2333L14.6969 50.9908Z"
                          fill="#75797B"
                        />
                      </svg>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_good"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/good.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_warn"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/warn.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="device-control__body">
                      <h3 class="device-control__device-name">
                        {{ translate('Компьютер 7') }}
                      </h3>
                      <button class="device-control__control-btn">
                        {{ translate('Есть проблемы') }}
                      </button>
                    </div>
                  </div>

                  <div
                    class="manage-devices__device device-control"
                    data-btn_id_activity="monitoring-btn-8"
                    @click="activity($event)"
                  >
                    <div class="device-control__preview">
                      <svg
                        viewBox="0 0 68 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M62.7419 50.2059H55.4375L58.0838 52.838C59.0747 53.8236 58.3672 55.5 56.9784 55.5H11.0216C9.63277 55.5 8.92535 53.8236 9.91625 52.838L12.5625 50.2059H5.25806C2.63279 50.2059 0.5 48.0883 0.5 45.4706V5.23529C0.5 2.61754 2.63279 0.5 5.25806 0.5H62.7419C65.3672 0.5 67.5 2.61754 67.5 5.23529V45.4706C67.5 48.0883 65.3672 50.2059 62.7419 50.2059ZM5.25806 2.55882H62.7419C64.2321 2.55882 65.4355 3.75964 65.4355 5.23529V45.4706C65.4355 46.9462 64.2321 48.1471 62.7419 48.1471H5.25806C3.76793 48.1471 2.56452 46.9462 2.56452 45.4706V5.23529C2.56452 3.75964 3.76793 2.55882 5.25806 2.55882ZM14.6969 50.9908C15.2018 50.4885 15.8872 50.2059 16.6025 50.2059H51.3976C52.1128 50.2059 52.7982 50.4885 53.3031 50.9908L55.7667 53.4412H12.2333L14.6969 50.9908Z"
                          fill="#75797B"
                        />
                      </svg>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_good"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/good.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div
                        class="device-control__preview-marker device-control__preview-marker_warn"
                      >
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/device-marker/warn.svg'
                            )
                          "
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="device-control__body">
                      <h3 class="device-control__device-name">
                        {{ translate('Компьютер 8') }}
                      </h3>
                      <span class="device-control__control-btn">{{
                        translate('Угрозы отсутствуют')
                      }}</span>
                    </div>
                  </div>
                </div>

                <div class="popup-dialog popup-dialog_warn">
                  <div class="popup-dialog__card">
                    <button class="popup-dialog__close-btn">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.26541 7L0 1.73459L1.73459 0L7 5.26541L12.2654 0L14 1.73459L8.73459 7L14 12.2654L12.2654 14L7 8.73459L1.73459 14L0 12.2654L5.26541 7Z"
                          fill="#75797B"
                        />
                      </svg>
                    </button>

                    <div class="popup-dialog__content">
                      <div
                        class="popup-dialog__content-section popup-dialog__content-section_current"
                      >
                        <div class="popup-dialog__preview">
                          <img
                            :src="
                              media(
                                'src/assets/img/programmer-stage3/danger-device.svg'
                              )
                            "
                            alt=""
                          />
                        </div>
                        <span class="popup-dialog__device-name">{{
                          translate('Компьютер 1')
                        }}</span>
                        <div class="dialog-error">
                          <h4 class="dialog-error__title">
                            {{ translate('Проблема') }}
                          </h4>
                          <p class="dialog-error__text">
                            <span class="bold">{{
                              translate('Обнаружено вредоносное ПО.')
                            }}</span>
                            <span
                              ><span class="bold">{{
                                translate('Файл:')
                              }}</span>
                              {{ translate('годовой') }}
                              {{ translate('отчет.doc') }}</span
                            >
                          </p>

                          <button
                            class="dialog-error__button dialog-error__button_blue"
                            data-message
                            data-correct
                            data-btn_id_activity="monitoring-btn-9"
                            @click="activity($event)"
                          >
                            {{ translate('Поместить на карантин') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_red"
                            data-message
                            data-btn_id_activity="monitoring-btn-10"
                            @click="activity($event)"
                          >
                            {{ translate('Удалить файл') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_stroke"
                            data-btn_id_activity="monitoring-btn-11"
                            @click="activity($event)"
                          >
                            {{ translate('Игнорировать') }}
                          </button>
                        </div>
                      </div>
                      <div class="popup-dialog__content-section">
                        <div class="popup-dialog__preview">
                          <img
                            :src="
                              media(
                                'src/assets/img/programmer-stage3/danger-device.svg'
                              )
                            "
                            alt=""
                          />
                        </div>
                        <span class="popup-dialog__device-name">{{
                          translate('Компьютер 2')
                        }}</span>
                        <div class="dialog-error">
                          <h4 class="dialog-error__title">
                            {{ translate('Проблема') }}
                          </h4>
                          <p class="dialog-error__text">
                            <span
                              class="bold"
                              v-html="
                                media(
                                  `Требуется обновление <br /> баз антивируса`
                                )
                              "
                            >
                            </span>
                          </p>

                          <button
                            class="dialog-error__button dialog-error__button_blue"
                            data-correct
                          >
                            {{ translate('Обновить') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_stroke"
                          >
                            {{ translate('Игнорировать') }}
                          </button>
                        </div>
                      </div>
                      <div class="popup-dialog__content-section">
                        <div class="popup-dialog__preview">
                          <img
                            :src="
                              media(
                                'src/assets/img/programmer-stage3/danger-device.svg'
                              )
                            "
                            alt=""
                          />
                        </div>
                        <span class="popup-dialog__device-name">{{
                          translate('Компьютер 3')
                        }}</span>
                        <div class="dialog-error">
                          <h4 class="dialog-error__title">
                            {{ translate('Проблема') }}
                          </h4>
                          <p class="dialog-error__text">
                            <span
                              class="bold"
                              v-html="
                                translate(
                                  `Закончилась лицензия: <br /> защита неактивна`
                                )
                              "
                            >
                            </span>
                          </p>

                          <button
                            class="dialog-error__button dialog-error__button_blue"
                            data-correct
                          >
                            {{ translate('Продлить лицензию') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_stroke"
                          >
                            {{ translate('Игнорировать') }}
                          </button>
                        </div>
                      </div>
                      <div class="popup-dialog__content-section">
                        <div class="popup-dialog__preview">
                          <img
                            :src="
                              media(
                                'src/assets/img/programmer-stage3/danger-device.svg'
                              )
                            "
                            alt=""
                          />
                        </div>
                        <span class="popup-dialog__device-name">{{
                          translate('Компьютер 4')
                        }}</span>
                        <div class="dialog-error">
                          <h4 class="dialog-error__title">
                            {{ translate('Проблема') }}
                          </h4>
                          <p class="dialog-error__text">
                            <span class="bold">{{
                              translate('Обнаружен вирус')
                            }}</span>
                            <span>{{ translate('Trojan-ATM.Win32.Jun') }}</span>
                          </p>

                          <button
                            class="dialog-error__button dialog-error__button_blue"
                            data-correct
                            data-btn_id_activity="monitoring-btn-12"
                            @click="activity($event)"
                          >
                            {{ translate('Поместить на карантин') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_red"
                            data-correct
                            data-btn_id_activity="monitoring-btn-13"
                            @click="activity($event)"
                          >
                            {{ translate('Удалить файл') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_stroke"
                            data-btn_id_activity="monitoring-btn-14"
                            @click="activity($event)"
                          >
                            {{ translate('Игнорировать') }}
                          </button>
                        </div>
                      </div>

                      <div class="popup-dialog__content-section">
                        <div class="popup-dialog__preview">
                          <img
                            :src="
                              media(
                                'src/assets/img/programmer-stage3/danger-device.svg'
                              )
                            "
                            alt=""
                          />
                        </div>
                        <span class="popup-dialog__device-name">{{
                          translate('Компьютер 5')
                        }}</span>
                        <div class="dialog-error">
                          <h4 class="dialog-error__title">
                            {{ translate('Проблема') }}
                          </h4>
                          <p class="dialog-error__text">
                            <span
                              class="bold"
                              v-html="
                                translate(
                                  `Пентестер обнаружил <br /> уязвимость в коде`
                                )
                              "
                            >
                            </span>
                          </p>

                          <button
                            class="dialog-error__button dialog-error__button_blue"
                            data-correct
                          >
                            {{ translate('Исправить ошибку') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_stroke"
                          >
                            {{ translate('Надеяться на лучшее') }}
                          </button>
                        </div>
                      </div>
                      <div class="popup-dialog__content-section">
                        <div class="popup-dialog__preview">
                          <img
                            :src="
                              media(
                                'src/assets/img/programmer-stage3/danger-device.svg'
                              )
                            "
                            alt=""
                          />
                        </div>
                        <span class="popup-dialog__device-name">{{
                          translate('Компьютер 6')
                        }}</span>
                        <div class="dialog-error">
                          <h4 class="dialog-error__title">
                            {{ translate('Проблема') }}
                          </h4>
                          <p class="dialog-error__text">
                            <span
                              class="bold"
                              v-html="
                                translate(
                                  `Требуется обновление <br /> баз антивируса`
                                )
                              "
                            >
                            </span>
                          </p>

                          <button
                            class="dialog-error__button dialog-error__button_blue"
                            data-correct
                          >
                            {{ translate('Обновить') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_stroke"
                          >
                            {{ translate('Игнорировать') }}
                          </button>
                        </div>
                      </div>
                      <div class="popup-dialog__content-section">
                        <div class="popup-dialog__preview">
                          <img
                            :src="
                              media(
                                'src/assets/img/programmer-stage3/danger-device.svg'
                              )
                            "
                            alt=""
                          />
                        </div>
                        <span class="popup-dialog__device-name">{{
                          translate('Компьютер 7')
                        }}</span>
                        <div class="dialog-error">
                          <h4 class="dialog-error__title">
                            {{ translate('Проблема') }}
                          </h4>
                          <p class="dialog-error__text">
                            <span class="bold">{{
                              translate('Обнаружено вредоносное ПО.')
                            }}</span>
                            <span>
                              <span class="bold">{{ translate('Файл:') }}</span>
                              {{ translate('презентация СД точно финал.ptx') }}
                            </span>
                          </p>

                          <button
                            class="dialog-error__button dialog-error__button_blue"
                            data-message
                            data-correct
                            data-btn_id_activity="monitoring-btn-15"
                            @click="activity($event)"
                          >
                            {{ translate('Поместить на карантин') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_red"
                            data-message
                            data-btn_id_activity="monitoring-btn-16"
                            @click="activity($event)"
                          >
                            {{ translate('Удалить файл') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_stroke"
                            data-btn_id_activity="monitoring-btn-17"
                            @click="activity($event)"
                          >
                            {{ translate('Игнорировать') }}
                          </button>
                        </div>
                      </div>
                      <div class="popup-dialog__content-section">
                        <div class="popup-dialog__preview">
                          <img
                            :src="
                              media(
                                'src/assets/img/programmer-stage3/danger-device.svg'
                              )
                            "
                            alt=""
                          />
                        </div>
                        <span class="popup-dialog__device-name">{{
                          translate('Компьютер 8')
                        }}</span>
                        <div class="dialog-error">
                          <h4 class="dialog-error__title">
                            {{ translate('Проблема') }}
                          </h4>
                          <p class="dialog-error__text">
                            <span class="bold">{{
                              translate('Обнаружен вирус')
                            }}</span>
                            <span>mwareMessage {Utils.copy(“txt”, info);}</span>
                          </p>

                          <button
                            class="dialog-error__button dialog-error__button_blue"
                            data-correct
                            data-btn_id_activity="monitoring-btn-18"
                            @click="activity($event)"
                          >
                            {{ translate('Поместить на карантин') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_red"
                            data-correct
                            data-btn_id_activity="monitoring-btn-19"
                            @click="activity($event)"
                          >
                            {{ translate('Удалить файл') }}
                          </button>
                          <button
                            class="dialog-error__button dialog-error__button_stroke"
                            data-btn_id_activity="monitoring-btn-20"
                            @click="activity($event)"
                          >
                            {{ translate('Игнорировать') }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="popup-dialog popup-dialog_message popup-dialog_good-message popup-dialog_message-comp1"
                >
                  <div class="popup-dialog__card">
                    <button class="popup-dialog__close-btn">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.26541 7L0 1.73459L1.73459 0L7 5.26541L12.2654 0L14 1.73459L8.73459 7L14 12.2654L12.2654 14L7 8.73459L1.73459 14L0 12.2654L5.26541 7Z"
                          fill="#75797B"
                        />
                      </svg>
                    </button>

                    <div class="popup-dialog__wrapper">
                      <div class="popup-dialog__avatar">
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/personal/img1.png'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div class="popup-dialog__label">
                        {{ translate('Менеджер') }}
                      </div>
                      <p class="popup-dialog__message">
                        {{
                          translate(
                            'Главное, что файл цел, я очень долго над ним работал. Спасибо!'
                          )
                        }}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="popup-dialog popup-dialog_message popup-dialog_bad-message popup-dialog_message-comp1"
                >
                  <div class="popup-dialog__card">
                    <button class="popup-dialog__close-btn">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.26541 7L0 1.73459L1.73459 0L7 5.26541L12.2654 0L14 1.73459L8.73459 7L14 12.2654L12.2654 14L7 8.73459L1.73459 14L0 12.2654L5.26541 7Z"
                          fill="#75797B"
                        />
                      </svg>
                    </button>

                    <div class="popup-dialog__wrapper">
                      <div class="popup-dialog__avatar">
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/personal/img1.png'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div class="popup-dialog__label">
                        {{ translate('Менеджер') }}
                      </div>
                      <p class="popup-dialog__message">
                        {{
                          translate(
                            `А-а-а! Куда делся отчёт? Я его целый месяц делал! Меня же уволят…`
                          )
                        }}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="popup-dialog popup-dialog_message popup-dialog_good-message popup-dialog_message-comp7"
                >
                  <div class="popup-dialog__card">
                    <button class="popup-dialog__close-btn">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.26541 7L0 1.73459L1.73459 0L7 5.26541L12.2654 0L14 1.73459L8.73459 7L14 12.2654L12.2654 14L7 8.73459L1.73459 14L0 12.2654L5.26541 7Z"
                          fill="#75797B"
                        />
                      </svg>
                    </button>

                    <div class="popup-dialog__wrapper">
                      <div class="popup-dialog__avatar">
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/personal/img2.png'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div class="popup-dialog__label">
                        {{ translate('Менеджер') }}
                      </div>
                      <p class="popup-dialog__message">
                        {{
                          translate(
                            'От этого файла зависит финансирование компании. Спасибо за помощь!'
                          )
                        }}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="popup-dialog popup-dialog_message popup-dialog_bad-message popup-dialog_message-comp7"
                >
                  <div class="popup-dialog__card">
                    <button class="popup-dialog__close-btn">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.26541 7L0 1.73459L1.73459 0L7 5.26541L12.2654 0L14 1.73459L8.73459 7L14 12.2654L12.2654 14L7 8.73459L1.73459 14L0 12.2654L5.26541 7Z"
                          fill="#75797B"
                        />
                      </svg>
                    </button>

                    <div class="popup-dialog__wrapper">
                      <div class="popup-dialog__avatar">
                        <img
                          :src="
                            media(
                              'src/assets/img/programmer-stage3/personal/img2.png'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <div class="popup-dialog__label">
                        {{ translate('Менеджер') }}
                      </div>
                      <p class="popup-dialog__message">
                        {{
                          translate(
                            'Вы презентацию мою удалили? Буду жаловаться! Нам без неё финансирование не дадут!'
                          )
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="desk-tasks"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <div class="desk-tasks__wrapper desk__part">
            <h3 class="desk-tasks__title">{{ translate('Задача') }}</h3>
            <div class="desk-tasks__list">
              <p class="desk-task">
                {{
                  translate(
                    'Исправьте все возникшие проблемы на устройствах пользователей'
                  )
                }}
              </p>
            </div>
            <button
              class="desk-tasks__button button button_disabled"
              data-step="finish"
            >
              {{ translate('Завершить') }}
            </button>
          </div>
          <div class="desk-timer desk__part">
            <div class="desk-timer__header">
              <div class="desk-timer__icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="bx:time-five">
                    <path
                      id="Vector"
                      d="M16 2.66699C8.64799 2.66699 2.66666 8.64833 2.66666 16.0003C2.66666 23.3523 8.64799 29.3337 16 29.3337C23.352 29.3337 29.3333 23.3523 29.3333 16.0003C29.3333 8.64833 23.352 2.66699 16 2.66699ZM16 26.667C10.1187 26.667 5.33332 21.8817 5.33332 16.0003C5.33332 10.119 10.1187 5.33366 16 5.33366C21.8813 5.33366 26.6667 10.119 26.6667 16.0003C26.6667 21.8817 21.8813 26.667 16 26.667Z"
                      fill="#C75E67"
                    />
                    <path
                      id="Vector_2"
                      d="M17.3333 9.33301H14.6667V16.5517L19.0573 20.9423L20.9427 19.057L17.3333 15.4477V9.33301Z"
                      fill="#C75E67"
                    />
                  </g>
                </svg>
              </div>
              <span class="desk-timer__time" id="timer">0:20</span>
            </div>
            <p
              class="desk-timer__paragraph"
              v-html="
                translate(
                  'Успейте решить проблему, <br />  пока другие компютеры не заразились'
                )
              "
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
