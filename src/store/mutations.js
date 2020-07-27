
export default {
    getComment(state, comment) {
        state.newComment = comment
    },
    addComment (state) {
        if (state.newComment == "") {
            state.errors = [];
            state.errors.push({
                body: "Please enter your comment",
            })
            return false;
        }
        state.errors = [];
        state.comments.push({
            body: state.newComment,
            completed: false,
        });
        state.newComment = ""
    },
}