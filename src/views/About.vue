<template>
  <div class="mainproject">
    <div class="topic">
      <h4>Technical Skills</h4>
    </div>
    <h5>Frontend</h5>
    <div class="frontend">
      <div class="skills">
        <q-circular-progress
          show-value
          font-size="10px"
          class="q-ma-md"
          :value="vueValue"
          size="72px"
          :thickness="0.15"
          color="green"
          track-color="grey-3"
        >
          <q-avatar size="58px">
            <img src="images/vue.png" />
          </q-avatar>
        </q-circular-progress>
        <p>Vue</p>
      </div>
      <div class="skills">
        <q-circular-progress
          show-value
          font-size="10px"
          class="q-ma-md"
          :value="reactValue"
          size="72px"
          :thickness="0.15"
          color="blue-7"
          track-color="grey-3"
        >
          <q-avatar size="60px">
            <img src="images/react.png" />
          </q-avatar>
        </q-circular-progress>
        <p>React</p>
      </div>
    </div>
    <h5>Backend</h5>
    <div class="backend">
      <div class="skills">
        <q-circular-progress
          show-value
          font-size="10px"
          class="q-ma-md"
          :value="laravelValue"
          size="72px"
          :thickness="0.15"
          color="red-7"
          track-color="grey-3"
        >
          <q-avatar size="60px">
            <img src="images/laravel.svg" />
          </q-avatar>
        </q-circular-progress>
        <p>Laravel</p>
      </div>
      <div class="skills">
        <q-circular-progress
          show-value
          font-size="10px"
          class="q-ma-md"
          :value="nodeValue"
          size="72px"
          :thickness="0.15"
          color="green-7"
          track-color="grey-3"
        >
          <q-avatar size="60px">
            <img src="images/nodejs.png" />
          </q-avatar>
        </q-circular-progress>
        <p>NodeJS</p>
      </div>
    </div>

    <h5>Languages</h5>
    <div class="familiar">
      <div class="language">
        <q-circular-progress
          show-value
          font-size="10px"
          class="q-ma-md"
          :value="cValue"
          size="72px"
          :thickness="0.15"
          color="blue-8"
          track-color="grey-3"
        >
          <q-avatar size="50px">
            <img src="images/c.png" />
          </q-avatar>
        </q-circular-progress>
        <p>C</p>
      </div>
      <div class="language">
        <q-circular-progress
          show-value
          font-size="10px"
          class="q-ma-md"
          :value="pythonValue"
          size="72px"
          :thickness="0.15"
          color="yellow-10"
          track-color="grey-3"
        >
          <q-avatar size="50px">
            <img src="images/python.png" />
          </q-avatar>
        </q-circular-progress>
        <p>Python</p>
      </div>
      <div class="language">
        <q-circular-progress
          show-value
          font-size="10px"
          class="q-ma-md"
          :value="cplusValue"
          size="72px"
          :thickness="0.15"
          color="blue-8"
          track-color="grey-3"
        >
          <q-avatar size="50px">
            <img src="images/cplus.png" />
          </q-avatar>
        </q-circular-progress>
        <p>C++</p>
      </div>

      <div class="language">
        <q-circular-progress
          show-value
          font-size="10px"
          class="q-ma-md"
          :value="jsValue"
          size="72px"
          :thickness="0.15"
          color="yellow-8"
          track-color="grey-3"
        >
          <q-avatar size="50px">
            <img src="images/js.png" />
          </q-avatar>
        </q-circular-progress>
        <p>Javascript</p>
      </div>
      <div class="language">
        <q-circular-progress
          show-value
          font-size="10px"
          class="q-ma-md"
          :value="javaValue"
          size="72px"
          :thickness="0.15"
          color="blue-5"
          track-color="grey-3"
        >
          <q-avatar size="50px">
            <img src="images/java.png" />
          </q-avatar>
        </q-circular-progress>
        <p>Java</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      vueValue: 85,
      reactValue: 70,
      laravelValue: 90,
      nodeValue: 60,
      cValue: 80,
      cplusValue: 80,
      pythonValue: 80,
      jsValue: 80,
      javaValue: 80,
    };
  },
};
</script>

<style lang="scss" scoped>
.mainproject {
  font-family: "Ubuntu Mono", monospace;
  h5 {
    font-family: "Langar", cursive;
  }
  margin-left: 1rem;
  .frontend,
  .backend,
  .familiar {
    display: flex;
    justify-content: space-around;
  }
  .skills,
  .language {
    max-width: 130px;
    // border: 2px solid red;
    p {
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
    }
  }
  .familiar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
