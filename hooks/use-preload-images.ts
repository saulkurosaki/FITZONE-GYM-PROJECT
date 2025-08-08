'use client'

import { useEffect } from 'react'
import { preloadImage } from '@/lib/utils'

export function usePreloadImages(imageSrcs: string[], priority: boolean = false) {
  useEffect(() => {
    if (!priority) {
      // Si no es prioritario, usar requestIdleCallback para precargar cuando el navegador esté inactivo
      const preloadImages = () => {
        imageSrcs.forEach(src => {
          preloadImage(src).catch(() => {
            // Silenciar errores de precarga
            console.warn(`Failed to preload image: ${src}`)
          })
        })
      }

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(preloadImages)
      } else {
        // Fallback para navegadores que no soportan requestIdleCallback
        setTimeout(preloadImages, 200)
      }
    } else {
      // Si es prioritario, precargar inmediatamente
      imageSrcs.forEach(src => {
        preloadImage(src).catch(() => {
          console.warn(`Failed to preload image: ${src}`)
        })
      })
    }
  }, [imageSrcs, priority])
}
