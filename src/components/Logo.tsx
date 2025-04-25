import React from 'react'
import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'medium' }) => {
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl'
  }

  return (
    <Link to="/" className={`${className}`}>
      <span className={`font-bold ${sizeClasses[size]}`}>
        Can<span className="text-primary">max</span>
      </span>
    </Link>
  )
}

export default Logo 