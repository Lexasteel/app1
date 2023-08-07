<template>
  <Datepicker
    v-model="date"
    @update:model-value="handleDate"
    month-picker
    month-name-format="long"
    auto-apply
    locale="uk"
    :clearable="false"
    ref="datepicker"
  />
</template>

<script setup>
//:format-locale="uk"
//format="LLLL yyyy"
//import {uk} from 'date-fns/locale'
import {ref, onMounted} from 'vue'
import {useStore} from 'vuex'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
//eslint-disable-next-line
const emit = defineEmits(['change'])
const store = useStore()
const date = ref()
const handleDate = (modelData) => {
  date.value = modelData
  let newDate = new Date(date.value.year, date.value.month, 1)
  // store.commit('setMonthYear', newDate)
  store.commit('setDate', newDate)
  emit('change')
}
onMounted(() => {
  date.value = {
    month: store.state.date.getMonth(),
    year: store.state.date.getFullYear(),
  }
})
</script>
