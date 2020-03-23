<template>
	<div class="v-percent">
		<v-card class="my-2">
			<v-card-title>
				<h3 class="grey--text">Процент от числа</h3>
			</v-card-title>
			<v-card-text class="d-flex align-baseline"> 
				<v-text-field class="mx-2" color="green" label="Проценты" v-model="percent1"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>%</v-chip>
				<v-chip class="mx-2" color="green" dark>от числа</v-chip>
				<v-text-field class="mx-2" color="green" label="Число" v-model="num1"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>=</v-chip>
				<v-chip class="mx-2" color="green" dark @click="countValue1()">{{ answer1 }}</v-chip>
			</v-card-text>
		</v-card>

		<v-card >
			<v-card-title>
				<h3 class="grey--text">Процент числа от числа</h3>
			</v-card-title>
			<v-card-text class="d-flex align-baseline"> 
				<v-text-field class="mx-2" color="green" label="Число 1" v-model="percent1"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>от</v-chip>
				<v-text-field class="mx-2" color="green" label="Числа 2" v-model="num1"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>=</v-chip>
				<v-chip class="mx-2" color="green" dark @click="countVal1OfVal2()">{{ answer1 }}</v-chip>
				<v-chip class="mx-2" color="green" dark>%</v-chip>
			</v-card-text>
		</v-card>
	</div>
	
		
</template>

<script>
export default {
	data() {
		return {
			name: 'v-percent',
			num1: '',
			percent1: '',
			answer1: 0,
			
		}
	},
	methods: {
		countValue1 () {
			this.answer1 = Number(this.num1) * Number(this.percent1) / 100
		},
		countVal1OfVal2 () {

		}
	}
	
}
</script>

<style>

</style>