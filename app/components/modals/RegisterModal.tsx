'use client'

import React, { ReactElement, useState, useCallback } from 'react'
import axios from 'axios'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'

const RegisterModal = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(false)
  const registerModal = useRegisterModal()

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true)

    axios.post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch(err => {
        return new Error(`Error: ${err}`)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}

export default RegisterModal