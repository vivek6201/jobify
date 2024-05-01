import prisma, { PrismaAdapter } from "@repo/db/src/index"
import Credentials from "next-auth/providers/credentials"
import bcryptjs from "bcryptjs";
import NextAuth, { type DefaultSession } from "next-auth"
import { loginValidations } from "@repo/validations/src/index";
import resend from "next-auth/providers/resend";

declare module "next-auth" {
    /**
     * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            role: "user" | "recruiter",
            image?: string
        } & DefaultSession["user"]
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: { label: "Email", placeholder: "Enter your email", type: "text" },
                password: { label: "Password", placeholder: "Enter the Password", type: "password" },
            },
            authorize: async (credentials) => {
                const { email, password } = await loginValidations.parseAsync(credentials)

                // logic to verify if user exists
                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })

                if (!user) return null

                const verifyPass = await bcryptjs.compare(password, user.password!);

                if (!verifyPass) return null;

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    image: user.image
                }
            },
        }),
        resend
    ],
})