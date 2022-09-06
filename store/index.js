export const state = () => ({
    tasks: [
        {
            content: "Get milk",
            done: false
        }
    ]
})

export const mutations = {
    ADD_TASK(state, task) { 
        state.tasks = [{ content: task, done: false}, ...state.tasks]
        //otras formas de agregar
        // state.tasks.push({ content: task, done: false })
        // state.tasks.unshift({ content: task, done: false })
    },
    REMOVE_TASK(state, task) {
        state.task.splice(state.tasks.indexOf(task), 1)
    },
    TOGGLE_TASK(state, task) {
        task.done = !task.done
    }
}