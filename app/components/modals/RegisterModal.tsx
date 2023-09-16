'use client'

import React, { ReactElement, useState, useCallback } from 'react'
import axios from 'axios'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast/headless'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import Button from '../Button'

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
      .catch(error => {
        toast.error('Something Went Wrong')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContent: ReactElement = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Airbnb' subtitle='Create an account!' />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        type='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent: ReactElement = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        label='Continue with Google'
        icon={FcGoogle}
        outline
        onClick={() => { }}
      />
      <Button
        label='Continue with Github'
        icon={AiFillGithub}
        outline
        onClick={() => { }}
      />
      <div className='mt-4 text-neutral-500 text-center font-light'>
        <div className='flex flex-row justify-center items-center gap-2'>
          <div>
            Already have an account?
          </div>
          <div
            className='text-neutral-800 cursor-pointer hover:underline'
            onClick={registerModal.onClose}
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal