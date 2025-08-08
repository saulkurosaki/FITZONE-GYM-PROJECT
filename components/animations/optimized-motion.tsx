'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import { useInView } from 'framer-motion'

interface OptimizedMotionProps extends MotionProps {
  children: ReactNode
  className?: string
  threshold?: number
  margin?: string
  once?: boolean
  asChild?: boolean
  tag?: keyof JSX.IntrinsicElements
}

// Componente que solo anima cuando está en viewport para ahorrar recursos
export function OptimizedMotion({
  children,
  className,
  threshold = 0.1,
  margin = "-100px",
  once = true,
  asChild = false,
  tag = 'div',
  ...motionProps
}: OptimizedMotionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    margin,
    amount: threshold,
  })

  // Solo aplicar animaciones cuando el elemento está en viewport
  const optimizedProps = isInView ? motionProps : {}
  
  const MotionTag = motion[tag as keyof typeof motion] || motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      {...optimizedProps}
    >
      {children}
    </MotionTag>
  )
}
