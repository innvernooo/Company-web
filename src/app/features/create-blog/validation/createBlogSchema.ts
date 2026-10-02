import * as z from 'zod';

export const blogSchema = z.object({
  name: z.string().min(1, 'Can not be less than 1 character'),
  title: z
    .string()
    .min(1, 'Can not be less than 1 character')
    .max(70, 'Maximum input is 70 characters'),
  blog: z
    .string()
    .min(20, 'Can not be less than 20 characters')
    .max(2000, 'Maximum input is 2000 characters'),
});

export type blogRequest = z.infer<typeof blogSchema>;
