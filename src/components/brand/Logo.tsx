import React from 'react'
import logoImage from '@/assets/Join Me Community Logo.png'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const Logo: React.FC<LogoProps> = ({
  className,
  showTagline = false,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-20 w-auto',
  }

  const textClasses = {
    sm: 'text-lg font-bold',
    md: 'text-2xl font-bold',
    lg: 'text-3xl font-extrabold',
  }

  return (
    <div className={cn('flex flex-col items-center select-none', className)}>
      <div className="flex items-center gap-3">
        <img
          src={logoImage}
          alt="Join Me Logo"
          className={cn('object-contain', sizeClasses[size])}
        />
        <span className={cn('tracking-tight text-navy', textClasses[size])}>
          Join Me
        </span>
      </div>
      {showTagline && (
        <p className="mt-1 text-xs md:text-sm text-muted-foreground font-medium text-center">
          One place. Everyone connected.
        </p>
      )}
    </div>
  )
}

export default Logo
