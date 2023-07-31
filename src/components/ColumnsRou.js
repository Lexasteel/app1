export const tabs = [
  {
    id: 24,
    text: 'РОУ 24/13',
  },
  {
    id: 140,
    text: 'РОУ 140/15',
  },
]
const width = 60
export const columns24 = [
  {
    dataField: 'id',
    visible: false,
  },
  {
    dataField: 'datetime',
    dataType: 'datetime',
    caption: 'Дата',
    allowEditing: false,
    alignment: 'center',
    width: '100px',
    format: 'dd.MM.yy',
    sortOrder: 'asc',
  },
  {
    dataField: 'unit3',
    caption: 'РОУ блок 3',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'unit4',
    caption: 'РОУ блок 4',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'unit5',
    caption: 'РОУ блок 5',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'unit6',
    caption: 'РОУ блок 6',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'unit7',
    caption: 'РОУ блок 7',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'unit8',
    caption: 'РОУ блок 8',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'unit9',
    caption: 'РОУ блок 9',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'summa24',
    caption: '∑РОУ 24/13, т/ч',
    allowEditing: false,
  },
  {
    dataField: 'deltaN',
    caption: '∆N ∑РОУ 24/13, МВт',
    dataType: 'number',
    allowEditing: false,
  },
  {
    dataField: 'kpd',
    caption: 'КПД котла нетто',
  },
  {
    dataField: 'b',
    caption: 'В, г/час',
    allowEditing: false,
  },
  {
    dataField: 'output',
    caption: 'Отпуск э/э за сутки кВт*ч',
  },
  {
    dataField: 'hourly',
    caption: 'Среднечасовой отпуск за сутки кВт*ч/час',
    allowEditing: false,
  },
  {
    dataField: 'deltab',
    caption: '∆b г/кВт*ч',
    allowEditing: false,
  },
]

export const columns140 = [
  {
    dataField: 'id',
    visible: false,
  },
  {
    dataField: 'datetime',
    dataType: 'datetime',
    caption: 'Дата',
    allowEditing: false,
    alignment: 'center',
    width: '110px',
    format: 'dd.MM.yy',
    sortOrder: 'asc',
  },
  {
    dataField: 'unit3Big',
    caption: 'Блок 3 140/15, т/ч',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'output3',
    caption: 'Блок 3 Отпуск э/э за сутки, кВт*ч',
    allowEditing: true,
  },
  {
    dataField: 'unit7Big',
    caption: 'Блок 7 140/15, т/ч',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'output7',
    caption: 'Блок 7 Отпуск э/э за сутки, кВт*ч',
    allowEditing: true,
  },
  {
    dataField: 'unit9Big',
    caption: 'Блок 9 140/15, т/ч',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'output9',
    caption: 'Блок 9 Отпуск э/э за сутки, кВт*ч',
    allowEditing: true,
  },
  {
    dataField: 'summa140',
    caption: '∑РОУ 140/15, т/ч',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'kpd',
    caption: 'КПД котла нетто',
    width: width,
  },
  // {
  //    dataField: "b",
  //    caption: "В, г/час",
  //    allowEditing:  false,
  //},
  {
    dataField: 'output',
    caption: 'Отпуск э/э за сутки кВт*ч',
  },
  //{
  //  dataField: "hourly",
  //  caption: "Среднечасовой отпуск за сутки кВт*ч/час",
  //  allowEditing:  false,
  //},

  {
    dataField: 'deltab3',
    caption: '∆b блок 3, г/кВт*ч',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'deltab7',
    caption: '∆b блок 7, г/кВт*ч',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'deltab9',
    caption: '∆b блок 9, г/кВт*ч',
    allowEditing: false,
    width: width,
  },
  {
    dataField: 'deltab140',
    caption: 'Пережог у.т. на РОУ 140/15 по ТЭС, г/кВт*ч',
    allowEditing: false,
  },
]
