<template>
  <Datepicker
    v-model="date"
    @update:model-value="handleDate"
    month-picker
    month-name-format="long"
    auto-apply
    locale="uk"
    :clearable="false"
  />
</template>

<script setup>
//:format-locale="uk"
//format="LLLL yyyy"
//import {uk} from 'date-fns/locale'
import {defineEmits, ref} from 'vue'
import {useStore} from 'vuex'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const emit = defineEmits(['change'])
const store = useStore()
const date = ref(new Date())
const handleDate = (modelData) => {
  date.value = modelData
  let newDate = new Date(date.value.year, date.value.month, 1)
  store.commit('setMonthYear', newDate)
  console.log('pick')
  emit('change')
}
</script>
