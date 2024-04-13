import { getUserByEmail } from "#/actions/users"
import bcrypt from "bcrypt"
import { authConfig } from "./auth.config"
import Credentials from "next-auth/providers/credentials"
import {z} from "zod"
import NextAuth from "next-auth"


const providers = {
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials){
                const parsedCredentials = z.object({
                    email: z.string().email('Insira um e-mail válido'),
                    password: z.string().min(6, 'A senha deve conter no minimo 6 caracteres')
                }).safeParse(credentials)

                if (parsedCredentials.success){
                    const {email, password} = parsedCredentials.data;
                    const user = await getUserByEmail(email);

                    if(!user) return null

                    const passwordMatch = await bcrypt.compare(password, user.password)
                    if(passwordMatch){
                        return user
                    }

                }
                return null
            }
        })
    ]
}

export const { auth, signIn, signOut} = NextAuth(providers)