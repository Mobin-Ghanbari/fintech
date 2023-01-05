import React from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import BarChart from './BarChart'
const BarCard = () => {
  return (
    <Card className='my-3 rounded-3 shadow border-0'>
      <CardBody className='p-4'>
        <CardTitle className='fw-bold font d-flex ' tag='h6'>
          Trade Chart
          <Button
            size='sm'
            className='ms-auto px-2 bg-light text-black-50 fw-bold font-11 border-0'
          >
            D
          </Button>
          <Button
            className='mx-2 custom-color text-light fw-bold font-11 border-0'
            size='sm'
          >
            M
          </Button>
          <Button
            className='bg-light text-black-50 fw-bold font-11 border-0'
            size='sm'
          >
            Y
          </Button>
        </CardTitle>
        <BarChart />
      </CardBody>
    </Card>
  )
}

export default BarCard
