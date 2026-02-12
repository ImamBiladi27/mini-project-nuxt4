export default defineEventHandler(async (event) => {
    const id = Number(getRouterParam(event, 'id'))
    console.log("ID:", id)
    const body = await readBody(event)

    globalThis.todos = globalThis.todos || []

    const todo = globalThis.todos.find(t => t.id === id)

    if (!todo) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Todo tidak ditemukan'
        })
    }

    todo.text = body.text

    return { success: true }
})
