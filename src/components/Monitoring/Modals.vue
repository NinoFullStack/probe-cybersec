<script setup>
import { inject } from 'vue'
import { useLogging } from '../../hooks/useLogging'

const emit = defineEmits(['next'])
const { cybersec_block } = defineProps(['cybersec_block'])
const { end } = useLogging(cybersec_block)

const translate = inject('translate')
const media = inject('media')
</script>

<template>
  <div class="popup popup_mistake">
    <div class="popup__icon">
      <img :src="media('src/assets/img/icons/attention.svg')" alt="" />
    </div>
    <div class="popup__info">
      <div class="popup__header">
        <h3 class="popup__title">{{ translate('Поторопитесь!') }}</h3>
        <button class="popup__close-btn">
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
      </div>
      <p class="popup__paragraph">
        {{
          translate('Угрозы начинают распространяться по всей локальной сети.')
        }}
      </p>
    </div>
  </div>

  <div class="popup-complete">
    <div class="popup-complete__banner">
      <div class="popup-complete__article">
        <h2 class="popup-complete__title">{{ translate('Вы справились!') }}</h2>
        <p>
          {{
            translate(
              'Все системы работают без сбоев. Вы внимательно следили за всеми показателями кибербезопасности и вовремя исправляли все возникающие  ошибки.'
            )
          }}
        </p>
        <p>
          {{
            translate(
              `А ещё вы остановили DDoS-атаку на инфраструктуру вашей компании и заблокировали все вредоносные источники трафика. Весьма неплохо!`
            )
          }}
        </p>

        <button
          class="popup-complete__button button button_active"
          data-btn_end_id="btn-end-1"
          @click=";[end($event), emit('next')]"
        >
          {{ translate('Перейти к финалу') }}
        </button>
      </div>
      <div class="popup-complete__preview">
        <img
          :src="media('src/assets/img/programmer-stage3/final-pic.png')"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
