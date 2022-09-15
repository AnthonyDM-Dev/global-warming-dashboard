const useAnimations = () => {
  const fadeInElement = (el, content) => {
    return new Promise((resolve, reject) => {
      el.addEventListener('animationend', () => {
        return resolve()
      })
      if (content) {
        el.innerHTML = content
      }
      setClass(el, 'fade-in', 'fade-out')
    })
  }

  const fadeOutElement = (el) => {
    return new Promise((resolve, reject) => {
      el.addEventListener('animationend', () => {
        return resolve()
      })
      setClass(el, 'fade-out', 'fade-in')
    })
  }

  const fadeOutSlideElement = (el, direction) => {
    return new Promise((resolve, reject) => {
      el.addEventListener('animationend', () => {
        return resolve()
      })
      setClass(el, 'fade-out-slide-' + direction, 'fade-out-slide-' + direction)
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const setClass = (el, classToAdd, classToDelete) => {
    if (classToDelete.length) {
      delClass(el, classToDelete)
    }
    return el.classList.add(classToAdd)
  }

  const delClass = (el, classToDelete) => {
    if (el.classList.contains(classToDelete)) {
      el.classList.toggle(classToDelete)
    }
  }

  return {
    fadeInElement,
    fadeOutElement,
    fadeOutSlideElement,
    scrollToTop,
    setClass,
    delClass
  }
}

export default useAnimations
