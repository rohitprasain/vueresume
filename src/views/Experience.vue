<template>
  <div class="mainexperience">
    <div class="info">
      <h4>Experience</h4>
    </div>

    <div class="description">
      <ul>
        <h5><li>Intern at ITGlance (Full Stack)</li></h5>
        <h5><li>One year experience as web developer</li></h5>
        <h5><li>Bsc. CSIT from Tribhuvan University</li></h5>
        <h5><li>+2 Science</li></h5>
      </ul>
    </div>
    <h4>Gallery</h4>
    <div class="slider">
      <q-carousel
        animated
        v-model="slide"
        navigation
        control-color="black"
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        height="600px"
      >
        <q-carousel-slide :name="1" img-src="/images/certificates/c6.jpg" />
        <q-carousel-slide :name="2" img-src="/images/certificates/c5.jpg" />
        <q-carousel-slide :name="3" img-src="/images/certificates/c4.jpg" />
        <q-carousel-slide :name="4" img-src="/images/certificates/c3.jpg" />
        <q-carousel-slide :name="5" img-src="/images/certificates/c2.jpg" />
        <q-carousel-slide :name="6" img-src="/images/certificates/c1.jpg" />
      </q-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      autoplay: true,
    };
  },
  created() {
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style scoped lang="scss">
.mainexperience {
  font-family: "Ubuntu Mono", monospace;
  margin-left: 1rem;

  .slider {
    margin-bottom: 3rem;
  }
  img {
    height: 100px;
  }
  .description {
    margin-bottom: 7rem;
  }
}
</style>
