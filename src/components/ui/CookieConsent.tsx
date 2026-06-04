'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CONSENT_KEY = 'pixelhub-consent'
const CONSENT_DURATION = 15 * 24 * 60 * 60 * 1000

interface ConsentData {
  choice: 'accepted' | 'rejected'
  timestamp: number
}

function getConsent(): ConsentData | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    return JSON.parse(raw) as ConsentData
  } catch {
    return null
  }
}

function isExpired(data: ConsentData): boolean {
  return Date.now() - data.timestamp > CONSENT_DURATION
}

export function trackingAllowed(): boolean {
  const data = getConsent()
  return data?.choice === 'accepted'
}

export default function CookieConsent() {
  const [visible] = useState(() => {
    const data = getConsent()
    return !data || isExpired(data)
  })

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice: 'accepted', timestamp: Date.now() }))
    window.location.reload()
  }

  function handleReject() {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice: 'rejected', timestamp: Date.now() }))
    window.location.reload()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[200] bg-deep-contrast border-t border-white/10 shadow-2xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-4 md:py-5 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-sm text-on-surface-variant flex-1 text-center md:text-left">
              Este sitio utiliza cookies propias y de terceros para mejorar tu experiencia,
              analizar el tráfico y mostrar contenido personalizado.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleReject}
                className="px-6 py-2.5 rounded-lg text-sm font-bold transition-transform hover:scale-95 active:scale-90"
                style={{ backgroundColor: '#f59e0b', color: 'white' }}
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 rounded-lg text-sm font-bold transition-transform hover:scale-95 active:scale-90 bg-primary-container text-white"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
