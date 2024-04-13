'use server'

import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const TodoSchema = z.object({
    id: z.string(),
    todo: z.string(),
    created_at: z.string()
})

const CreateTodo = TodoSchema.omit({id : true, created_at: true})

export async function createTodo(formData: FormData){
    const{todo} = CreateTodo.parse({
        todo: formData.get('todo')
    })

    const date = new Date().toISOString()

    try{
        await sql`INSERT INTO todos (todo, created_at) values (${todo}, ${date})`
    }catch(error){
        return {message: 'Falha ao criar todo.'}
    }

    revalidatePath('/todos')
    redirect('/todos')
}

export async function getTodos(){
    try {
        const { rows } = await sql`SELECT * FROM todos`
        return rows
    } catch (error) {
        throw new Error('Falha ao buscar todos no banco de dados.')
    }
}

export async function deleteTodo(id: string){
    try {
        await sql`DELETE FROM todos WHERE id = ${id}`
    } catch (error) {
        return {message: 'Erro ao deletar todo do banco de dados.'}
    }
    revalidatePath('/todos')
}