import { inject } from 'vue'

export default () => {
  const translate = inject('translate')

  const popupWarn = document.querySelector('.popup-dialog_warn')
  const popupMistake = document.querySelector('.popup_mistake')
  const popupComplete = document.querySelector('.popup-complete')
  const devices = document.querySelectorAll('.device-control')
  const popupContents = document.querySelectorAll(
    '.popup-dialog__content-section'
  )
  updData(devices)

  let intervalId

  function startTimer() {
    let time = 20

    updateTimer(time)

    intervalId = setInterval(function () {
      time--

      if (time < 0) {
        document
          .querySelector('.desk-timer')
          .classList.remove('desk-timer_low-time')
        clearInterval(intervalId)
        infectDevices()
        startTimer()
      } else {
        updateTimer(time)

        if (time <= 5) {
          document
            .querySelector('.desk-timer')
            .classList.add('desk-timer_low-time')
        } else {
          document
            .querySelector('.desk-timer')
            .classList.remove('desk-timer_low-time')
        }
      }
    }, 1000)
  }

  startTimer()

  document.addEventListener('click', e => {
    if (e.target.dataset.step === 'finish') {
      popupComplete.classList.add('_opened')
    }

    if (e.target.closest('.device-control_danger')) {
      let currentWarn = e.target.closest('.device-control_danger')
      let points = [...document.querySelectorAll('.device-control')]
      let elPos = points.indexOf(currentWarn)

      popupContents.forEach(el => {
        el.classList.remove('popup-dialog__content-section_current')
      })
      popupContents[elPos].classList.add(
        'popup-dialog__content-section_current'
      )

      callPopup(popupWarn)
    }

    if (e.target.classList.contains('dialog-error__button')) {
      let currentContent = document.querySelector(
        '.popup-dialog__content-section_current'
      )
      let points = [
        ...document.querySelectorAll('.popup-dialog__content-section'),
      ]
      let elPos = points.indexOf(currentContent)

      if (elPos === 0 && e.target.hasAttribute('data-message')) {
        if (e.target.hasAttribute('data-correct')) {
          closePopup(popupWarn)
          document
            .querySelector(
              '.popup-dialog_good-message.popup-dialog_message-comp1'
            )
            .classList.add('_opened')
          devices[elPos].classList.remove('device-control_danger')
          devices[elPos].classList.add('device-control_cured')
          devices[elPos].querySelector(
            '.device-control__control-btn'
          ).textContent = translate('Угрозы отсутствуют')
          updData(devices)
        } else {
          closePopup(popupWarn)
          document
            .querySelector(
              '.popup-dialog_bad-message.popup-dialog_message-comp1'
            )
            .classList.add('_opened')
          window.localStorage.setItem('error', true)
        }
      } else if (elPos === 6 && e.target.hasAttribute('data-message')) {
        if (e.target.hasAttribute('data-correct')) {
          closePopup(popupWarn)
          document
            .querySelector(
              '.popup-dialog_good-message.popup-dialog_message-comp7'
            )
            .classList.add('_opened')
          devices[elPos].classList.remove('device-control_danger')
          devices[elPos].classList.add('device-control_cured')
          devices[elPos].querySelector(
            '.device-control__control-btn'
          ).textContent = translate('Угрозы отсутствуют')
          updData(devices)
        } else {
          closePopup(popupWarn)
          document
            .querySelector(
              '.popup-dialog_bad-message.popup-dialog_message-comp7'
            )
            .classList.add('_opened')
          window.localStorage.setItem('error', true)
        }
      } else {
        if (e.target.hasAttribute('data-correct')) {
          closePopup(popupWarn)
          devices[elPos].classList.remove('device-control_danger')
          devices[elPos].classList.add('device-control_cured')
          devices[elPos].querySelector(
            '.device-control__control-btn'
          ).textContent = translate('Угрозы отсутствуют')
          updData(devices)
        } else {
          closePopup(popupWarn)
          popupMistake.classList.add('_opened')
          window.setTimeout(() => {
            popupMistake.classList.add('clickable')
          }, 5)
        }
      }
    }

    if (e.target.classList.contains('popup-dialog__close-btn')) {
      let popup = e.target.closest('.popup-dialog')

      if (popup.classList.contains('_opened')) {
        closePopup(popup)
      }
    }
    if (e.target.closest('.popup__close-btn')) {
      if (popupMistake.classList.contains('_opened')) {
        closePopup(popupMistake)
        popupMistake.classList.remove('clickable')
      }
    }
    if (
      !e.target.closest('.popup-dialog__card') &&
      e.target.closest('.popup-dialog')
    ) {
      let popup = e.target.closest('.popup-dialog')
        ? e.target.closest('.popup-dialog')
        : e.target.querySelector('.popup-dialog')

      if (popup.classList.contains('_opened')) {
        closePopup(popup)
      }
    } else if (
      !e.target.closest('.popup_mistake') &&
      popupMistake.classList.contains('clickable')
    ) {
      if (popupMistake.classList.contains('_opened')) {
        closePopup(popupMistake)
        window.setTimeout(() => {
          popupMistake.classList.remove('clickable')
        }, 25)
      }
    } else if (
      e.target.classList.contains('popup-complete') &&
      !e.target.classList.contains('popup-complete__banner') &&
      popupComplete.classList.contains('_opened')
    ) {
      popupComplete.classList.remove('_opened')
    }
  })
  document.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') {
      if (popupMistake.classList.contains('clickable')) {
        closePopup(popupMistake)
        window.setTimeout(() => {
          popupMistake.classList.remove('clickable')
        }, 25)
      } else if (popupComplete.classList.contains('_opened')) {
        popupComplete.classList.remove('_opened')
      } else {
        document.querySelectorAll('.popup-dialog').forEach(el => {
          closePopup(el)
        })
      }
    }
  })

  function callPopup(popup) {
    popup.classList.add('_opened')
  }
  function closePopup(popup) {
    popup.classList.remove('_opened')
  }
  function updData(devices) {
    document.querySelector('.total-count-devices').textContent = devices.length
    document.querySelector('.dangerous-devices').textContent =
      document.querySelectorAll('.device-control_danger').length

    if (
      parseInt(document.querySelector('.dangerous-devices').textContent) === 0
    ) {
      document.querySelector('.manage-devices__statistic .text').style.color =
        '#18875F'
      document.querySelector(
        '.manage-devices__statistic .text'
      ).innerHTML = `угрозы отсутствуют [ 8 / 8 ]`

      document
        .querySelector('.desk-tasks__button')
        .classList.remove('button_disabled')
      document
        .querySelector('.desk-tasks__button')
        .classList.add('button_active')
      document.querySelector('.desk-timer').classList.add('desk-timer_disabled')
      stopTimer()
      document.querySelector('.desk-timer__time').innerHTML = '0:00'
    }
  }

  function infectDevices() {
    const devices = document.querySelectorAll('.device-control')
    const infectedDevices = document.querySelectorAll(
      '.device-control.device-control_danger, .device-control.device-control_cured'
    )

    const infectedDevicesArray = Array.from(infectedDevices)

    const availableDevices = Array.from(devices).filter(device => {
      return !infectedDevicesArray.includes(device)
    })

    if (availableDevices.length >= 2) {
      const randomIndexes = generateRandomIndexes(availableDevices.length, 2)

      randomIndexes.forEach(index => {
        availableDevices[index].classList.add('device-control_danger')
        availableDevices[index].querySelector(
          '.device-control__control-btn'
        ).textContent = translate('Есть проблемы')
      })
    }

    updData(devices)
  }

  function generateRandomIndexes(max, count) {
    const indexes = []
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max)
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex)
      }
    }
    return indexes
  }

  function stopTimer() {
    clearInterval(intervalId)
  }

  function updateTimer(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60
    const formattedTime = `${minutes}:${remainderSeconds
      .toString()
      .padStart(2, '0')}`
    document.getElementById('timer').textContent = formattedTime
  }
}
