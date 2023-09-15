'use client'

import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import Button from '../Button'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryActionLabel?: string
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel
}: ModalProps): ReactElement | null => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) return

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) return

    onSubmit()
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return

    secondaryAction()
  }, [disabled, secondaryAction])

  if (!isOpen) return null

  return (
    <>
      <div className='fixed inset-0 flex justify-center items-center bg-neutral-800/70 overflow-x-hidden overflow-y-auto outline-none focus:outline-none z-50'>
        <div className='relative w-full h-full md:h-auto lg:h-auto md:w-4/6 lg:w-3/6 xl:w-2/5 mx-auto my-6'>
          {/* CONTENT */}
          <div className={`
            h-full translate duration-300 
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div className="relative w-full h-full flex flex-col lg:h-auto md:h-auto bg-white border-0 shadow-lg outline-none focus:outline-none translate rounded-md">
              {/* HEADER */}
              <div className='relative flex justify-center items-center p-6 border-b rounded-t'>
                <button
                  className='absolute left-9 p-1 border-0 hover:opacity-70 transition'
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className='text-lg fond-semibold'>
                  {title}
                </div>
              </div>

              {/* BODY */}
              <div className='relative flex-auto p-6'>
                {body}
              </div>

              {/* FOOTER */}
              <div className='flex flex-col p-6 gap-2 rounded-b'>
                <div className='w-full flex flex-row items-center gap-4'>
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal