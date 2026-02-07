let todos = []

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    if (!globalThis.todos) {
        globalThis.todos = []
    }
    const newTodo = {
        id: Date.now(),
        text: body.text,
        done: false
    }
    console.log(body, newTodo)
    globalThis.todos.push(newTodo)
    return newTodo
})