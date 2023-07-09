import { inject } from 'vue'

export default () => {
  const translate = inject('translate')

  const devices = document.querySelectorAll('.device-manage')
  let devicesCount = devices.length
  const popup = document.querySelector('.popup')
  const popupFinished = document.querySelector('.popup-finished')

  document.querySelectorAll('.devices-counter').forEach(el => {
    el.textContent = devicesCount
  })
  checkProtect(devicesCount)

  // for cards
  sortCards()
  let accountCards = document.querySelectorAll('.accounts-card_active')
  document.getElementById('accounts-non-checked').textContent =
    accountCards.length

  document.addEventListener('click', e => {
    if (e.target.dataset.step === 'finish') {
      finishStep()
    }
    if (e.target.dataset.step === 'incorrect') {
      popup.classList.add('_opened')
      window.localStorage.setItem('error', true)
      window.setTimeout(() => {
        popup.classList.add('clickable')
      }, 5)
    }

    if (e.target.classList.contains('safety-protocol__button')) {
      e.target.classList.remove('button_active')
      e.target.classList.add('button_disabled')

      e.target.textContent = translate('Защита установлена')

      document
        .querySelector('.safety-report__field_state .safety-report__report')
        .classList.remove('safety-report__report_warn')
      document
        .querySelector('.safety-report__field_state .safety-report__report')
        .classList.add('safety-report__report_safe')

      document
        .getElementById('controled-by-protocol')
        .classList.add('device-manage_safe')

      checkProtect(devicesCount)
    }

    if (e.target.classList.contains('device-manage__active-btn')) {
      let parent = e.target.closest('.device-manage')
      activateProtection(parent, devicesCount)
    }

    if (e.target.classList.contains('button-finish-antivirus')) {
      document.querySelector('.antivirus-alert_warn').style.display = 'none'
      document.querySelector('.antivirus-alert_good').style.display = 'flex'
      document.querySelector('.button_low-priority').style.display = 'none'

      e.target.textContent = translate('Антивирус обновлен')
      e.target.classList.remove('button_active')
      e.target.classList.add('button_disabled')

      document.querySelector('.antivirus-upd').textContent = translate(
        `Дата последнего обновления: сегодня`
      )
      document.querySelector('.antivirus-upd-text').textContent = translate(
        `Установлена актуальная версия антивируса`
      )

      document.querySelectorAll('.warn-el').forEach(el => {
        el.classList.remove('antivirus-protect__value_warn')
        el.classList.add('antivirus-protect__value_good')
        el.textContent = translate('[ 0 ]')
      })
    }

    if (e.target.classList.contains('accounts-answears__button')) {
      let cards = document.querySelectorAll('.accounts-card_active')
      let answears = [
        ...document.querySelectorAll('.accounts-answears__button'),
      ]
      let choice = answears.indexOf(e.target)
      let correctAnswear = document.querySelector('.accounts-card_current')
        .dataset.correct

      if (choice === parseInt(correctAnswear)) {
        document
          .querySelector('.accounts-card_current')
          .classList.remove('accounts-card_active')
        document
          .querySelector('.accounts-card_current')
          .classList.remove('accounts-card_current')

        cards = document.querySelectorAll('.accounts-card_active')

        cards.forEach(el => {
          el.classList.remove('accounts-card_next')
        })
        if (cards.length - 1 >= 0) {
          cards[parseInt(cards.length - 1)].classList.add(
            'accounts-card_current'
          )
        }
        if (cards.length - 2 >= 0) {
          cards[parseInt(cards.length - 2)].classList.add('accounts-card_next')
        }

        sortCards()

        if (cards.length === 0) {
          finishStep()
          document.querySelector('.accounts-answears').style.display = 'none'
          document.querySelector('.accounts-cards').innerHTML = translate(
            `<p class="workflow__paragraph">Все данные актуализированы.</p><p class="workflow__paragraph">Вы проверили все учётные записи сотрудников!</p>`
          )
        }

        document.getElementById('accounts-non-checked').textContent =
          cards.length
      } else {
        callPopup(popup)
      }
    }

    let activeSteps = document.querySelectorAll('.todo-steps__step_active')
    let finishedSteps = document.querySelectorAll('.todo-steps__step_finished')

    if (activeSteps.length === finishedSteps.length) {
      popupFinished.classList.add('_opened')
    }
  })
  // for popup
  document.addEventListener('click', e => {
    if (
      !e.target.closest('.popup') &&
      !e.target.closest('.button_low-priority') &&
      popup.classList.contains('clickable') &&
      popup.classList.contains('_opened')
    ) {
      popup.classList.remove('_opened')
      popup.classList.remove('clickable')
    }
    if (e.target.closest('.popup__close-btn')) {
      popup.classList.remove('_opened')
      popup.classList.remove('clickable')
    }
  })
  // for popup
  document.addEventListener('keydown', function (event) {
    if (
      popup.classList.contains('_opened') ||
      popupFinished.classList.contains('_opened')
    ) {
      if (event.key == 'Escape') {
        popup.classList.remove('_opened')
        popup.classList.remove('clickable')
      }
    }
  })

  function finishStep() {
    let currentStep = document.querySelector('.todo-steps__step_current')

    currentStep.classList.add('todo-steps__step_finished')
    let points = [...document.querySelectorAll('.todo-steps__step_active')]
    let elPos = points.indexOf(currentStep)
    document
      .querySelectorAll('.desk-tasks__task')
      [elPos].classList.add('desk-tasks__task_finished')
  }

  function activateProtection(parent, devicesCount) {
    parent.classList.add('device-manage_safe')
    checkProtect(devicesCount)
    parent.querySelector('.device-manage__active-btn').textContent = translate(
      'Защита активирована'
    )
  }

  function checkProtect(devicesCount) {
    let protectedDevices = document.querySelectorAll('.device-manage_safe')
    let counterProtectedDevices = document.querySelectorAll(
      '.devices-manage__safe-devices'
    )
    counterProtectedDevices.forEach(el => {
      el.textContent = protectedDevices.length
    })
    document.getElementById('manage-counter').textContent =
      devicesCount - protectedDevices.length

    if (protectedDevices.length === devicesCount) {
      document
        .querySelector('.safety-manage')
        .classList.remove('safety-report__report_warn')
      document
        .querySelector('.safety-manage')
        .classList.add('safety-report__report_safe')

      finishStep()
    }
  }

  function callPopup(popup) {
    popup.classList.remove('clickable')
    popup.classList.add('_opened')
    window.localStorage.setItem('error', true)
    window.setTimeout(() => {
      popup.classList.add('clickable')
    }, 5)
  }

  function sortCards() {
    let accountCards = document.querySelectorAll('.accounts-card_active')
    for (let i = 0; i < accountCards.length; i++) {
      const el = accountCards[i]
      let koef = 16 / (accountCards.length - 2)
      el.style.transform = `translate(${i * koef}px, ${i * koef}px)`

      if (i + 1 === accountCards.length) {
        document.querySelector(
          '.accounts-cards'
        ).style.transform = `translateX(-${koef / 2}px)`
      }
    }
  }
}
