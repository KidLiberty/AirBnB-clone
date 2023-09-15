'use client' // Use client parent for package

import React, { ReactElement } from 'react'
import { Toaster } from 'react-hot-toast'

const ToasterProvider = (): ReactElement => <Toaster />

export default ToasterProvider