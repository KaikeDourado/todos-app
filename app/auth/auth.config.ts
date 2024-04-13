import type { NextAuthConfig } from "next-auth"

export const authConfig = { 
    pages: {signIn: '/auth/login'},
    callbacks:{
        authorized({auth, request: {nextUrl}}){
            const isLoggedIn = !!auth?.user
            const isPrivateRouter = nextUrl.pathname.startsWith('/private')
            const isAuthRouters = nextUrl.pathname.startsWith('/auth')

            if(!isLoggedIn && isPrivateRouter){
                return false
            }

            if(isLoggedIn && isAuthRouters){
                return Response.redirect(new URL('/private', nextUrl))
            }

            return true
        },
        jwt({token, user}){
            if(user) token.role = user.role
            console.log('token: ', token)
            return token
        },
        session({session}){
            return session
        }
    },
    providers: []
} as NextAuthConfig