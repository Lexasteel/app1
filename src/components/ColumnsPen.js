export const tabs = [
  {
    id: 0,
    text: 'Наработка ПЭН',
  },
  {
    id: 1,
    text: 'Графики',
  },
  {
    id: 2,
    text: 'Потребление э/э ПЭН',
  },
]

let gridwidth = 59.5
let allColumns = [
  {
    dataField: 'datetime',
    width: gridwidth + 20,
    fixed: true,
    caption: 'Дата',
    alignment: 'center',
    dataType: 'date',
    format: 'dd.MM.yy',
  },
]

for (let i = 5; i <= 9; i++) {
  allColumns.push(
    {
      caption: 'ПЭН-' + i + 'A',
      alignment: 'center',
      cssClass: 'cell-highlighted' + i,
      columns: [
        {
          dataField: 'time' + i + 'A',
          width: gridwidth,
          caption: 'Время, час',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
        {
          dataField: 'flow' + i + 'A',
          width: gridwidth,
          caption: 'Расход, т/час',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
          allowEditing: false,
        },
        // { dataField: "data[Time" + i + "1]", width: gridwidth, caption: "Время" + i + ", час", alignment: "center", cssClass: "cell-highlighted" + i },
        //{ dataField: "Powr" + i + "A", width: gridwidth, caption: "N, квт/ч", alignment: "center", cssClass: "cell-highlighted" + i },
        {
          dataField: 'powr' + i + 'A',
          width: gridwidth,
          caption: 'Ток, А',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
      ],
    },
    {
      caption: 'ПЭН-' + i + 'Б',
      alignment: 'center',
      cssClass: 'cell-highlighted' + i,
      columns: [
        {
          dataField: 'time' + i + 'B',
          width: gridwidth,
          caption: 'Время, час',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
        {
          dataField: 'flow' + i + 'B',
          width: gridwidth,
          caption: 'Расход, т/час',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
          allowEditing: false,
        },
        // { dataField: "data[Time" + i + "1]", width: gridwidth, caption: "Время" + i + ", час", alignment: "center", cssClass: "cell-highlighted" + i },
        {
          dataField: 'powr' + i + 'B',
          width: gridwidth,
          caption: 'Ток, А',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
      ],
    }
  )
}

export const columnsPen = allColumns
// gridwidthPower = 80
let columnsPower = [
  {
    dataField: 'datetime',
    width: gridwidth + 20,
    fixed: true,
    caption: 'Дата',
    alignment: 'center',
    dataType: 'date',
    format: 'MM.yyyy',
  },
]
for (let i = 5; i <= 9; i++) {
  columnsPower.push(
    {
      caption: 'ПЭН-' + i + 'A',
      alignment: 'center',
      cssClass: 'cell-highlighted' + i,
      columns: [
        {
          dataField: 'time' + i + 'A',
          width: 'auto',
          caption: 'Время, час',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
          allowEditing: false,
          dataType: 'number',
        },
        {
          dataField: 'powr' + i + 'A',
          width: 'auto',
          caption: 'Потр. э/э, кВт*ч',
          dataType: 'number',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
      ],
    },
    {
      caption: 'ПЭН-' + i + 'Б',
      alignment: 'center',
      cssClass: 'cell-highlighted' + i,
      columns: [
        {
          dataField: 'time' + i + 'B',
          width: 'auto',
          caption: 'Время, час',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
          allowEditing: false,
        },
        {
          dataField: 'powr' + i + 'B',
          width: 'auto',
          caption: 'Потр. э/э, кВт*ч',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
      ],
    }
  )
}
export const columnsPenPower = columnsPower
