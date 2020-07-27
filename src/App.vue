<template>
  <div id="app">
    <div class="container">
      <Navbar></Navbar>
      <div class="row">
        <div class="col-6">
      <ImageVue></ImageVue>
        </div>
        <div class="col-6">
          <ListComment></ListComment>
          <GetComment></GetComment>
        </div>
      </div>
    </div> 
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ImageVue from './components/Image'
import GetComment from './components/GetComment'
import ListComment from './components/ListComment'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ImageVue,
    GetComment,
    ListComment
  }
}
</script>
