import { useEffect } from 'react'

function checkElements() {
  document.querySelectorAll('[data-animate]:not(.in-view)').forEach(el => {
    const { top } = el.getBoundingClientRect()
    if (top < window.innerHeight * 0.92) {
      el.classList.add('in-view')
    }
  })
}

export default function useAnimate() {
  useEffect(() => {
    checkElements()
    window.addEventListener('scroll', checkElements, { passive: true })
    return () => window.removeEventListener('scroll', checkElements)
  }, [])
}
