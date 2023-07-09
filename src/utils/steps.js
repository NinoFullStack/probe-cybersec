export default () => {
  const steps = document.querySelectorAll('.todo-steps__step_active')
  const sections = document.querySelectorAll('.workflow__section-content')

  let parent = document.querySelector('.todo-steps__step_current')

  let points = [...document.querySelectorAll('.todo-steps__step_active')]
  let elPos = points.indexOf(parent)
  sections.forEach(el => {
    el.classList.remove('workflow__section-content_current')
  })
  sections[elPos].classList.add('workflow__section-content_current')

  document.addEventListener('click', e => {
    if (e.target.closest('.todo-steps__step_active')) {
      let parent = e.target.closest('.todo-steps__step_active')
      steps.forEach(el => {
        el.classList.remove('todo-steps__step_current')
      })
      parent.classList.add('todo-steps__step_current')

      let points = [...document.querySelectorAll('.todo-steps__step_active')]
      let elPos = points.indexOf(parent)
      sections.forEach(el => {
        el.classList.remove('workflow__section-content_current')
      })
      sections[elPos].classList.add('workflow__section-content_current')
    }
  })
}
