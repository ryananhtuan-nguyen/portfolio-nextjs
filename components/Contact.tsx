'use client'
import { useSectionInView } from '@/lib/hooks'
import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sendEmail } from '@/lib/server-actions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { formSchema } from '@/lib/form-schema'
import { z } from 'zod'
import { toast } from 'sonner'

const Contact = () => {
  const { ref } = useSectionInView('Contact')

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      senderEmail: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    values
  ) => {
    const result = await sendEmail({
      senderEmail: values.senderEmail,
      message: values.message,
    })
    if (result.error) {
      toast.error('Oops, something went wrong. Please try again!')
    } else {
      toast.success(
        'Message has been sent to my email. I will try to response as soon as possible.'
      )
      reset()
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:ryan.nguyen0720@gmail.com">
          ryan.nguyen0720@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          required
          maxLength={500}
          {...register('senderEmail')}
          disabled={isSubmitting}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={500}
          {...register('message')}
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] text-white bg-gray-900 rounded-full outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
          ) : (
            <>
              Submit{' '}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  )
}

export default Contact
