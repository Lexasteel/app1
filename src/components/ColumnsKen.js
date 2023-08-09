export function columnsKen(s, f) {
  let gridwidth = 'auto'
  if (s == 0) {
    s = 5
    gridwidth = 60
  }
  if (f == 0) f = 9
  let cols = [
    {
      dataField: 'date',
      width: gridwidth + 20,
      caption: 'Дата',
      alignment: 'center',
      dataType: 'date',
      format: 'dd.MM.yy',
      cssClass: 'column-date',
    },
  ]

  for (let i = s; i <= f; i++) {
    cols.push({
      caption: 'Блок ' + i,
      alignment: 'center',
      cssClass: 'cell-highlighted' + i,
      columns: [
        {
          caption: 'Время работы, час',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
          columns: [
            {
              dataField: 'time' + i + '0',
              width: gridwidth,
              caption: 'КЭН-A',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
            {
              dataField: 'time' + i + '1',
              width: gridwidth,
              caption: 'КЭН-Б',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
            {
              dataField: 'time' + i + '2',
              width: gridwidth,
              caption: 'КЭН-В',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
            {
              dataField: 'onetime' + i,
              width: gridwidth,
              caption: 'Одного КЭН',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
          ],
        },
        {
          caption: 'Средне-часовой ток, А',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
          columns: [
            {
              dataField: 'amp' + i + '0',
              width: gridwidth,
              caption: 'КЭН-A',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
            {
              dataField: 'amp' + i + '1',
              width: gridwidth,
              caption: 'КЭН-Б',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
            {
              dataField: 'amp' + i + '2',
              width: gridwidth,
              caption: 'КЭН-В',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
          ],
        },
        {
          dataField: 'avg' + i,
          width: gridwidth,
          caption: 'Средне-взвешенное значение тока, А',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
        {
          dataField: 'eff' + i,
          width: gridwidth,
          caption: 'Эффект, кВт',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
      ],
    })
  }

  return cols
}
