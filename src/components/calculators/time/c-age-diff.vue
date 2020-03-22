<template>
	<div class="c-age-diff">
		<h1>Разница дат</h1>
		<v-card>
   
    <v-card-text>
      <v-text-field 
				v-model="date1" 
				v-mask="mask" 
				label="Дата 1" 
				mask="11 / 11 / 1111" 
				hint="ДД/ММ/ГГГГ"
				
			></v-text-field>

			<v-text-field 
				v-model="date2" 
				v-mask="mask" 
				label="Дата 2" 
				mask="11 / 11 / 1111" 
				hint="ДД/ММ/ГГГГ"
				required
			></v-text-field>

			<v-list>
				<v-list-item v-for="item of datesDiff" :key="item"> {{ item }} </v-list-item>
				
			</v-list>

			<v-card-actions>
				<v-btn 
					color="green"
					dark
					@click="countDatesDiff"	
				>Рассчитать разницу</v-btn>
			</v-card-actions>
    </v-card-text>
  </v-card>
	
		

	</div>
</template>

<script>
import { mask } from 'vue-the-mask'
export default {
	name: 'c-age-diff',
	directives: {
		mask,
	},
	data () {
		return {
			// picker1: new Date(),
			// picker2: new Date()
			mask: '##/##/####',
			date1: '',
			date2: '',
			datesDiff: {},
			dateId: 0,
		}
	},
	methods: {
		countDatesDiff () {
			let date1 = this.date1.split('/'); 
			let date2 = this.date2.split('/');

			this.datesDiff.years = Number(date2[2]) - Number(date1[2]);
			this.datesDiff.months = Number(date2[1]) - Number(date1[1]);
			this.datesDiff.days = Number(date2[0]) - Number(date1[0]);

			console.log(this.datesDiff, date2[2], date1[2])
		},
		validateDates () {
			if (this.date1.length == this.date2.length == this.mask.length){
				console.log('equal length')
			}
		}
	}
}
</script>

<style>

</style>