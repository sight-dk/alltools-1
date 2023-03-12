import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius, className, gradient}) => {
  return (
    <button type="button" className={`text-${size} p-3 hover:drop-shadow-xl bg-${bgColor} text-${color} rounded-${borderRadius} ${className} ${gradient}`}>
      {text}
    </button>
  )
}

export default Button