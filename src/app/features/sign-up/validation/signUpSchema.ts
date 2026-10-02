import * as z from 'zod';

export const signUpSchema = z.object({
  email: z.email().min(1, 'Enter your valid Email'),
  username: z
    .string()
    .min(1, 'Can not be less than 1 character')
    .max(50, 'Maximum input is 50 characters'),
  password: z
    .string()
    .min(8, 'Can not be less than 8 characters')
    .regex(/[0-9]/, 'Use a combination of letters and numbers.'),
});

export type signUpRequest = z.infer<typeof signUpSchema>;
