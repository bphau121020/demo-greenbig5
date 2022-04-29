import React from 'react'
import './statusCard.scss'

//import PieChart from '../chart/BarChart'
const statusCard = props => {
  return (
    <div className='status__card'>
            <div className="status__card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="status__card__info"> 
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
  )
}

export default statusCard