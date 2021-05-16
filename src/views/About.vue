<template>
  <div class="about">
    <h1>This is an about page</h1>

    <q-circular-progress
      show-value
      font-size="10px"
      class="q-ma-md"
      :value="value"
      size="80px"
      :thickness="0.2"
      color="primary"
      track-color="grey-3"
    >
      <q-avatar size="70px">
        <img src="images/mypic.jpg" />
      </q-avatar>
    </q-circular-progress>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      value: 71,
    };
  },
};
</script>
