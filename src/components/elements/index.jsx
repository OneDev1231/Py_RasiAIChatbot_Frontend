import React from 'react'

export const Button = ({children, className, type, onClick, disabled}) => {
  return (
    <button className={`bg-blue-500 text-white px-5 py-2 rounded-md ${className}`}
        type={type || 'button'} onClick={onClick} disabled={disabled}
    >
        {children}
    </button>
  )
}

export const Input = ({type, placeholder, className, onChange = () => {}, value}) => {
    className = className ? className : '';

    return (
        <input type={type} placeholder={placeholder} className={`border px-3 py-2 rounded-md ${className}`} 
            onChange={onChange} value={value || ''}
        />
    )
}
