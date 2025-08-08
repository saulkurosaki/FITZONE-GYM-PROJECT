import { Loader2 } from 'lucide-react'

interface LoadingFallbackProps {
  height?: string
}

export function LoadingFallback({ height = "100vh" }: LoadingFallbackProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center bg-gray-50 text-gray-500"
      style={{ height }}
    >
      <Loader2 className="h-10 w-10 animate-spin mb-4" />
      <p className="text-sm">Cargando contenido...</p>
    </div>
  )
}
