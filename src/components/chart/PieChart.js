import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
const labels = ['Openness', 'Conciencetious', 'Extraversion', 'Agreeable', 'Neuroticism'];
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
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
  legend: {
    labels: {
      position: 'top',
      fontSize: 26,
    },
  }
  
}
  return (
    <div>
    <Pie
      data={data}
      height={400}
      options={options}
    />
    </div>
  )
}

export default PieChart