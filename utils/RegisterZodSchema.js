const { z, string } = require("zod");

    // Zod Validation
    export const signUpSchema = z.object({
        fullname: string().trim().min(1, 'Name must not be empty'),
        email: string().email(),
        password: string().regex(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          'Password must containat least on uppercase letter, one lowercase letter, one digit'
        )
      })