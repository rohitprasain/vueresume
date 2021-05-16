<template>
  <main>
    <div class="project">
      <h4>My Projects</h4>
    </div>
    <div class="aboutproject">
      <section>
        <div class="project_image">
          <img src="images/adhikariclothing.png" alt="no" />
        </div>
        <div class="projectdescription">
          <h5>AdhikariClothing</h5>
          <h6>Website for a clothing shop</h6>
          <p>Laravel(full stack) and Heroku(deployment)</p>
          <a href="http://adhikariclothing.herokuapp.com/" target="_blank">
            <q-btn color="cyan-6" label="View Project" class="btn"
          /></a>
        </div>
      </section>
      <section>
        <div class="project_image">
          <img src="images/agrotech_nepal.png" alt="no" />
        </div>
        <div class="projectdescription">
          <h5>Agrotech Nepal</h5>
          <h6>Website to buy agriculture tools</h6>
          <p>React, Graphql(Hasura) and Heroku</p>
          <a href="http://agrotechnepal.herokuapp.com/" target="_blank">
            <q-btn color="cyan-6" label="View Project" class="btn"
          /></a>
        </div>
      </section>
      <section>
        <div class="project_image">
          <img src="images/snake_game.png" alt="no" />
        </div>
        <div class="projectdescription">
          <h5>Color changing snake</h5>
          <h6>Snake change color after eating</h6>
          <p>C++ (OOP)</p>
          <a href="snakegame.exe" download>
            <q-btn color="cyan-6" label="View Project" class="btn"
          /></a>
        </div>
      </section>
      <section>
        <div class="project_image">
          <img src="images/kaji_creation.png" alt="no" />
        </div>
        <div class="projectdescription">
          <h5>Kaji Creation</h5>
          <h6>Responsive landing page for company</h6>
          <p>Figma(for design) , Html ,CSS and JavaScript</p>
          <a
            href="https://rohitprasain.github.io/webdesign-garmentdesign/"
            target="_blank"
          >
            <q-btn color="cyan-6" label="View Project" class="btn"
          /></a>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
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
  text-align: center;
  font-family: "Ubuntu Mono", monospace;
  .project {
    text-align: left;
    margin-left: 1rem;
    // font-family: "Langar", cursive;
  }
  h5,
  h6,
  p {
    line-height: 0.1rem;
  }
  .aboutproject {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    section {
      padding: 2rem;

      .project_image {
        img {
          height: 250px;
          width: 350px;
        }
      }
      .btn {
        margin-top: 0.8rem;
      }
    }
  }
}
</style>
