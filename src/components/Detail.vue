<template>
  <div>
    <div class="title">
      {{ post.title }}
    </div>
    <div class="content">
      {{ post.content }}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    name: 'post-detail',
    data () {
      return {
        post: {
          post_id: 1,
          title: 'the title is: mofo',
          content: 'the content is: hahaha'
        }
      }
    },
    beforeMount () {
//      this.getPost()
    },
    methods: {
      getPost () {
        console.log('show data', this.post.title)
        const self = this
        return axios({
          method: 'get',
          url: 'http://45.76.182.96:7001/v1/posts/1',
          responseType: 'json'
        })
          .then(function (response) {
            console.log('it fucking works....', response.data.post.title)
            self.post.title = response.data.post.title
            self.post.content = response.data.post.content
          })
          .catch(function (error) {
            console.error(error)
          })
      }
    }
  }
</script>

<style scoped>

</style>
