'use client'

import React, { ReactElement, useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}

// This checks whether we are in Server-Side Rendering or not and protects against hydration
const ClientOnly = ({ children }: ClientOnlyProps): ReactElement | null => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <>
      {children}
    </>
  )
}

export default ClientOnly