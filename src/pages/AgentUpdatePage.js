import React from 'react'
import AgentUpdateBar from '../components/AgentUpdateBar'
import { UpdateRentals } from '../components/UpdateRentals'

const AgentUpdatePage = () => {
  return (
    <div>
        <AgentUpdateBar />
        <div className='px-20'>
          <UpdateRentals />
            
        </div>
    </div>
  )
}

export default AgentUpdatePage