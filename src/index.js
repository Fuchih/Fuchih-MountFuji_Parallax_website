window.addEventListener('scroll', () => {
  const sun = document.querySelector('#sun')
  const left = document.querySelector('#left')
  const right = document.querySelector('#right')
  const mount = document.querySelector('#mount')
  const temple = document.querySelector('#temple')
  const bridge = document.querySelector('#bridge')
  const sakuraLeft = document.querySelector('#sakura-left')
  const sakuraRight = document.querySelector('#sakura-right')
  var value = this.scrollY

  if (value < 550) {
    sun.style.transform = `translate(-50%,${value}px)`
    left.style.transform = `translate(${value * 0.5}px, 0)`
    right.style.transform = `translate(-${value * 0.5}px, 0)`
    mount.style.transform = `translate(-50%, ${value * 0.5}px)`
    temple.style.transform = `translate(-${value * 0.3}px, 0)`
    bridge.style.opacity = `${1 - value * 0.005}`
    sakuraLeft.style.transform = `translate(-${value * 0.5}px, ${value * 1.1}px)`
    sakuraRight.style.transform = `translate(${value * 0.5}px, ${value * 1.1}px)`
  }

  if (value > 300) bridge.style.display = 'none'
  else bridge.style.display = 'block'
})

