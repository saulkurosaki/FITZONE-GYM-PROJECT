'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  quality?: number
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '100vw',
  fill = false,
  quality = 80,
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [imgSrc, setImgSrc] = useState<string | null>(null)

  useEffect(() => {
    // Usar IntersectionObserver para cargar la imagen solo cuando está cerca del viewport
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && !priority) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsIntersecting(true)
            observer.disconnect()
          }
        },
        { rootMargin: '200px' } // Cargar cuando esté a 200px de entrar en viewport
      )

      const element = document.getElementById(`image-${alt.replace(/\s+/g, '-').toLowerCase()}`)
      if (element) {
        observer.observe(element)
      }

      return () => {
        if (element) {
          observer.unobserve(element)
        }
      }
    } else {
      // Si no hay soporte para IntersectionObserver o es priority, cargar inmediatamente
      setIsIntersecting(true)
    }
  }, [alt, priority])

  useEffect(() => {
    if (isIntersecting || priority) {
      setImgSrc(src)
    }
  }, [isIntersecting, priority, src])

  return (
    <div 
      id={`image-${alt.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn(
        "relative overflow-hidden bg-gray-100",
        !isLoaded && "animate-pulse",
        className
      )}
      style={{ 
        width: fill ? '100%' : width, 
        height: fill ? '100%' : height,
        position: fill ? 'relative' : 'relative',
      }}
    >
      {imgSrc && (
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          quality={quality}
          sizes={sizes}
          fill={fill}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            objectFit === 'cover' && "object-cover",
            objectFit === 'contain' && "object-contain",
            objectFit === 'fill' && "object-fill",
            objectFit === 'none' && "object-none",
            objectFit === 'scale-down' && "object-scale-down",
          )}
        />
      )}
    </div>
  )
}
