export default function smoothScroll(targetName: string) {
  const targetEl = document.querySelector(targetName)
  const targetElPosition = targetEl?.getBoundingClientRect().top
}
