import { z } from 'zod'

export const formSchemaRegister = z.object({
  name: z.string(),
  image: z.string().optional(),

  email: z.string().email(),
  password: z.string().min(6),
})

export const formSchemaSignin = formSchemaRegister.pick({
  email: true,
  password: true,
})
