// let todos = [
//     { id: 1, text: "Belajar Nuxt", done: false }
// ]

// export default defineEventHandler(() => {
//     console.log("get todos", todos)
//     return todos
// })
if (!globalThis.todos) {
    globalThis.todos = [
        { id: 1, text: "Belajar Nuxt", done: false }
    ]
}

export default defineEventHandler(() => {
    console.log("GET todos:", globalThis.todos)
    return globalThis.todos
})
