<template>
  <div id="app">
    <Navbar />
    <div class="root-content">
      <Header />
      <Skills />  
      <Projects />
      <About />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'

export default {
  components: {
    Header,
    Navbar,
    Skills,
    Projects,
    About
  },
  data() {
    return {
      timer: null,
      lastHash: ''
    }
  },
  mounted() {
    this.lastHash = window.location.hash
    this.timer = setInterval(function () {
      if (window.location.hash != this.lastHash) {
        this.lastHash = window.location.hash
        if (this.lastHash == null || this.lastHash.length === 0) {
          return
        }
        const section = this.lastHash.slice(1)
        const element = document.getElementById(section)
        if (element == null) {
          return
        }
        const top = element.offsetTop - 40
        window.scrollTo({
          left: 0,
          top,
        })
      }
    }, 200)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="less" scoped>
.root-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
