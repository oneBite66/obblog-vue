<template>
  <div id="parent">
    <form @submit.prevent="submit">
      <input class="input-title" placeholder="写标题啊，bitch!" v-model="inputText.title"/>
      <input class="input-content" placeholder="写正文啊，狗蛋儿" v-model="inputText.content"/>
      <button>提交</button>
    </form>
    
    
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'post-detail',
    data () {
      return {
        inputText: {}
      }
    },
    methods: {
      submit: function () {
        console.log('hahahaha ', document.cookie.split(';')[0])
        const csrftoken = document.cookie.split(';')[0].split('=')[1]
        axios({
          method: 'post',
          url: 'http://45.76.182.96:7001/v1/posts',
          responseType: 'json',
          data: {
            _csrf: csrftoken
          },
          headers: { 'x-csrf-token': csrftoken }
        })
//        axios.post('http://127.0.0.1:7001/v1/posts', {
//          title: this.inputText.title,
//          content: this.inputText.content
//        })
        .then(function (response) {
          console.log('form has been sent...', response)
        })
        .catch(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  #parent{
    display: inline-block;
  }
  .input-title{
    display: block;
    height:40px;
    width: 800px;
    margin: 60px 0 20px 0;
  }
  .input-content{
    display: block;
    height: 300px;
    width: 800px;
  }
</style>
