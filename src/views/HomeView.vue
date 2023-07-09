<script setup>
import { inject } from 'vue'

import { useLogging } from '../hooks/useLogging'

const { cybersec_block } = defineProps(['cybersec_block'])
const { start } = useLogging(cybersec_block)

const translate = inject('translate')
const media = inject('media')
</script>

<template>
  <section class="main__welcome welcome">
    <div class="welcome__container">
      <div class="welcome__wrapper">
        <div
          class="welcome__image"
          data-aos="rm-opacity"
          data-aos-offset="20"
          data-aos-duration="800"
        >
          <img :src="media('src/assets/img/welcome/img.png')" alt="" />
        </div>

        <div
          class="welcome-message"
          data-aos="fade-right"
          data-aos-offset="20"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <h1>{{ translate('Рабочий день начинается!') }}</h1>
          <p>
            {{
              translate(`Перед вами откроется окно мониторинга системы безопасности. Это
            словно пункт управления: здесь специалист по кибербезопасности
            контролирует все настройки, обновляет ПО, следит за работой
            антивируса и нарушениями пользователей.`)
            }}
          </p>
          <p>
            {{
              translate(
                'Ваша задача — устранить все текущие проблемы в системе.'
              )
            }}
          </p>
        </div>

        <div
          class="button-box"
          data-aos="fade-down"
          data-aos-offset="20"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <a
            href=""
            data-btn_next_id="next-btn-1"
            class="welcome-button button"
            @click=";[start($event), $emit('next')]"
          >
            <span data-btn_next_id="next-btn-1">{{
              translate('Приступить')
            }}</span>
            <img :src="media('src/assets/img/icons/arrow-right.svg')" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
