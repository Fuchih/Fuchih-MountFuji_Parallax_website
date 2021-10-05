const sun = document.querySelector('#sun')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const mount = document.querySelector('#mount')
const temple = document.querySelector('#temple')

window.addEventListener('scroll', () => {
  let value = this.scrollY
  if (value < 550) {
    sun.style.transform = `translate(-50%,${value}px)`
    left.style.transform = `translate(${value * 0.5}px, 0)`
    right.style.transform = `translate(-${value * 0.5}px, 0)`
    mount.style.transform = `translate(-50%, ${value * 0.5}px)`
    temple.style.transform = `translate(-${value * 0.3}px, 0)`
  }
})
