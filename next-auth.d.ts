import NextAuth, {type DefaultSession, DefaultJWT} from "next-auth"

declare module 'next-auth' {
    interface User {
        id: string
        name: string
        email: string
        image?: string | null
        role: string
    }

    interface Session {
        user: {
            role: string
        } & DefaultSession[user]
    }
}