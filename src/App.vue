<template>
  <v-app>
		<v-navigation-drawer
      class="green accent-2"
			:value="value"
    >
      <v-list>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar 
			app
			class="green accent-2" dark>
			<v-app-bar-nav-icon
				@click.stop="value = !value"

			>

			</v-app-bar-nav-icon>
      <div class="d-flex align-center">
  
      </div>

      <v-spacer></v-spacer>


      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>				
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data () {
		return {
			value: false
		}
	},

	methods: {
		
	}
};
</script>
