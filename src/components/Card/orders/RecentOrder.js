import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  Table
} from 'reactstrap'
import OrderItem from './OrderItem'
const RecentOrder = () => {
  return (
    <Card className='mt-4'>
      <CardBody>
        <CardTitle className='text-black-50 font fw-bold'>
          Recent Orders
        </CardTitle>
        <Nav className='bg-light'>
          <NavItem>
            <NavLink className='text-muted fw-bold' href='#'>
              Open Orders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='fw-bold' active href='#'>
              Closed Orders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-muted fw-bold' href='#'>
              Trade History
            </NavLink>
          </NavItem>
        </Nav>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>NO.</th>
              <th>Signal NO.</th>
              <th>Data & Time</th>
              <th>Pair</th>
              <th>Buy/Sell</th>
              <th>Entry 1</th>
              <th>Entry 2</th>
              <th>Entry 3</th>
              <th>Target 1</th>
              <th>Target 2</th>
              <th>Target 3</th>
              <th>Status</th>
              <th colSpan='2'>Gain</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <OrderItem />
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default RecentOrder
