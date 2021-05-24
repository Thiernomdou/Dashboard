<template>
  <nav>
      <v-app-bar color="red" dark app>
          <v-app-bar-nav-icon>

          </v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase">
              <span class="font-weight-light">ALL</span>
              <span>ideaPro</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <menu offset-y>
              <template v-slot:activator="{on}">
                  
              </template>
          </menu>
          <v-btn text>
              <span>Quitter</span>
              <v-icon right>exit_to_app</v-icon>
          </v-btn>
      </v-app-bar>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        drawer: true;
        links : [
            {icon : 'Dashboard', text: 'Dashboard', route: '/'},
            {icon : 'folder', text: 'My Projects', route: '/projects'},
            {icon : 'person', text: 'Team', route: '/team'},
        ]
    }
}
</script>

<style>

</style>