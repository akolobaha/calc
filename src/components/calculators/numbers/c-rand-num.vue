<template>
	<div class="c-rand-num">
		<v-row>

			<v-col
				cols="12"
			>
				<h2>Генератор случайных чисел </h2>
			</v-col>

			<v-col
				cols="12"	
			>
				<p class="text-center">{{ numsArrJoiner(numsArr, delimiter) }} 
					<v-btn 
						v-if="numsArr.length"
						v-clipboard="() => numsArrJoiner(numsArr, delimiter)"
					>
						<v-icon	left>mdi-content-copy</v-icon>
						Копировать
					</v-btn>
				</p>
			</v-col>
			
			<v-col cols="12"></v-col>
			<v-col cols="4">
				<v-text-field 
					label="Количество случайных чисел" 
					v-model.number="numsQty"
					v-mask="'######'"
				></v-text-field>
			</v-col>
				
			<v-col cols="4"
			>
				<v-text-field label="От" v-model.number="minValue" v-mask="'######'"></v-text-field>
			</v-col>

			<v-col cols="4">
				<v-text-field label="До" v-model.number="maxValue" v-mask="'######'"></v-text-field>
			</v-col>

			<template v-if="numsArr.length > 1">
				<v-col cols="4">
					<v-text-field label="Разделитель" v-model="delimiter"></v-text-field>
				</v-col>
				
				<v-col cols="4">
						<v-select
							:items="sortVariants"
							label="Сортировать"
							v-model="selectedSortValue"
						></v-select>
				</v-col>
			
				<v-col cols="4">
					<v-checkbox 
						v-model="unduplicated" 
						label="Удалить дубли"
						:disabled="unduplicated"
						
					></v-checkbox>
			</v-col>
			</template>
			

			<v-col cols="12">
				<v-btn @click="clearResult(); multipleNumsArr(numsQty); selectedSortValue = ''; unduplicated=false">
					<v-icon left>mdi-counter</v-icon>
					Сгенерировать
				</v-btn>
				<v-btn 
					@click="clearResult(); unduplicated=false"
					v-if="numsArr.length > 0"
				>Очистить результаты
				</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
	name: 'c-rand-num',
	directives: {
		mask
	},
	data () {
		return {
			numsQty: 10,
			numsArr: [],
			numsStr: '',
			delimiter: ', ',
			minValue: 0,
			maxValue: 100,
			sortVariants: [ 'По возрастанию', 'По убыванию' ],
			selectedSortValue: '',
			unduplicated: false
		}
	},
	methods: {
		randNum() {
			return (Math.random() * (this.maxValue - this.minValue) + this.minValue).toFixed();
		},
		multipleNums(qty) {
			if (qty < 1) {
				return 1
			}
			return qty
		},
		multipleNumsArr(qty) {
			for (let i = 0; i < qty; i++) {
				this.numsArr.push(this.randNum());
			}
		},
		clearResult () {
			this.numsArr = [];
		},
		numsArrJoiner(arr, delimiter){
			return arr.join(delimiter)
		},
		numsArrSort(arr) {
			if (this.selectedSortValue == 'По возрастанию') {
				return arr.sort((a, b) => {
					return a - b	
				})
			} else if (this.selectedSortValue == 'По убыванию') {
				return arr.sort((a, b) => {
					return b - a	
				})
			}
			else {
				return arr
			}
		},
		cpyNumsValue() {
			this.numsArr.select();
			document.execCommand("copy");
		},
		unduplicateNums () {
			let result = [];
			for (let num of this.numsArr) {
				if (!result.includes(num)) {
					result.push(num);
				}
			}
			this.numsArr = result
		}
	},
	watch: {
		selectedSortValue () {
			this.numsArrSort(this.numsArr)
		},
		unduplicated () {
			this.unduplicateNums()
		}
	}
}
</script>

<style lang="scss" scoped>
	li {
		list-style-type: none;
	}
</style>