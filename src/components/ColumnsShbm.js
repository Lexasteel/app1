export function columnsSHBM(s, f) {
  let gridwidth = 'auto'
  if (s == 0) {
    s = 5
    gridwidth = 85
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
          dataField: 'shbmATime' + i,
          width: gridwidth,
          caption: 'ШБМ-А, час',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
        {
          dataField: 'shbmBTime' + i,
          width: gridwidth,
          caption: 'ШБМ-Б, час',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
        {
          dataField: 'shbmDownTime' + i,
          width: gridwidth,
          caption: 'Время простоя ШБМ (А,Б), час',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
        {
          dataField: 'shbmAAmpr' + i,
          width: gridwidth,
          caption: 'Среднечасовая мощность ШБМ-А, МВт',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
        {
          dataField: 'shbmBAmpr' + i,
          width: gridwidth,
          caption: 'Среднечасовая мощность ШБМ-Б, МВт',
          alignment: 'center',
          cssClass: 'cell-highlighted' + i,
        },
        //{ dataField: "shbm5AveragePower", width: gridwidth, caption: "Средневзвешенное значение мощности, МВт", alignment: "center" },
        {
          dataField: 'shbmEff' + i,
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

// export const columnsSHBM = [
//   {
//     dataField: 'id',
//     width: gridwidth + 10,
//     caption: 'Дата',
//     alignment: 'center',
//     dataType: 'datetime',
//     format: 'dd.MM.yy',
//     sortOrder: 'asc',
//   },
//   {
//     caption: 'Блок 5',
//     alignment: 'center',
//     cssClass: 'cell-highlighted' + 5,
//     columns: [
//       {
//         dataField: 'shbm5ATime',
//         width: gridwidth,
//         caption: 'ШБМ-А, час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 5,
//       },
//       {
//         dataField: 'shbm5BTime',
//         width: gridwidth,
//         caption: 'ШБМ-Б, час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 5,
//       },
//       {
//         dataField: 'shbm5Downtime',
//         width: gridwidth,
//         caption: 'Время простоя ШБМ (А,Б), час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 5,
//       },
//       {
//         dataField: 'shbm5APower',
//         width: gridwidth,
//         caption: 'Среднечасовая мощность ШБМ-А, МВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 5,
//       },
//       {
//         dataField: 'shbm5BPower',
//         width: gridwidth,
//         caption: 'Среднечасовая мощность ШБМ-Б, МВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 5,
//       },
//       //{ dataField: "shbm5AveragePower", width: gridwidth, caption: "Средневзвешенное значение мощности, МВт", alignment: "center" },
//       {
//         dataField: 'shbm5Effect',
//         width: gridwidth,
//         caption: 'Эффект, кВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 5,
//       },
//     ],
//   },
//   {
//     caption: 'Блок 6',
//     alignment: 'center',
//     cssClass: 'cell-highlighted' + 6,
//     columns: [
//       {
//         dataField: 'shbm6ATime',
//         width: gridwidth,
//         caption: 'ШБМ-А, час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 6,
//       },
//       {
//         dataField: 'shbm6BTime',
//         width: gridwidth,
//         caption: 'ШБМ-Б, час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 6,
//       },
//       {
//         dataField: 'shbm6Downtime',
//         width: gridwidth,
//         caption: 'Время простоя ШБМ (А,Б), час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 6,
//       },
//       {
//         dataField: 'shbm6APower',
//         width: gridwidth,
//         caption: 'Среднечасовая мощность ШБМ-А, МВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 6,
//       },
//       {
//         dataField: 'shbm6BPower',
//         width: gridwidth,
//         caption: 'Среднечасовая мощность ШБМ-Б, МВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 6,
//       },
//       //{ dataField: "shbm6AveragePower", width: gridwidth, caption: "Средневзвешенное значение мощности, МВт", alignment: "center" },
//       {
//         dataField: 'shbm6Effect',
//         width: gridwidth,
//         caption: 'Эффект, кВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 6,
//       },
//     ],
//   },
//   {
//     caption: 'Блок 7',
//     alignment: 'center',
//     cssClass: 'cell-highlighted' + 7,
//     columns: [
//       {
//         dataField: 'shbm7ATime',
//         width: gridwidth,
//         caption: 'ШБМ-А, час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 7,
//       },
//       {
//         dataField: 'shbm7BTime',
//         width: gridwidth,
//         caption: 'ШБМ-Б, час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 7,
//       },
//       {
//         dataField: 'shbm7Downtime',
//         width: gridwidth,
//         caption: 'Время простоя ШБМ (А,Б), час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 7,
//       },
//       {
//         dataField: 'shbm7APower',
//         width: gridwidth,
//         caption: 'Среднечасовая мощность ШБМ-А, МВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 7,
//       },
//       {
//         dataField: 'shbm7BPower',
//         width: gridwidth,
//         caption: 'Среднечасовая мощность ШБМ-Б, МВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 7,
//       },
//       //{ dataField: "shbm7AveragePower", width: gridwidth, caption: "Средневзвешенное значение мощности, МВт", alignment: "center" },
//       {
//         dataField: 'shbm7Effect',
//         width: gridwidth,
//         caption: 'Эффект, кВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 7,
//       },
//     ],
//   },
//   {
//     caption: 'Блок 8',
//     alignment: 'center',
//     cssClass: 'cell-highlighted' + 8,
//     columns: [
//       {
//         dataField: 'shbm8ATime',
//         width: gridwidth,
//         caption: 'ШБМ-А, час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 8,
//       },
//       {
//         dataField: 'shbm8BTime',
//         width: gridwidth,
//         caption: 'ШБМ-Б, час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 8,
//       },
//       {
//         dataField: 'shbm8Downtime',
//         width: gridwidth,
//         caption: 'Время простоя ШБМ (А,Б), час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 8,
//       },
//       {
//         dataField: 'shbm8APower',
//         width: gridwidth,
//         caption: 'Среднечасовая мощность ШБМ-А, МВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 8,
//       },
//       {
//         dataField: 'shbm8BPower',
//         width: gridwidth,
//         caption: 'Среднечасовая мощность ШБМ-Б, МВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 8,
//       },
//       //{ dataField: "shbm8AveragePower", width: gridwidth, caption: "Средневзвешенное значение мощности, МВт", alignment: "center" },
//       {
//         dataField: 'shbm8Effect',
//         width: gridwidth,
//         caption: 'Эффект, кВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 8,
//       },
//     ],
//   },
//   {
//     caption: 'Блок 9',
//     alignment: 'center',
//     cssClass: 'cell-highlighted' + 9,
//     columns: [
//       {
//         dataField: 'shbm9ATime',
//         width: gridwidth,
//         caption: 'ШБМ-А, час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 9,
//       },
//       {
//         dataField: 'shbm9BTime',
//         width: gridwidth,
//         caption: 'ШБМ-Б, час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 9,
//       },
//       {
//         dataField: 'shbm9Downtime',
//         width: gridwidth,
//         caption: 'Время простоя ШБМ (А,Б), час',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 9,
//       },
//       {
//         dataField: 'shbm9APower',
//         width: gridwidth,
//         caption: 'Среднечасовая мощность ШБМ-А, МВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 9,
//       },
//       {
//         dataField: 'shbm9BPower',
//         width: gridwidth,
//         caption: 'Среднечасовая мощность ШБМ-Б, МВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 9,
//       },
//       //{ dataField: "shbm9AveragePower", width: gridwidth, caption: "Средневзвешенное значение мощности, МВт", alignment: "center" },
//       {
//         dataField: 'shbm9Effect',
//         width: gridwidth,
//         caption: 'Эффект, кВт',
//         alignment: 'center',
//         cssClass: 'cell-highlighted' + 9,
//       },
//     ],
//   },
// ]
