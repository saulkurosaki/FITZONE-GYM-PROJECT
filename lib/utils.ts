import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Función para determinar si estamos en el servidor o cliente
export function isServer() {
  return typeof window === 'undefined'
}

// Función para determinar si el navegador soporta IntersectionObserver
export function supportsIntersectionObserver() {
  if (isServer()) return false
  return 'IntersectionObserver' in window
}

// Función para determinar si el usuario prefiere reducir el movimiento
export function prefersReducedMotion() {
  if (isServer()) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Función para cargar scripts de manera asíncrona
export function loadScript(src: string, id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.id = id
    script.src = src
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
    document.body.appendChild(script)
  })
}

// Función para precargar imágenes
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to preload image: ${src}`))
    img.src = src
  })
}
