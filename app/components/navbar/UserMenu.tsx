'use client'

import React, { ReactElement, useState, useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import Avatar from '../Avatar'
import MenuItem from './MenuItem'

const UserMenu = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

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
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className='absolute right-0 top-14 w-[40vw] md:w-3/4 text-sm bg-white rounded-xl shadow-md overflow transition-all ease-in-out duration-100'>
          <div className='flex flex-col cursor-pointer'>
            <>
              <MenuItem label='Login' onClick={() => { }} />
              <MenuItem label='Sign Up' onClick={() => { }} />
            </>
          </div>
        </div>)}
    </div>
  )
}

export default UserMenu