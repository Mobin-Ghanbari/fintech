import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: 'top'
    }
  }
}
const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [18, 38, 8, 42, 18, 30, 40, 10, 32, 52, 33, 9],
      backgroundColor: ['rgba(140, 218, 215,255)', 'rgba(244,106,106,255)']
    }
  ]
}
function Char () {
  return <Bar options={options} data={data} />
}

export default Char
