<template>
  <main>
    <div class="intro">
      <div class="innerintro">
        <h4>I'm</h4>
        <h4 class="name">Rohit Prasain</h4>
        <h5>Full stack developer</h5>
        <h5>Kathmandu,Nepal</h5>
      </div>
    </div>
    <div class="">
      <About />
    </div>
    <div class="extra">
      <Project />
    </div>
    <div class="extra">
      <Experience />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import "../styles/my.scss";
import About from "../views/About";
import Project from "../views/Projects";
import Experience from "../views/Experience";

export default {
  name: "Home",
  components: { About, Project, Experience },
  data() {
    return {};
  },
  created() {
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style scoped lang="scss">
main {
  // min-height: 90vh;
  // margin-top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-weight: bold;
  .intro {
    .name {
      font-family: "Langar", cursive;
    }
    min-height: 100vh;
    text-align: center;
    display: flex;
    justify-content: space-around;
    // flex-direction: column;
    align-items: center;
  }
  .extra {
    margin-top: 10rem;
  }
}
</style>
