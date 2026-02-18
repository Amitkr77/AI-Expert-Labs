import React from 'react'
import './Button.css'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        btn
        btn-${variant}
        btn-${size}
        ${fullWidth ? 'btn-full' : ''}
        ${disabled ? 'btn-disabled' : ''}
      `}
    >
      {children}
    </button>
  )
}

export default Button