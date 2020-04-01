<template>
	<v-app>
		<v-navigation-drawer
      class="green accent-2"
			v-model="drawer"
			app
			dark
    >
			<v-list class="green accent-2" >
				<v-list-item >
					<v-btn to="/" text small>Главная</v-btn>
				</v-list-item>
				<v-list-item>
					<v-btn to="about" text small>Разница дат</v-btn>
				</v-list-item>
				<v-list-item>
					<v-btn to="/percent" text small>Процент от числа</v-btn>
				</v-list-item>
				<v-list-item>
					<v-btn to="/random" text small>Случайное число</v-btn>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
    <v-app-bar 
			app
			dense
			class="green accent-2" dark>
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
			>

			</v-app-bar-nav-icon>
      <div class="d-flex align-center">
  
      </div>
      <v-spacer></v-spacer>
			<div class="hidden-xs-only">
				
			</div>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">{{ $route.name }}</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>				
    </v-app-bar>
		<v-content>
			<c-main-wrapper></c-main-wrapper>
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
			drawer: false,
			items: ['item1', 'item2', 'item3']
		}
	},

	methods: {
		showRoute () {
			console.log(this.$router)
		}
	}
};
</script>

