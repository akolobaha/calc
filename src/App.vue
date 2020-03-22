<template>
	<v-app>
		<!-- <v-navigation-drawer
      class="green accent-2"
			:value="value"
    >
		</v-navigation-drawer> -->
    <v-app-bar 
			app
			class="green accent-2" dark>
			<v-app-bar-nav-icon
				@click="value = !value"
				class="hidden-sm-and-up"
			>

			</v-app-bar-nav-icon>
      <div class="d-flex align-center">
  
      </div>
      <v-spacer></v-spacer>
			<div class="hidden-xs-only">
				<v-btn text small>
					<router-link to="/" tag="button">Home</router-link>
				</v-btn>
				<v-btn text small>
						<router-link to="about" tag="button">Время</router-link>
				</v-btn>
			</div>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>				
    </v-app-bar>
		<v-content>
			<v-container>
				<c-main-wrapper></c-main-wrapper>
			</v-container>
			
			
		</v-content>
			
		
  </v-app>
</template>

<script>
import cMainWrapper from './components/c-main-wrapper'
export default {
  name: "App",

  components: {
		cMainWrapper
	},

  data () {
		return {
			value: false,
			items: ['item1', 'item2', 'item3']
		}
	},

	methods: {
		
	}
};
</script>
