export function columnsKen(s, f) {
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
              dataField: 'kenATime' + i,
              width: gridwidth,
              caption: 'КЭН-A',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
            {
              dataField: 'kenBTime' + i,
              width: gridwidth,
              caption: 'КЭН-Б',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
            {
              dataField: 'kenVTime' + i,
              width: gridwidth,
              caption: 'КЭН-В',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
            {
              dataField: 'kenOne' + i,
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
              dataField: 'kenAAmpr' + i,
              width: gridwidth,
              caption: 'КЭН-A',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
            {
              dataField: 'kenBAmpr' + i,
              width: gridwidth,
              caption: 'КЭН-Б',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
            {
              dataField: 'kenVAmpr' + i,
              width: gridwidth,
              caption: 'КЭН-В',
              alignment: 'center',
              cssClass: 'cell-highlighted' + i,
            },
          ],
        },
        {
          dataField: 'kenAvg' + i,
          width: gridwidth,
          caption: 'Средне-взвешенное значение тока, А',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
        {
          dataField: 'kenEff' + i,
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
