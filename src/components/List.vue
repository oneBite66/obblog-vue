<template>
  <div>
    <ul>
      <li v-for="item in posts">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    name: 'post-list',
    data () {
      return {
        posts: [
          { post_id: 1, title: 'first title', content: 'first content' },
          { post_id: 2, title: 'second title', content: 'second content' }
        ]
      }
    },
    beforeMount () {
//      this.getPosts()
    },
    methods: {
      getPosts () {
        const self = this
        return axios({
          method: 'get',
          url: 'http://45.76.182.96:7001/v1/posts/',
          responseType: 'json'
        })
          .then(function (response) {
            self.posts = response.data.data.posts
            console.log(self.posts, 'i bet it wont work')
          })
      }
    }
  }
</script>

<style scoped>

</style>
