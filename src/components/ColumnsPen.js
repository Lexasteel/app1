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
            dataField: 'PenATime' + i,
            caption: 'Время, час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
          },
          {
            dataField: 'PenAFlow' + i,
            caption: 'Расход, т/час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
          },
          {
            dataField: 'PenAAmpr' + i,
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
            dataField: 'PenBTime' + i,
            caption: 'Время, час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
          },
          {
            dataField: 'PenBFlow' + i,
            caption: 'Расход, т/час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
          },
          {
            dataField: 'PenBAmpr' + i,
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
            dataField: 'PenATimeCons' + i,
            width: gridwidth,
            caption: 'Время, час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
            allowEditing: false,
            dataType: 'number',
          },
          {
            dataField: 'PenAPowrCons' + i,
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
            dataField: 'PenBTimeCons' + i,
            width: gridwidth,
            caption: 'Время, час',
            alignment: 'center',
            cssClass: 'cell-highlighted' + i,
            allowEditing: false,
          },
          {
            dataField: 'PenBPowrCons' + i,
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
