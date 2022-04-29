import React from 'react'
import styled from 'styled-components'
import TableData from '../components/table/tabledata'

const TitleWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;`
function Docs() {
  return (
    <div className="main__docs">
      <div className="main__docs__content">
      </div>
      <div className="main__docs">
        <TitleWrapper>
          <h2>Data Infomation Users</h2>
        </TitleWrapper>
          <TableData/>
      </div>
    </div>
    
  )
}

export default Docs