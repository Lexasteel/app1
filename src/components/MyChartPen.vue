<template>
  <DxChart
    id="chart"
    :data-source="sourceChart"
    palette="Violet"
    @legend-click="onLegendClick"
  >
    <DxSeries
      argument-field="Flow5A"
      value-field="Powr5A"
      name="ПЭН-5A"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="Flow5B"
      value-field="Powr5B"
      name="ПЭН-5Б"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="Flow6A"
      value-field="Powr6A"
      name="ПЭН-6A"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="Flow6B"
      value-field="Powr6B"
      name="ПЭН-6Б"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="Flow7A"
      value-field="Powr7A"
      name="ПЭН-7A"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="Flow7B"
      value-field="Powr7B"
      name="ПЭН-7Б"
      type="line"
    >
    </DxSeries
    ><DxSeries
      argument-field="Flow8A"
      value-field="Powr8A"
      name="ПЭН-8A"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="Flow8B"
      value-field="Powr8B"
      name="ПЭН-8Б"
      type="line"
    >
    </DxSeries
    ><DxSeries
      argument-field="Flow9A"
      value-field="Powr9A"
      name="ПЭН-9A"
      type="line"
    >
    </DxSeries>
    <DxSeries
      argument-field="Flow9B"
      value-field="Powr9B"
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
  <h3 class="pt-4">Уравнения:</h3>
  <ul id="ul-equation">
    <li v-for="item in source" :key="item.name">
      <p>
        <b>{{ item.name }}:</b> {{ item.trend }}
      </p>
    </li>
  </ul>
</template>
<script>
import {series} from '@/components/SeriesPen.js'
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
import axios from '@/api/axios'
export default {
  name: 'MyChartPen',
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxExport,
    DxGrid,
    DxLegend,
    DxTitle,
    DxTooltip,
    DxSize,
    DxLabel,
    DxFormat,
  },

  data() {
    return {
      series,
      source: [],
      sourceChart: [],
    }
  },
  computed: {},
  methods: {
    customizeTooltip(pointInfo) {
      return {
        text: `${pointInfo.seriesName}`,
      }
    },
    onLegendClick({target: series}) {
      if (series.isVisible()) {
        series.hide()
      } else {
        series.show()
      }
    },
  },
  beforeMount() {
    axios
      .get('pens/Chart')
      .then(
        (response) => {
          this.source = response.data.filter((item) =>
            Object.hasOwn(item, 'name')
          )

          // this.sourceChart = response.data.filter((el) => !s.includes(el))
          this.sourceChart = response.data
          //   console.log(this.sourceChart)
        }
        // console.log(response.data.filter((item) => Object.hasOwn(item, 'name')))
      )
      .catch((e) => {
        console.log(e)
      })
  },
}
</script>
<style>
#chart {
  height: 600px;
  width: 75vw;
  display: inline !important;
  justify-content: center;
}
</style>
