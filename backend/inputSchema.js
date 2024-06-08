const { z } = require("zod");

const signupSchema = z.object({
    userName: z.string().min(1, "user name is required"),
    password: z.string().min(1, "password is required"),
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required")
});

module.exports = { signupSchema }
