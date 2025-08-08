'use client'

import { useEffect } from 'react'
import { usePreloadImages } from '@/hooks/use-preload-images'

// Componente para precargar recursos críticos
export function Preload() {
  // Precargar imágenes críticas
  usePreloadImages([
    '/modern-gym-interior.png',
  ], true)

  // Precargar imágenes secundarias
  usePreloadImages([
    '/young-woman-headshot.png',
    '/young-man-smiling-headshot.png',
    '/latina-professional-headshot.png',
    '/young-asian-man-headshot.png',
    '/young-woman-curly-hair-headshot.png',
    '/middle-aged-man-headshot.png',
  ], false)

  // Precargar fuentes críticas
  useEffect(() => {
    const fontLinks = [
      { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    ]

    fontLinks.forEach(font => {
      const link = document.createElement('link')
      Object.entries(font).forEach(([key, value]) => {
        link.setAttribute(key, value)
      })
      document.head.appendChild(link)
    })
  }, [])

  return null
}
