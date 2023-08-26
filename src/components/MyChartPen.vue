<template>
  <DxChart
    id="chart"
    :data-source="sourceChart"
    palette="Violet"
    @legend-click="onLegendClick"
  >
    <DxSeries
      argument-field="PenAFlowChart5"
      value-field="PenAPowrChart5"
      name="ПЭН-5A"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="PenBFlowChart5"
      value-field="PenBPowrChart5"
      name="ПЭН-5Б"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="PenAFlowChart6"
      value-field="PenAPowrChart6"
      name="ПЭН-6A"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="PenBFlowChart6"
      value-field="PenBPowrChart6"
      name="ПЭН-6Б"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="PenAFlowChart7"
      value-field="PenAPowrChart7"
      name="ПЭН-7A"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="PenBFlowChart7"
      value-field="PenBPowrChart7"
      name="ПЭН-7Б"
      type="line"
    >
    </DxSeries
    ><DxSeries
      argument-field="PenAFlowChart8"
      value-field="PenAPowrChart8"
      name="ПЭН-8A"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="PenBFlowChart8"
      value-field="PenBPowrChart8"
      name="ПЭН-8Б"
      type="line"
    >
    </DxSeries
    ><DxSeries
      argument-field="PenAFlowChart9"
      value-field="PenAPowrChart9"
      name="ПЭН-9A"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="PenBFlowChart9"
      value-field="PenBPowrChart9"
      name="ПЭН-9Б"
      type="line"
    >
    </DxSeries>
    <DxArgumentAxis>
      <DxLabel>
        <DxFormat type="decimal" />
      </DxLabel>

      <DxGrid :visible="true" />
    </DxArgumentAxis>
    <DxLegend vertical-alignment="top" horizontal-alignment="right" />
    <DxExport :enabled="true" />
    <DxTitle text="Нагрузка ПЭН"> </DxTitle>
    <DxTooltip :enabled="true" :customize-tooltip="customizeTooltip" />
    <DxSize />
  </DxChart>
  <h3 class="py-4 pl-4">Уравнения:</h3>
  <ul id="ul-equation" class="mb-6">
    <li v-for="item in source" :key="item" class="pl-10">
      <p>
        <b>{{ item.name }}:</b> {{ item.line }}
      </p>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'MyChartPen',
}
</script>
<script setup>
//import {series} from '@/components/SeriesPen.js'
import {
  DxChart,
  DxArgumentAxis,
  DxExport,
  DxGrid,
  DxSeries,
  DxLegend,
  DxTitle,
  DxTooltip,
  DxSize,
  DxLabel,
  DxFormat,
} from 'devextreme-vue/chart'
import {ref, onMounted, onBeforeMount} from 'vue'
import axios from '@/api/axios'

const source = ref()
const sourceChart = ref()

const customizeTooltip = (pointInfo) => {
  return {
    text: `${pointInfo.seriesName}`,
  }
}
const onLegendClick = ({target: series}) => {
  if (this.series.isVisible()) {
    this.series.hide()
  } else {
    this.series.show()
  }
}
//eslint-disable-next-line
onBeforeMount(() => {
  axios
    .get('Devices/Pens')
    .then(
      (response) => {
        source.value = response.data[0].chart.filter((item) =>
          Object.hasOwn(item, 'name')
        )
        console.log(source.value)
        // this.sourceChart = response.data.filter((el) => !s.includes(el))
        // response.data[0].forEach((element) => {
        sourceChart.value = response.data[0].chart
        //console.log(source.value)
        // })
      }
      // console.log(response.data.filter((item) => Object.hasOwn(item, 'name')))
    )
    .catch((e) => {
      console.log(e)
    })
})
//eslint-disable-next-line
onMounted(() => {
  // console.log(this.sourceChart)
})
</script>
<style>
#chart {
  height: 600px;
  width: 75vw;
  display: inline !important;
  justify-content: center;
}
</style>
