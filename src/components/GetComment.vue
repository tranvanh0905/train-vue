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
        <span style="color:red" v-for="(error, index) in errors" v-bind:key="index">{{error.body}}</span>
    </form>
  </div>
</template>

<script>
export default {
  name: "GetComment",
  computed: {
    newComment() {
      return this.$store.getters.newComment
    },
    errors () {
      return this.$store.getters.errors
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