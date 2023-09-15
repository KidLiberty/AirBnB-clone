'use client'

import React, { ReactElement } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon
}): ReactElement => {
  return (
    <button className={`
      relative w-full rounded-lg hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed transition
      ${outline ? 'bg-white' : 'bg-rose-500'}
      ${outline ? 'border-black' : 'bg-rose-500'}
      ${outline ? 'text-black' : 'text-white'}
      ${small ? 'py-1' : 'py-3'}
      ${small ? 'text-sm' : 'text-md'}
      ${small ? 'font-light' : 'font-semibold'}
      ${small ? 'border' : 'border-2'}
      ${small ? 'border' : 'border-2'}
    `}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && (
        <Icon
          className='absolute left-4 top-3'
          size={24}
        />
      )}
      {label}
    </button>
  )
}

export default Button