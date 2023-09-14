'use client'

import React, { ReactElement } from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = (): ReactElement => {
  return (
    <div className='w-full md:w-auto py-2 border rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className='flex flex-row items-center justify-between'>
        <div className='px-6 text-sm font-semibold'>
          Anywhere
        </div>
        <div className='hidden sm:block flex-1 px-6 text-sm text-center font-semibold border-x'>
          Any Week
        </div>
        <div className='flex flex-row items-center gap-3 pl-6 pr-2 text-sm'>
          <div className='hidden sm:block'>Add Guests</div>
          <div className='p-2 text-white bg-rose-500 rounded-full'>
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search