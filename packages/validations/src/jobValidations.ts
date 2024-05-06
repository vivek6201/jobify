import { z } from "zod"

export const jobValidations = z.object({
    companyName: z.string().min(2),
    jobTitle: z.string().min(2).max(50),
    jobDescription: z.string().min(3),
    lastDateToApply: z.date({
        required_error: "A date of birth is required.",
    }),
    isPaid: z.boolean().optional(),
    salary: z.number().optional(),
    jobType: z.enum(["FullTime", "Internship"]),
    duration: z.string().optional(),
    officeLocation: z.string(),
    workMode: z.enum(["Onsite", "Remote"],{message:"This is a required field"}),
})

export type JobValidationsType = z.infer<typeof jobValidations> 