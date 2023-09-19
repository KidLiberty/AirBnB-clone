'use client'

import React, { ReactElement, useState, useCallback } from 'react'
import { signOut } from 'next-auth/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { SafeUser } from '@/app/types'

import Avatar from '../Avatar'
import MenuItem from './MenuItem'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu = ({ currentUser }: UserMenuProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const toggleOpen = useCallback(() => {
    setIsOpen(prevValue => !prevValue)
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
            {currentUser ? (
              <>
                <MenuItem label='My Trips' onClick={() => { }} />
                <MenuItem label='My favorites' onClick={() => { }} />
                <MenuItem label='My Properties' onClick={() => { }} />
                <MenuItem label='Airbnb my home' onClick={() => { }} />
                <hr />
                <MenuItem label='Logout' onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label='Login' onClick={loginModal.onOpen} />
                <MenuItem label='Sign Up' onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>)
      }
    </div >
  )
}

export default UserMenu