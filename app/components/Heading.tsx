'use client'

import React, { ReactElement } from 'react'

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }): ReactElement => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className='text-2xl fond-bold'>
        {title}
      </div>
      <div className="mt-2 font-light text-neutral-500">
        {subtitle}
      </div>
    </div>
  )
}

export default Heading