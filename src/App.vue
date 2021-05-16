<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class=" bg-grey-2">
      <q-toolbar>
        <q-toolbar-title class="text-center text-black main">
          Hello 👋
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="text-black"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :width="250"
    >
      <q-list>
        <q-item-label header class="text-black text-center "
          ><q-avatar size="75px"> <img src="images/logo.png" /> </q-avatar
        ></q-item-label>
        <router-link to="/"
          ><q-item clickable>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item></router-link
        >
        <router-link to="/about"
          ><q-item clickable>
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>
            <q-item-section>
              <q-item-label>About</q-item-label>
            </q-item-section>
          </q-item></router-link
        >
        <router-link to="/projects"
          ><q-item clickable>
            <q-item-section avatar>
              <q-icon name="work" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Projects</q-item-label>
            </q-item-section>
          </q-item></router-link
        >
        <router-link to="/blogs"
          ><q-item clickable>
            <q-item-section avatar>
              <q-icon name="book" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Blogs</q-item-label>
            </q-item-section>
          </q-item></router-link
        >
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://www.linkedin.com/in/rohit-prasain-33799118b/"
        >
          <q-item-section avatar>
            <q-icon name="linkedin" />
          </q-item-section>
          <q-item-section>
            <q-item-label>LinkedIn</q-item-label>
            <q-item-label caption>@rohitprasain</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://twitter.com/rohitprasain99"
        >
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@rohitprasain99</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://www.facebook.com/hawa.manche.925/"
        >
          <q-item-section avatar>
            <q-icon name="facebook" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@rohitprasain</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
</style>
