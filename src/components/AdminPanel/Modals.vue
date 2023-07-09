<script setup>
import { inject } from 'vue'

import { useLogging } from '../../hooks/useLogging'

const emit = defineEmits(['next'])
const { cybersec_block } = defineProps(['cybersec_block'])
const { nextBlock } = useLogging(cybersec_block)

const translate = inject('translate')
const media = inject('media')
</script>

<template>
  <div class="popup">
    <div class="popup__icon">
      <img :src="media('src/assets/img/icons/attention.svg')" alt="" />
    </div>
    <div class="popup__info">
      <div class="popup__header">
        <h3 class="popup__title">
          {{ translate('Ой, это неверный вариант!') }}
        </h3>
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
          translate(
            'Если не знаете, какой вариант выбрать, загляните в справочник.'
          )
        }}
      </p>
    </div>
  </div>

  <div class="popup-finished">
    <div class="popup-finished__info">
      <div class="popup-finished__header">
        <h3 class="popup-finished__title">
          {{ translate('Прекрасная работа!') }}
        </h3>
      </div>
      <p class="popup-finished__paragraph">
        {{
          translate(
            `Вы оперативно отреагировали на все ошибки и проблемы в системе безопасности. Но расслабляться рано, ведь киберпреступники не спят.`
          )
        }}
      </p>
    </div>
    <a
      href=""
      data-btn_next_id="next-btn-2"
      class="popup-finished__button"
      @click=";[nextBlock($event), emit('next')]"
    >
      <!-- :to="{ name: 'neutralization' }" -->
      {{ translate('Далее') }}
    </a>
  </div>
</template>
