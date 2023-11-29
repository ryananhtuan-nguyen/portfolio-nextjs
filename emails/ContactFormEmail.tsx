import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  render,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
import { Form } from '@/lib/form-schema'

export const ContactFormEmail = ({ message, senderEmail }: Form) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export const ContactEmailHTML = (props: Form) =>
  render(<ContactFormEmail {...props} />, {
    pretty: true,
  })
