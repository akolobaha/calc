<template>
	<div class="v-percent">
		<v-card class="my-2">
			<v-card-title>
				<h3 class="grey--text">Процент от числа</h3>
			</v-card-title>
			<v-card-text class="d-flex align-baseline"> 
				<v-text-field class="mx-2" color="green" label="Проценты" v-model="percent1" v-mask="mask"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>%</v-chip>
				<v-chip class="mx-2" color="green" dark>от числа</v-chip>
				<v-text-field class="mx-2" color="green" label="Число" v-model="num1" v-mask="mask"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>=</v-chip>
				<v-chip class="mx-2" color="green" dark @click="countValue1()">{{ countValue1() }}</v-chip>
			</v-card-text>
		</v-card>

		<v-card class="my-2">
			<v-card-title >
				<h3 class="grey--text">Процент числа в числе</h3>
			</v-card-title>
			<v-card-text class="d-flex align-baseline"> 
				<v-text-field class="mx-2" color="green" label="Число 1" v-model="percent1" v-mask="mask"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>от</v-chip>
				<v-text-field class="mx-2" color="green" label="Числа 2" v-model="num1" v-mask="mask"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>=</v-chip>
				<v-chip class="mx-2" color="green" dark>{{ countVal1OfVal2() }}</v-chip>
				<v-chip class="mx-2" color="green" dark>%</v-chip>
			</v-card-text>
		</v-card>

		<v-card class="my-2" >
			<v-card-title>
				<h3 class="grey--text">Прибавить процент к числу</h3>
			</v-card-title>
			<v-card-text class="d-flex align-baseline"> 
				<v-chip class="mx-2" color="green" dark>Прибавить</v-chip>
				<v-text-field class="mx-2" color="green" label="Процентов" v-model.number="percent3" v-mask="mask"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>%</v-chip>
				<v-chip class="mx-2" color="green" dark>к числу</v-chip>
				<v-text-field class="mx-2" color="green" label="Числа 2" v-model.number="num3" v-mask="mask"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>=</v-chip>
				<v-chip class="mx-2" color="green" dark>{{ addPercentToNum() }}</v-chip>
			</v-card-text>
		</v-card>

		<v-card class="my-2" >
			<v-card-title>
				<h3 class="grey--text">Отнять процент от числа</h3>
			</v-card-title>
			<v-card-text class="d-flex align-baseline"> 
				<v-chip class="mx-2" color="green" dark>Отнять</v-chip>
				<v-text-field class="mx-2" color="green" label="Процентов" v-model.number="percent3"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>%</v-chip>
				<v-chip class="mx-2" color="green" dark>от числа</v-chip>
				<v-text-field class="mx-2" color="green" label="Числа 2" v-model.number="num3"></v-text-field> 
				<v-chip class="mx-2" color="green" dark>=</v-chip>
				<v-chip class="mx-2" color="green" dark>{{ subtractPercentToNum() }}</v-chip>
			</v-card-text>
		</v-card>
	</div>
	
		
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
	directives: {
		mask
	},
	data() {
		return {
			name: 'v-percent',
			num1: 100,
			percent1: 20,
			num2a: 20,
			num2b: 100,
			num3: 100,
			percent3: 5,
			mask: '###############'
		}
	},
	methods: {
		countValue1 () {
			return Number(this.num1) * Number(this.percent1) / 100
		},
		countVal1OfVal2 () {
			return Number(this.num2a) / Number(this.num2b) * 100
		},
		addPercentToNum () {
			return this.num3 + this.num3 * this.percent3 / 100
		},
		subtractPercentToNum () {
			return this.num3 - this.num3 * this.percent3 / 100
		}
	}
	
}
</script>

<style>

</style>