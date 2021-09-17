import React from 'react'
import DisplayTodos from './DisplayTodos'
import TopImage from './TopImage'


function Notifications(props) {
    return (
        <div >
            <div class="row">
              <div class="col-sm-12 col-md-12">
              <TopImage />
              </div>
              </div>
              <DisplayTodos empId={props.empId}/> 
        </div>
    )
}

export default Notifications
