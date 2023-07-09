import { inject } from 'vue'

export default () => {
  const translate = inject('translate')

  if (
    document
      .querySelector('.workflow__section-content_current')
      .classList.contains('security-map')
  ) {
    document.querySelector('.desk-tasks__button').textContent =
      translate('Продолжить')
    document.querySelector('.desk__wrapper').style.height = 'auto'
  }
  if (
    document
      .querySelector('.workflow__section-content_current')
      .classList.contains('security-graph')
  ) {
    document.querySelector('.desk-tasks__button').style.display = 'none'
    document.querySelector('.desk__wrapper').style.height = '100%'

    document.querySelector('.desk').classList.remove('desk_stage2')
    document.querySelector('.desk').classList.add('desk_grid-ip')
  }
  const popup = document.querySelector('.popup')
  const popupFinished = document.querySelector('.popup-finished')
  const dangerZones = document.querySelectorAll('.security-map__circle')

  const stepsIp = document.querySelectorAll('.todo-steps__step')
  const graphs = document.querySelectorAll('.security-graph__graph-section')

  document.querySelector('.security-map-counter__total').textContent =
    dangerZones.length

  document.addEventListener('click', e => {
    if (e.target.dataset.step === 'finish') {
      finishStep()

      if (
        document
          .querySelector('.workflow__section-content_current')
          .classList.contains('security-center')
      ) {
        let currentStep = document.querySelector(
          '.workflow__section-content_current'
        )
        let points = [
          ...document.querySelectorAll('.workflow__section-content'),
        ]
        let elPos = points.indexOf(currentStep)
        document
          .querySelectorAll('.desk-tasks__task')
          [elPos].classList.add('desk-tasks__task_finished')
        if (
          elPos + 1 !=
          document.querySelectorAll('.workflow__section-content').length
        ) {
          document
            .querySelectorAll('.workflow__section-content')
            [elPos].classList.remove('workflow__section-content_current')
          document
            .querySelectorAll('.workflow__section-content')
            [elPos + 1].classList.add('workflow__section-content_current')
        }

        if (
          document
            .querySelector('.workflow__section-content_current')
            .classList.contains('security-map')
        ) {
          document.querySelector('.desk-tasks__button').textContent =
            translate('Продолжить')
          document.querySelector('.desk__wrapper').style.height = 'auto'
        }
      } else if (
        document
          .querySelector('.workflow__section-content_current')
          .classList.contains('security-map')
      ) {
        let currentStep = document.querySelector(
          '.workflow__section-content_current'
        )
        let points = [
          ...document.querySelectorAll('.workflow__section-content'),
        ]
        let elPos = points.indexOf(currentStep)
        if (
          elPos + 1 !=
          document.querySelectorAll('.workflow__section-content').length
        ) {
          document
            .querySelectorAll('.workflow__section-content')
            [elPos].classList.remove('workflow__section-content_current')
          document
            .querySelectorAll('.workflow__section-content')
            [elPos + 1].classList.add('workflow__section-content_current')
        }

        if (
          document
            .querySelector('.workflow__section-content_current')
            .classList.contains('security-graph')
        ) {
          document.querySelector('.desk-tasks__button').style.display = 'none'
          document.querySelector('.desk__wrapper').style.height = '100%'

          document.querySelector('.desk').classList.remove('desk_stage2')
          document.querySelector('.desk').classList.add('desk_grid-ip')
        }
      }
    }
    if (e.target.dataset.step === 'incorrect') {
      callPopup(popup)
    }

    if (e.target.classList.contains('security-center__answears-button')) {
      let answears = document.querySelectorAll(
        '.security-center__answears-button'
      )
      answears.forEach(el => {
        el.classList.remove('security-center__answears-button_incorrect')
        el.classList.remove('security-center__answears-button_checked')
      })

      e.target.classList.add('security-center__answears-button_checked')

      document
        .querySelector('.security-center__answear-complete')
        .classList.remove('security-center__answear-complete_disabled')
    }
    if (e.target.classList.contains('security-center__answear-complete')) {
      let choice = document.querySelector(
        '.security-center__answears-button_checked'
      )
      let points = [
        ...document.querySelectorAll('.security-center__answears-button'),
      ]
      let elPos = points.indexOf(choice)
      if (
        elPos ===
        parseInt(
          document.querySelector('.security-center__answears').dataset.correct
        )
      ) {
        choice.classList.add('security-center__answears-button_correct')
        let answears = document.querySelectorAll(
          '.security-center__answears-button'
        )
        answears.forEach(el => {
          el.style.pointerEvents = 'none'
        })
        document
          .querySelector('.desk-tasks__button')
          .classList.remove('button_disabled')
        document
          .querySelector('.desk-tasks__button')
          .classList.add('button_active')
      } else {
        window.localStorage.setItem('error', true)
        choice.classList.add('security-center__answears-button_incorrect')
      }
      document
        .querySelector('.security-center__answear-complete')
        .classList.add('security-center__answear-complete_disabled')
    }

    if (e.target.classList.contains('security-map__circle')) {
      let counterChecked
      e.target.classList.add('security-map__circle_checked')

      counterChecked = document.querySelectorAll(
        '.security-map__circle_checked'
      )
      document.querySelector('.security-map-counter__current').textContent =
        counterChecked.length

      if (counterChecked.length === dangerZones.length) {
        document
          .querySelector('.security-map-counter')
          .classList.add('security-map-counter_finished')

        let currentStep = document.querySelector(
          '.workflow__section-content_current'
        )
        let points = [
          ...document.querySelectorAll('.workflow__section-content'),
        ]
        let elPos = points.indexOf(currentStep)
        document
          .querySelectorAll('.desk-tasks__task')
          [elPos].classList.add('desk-tasks__task_finished')
        document
          .querySelector('.desk-tasks__button')
          .classList.remove('button_disabled')
        document
          .querySelector('.desk-tasks__button')
          .classList.add('button_active')
      }
    }

    if (e.target.closest('.todo-steps__step')) {
      stepsIp.forEach(el => {
        el.classList.remove('todo-steps__step_current')
      })
      e.target
        .closest('.todo-steps__step')
        .classList.add('todo-steps__step_current')

      let currentStep = document.querySelector('.todo-steps__step_current')
      let points = [...document.querySelectorAll('.todo-steps__step_active')]
      let elPos = points.indexOf(currentStep)

      graphs.forEach(el => {
        el.classList.remove('security-graph__graph-section_current')
      })
      graphs[elPos].classList.add('security-graph__graph-section_current')

      if (
        document
          .querySelector('.security-graph__graph-section_current')
          .classList.contains('security-graph__graph-section_finished')
      ) {
        document
          .querySelectorAll('.security-graph__answears-button')
          .forEach(el => {
            el.classList.add('security-graph__answears-button_disabled')
          })
      } else {
        document
          .querySelectorAll('.security-graph__answears-button')
          .forEach(el => {
            el.classList.remove('security-graph__answears-button_disabled')
          })
      }
    }
    if (e.target.classList.contains('security-graph__answears-button')) {
      let points = [
        ...document.querySelectorAll('.security-graph__answears-button'),
      ]
      let elPos = points.indexOf(e.target)

      if (
        elPos ===
        parseInt(
          document.querySelector('.todo-steps__step_current').dataset.correct
        )
      ) {
        document
          .querySelector('.todo-steps__step_current')
          .classList.add('todo-steps__step_finished')
        document
          .querySelector('.security-graph__graph-section_current')
          .classList.add('security-graph__graph-section_finished')

        document
          .querySelectorAll('.security-graph__answears-button')
          .forEach(el => {
            el.classList.add('security-graph__answears-button_disabled')
          })
      } else {
        callPopup(popup)
      }

      if (
        document.querySelectorAll('.todo-steps__step_finished').length ===
        stepsIp.length
      ) {
        let currentStep = document.querySelector(
          '.workflow__section-content_current'
        )
        let points = [
          ...document.querySelectorAll('.workflow__section-content'),
        ]
        let elPos = points.indexOf(currentStep)
        document
          .querySelectorAll('.desk-tasks__task')
          [elPos].classList.add('desk-tasks__task_finished')
        popupFinished.classList.add('_opened')
      }
    }
  })

  // for popup
  document.addEventListener('click', e => {
    if (
      !e.target.closest('.popup_map') &&
      !e.target.closest('.mistake') &&
      popup.classList.contains('clickable') &&
      popup.classList.contains('_opened')
    ) {
      popup.classList.remove('_opened')
      window.setTimeout(() => {
        popup.classList.remove('clickable')
      }, 5)
    }
    if (e.target.closest('.popup__close-btn')) {
      popup.classList.remove('_opened')
      popup.classList.remove('clickable')
    }
  })
  // for popup
  document.addEventListener('keydown', function (event) {
    if (popup.classList.contains('_opened')) {
      if (event.key == 'Escape') {
        popup.classList.remove('_opened')
        popup.classList.remove('clickable')
      }
    }
  })

  function callPopup(popup) {
    if (
      document
        .querySelector('.workflow__section-content_current')
        .classList.contains('security-map')
    ) {
      document.querySelector('.popup__title').textContent = translate(
        'Систему атакуют из других регионов!'
      )
    } else {
      document.querySelector('.popup__title').textContent = translate(
        'Ой, это неверный вариант!'
      )
    }

    window.localStorage.setItem('error', true)
    popup.classList.add('_opened')
    window.setTimeout(() => {
      popup.classList.add('clickable')
    }, 5)
  }

  function finishStep() {
    document
      .querySelector('.desk-tasks__button')
      .classList.add('button_disabled')
    document
      .querySelector('.desk-tasks__button')
      .classList.remove('button_active')
  }
}
