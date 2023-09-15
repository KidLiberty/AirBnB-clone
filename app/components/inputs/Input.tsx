'use client'

import React, { ReactElement } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  formatPrice?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  required,
  register,
  errors
}): ReactElement => {
  return (
    <div
      className='relative w-full'>
      {formatPrice && (
        <BiDollar
          className='absolute top-5 left-2 text-neutral-700'
          size={24}
        />
      )}
      {/* Input needs empty space placeholder for animation */}
      <input
        className={`
        peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none disabled:opacity-70 disabled:cursor-not-allowed transition        
        ${formatPrice ? 'pl-9' : 'pl-4'}
        ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=' '
        type={type}
      />
      <label className={`
        absolute top-5 origin-[0] text-md transform duration-150 -translate-y-[0.85rem] z-10
        ${formatPrice ? 'left-9' : 'left-4'}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0.5
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
       `}
      >
        {label}
      </label>
    </div>
  )
}

export default Input