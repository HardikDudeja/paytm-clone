const { z } = require("zod");

const signupSchema = z.object({
    userName: z.string().min(1, "user name is required"),
    password: z.string().min(1, "password is required"),
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required")
});

const loginSchema = z.object({
    userName: z.string().min(1, "email is required"),
    password: z.string().min(1, "password is required")
});

const updateSchema = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional()
}).strict();

module.exports = { signupSchema, loginSchema, updateSchema }
