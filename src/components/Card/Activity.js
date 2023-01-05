import React from 'react'
import { Card, CardBody, CardTitle, List } from 'reactstrap'

const Activity = () => {
  return (
    <Card className='my-3 shadow rounded-3 border-0'>
      <CardBody>
        <CardTitle className='text-black-50 font fw-bold' tag='h5'>
          Activity
        </CardTitle>
      </CardBody>

      <CardBody>
        <List type='unstyled' className='ps-2'>
          <li className='position-relative circle-step ps-4 pb-4 text-black-50 font-11 fw-bold'>
            <i class='material-icons position-absolute fs-6 '>adjust</i>
            22NOV-23:18:00
            <i className='material-icons c-color align-middle px-3 fw-bold fs-6 '>
              east
            </i>
            <span>You Create Signal 1944</span>
          </li>
          <li className='position-relative circle-step ps-4 pb-4 text-black-50 font-11 fw-bold'>
            <i class='material-icons position-absolute  fs-6 '>adjust</i>
            22NOV-23:18:00
            <i className='material-icons c-color align-middle fw-bold px-3 fs-6 '>
              east
            </i>
            <span>Order 246 is placed in nurafin</span>
          </li>
          <li className='position-relative circle-step ps-4 pb-4 text-black-50 font-11 fw-bold'>
            <i className='material-icons position-absolute fs-6 '>adjust</i>
            22NOV-23:18:00
            <i class='material-icons c-color align-middle fw-bold px-3 fs-6 '>
              east
            </i>
            <span>Order 246 is placed in nurafin</span>
          </li>
          <li className='position-relative circle-step ps-4 pb-4 text-black-50 font-11 fw-bold'>
            <i className='material-icons position-absolute fs-6 '>adjust</i>
            22NOV-23:18:00
            <i className='material-icons c-color align-middle fw-bold px-3 fs-6 '>
              east
            </i>
            <span>Order 246 is placed in nurafin</span>
          </li>
        </List>
        <div className='d-flex  justify-content-center '>
          <a className='c-color fw-bold text-decoration-none' href='#'>
            see more ...
          </a>
        </div>
      </CardBody>
    </Card>
  )
}

export default Activity
