'use client'

import React, { ReactElement } from 'react'

interface MenuItemProps {
  label: string
  onClick: () => void
}

const MenuItem = ({ label, onClick }: MenuItemProps): ReactElement => {
  return (
    <div
      className='px-4 py-3 font-semibold hover:bg-neutral-100 transition'
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default MenuItem