import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title,} from 'chart.js'
import { Bar } from 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title)
const labels = ['Openness', 'Conciencetious', 'Extraversion', 'Agreeable', 'Neuroticism'];
const QuestionChart = () => {
  var data = {
    labels,
    datasets: [
      {
        labels,
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
    }]
}
var options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      fontSize: 26,
    },
    title: {
      display: true,
      text: 'QUESTIONS DASHBOARD',
    },
  },
}
  return (
    <div>
    <Bar
      data={data}
      height={400}
      options={options}
    />
    </div>
  )
}

export default QuestionChart