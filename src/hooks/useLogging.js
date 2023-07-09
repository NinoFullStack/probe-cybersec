import { inject } from 'vue'

const removeItemStorage = name => localStorage.removeItem(name)

export const useLogging = cybersec_block => {
  const log = inject('log')

  if (cybersec_block) {
    localStorage.setItem('cybersec_block', cybersec_block)
  }

  const activity = e => {
    const { btn_id_activity } = e.target.dataset

    log({
      type: 'ACTIVITY',
      action: 'user_action',
      cybersec_block,
      btn_id_activity,
    })
  }

  const start = e => {
    e.preventDefault()

    const session = localStorage.getItem('session')
    const { btn_next_id } = e.target.dataset

    const createSession = () => {
      localStorage.setItem('session', btoa(new Date().toISOString()))
    }

    if (!session) {
      createSession()
      log({ type: 'SYSTEM', action: 'session_created', cybersec_block })
    }

    if (localStorage.getItem('end') && session) {
      createSession()
      log({ type: 'SYSTEM', action: 'session_restarted', cybersec_block })
    }

    log({
      type: 'SYSTEM',
      action: 'session_started',
      cybersec_block,
      btn_next_id,
    })
    removeItemStorage('end')
    removeItemStorage('error')
  }

  const end = e => {
    e.preventDefault()
    const { btn_end_id } = e.target.dataset
    log({
      type: 'SYSTEM',
      action: 'session_finished',
      cybersec_block,
      btn_end_id,
    })
    localStorage.setItem('end', true)
  }

  const cancel = () => {
    log({ type: 'ROI', action: 'user_canceled_probe', cybersec_block })
  }

  const nextBlock = e => {
    e.preventDefault()
    const { btn_next_id } = e.target.dataset
    const error = localStorage.getItem('error')

    if (error) {
      log({ type: 'ROI', action: 'user_mistake', cybersec_block })
    } else {
      log({ type: 'ROI', action: 'user_without_mistake', cybersec_block })
    }

    log({
      type: 'ACTIVITY',
      action: 'user_finished_block',
      cybersec_block,
      btn_next_id,
    })

    removeItemStorage('error')
  }

  const restored = () => {
    log({ type: 'SYSTEM', action: 'session_restored', cybersec_block })
  }

  return { activity, start, nextBlock, end, cancel, restored }
}
