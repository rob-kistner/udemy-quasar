<template>

  <q-layout
    view="hHh lpR fFf"
    >

    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          <h5>
            Awesome<span class="text-cyan-3 text-bold"><q-icon name="done" />TODO</span>
          </h5>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
          />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
      >
      <q-list dark>
        <q-item
          v-for="nav in navs"
          :to="nav.to"
          :key="nav.label"
          class="text-grey-4"
          clickable
          exact
          >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
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
  name: "Layout",
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: "ToDo",
          icon: "list",
          to: "/"
        },
        {
          label: "Settings",
          icon: "settings",
          to: "/settings"
        },
        {
          label: "About",
          icon: "info",
          to: "/about"
        },
      ]
    };
  }
};
</script>

<style lang="stylus">

  // hide/show nav elements dependent on screen size
  @media screen and (min-width: 768px)
    .q-footer
      display: none
  @media screen and (max-width: 767px)
    #btn_menu
      display: none

  // link color changes
  .q-drawer .q-router-link--exact-active
    color: white !important

</style>
