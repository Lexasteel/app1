export function columnsPen(s, f) {
  let minwidth = 100
  if (s == 0) {
    s = 5
  }
  if (f == 0) f = 9
  let cols = [
    {
      dataField: 'datetime',
      width: minwidth + 20,
      caption: 'Дата',
      alignment: 'center',
      dataType: 'date',
      format: 'dd.MM.yy',
      fixed: true,
      cssClass: 'column-date',
    },
  ]

  for (let i = s; i <= f; i++) {
    cols.push(
      {
        caption: 'ПЭН-' + i + 'A',
        alignment: 'center',
        cssClass: 'cell-highlighted' + i,
        columns: [
          {
            dataField: 'time' + i + 'A',
            caption: 'Время, час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
          },
          {
            dataField: 'flow' + i + 'A',
            caption: 'Расход, т/час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
          },
          {
            dataField: 'powr' + i + 'A',
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
            caption: 'Время, час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
          },
          {
            dataField: 'flow' + i + 'B',
            caption: 'Расход, т/час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
          },
          {
            dataField: 'powr' + i + 'B',
            caption: 'Ток, А',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
          },
        ],
      }
    )
  }
  return cols
}

export function columnsPower(s, f) {
  let gridwidth = 'auto'
  if (s == 0) {
    s = 5
    gridwidth = 60
  }
  if (f == 0) f = 9
  let cols = [
    {
      dataField: 'datetime',
      width: gridwidth + 20,
      fixed: true,
      caption: 'Дата',
      alignment: 'center',
      dataType: 'date',
      format: 'MM.yyyy',
      cssClass: 'column-date',
    },
  ]
  for (let i = 5; i <= 9; i++) {
    cols.push(
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
            allowEditing: false,
            dataType: 'number',
          },
          {
            dataField: 'powr' + i + 'A',
            width: gridwidth + 20,
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
            width: gridwidth,
            caption: 'Время, час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
            allowEditing: false,
          },
          {
            dataField: 'powr' + i + 'B',
            width: gridwidth + 20,
            caption: 'Потр. э/э, кВт*ч',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
          },
        ],
      }
    )
  }
  return cols
}
