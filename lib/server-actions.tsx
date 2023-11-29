'use server'

import { Resend } from 'resend'
import { Form } from './form-schema'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (value: Form) => {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ryan.nguyen0720@gmail.com',
      subject: 'Message from contact form',
      reply_to: value.senderEmail,
      text: value.message,
    })
    if (!response.id) {
      throw new Error('Failed to sent message, Internal Server Error')
    }

    return { error: null }
  } catch (error) {
    console.error('Some thing went WRONG', error)
    return { error: 'Something went wrong' }
  }
}
