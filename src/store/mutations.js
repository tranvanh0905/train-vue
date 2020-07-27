// export default {
//     getTask(state, task) {
//         state.newTask = task
//     },
//     addTask(state){
//         state.tasks.push({
//             body: state.newTask,
//             completed: false
//         })
//     },
//     editTask(state, task) {
//         var tasks = state.tasks
//         tasks.splice(tasks.indexOf(task), 1)
//         state.tasks = tasks
//         state.newTask = task.body
//     },
//     removeTask(state, task) {
//         var tasks = state.tasks
//         tasks.splice(tasks.indexOf(task), 1)
        
//     },
//     completeTask(state, task) {
//         task.completed = !task.completed
//     },
//     clearTask(state) {
//         state.newTask = ''
//     }
// }
export default {
    getComment(state, comment) {
        state.newComment = comment
    },
    addComment (state) {
        state.comments.push({
            body: state.newComment,
            completed: false,
        });
        state.newComment = ""
    },
}