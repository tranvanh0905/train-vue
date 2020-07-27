 <template>
  <div id="get-comment">
    <form @submit.prevent="addComment">
        <div class="form-group">
            <input
            :value="newComment"
            @change="getComment" 
            type="text" 
            class="form-control" 
            placeholder="Please enter your comment">
        </div>
        <button class="btn btn-success float-xs-right" type="submit">Comment</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "GetComment",
  computed: {
    newComment() {
      return this.$store.getters.newComment
    }
  },
  methods: {
    getComment (event) {
      this.$store.dispatch('getComment', event.target.value)
    },
    addComment (event) {
      event.preventDefault();
      this.$store.dispatch('addComment')
    }
  }
};

</script>

<style>
</style>