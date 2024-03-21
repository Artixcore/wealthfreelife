import { z } from 'zod';

export const userValidationSchema = z.object({
  body: z.object({
    fullName: z.string({
      required_error: 'Full name is required.',
      invalid_type_error: 'Full name must be a string.',
    }),
    email: z
      .string({
        required_error: 'Email is required.',
        invalid_type_error: 'Email must be a string.',
      })
      .email('Invalid email format.'),
    phoneNumber: z.string({
      required_error: 'Phone number is required.',
      invalid_type_error: 'Phone number must be a string.',
    }),
    avatar: z.string({
      required_error: 'Avatar URL is required.',
      invalid_type_error: 'Avatar URL must be a string.',
    }),
  }),
});