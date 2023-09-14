'use client'

import React, { ReactElement, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import Avatar from '../Avatar'

const UserMenu = (): ReactElement => {
  const [isOpen, setIsOoen] = useState(true)
  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          className='hidden md:block py-3 px-4 text-sm font-semibold rounded-full hover:bg-neutral-100 cursor-pointer transition'
          onClick={() => { }}
        >
          Airbnb your home
        </div>
        <div
          className='flex flex-row items-center gap-3 p-4 md:py-1 md:px-3 border border-neutral-200 rounded-full hover:shadow-md cursor-pointer transition'
          onClick={() => { }}
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu