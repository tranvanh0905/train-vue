 <template>
  <div id="list-comment">
    <div class="justify-content-center mt-100 mb-100">
    <div class="col-lg-12">
        <div class="overflow-auto" style="height:400px">
            <div class="card-body text-center">
                <h4 class="card-title">Latest Comments</h4>
            </div>
            <div 
            v-for="(comment, index) in comments" v-bind:key="index"
            class="comment-widgets">
                <!-- Comment Row -->
                <div class="d-flex flex-row comment-row m-t-0">
                    <div class="p-2"><img src="https://picsum.photos/200" alt="user" width="50" class="rounded-circle"></div>
                    <div class="comment-text w-100">
                        <h6 class="font-medium">Guest</h6>
                         <span class="m-b-15 d-block">{{comment.body}}</span>
                    </div>
                </div> <!-- Comment Row -->
                
            </div> <!-- Card -->
                    
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "ListComment",
  computed: {
      comments () {
          return this.$store.getters.comments
      },
      newComment () {
          return this.$store.getters.newComment
      }
  }
};
</script>

<style>
</style>