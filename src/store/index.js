import {createStore} from 'vuex'
import axios from '@/api/axios'
import CustomStore from 'devextreme/data/custom_store'
import DataSource from 'devextreme/data/data_source'

export default createStore({
  state: {
    month: 0,
    year: 0,
    unit: 0,
    focusedRowStagesEnabled: false,
    focusedRowAlarmsEnabled: false,
    stage4Date: 0,
    stage5Date: 0,
    StoreStages: new DataSource(),
    StoreAlarms: new DataSource(),
    StoreEdit: new DataSource(),
    logRequestArr: [],
    edit: {
      unit: '',
      date: '',
    },
  },
  getters: {},
  mutations: {
    setMonthYear(state, date) {
      let m = date.getMonth() + 1
      if (m < 10) m = '0' + m
      state.month = m
      state.year = date.getFullYear()
    },
    setEditUnit(state, unit) {
      state.edit.unit = unit
    },
    setEditDate(state, date) {
      state.edit.date = date
    },
    setUnit(state, unit) {
      state.unit = unit
    },
    setDatasourceStages(state, datasource) {
      state.datasourceGridStages = datasource
      state.focusedRowStagesEnabled = true
    },
    setDatasourceAlarms(state, datasource) {
      state.datasourceGridAlarms = datasource
      state.focusedRowAlarmsEnabled = true
    },
    setStageDates(state, dates) {
      state.stage4Date = dates.stage4Date
      state.stage5Date = dates.stage5Date
    },
    logRequestPush(state, s) {
      state.logRequestArr.push(s)
    },
  },
  actions: {
    setDataSourceGridAlarms({state}) {
      state.StoreAlarms = new DataSource({
        store: new CustomStore({
          key: 'id',
          load: () => {
            return axios
              .get('ape/getalarms', {
                params: {
                  unit: state.unit,
                  dateStart: state.stage4Date,
                  dateEnd: state.stage5Date,
                },
              })
              .catch((e) => {
                console.log(e)
              })
          },
        }),
      })
    },
    setDataSourceGridStages({state}) {
      state.StoreStages = new DataSource({
        store: new CustomStore({
          key: 'id',
          load: () => {
            return axios
              .get('/stages', {
                params: {
                  unit: state.unit,
                  month: state.month,
                  year: state.year,
                },
              })
              .catch((e) => {
                console.log(e)
              })
          },
          insert: (values) => {
            if (values.stage4 == undefined) values.stage4 = ''
            if (values.stage5 == undefined) values.stage5 = ''
            return axios.post('/stages', {
              unit: state.unit,
              id: '0',
              stage4: values.stage4,
              stage5: values.stage5,
            })
          },
          remove: (key) => {
            // console.log('key=', key, 'val=', values)
            return axios
              .delete('/stages', {
                params: {
                  id: key,
                },
              })
              .catch((e) => {
                console.log(e)
              })
          },
        }),
      })
    },
    setDataSourceGridEdit({state}) {
      state.StoreEdit = new DataSource({
        store: new CustomStore({
          key: 'id',
          load: () => {
            return axios
              .get('/fileuploader/edit', {
                params: {
                  unit: state.edit.unit,
                  date: state.edit.date,
                },
              })
              .catch((e) => {
                console.log(e)
              })
          },
          update: (key, values) => {
            // console.log('key=', key, 'val=', values)
            return axios
              .put('/fileuploader/edit', {
                id: key,
                values: values,
                unit: state.edit.unit,
              })
              .catch((e) => {
                console.log(e)
              })
          },
        }),
      })
    },
    Recalc({state}, payload) {
      //'{"unit":5,"dateMin":"2023-01-12T00:00:00","dateMax":"2023-01-12T00:00:00"}'
      //console.log('resp', payload)
      // let res = '' JSON.parse(args.request.response)
      axios
        .get('/FIleUploader/Recalc', {
          params: {
            date: payload.date,
          },
        })
        .then((response) => {
          state.logRequestArr.push({message: response.data})
        })
        .catch((e) => {
          state.logRequestArr.push({message: e})
        })
    },
    CheckData({state}, payload) {
      axios
        .get('/FIleUploader/CheckData', {
          params: {
            date: payload.date,
          },
        })
        .then((response) => {
          state.logRequestArr.push({message: response.data})
        })
        .catch((e) => {
          state.logRequestArr.push({message: e})
        })
    },
  },
  modules: {},
})
