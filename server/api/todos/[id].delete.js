export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'id')

    if (!globalThis.todos) {
        globalThis.todos = []
    }

    const deleteTodo = globalThis.todos.find(
        (todo) => todo.id == id
    )

    globalThis.todos = globalThis.todos.filter(
        (todo) => todo.id != id
    )

    console.log("DELETE:", id)
    console.log("SISA:", globalThis.todos)

    return deleteTodo || { message: "tidak ditemukan" }
})
