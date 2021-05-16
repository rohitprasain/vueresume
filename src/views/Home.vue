<template>
  <main>
    <h4>I'm</h4>
    <h4 class="name">Rohit Prasain</h4>
    <h5>Beginner Level Full stack developer</h5>
    <h5>Kathmandu,Nepal</h5>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Langar&family=Ubuntu+Mono:wght@700&display=swap");
main {
  margin-top: 10rem;
  text-align: center;
  font-family: "Ubuntu Mono", monospace;
  font-weight: bold;
  align-items: center;
  .name {
    font-family: "Langar", cursive;
  }
}
</style>
