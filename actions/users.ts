'use server'

import { sql } from "@vercel/postgres"
import { object, z } from "zod"
import bcrypt from "bcrypt"
import { redirect } from "next/navigation"
import { user } from "#/types/user"
import { signIn } from "#/app/auth/providers"

const UserSchema = z.object({
    id: z.string(),
    name: z
        .string({required_error: 'O nome é obrigatório'})
        .min(3, 'O nome deve conter pelo menos 3 caracteres'),
    email: z.string().email('Insira um e-mail válido'),
    password: z.string().min(8, 'A senha deve conter no minimo 8 caracteres'),
    image: z.string(),
    role: z.string()
})

const CreateUser = UserSchema.omit({id: true, image: true, role: true})

type CreateUserState = {
    errors?:{
       name?: string[] 
       email?: string[] 
       password?: string[] 
    }
}

export async function createUser(state: CreateUserState, formData: FormData){
    const validatedFields = CreateUser.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    })

    if(!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Preencha todos os campos'
        }
    }

    const {name, email, password} = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)
    const githubImage = `https://github.com/${name}.png`
    const role = 'user'

    try {
        await sql`
            INSERT INTO users (name, email, password, image, role)
            VALUES (${name}, ${email}, ${hashedPassword}, ${githubImage}, ${role})
        `
    } catch (error) {
        return{message: 'Falha ao inserir usuário no banco de dados'}
    }

    redirect('/auth/login')
}

export async function getUserByEmail(email: string){
    try {
        const {rows} = await sql<user>`SELECT * FROM users WHERE email = ${email}`
        return rows[0]
    } catch (error) {
        throw new Error('Este usuário não existe')
    }
}

export async function authenticate(state: string | undefined, formData: FormData){
    try {
        await signIn('credentials', Object.fromEntries(formData))
    } catch (error) {
        if((error as Error).message.includes('CredentialsSignIn')) return 'CredentialsSignin'
        throw error
    }
}