
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