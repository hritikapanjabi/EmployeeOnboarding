import React from 'react'
import DisplayTodos from './DisplayTodos'
import TopImage from './TopImage'
import './NotificationsStyle.css'
import { useParams, useRouteMatch } from 'react-router'

function Notifications() {
    const empId= useParams()
    console.log(empId)
    return (
        <div >
            <div class="row">
              <div class="col-sm-12 col-md-12">
             
              <TopImage/>
              </div>
              </div>
              <DisplayTodos empId={empId.id}/> 
        </div>
    )
}

export default Notifications
