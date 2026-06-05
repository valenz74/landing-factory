// PixelHub — Scroll reveal animation hook
// Owner: Jose Valenzuela — josevalenzuelamolina@proton.me

'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add(
      'transition-all',
      'duration-1000',
      'translate-y-10',
      'opacity-0'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100')
            entry.target.classList.remove('translate-y-10')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}
