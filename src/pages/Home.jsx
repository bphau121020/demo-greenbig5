import React from 'react'
import StatusCard from '../components/card/statusCard'
import statusCard from '../assets/jsondata/statusCard.json'
import UserChart from '../components/chart/UserChart'
import QuestionChart from '../components/chart/QuestionChart'
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
                  <UserChart/>
                </div>
      </div>
      <QuestionChart/>
    </div>
  )
}

export default Home