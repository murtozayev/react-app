import { z } from "zod"

const userSchema = z.object({
    username: z.string()
        .min(3, "Username 3 tadan kam bo'lmasligi lozim")
        .max(12, "Username 12 tadan ko'p bo'lmasligi lozim")
        .regex(/^[a-z0-9]+$/, "Faqat kichik harflar va raqamlar bo'lishi lozim"),

    email: z.string()
        .min(11, "11 tadan kam bo'lmasligi kerak")
        .email("Email noto'g'ri formatda")
        .refine(value => value.endsWith("@gmail.com"), {
            message: "@gmail.com bilan tugashi lozim",
            path: ["email"]
        }),

    password: z.object({
        pass: z.string()
            .min(4, "Parol 4 tadan kam bo'lmasligi lozim")
            .max(12, "Parol 12 tadan ko'p bo'lmasligi lozim")
            .regex(/^[a-zA-Z0-9]+$/, "Faqat harflar va raqamlardan iborat bo'lishi lozim"),

        conPass: z.string()
            .min(4, "Parol 4 tadan kam bo'lmasligi lozim")
            .max(12, "Parol 12 tadan ko'p bo'lmasligi lozim")
            .regex(/^[a-zA-Z0-9]+$/, "Faqat harflar va raqamlardan iborat bo'lishi lozim")
    }).refine(data => data.conPass === data.pass, {
        message: "Parollar mos kelmayapti",
        path: ["conPass"]
    })
})

export default userSchema;
