import React from 'react'
import StatusCard from '../components/card/statusCard'
import statusCard from '../assets/jsondata/statusCard.json'
import PieChart from '../components/chart/PieChart'
import BarChart from '../components/chart/BarChart'
const Home = () => {
  return (
    <div className="">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
          {
            statusCard.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}/>
              </div>))}
          </div>
                </div>
                <div className="col-6">
                  <PieChart/>
                </div>
      </div>
      <div><BarChart/></div>
    </div>
  )
}

export default Home