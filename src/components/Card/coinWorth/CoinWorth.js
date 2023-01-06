import React, { useState } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Table
} from 'reactstrap'
import WorthItem from './WorthItem'

function CoinWorth () {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Card className='mt-4 border-0 shadow rounded-3 overflow-auto'>
      <CardBody>
        <CardTitle className='ps-3'>Main Coin Worth</CardTitle>
        <Form className='w-25 ps-3'>
          <FormGroup className='position-relative custom-input'>
            <span className='material-icons position-absolute font '>
              search
            </span>
            <Input
              className=' bg-white text-muted rounded border-1 form-control-sm'
              id='search'
              name='search'
              placeholder='search'
              type='text'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </FormGroup>
        </Form>
        <Table
          borderless
          responsive
          style={{ width: '98%' }}
          className='ms-3 font-11 fw-bold text-muted '
        >
          <thead className='align-middle bg-light '>
            <tr>
              <th className='d-flex align-items-center'>
                <span className='material-icons fs-5  text-warning'>
                  star_border
                </span>
                <span className='ms-4'>Name</span>
              </th>
              <th className='ps-4'>price</th>
              <th className='ps-0'>Change(24h)</th>
              <th>High(24h)</th>
              <th>Low(24h)</th>
              <th>Market Cap</th>
              <th>Total Volume</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <WorthItem searchTerm={searchTerm} />
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default CoinWorth
