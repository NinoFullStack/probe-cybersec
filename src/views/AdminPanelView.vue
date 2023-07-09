<script setup>
import { inject, onMounted } from 'vue'

import { main, steps } from '../utils/index'
import { useLogging } from '../hooks/useLogging'

const { cybersec_block } = defineProps(['cybersec_block'])
const { activity } = useLogging(cybersec_block)

const translate = inject('translate')
const media = inject('media')

onMounted(() => {
  steps()
  main()
})
</script>

<template>
  <section class="main__desk desk">
    <div class="desk__container">
      <div class="desk__wrapper">
        <div
          class="desk-head desk__part"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-duration="800"
        >
          <span class="desk-head__part">{{ translate('Часть 1') }}</span>
          <h2>{{ translate('Работа с панелью администрирования') }}</h2>
        </div>
        <div
          class="desk-todo desk__part"
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <div class="desk-todo__header">
            <h2>{{ translate('Центр безопасности') }}</h2>
          </div>
          <div class="desk-todo__main">
            <div class="todo-steps">
              <div
                class="todo-steps__step todo-steps__step_active todo-steps__step_current"
              >
                <span class="todo-steps__title">{{
                  translate('Протокол безопасности')
                }}</span>
                <span class="todo-steps__num">1</span>
              </div>
              <div class="todo-steps__step">
                <span class="todo-steps__title">{{
                  translate('Хранилища')
                }}</span>
                <span class="todo-steps__num">0</span>
              </div>
              <div class="todo-steps__step todo-steps__step_active">
                <span class="todo-steps__title">{{
                  translate('Управляемые устройства')
                }}</span>
                <span class="todo-steps__num" id="manage-counter">8</span>
              </div>
              <div class="todo-steps__step">
                <span class="todo-steps__title">{{
                  translate('Обнаружение устройств')
                }}</span>
                <span class="todo-steps__num">0</span>
              </div>
              <div class="todo-steps__step">
                <span class="todo-steps__title">{{
                  translate('Политики')
                }}</span>
                <span class="todo-steps__num">0</span>
              </div>
              <div class="todo-steps__step">
                <span class="todo-steps__title">{{
                  translate('Программное обеспечение')
                }}</span>
                <span class="todo-steps__num">0</span>
              </div>
              <div class="todo-steps__step">
                <span class="todo-steps__title">{{ translate('Задачи') }}</span>
                <span class="todo-steps__num">0</span>
              </div>
              <div class="todo-steps__step todo-steps__step_active">
                <span class="todo-steps__title">{{
                  translate('Антивирус')
                }}</span>
                <span class="todo-steps__num">1</span>
              </div>
              <div class="todo-steps__step">
                <span class="todo-steps__title">{{
                  translate('Удаленная установка')
                }}</span>
                <span class="todo-steps__num">0</span>
              </div>
              <div class="todo-steps__step todo-steps__step_active">
                <span class="todo-steps__title">{{
                  translate('Учетные записи')
                }}</span>
                <span class="todo-steps__num" id="accounts-non-checked">0</span>
              </div>
              <div class="todo-steps__step">
                <span class="todo-steps__title">{{
                  translate('Сертификаты')
                }}</span>
                <span class="todo-steps__num">0</span>
              </div>
              <div class="todo-steps__step">
                <span class="todo-steps__title">{{
                  translate('Исполняемые файлы')
                }}</span>
                <span class="todo-steps__num">0</span>
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
            <div class="workflow__section-content safety-protocol">
              <div class="safety-protocol__wrapper">
                <div class="safety-protocol__icon">
                  <img
                    :src="media('/src/assets/img/programmer/sp-mark.svg')"
                    alt=""
                  />
                </div>
                <h2 class="workflow__title">
                  {{ translate('Протокол безопасности') }}
                </h2>
                <div class="safety-report">
                  <div class="safety-report__field safety-report__field_state">
                    <h4 class="safety-report__title">
                      {{ translate('Состояние сети:') }}
                    </h4>
                    <span
                      class="safety-report__report safety-report__report_warn"
                      >[ {{ translate('под') }}
                      <span class="report-bad">{{ translate('угрозой') }}</span>
                      <span class="report-good">{{
                        translate('защитой')
                      }}</span>
                      ]</span
                    >
                  </div>
                  <div
                    class="safety-report__field safety-report__field_devices"
                  >
                    <h4 class="safety-report__title">
                      {{ translate('Устройства в сети:') }}
                    </h4>
                    <span class="safety-report__report"
                      ><span>[ <span class="devices-counter">0</span> ]</span>
                      {{ translate('устройств') }}</span
                    >
                  </div>
                </div>
                <button
                  class="safety-protocol__button button button_active"
                  data-step="finish"
                  data-btn_id_activity="admin-panel-btn-1"
                  @click="activity($event)"
                >
                  {{ translate('Установить защиту') }}
                </button>
              </div>
            </div>
            <div class="workflow__section-content devices-manage">
              <div class="devices-manage__wrapper">
                <h2 class="workflow__title">
                  {{ translate('Управляемые устройства') }}
                </h2>
                <div class="safety-report">
                  <div class="safety-report__field safety-report__field_state">
                    <h4 class="safety-report__title">
                      {{ translate('Рабочие станции:') }}
                    </h4>
                    <span class="safety-report__report"
                      ><span
                        >[ <span class="devices-counter">0</span> ]
                        {{ translate('станций') }}</span
                      ></span
                    >
                  </div>
                  <div
                    class="safety-report__field safety-report__field_devices"
                  >
                    <h4 class="safety-report__title">
                      {{ translate('программа безопасности активна:') }}
                    </h4>
                    <span
                      class="safety-report__report safety-manage safety-report__report_warn"
                      ><span
                        >[
                        <span class="devices-manage__safe-devices">1</span>
                        / <span class="devices-counter">0</span> ]</span
                      >
                      {{ translate('станций') }}</span
                    >
                  </div>
                </div>

                <div class="devices-manage__devices">
                  <div class="device-manage">
                    <div class="device-manage__preview">
                      <div class="device-manage__preview-content">
                        <svg
                          class="device-icon"
                          width="68"
                          height="56"
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

                        <div class="device-manage__label">
                          <div class="device-manage__status">
                            <img
                              :src="media('src/assets/img/icons/cross.svg')"
                              alt=""
                              class="cross"
                            />
                            <img
                              :src="media('src/assets/img/icons/bird.svg')"
                              alt=""
                              class="bird"
                            />
                          </div>
                          <span class="device-manage__num">№0752</span>
                        </div>
                      </div>
                    </div>
                    <div class="device-manage__body">
                      <h4 class="device-manage__title">
                        {{ translate('Отдел аналитики') }}
                      </h4>
                      <button
                        class="device-manage__active-btn"
                        data-btn_id_activity="admin-panel-btn-2"
                        @click="activity($event)"
                      >
                        {{ translate('Активировать защиту') }}
                      </button>
                    </div>
                  </div>

                  <div class="device-manage">
                    <div class="device-manage__preview">
                      <div class="device-manage__preview-content">
                        <svg
                          class="device-icon"
                          width="68"
                          height="56"
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

                        <div class="device-manage__label">
                          <div class="device-manage__status">
                            <img
                              :src="media('src/assets/img/icons/cross.svg')"
                              alt=""
                              class="cross"
                            />
                            <img
                              :src="media('src/assets/img/icons/bird.svg')"
                              alt=""
                              class="bird"
                            />
                          </div>
                          <span class="device-manage__num">№1201</span>
                        </div>
                      </div>
                    </div>
                    <div class="device-manage__body">
                      <h4 class="device-manage__title">
                        {{ translate('Отдел маркетинга') }}
                      </h4>
                      <button
                        class="device-manage__active-btn"
                        data-btn_id_activity="admin-panel-btn-3"
                        @click="activity($event)"
                      >
                        {{ translate('Активировать защиту') }}
                      </button>
                    </div>
                  </div>

                  <div class="device-manage">
                    <div class="device-manage__preview">
                      <div class="device-manage__preview-content">
                        <svg
                          class="device-icon"
                          width="68"
                          height="56"
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

                        <div class="device-manage__label">
                          <div class="device-manage__status">
                            <img
                              :src="media('src/assets/img/icons/cross.svg')"
                              alt=""
                              class="cross"
                            />
                            <img
                              :src="media('src/assets/img/icons/bird.svg')"
                              alt=""
                              class="bird"
                            />
                          </div>
                          <span class="device-manage__num">№0105</span>
                        </div>
                      </div>
                    </div>
                    <div class="device-manage__body">
                      <h4 class="device-manage__title">
                        {{ translate('Серверная') }}
                      </h4>
                      <button
                        class="device-manage__active-btn"
                        data-btn_id_activity="admin-panel-btn-4"
                        @click="activity($event)"
                      >
                        {{ translate('Активировать защиту') }}
                      </button>
                    </div>
                  </div>

                  <div class="device-manage">
                    <div class="device-manage__preview">
                      <div class="device-manage__preview-content">
                        <svg
                          class="device-icon"
                          width="68"
                          height="56"
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

                        <div class="device-manage__label">
                          <div class="device-manage__status">
                            <img
                              :src="media('src/assets/img/icons/cross.svg')"
                              alt=""
                              class="cross"
                            />
                            <img
                              :src="media('src/assets/img/icons/bird.svg')"
                              alt=""
                              class="bird"
                            />
                          </div>
                          <span class="device-manage__num">№2040</span>
                        </div>
                      </div>
                    </div>
                    <div class="device-manage__body">
                      <h4 class="device-manage__title">
                        {{ translate('Стажер') }}
                      </h4>
                      <button
                        class="device-manage__active-btn"
                        data-btn_id_activity="admin-panel-btn-5"
                        @click="activity($event)"
                      >
                        {{ translate('Активировать защиту') }}
                      </button>
                    </div>
                  </div>

                  <div class="device-manage" id="controled-by-protocol">
                    <div class="device-manage__preview">
                      <div class="device-manage__preview-content">
                        <svg
                          class="device-icon"
                          width="68"
                          height="56"
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

                        <div class="device-manage__label">
                          <div class="device-manage__status">
                            <img
                              :src="media('src/assets/img/icons/cross.svg')"
                              alt=""
                              class="cross"
                            />
                            <img
                              :src="media('src/assets/img/icons/bird.svg')"
                              alt=""
                              class="bird"
                            />
                          </div>
                          <span class="device-manage__num">№1435</span>
                        </div>
                      </div>
                    </div>
                    <div class="device-manage__body">
                      <h4 class="device-manage__title">
                        {{ translate('Техподдержка') }}
                      </h4>
                      <button
                        class="device-manage__active-btn"
                        data-btn_id_activity="admin-panel-btn-6"
                        @click="activity($event)"
                      >
                        {{ translate('Активировать защиту') }}
                      </button>
                    </div>
                  </div>

                  <div class="device-manage">
                    <div class="device-manage__preview">
                      <div class="device-manage__preview-content">
                        <svg
                          class="device-icon"
                          width="68"
                          height="56"
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

                        <div class="device-manage__label">
                          <div class="device-manage__status">
                            <img
                              :src="media('src/assets/img/icons/cross.svg')"
                              alt=""
                              class="cross"
                            />
                            <img
                              :src="media('src/assets/img/icons/bird.svg')"
                              alt=""
                              class="bird"
                            />
                          </div>
                          <span class="device-manage__num">№1007</span>
                        </div>
                      </div>
                    </div>
                    <div class="device-manage__body">
                      <h4 class="device-manage__title">
                        {{ translate('Техподдержка') }}
                      </h4>
                      <button
                        class="device-manage__active-btn"
                        data-btn_id_activity="admin-panel-btn-7"
                        @click="activity($event)"
                      >
                        {{ translate('Активировать защиту') }}
                      </button>
                    </div>
                  </div>

                  <div class="device-manage">
                    <div class="device-manage__preview">
                      <div class="device-manage__preview-content">
                        <svg
                          class="device-icon"
                          width="68"
                          height="56"
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

                        <div class="device-manage__label">
                          <div class="device-manage__status">
                            <img
                              :src="media('src/assets/img/icons/cross.svg')"
                              alt=""
                              class="cross"
                            />
                            <img
                              :src="media('src/assets/img/icons/bird.svg')"
                              alt=""
                              class="bird"
                            />
                          </div>
                          <span class="device-manage__num">№0031</span>
                        </div>
                      </div>
                    </div>
                    <div class="device-manage__body">
                      <h4 class="device-manage__title">
                        {{ translate('Финансовый отдел') }}
                      </h4>
                      <button
                        class="device-manage__active-btn"
                        data-btn_id_activity="admin-panel-btn-8"
                        @click="activity($event)"
                      >
                        {{ translate('Активировать защиту') }}
                      </button>
                    </div>
                  </div>

                  <div class="device-manage">
                    <div class="device-manage__preview">
                      <div class="device-manage__preview-content">
                        <svg
                          class="device-icon"
                          width="68"
                          height="56"
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

                        <div class="device-manage__label">
                          <div class="device-manage__status">
                            <img
                              :src="media('src/assets/img/icons/cross.svg')"
                              alt=""
                              class="cross"
                            />
                            <img
                              :src="media('src/assets/img/icons/bird.svg')"
                              alt=""
                              class="bird"
                            />
                          </div>
                          <span class="device-manage__num">№0540</span>
                        </div>
                      </div>
                    </div>
                    <div class="device-manage__body">
                      <h4 class="device-manage__title">
                        {{ translate('Финансовый отдел') }}
                      </h4>
                      <button
                        class="device-manage__active-btn"
                        data-btn_id_activity="admin-panel-btn-9"
                        @click="activity($event)"
                      >
                        {{ translate('Активировать защиту') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="workflow__section-content antivirus">
              <div class="antivirus__wrapper">
                <h2 class="workflow__title">{{ translate('Антивирус') }}</h2>
                <div class="antivirus-alert antivirus-alert_warn">
                  <div class="antivirus-alert__icon">
                    <img
                      :src="media('src/assets/img/icons/alert-warn.svg')"
                      alt=""
                    />
                  </div>
                  <p
                    class="antivirus-alert__message"
                    v-html="
                      translate(
                        'Автоматическое обновление не было установлено,<br /> безопасность систем под угрозой'
                      )
                    "
                  ></p>
                </div>
                <div class="antivirus-alert antivirus-alert_good">
                  <div class="antivirus-alert__icon">
                    <img
                      :src="media('src/assets/img/icons/alert-good.svg')"
                      alt=""
                    />
                  </div>
                  <p
                    class="antivirus-alert__message"
                    v-html="
                      translate(
                        'Антивирус работает в штатном режиме, <br /> проблемы не обнаружены'
                      )
                    "
                  ></p>
                </div>
                <p class="antivirus__paragraph antivirus-upd">
                  {{ translate('Дата последнего обновления: 3 дня назад') }}
                </p>
                <p class="antivirus__paragraph antivirus-upd-text">
                  {{ translate('Доступно новое обновление!') }}
                </p>
                <div class="antivirus__buttons">
                  <button
                    class="antivirus__button button button_active button-finish-antivirus"
                    data-step="finish"
                    data-btn_id_activity="admin-panel-btn-10"
                    @click="activity($event)"
                  >
                    {{ translate('Обновить сейчас') }}
                  </button>
                  <button
                    class="antivirus__button button button_active button_low-priority"
                    data-step="incorrect"
                    data-btn_id_activity="admin-panel-btn-11"
                    @click="activity($event)"
                  >
                    {{ translate('Обновить позже') }}
                  </button>
                </div>

                <div class="antivirus-protect">
                  <h3 class="antivirus-protect__title">
                    {{ translate('Состояние системы:') }}
                  </h3>
                  <div class="antivirus-protect__list">
                    <div class="antivirus-protect__field">
                      <div class="antivirus-protect__icon">
                        <img
                          :src="
                            media('src/assets/img/antivirus-state/icon1.svg')
                          "
                          alt=""
                        />
                      </div>
                      <div class="antivirus-protect__info">
                        <h4 class="antivirus-protect__info-title">
                          {{ translate('Потенциальные угрозы') }}
                        </h4>
                        <span
                          class="antivirus-protect__value warn-el antivirus-protect__value_warn"
                          >[ 4 ]</span
                        >
                      </div>
                    </div>
                    <div class="antivirus-protect__field">
                      <div class="antivirus-protect__icon">
                        <img
                          :src="
                            media('src/assets/img/antivirus-state/icon2.svg')
                          "
                          alt=""
                        />
                      </div>
                      <div class="antivirus-protect__info">
                        <h4 class="antivirus-protect__info-title">
                          {{ translate('Файлы на карантине') }}
                        </h4>
                        <span
                          class="antivirus-protect__value warn-el antivirus-protect__value_warn"
                          >[ 12 ]</span
                        >
                      </div>
                    </div>
                    <div class="antivirus-protect__field">
                      <div class="antivirus-protect__icon">
                        <img
                          :src="
                            media('src/assets/img/antivirus-state/icon3.svg')
                          "
                          alt=""
                        />
                      </div>
                      <div class="antivirus-protect__info">
                        <h4 class="antivirus-protect__info-title">
                          {{ translate('Обнаруженные вирусы') }}
                        </h4>
                        <span
                          class="antivirus-protect__value warn-el antivirus-protect__value_warn"
                          >[ 40 ]</span
                        >
                      </div>
                    </div>
                    <div class="antivirus-protect__field">
                      <div class="antivirus-protect__icon">
                        <img
                          :src="
                            media('src/assets/img/antivirus-state/icon4.svg')
                          "
                          alt=""
                        />
                      </div>
                      <div class="antivirus-protect__info">
                        <h4 class="antivirus-protect__info-title">
                          {{ translate('Компоненты защиты') }}
                        </h4>
                        <span class="antivirus-protect__value">[ 14 ]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="workflow__section-content accounts">
              <div class="accounts__wrapper">
                <h2 class="workflow__title">
                  {{ translate('Учетные записи') }}
                </h2>
                <div
                  class="accounts__label"
                  v-html="
                    translate(
                      'Пароль необходимо обновлять <span>каждые 3 месяца</span>'
                    )
                  "
                ></div>

                <div class="accounts-cards">
                  <div
                    class="accounts-card accounts-card_active"
                    data-correct="1"
                  >
                    <div class="accounts-card__body">
                      <div class="accounts-card__info">
                        <span class="accounts-card__num">{{
                          translate('Сотрудник №5')
                        }}</span>

                        <span class="accounts-card__name">{{
                          translate('Фролов Степан Сергеевич')
                        }}</span>

                        <div class="accounts-card__field">
                          <span class="accounts-card__filed-title">{{
                            translate('Должность')
                          }}</span>
                          <span class="accounts-card__filed-value">{{
                            translate('Руководитель отдела')
                          }}</span>
                        </div>

                        <div class="accounts-card__field">
                          <span class="accounts-card__filed-title">{{
                            translate('Подразделение')
                          }}</span>
                          <span class="accounts-card__filed-value">{{
                            translate('Отдел аналитики')
                          }}</span>
                        </div>
                      </div>
                      <div class="accounts-card__preview">
                        <img
                          :src="media('src/assets/img/accounts-card/img5.png')"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="accounts-card__bottom">
                      <div class="accounts-card__field">
                        <span class="accounts-card__filed-title">{{
                          translate('Данные о пароле')
                        }}</span>
                        <span
                          class="accounts-card__filed-value accounts-card__filed-value_red"
                          >{{ translate('Обновлялись 4 месяца назад') }}</span
                        >
                      </div>
                    </div>
                  </div>

                  <div
                    class="accounts-card accounts-card_active"
                    data-correct="0"
                  >
                    <div class="accounts-card__body">
                      <div class="accounts-card__info">
                        <span class="accounts-card__num">{{
                          translate('Сотрудник №4')
                        }}</span>

                        <span class="accounts-card__name">{{
                          translate('Петров Артем Анатольевич')
                        }}</span>

                        <div class="accounts-card__field">
                          <span class="accounts-card__filed-title">{{
                            translate('Должность')
                          }}</span>
                          <span
                            class="accounts-card__filed-value accounts-card__filed-value_red"
                            >{{ translate('Уволен') }}</span
                          >
                        </div>

                        <div class="accounts-card__field">
                          <span class="accounts-card__filed-title">{{
                            translate('Подразделение')
                          }}</span>
                          <span class="accounts-card__filed-value">{{
                            translate('Отдел продаж')
                          }}</span>
                        </div>
                      </div>
                      <div class="accounts-card__preview">
                        <img
                          :src="media('src/assets/img/accounts-card/img4.png')"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="accounts-card__bottom">
                      <div class="accounts-card__field">
                        <span class="accounts-card__filed-title">{{
                          translate('Данные о пароле')
                        }}</span>
                        <span class="accounts-card__filed-value">{{
                          translate('Обновлялись 3 недели назад')
                        }}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    class="accounts-card accounts-card_active"
                    data-correct="0"
                  >
                    <div class="accounts-card__body">
                      <div class="accounts-card__info">
                        <span class="accounts-card__num">{{
                          translate('Сотрудник №3')
                        }}</span>

                        <span class="accounts-card__name">{{
                          translate('Константинова Мария Юрьевна')
                        }}</span>

                        <div class="accounts-card__field">
                          <span class="accounts-card__filed-title">{{
                            translate('Должность')
                          }}</span>
                          <span
                            class="accounts-card__filed-value accounts-card__filed-value_red"
                            >{{ translate('Уволена') }}</span
                          >
                        </div>

                        <div class="accounts-card__field">
                          <span class="accounts-card__filed-title">{{
                            translate('Подразделение')
                          }}</span>
                          <span class="accounts-card__filed-value">{{
                            translate('Отдел бухгалтерии')
                          }}</span>
                        </div>
                      </div>
                      <div class="accounts-card__preview">
                        <img
                          :src="media('src/assets/img/accounts-card/img3.png')"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="accounts-card__bottom">
                      <div class="accounts-card__field">
                        <span class="accounts-card__filed-title">{{
                          translate('Данные о пароле')
                        }}</span>
                        <span class="accounts-card__filed-value">{{
                          translate('Обновлялись 2 месяца назад')
                        }}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    class="accounts-card accounts-card_active accounts-card accounts-card_next"
                    data-correct="2"
                  >
                    <div class="accounts-card__body">
                      <div class="accounts-card__info">
                        <span class="accounts-card__num">{{
                          translate('Сотрудник №2')
                        }}</span>

                        <span class="accounts-card__name">{{
                          translate('Иванов Геннадий Алексеевич')
                        }}</span>

                        <div class="accounts-card__field">
                          <span class="accounts-card__filed-title">{{
                            translate('Должность')
                          }}</span>
                          <span class="accounts-card__filed-value">{{
                            translate('Старший программист')
                          }}</span>
                        </div>

                        <div class="accounts-card__field">
                          <span class="accounts-card__filed-title">{{
                            translate('Подразделение')
                          }}</span>
                          <span class="accounts-card__filed-value">{{
                            translate('Отдел разработки')
                          }}</span>
                        </div>
                      </div>
                      <div class="accounts-card__preview">
                        <img
                          :src="media('src/assets/img/accounts-card/img2.png')"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="accounts-card__bottom">
                      <div class="accounts-card__field">
                        <span class="accounts-card__filed-title">{{
                          translate('Данные о пароле')
                        }}</span>
                        <span class="accounts-card__filed-value">{{
                          translate('Обновлялись неделю назад')
                        }}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    class="accounts-card accounts-card_active accounts-card_current"
                    data-correct="1"
                  >
                    <div class="accounts-card__body">
                      <div class="accounts-card__info">
                        <span class="accounts-card__num">{{
                          translate('Сотрудник №1')
                        }}</span>

                        <span class="accounts-card__name">{{
                          translate('Евстигнеева Анна Павловна')
                        }}</span>

                        <div class="accounts-card__field">
                          <span class="accounts-card__filed-title">{{
                            translate('Должность')
                          }}</span>
                          <span class="accounts-card__filed-value">{{
                            translate('Менеджер по продажам')
                          }}</span>
                        </div>

                        <div class="accounts-card__field">
                          <span class="accounts-card__filed-title">{{
                            translate('Подразделение')
                          }}</span>
                          <span class="accounts-card__filed-value">{{
                            translate('Отдел продаж')
                          }}</span>
                        </div>
                      </div>
                      <div class="accounts-card__preview">
                        <img
                          :src="media('src/assets/img/accounts-card/img.png')"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="accounts-card__bottom">
                      <div class="accounts-card__field">
                        <span class="accounts-card__filed-title">{{
                          translate('Данные о пароле')
                        }}</span>
                        <span
                          class="accounts-card__filed-value accounts-card__filed-value_red"
                          >{{
                            translate('Обновлялись более 2 лет назад')
                          }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accounts-answears">
                  <button
                    class="accounts-answears__button accounts-answears__button_red"
                    data-btn_id_activity="admin-panel-btn-12"
                    @click="activity($event)"
                  >
                    <svg
                      width="11"
                      height="11"
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
                    <span>{{ translate('Отключить доступ') }}</span>
                  </button>
                  <button
                    class="accounts-answears__button accounts-answears__button_blue"
                    data-btn_id_activity="admin-panel-btn-13"
                    @click="activity($event)"
                  >
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="1"
                        width="11"
                        height="9"
                        stroke="#0058AA"
                      />
                      <path
                        d="M0.856934 1.61133L5.99979 6.05577L11.1426 1.61133"
                        stroke="#0058AA"
                      />
                    </svg>
                    <span>{{ translate('Напомнить о смене пароля') }}</span>
                  </button>
                  <button
                    class="accounts-answears__button accounts-answears__button_grey"
                    data-btn_id_activity="admin-panel-btn-14"
                    @click="activity($event)"
                  >
                    <span>{{ translate('Пропустить') }}</span>
                  </button>
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
              <div class="desk-tasks__task">
                <div class="desk-tasks__task-marker"></div>
                <div class="desk-tasks__task-text">
                  {{ translate('Проверьте протокол безопасности сети') }}
                </div>
              </div>
              <div class="desk-tasks__task">
                <div class="desk-tasks__task-marker"></div>
                <div class="desk-tasks__task-text">
                  {{ translate('Активируйте защиту рабочих станций') }}
                </div>
              </div>
              <div class="desk-tasks__task">
                <div class="desk-tasks__task-marker"></div>
                <div class="desk-tasks__task-text">
                  {{ translate('Обновите антивирус') }}
                </div>
              </div>
              <div class="desk-tasks__task">
                <div class="desk-tasks__task-marker"></div>
                <div class="desk-tasks__task-text">
                  {{ translate('Актуализируйте учётные записи сотрудников') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
