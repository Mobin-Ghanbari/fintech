import React, { useState } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
  Row
} from 'reactstrap'
import WorthItem from './WorthItem'

function CoinWorth () {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Card className='mt-4 border-0 shadow rounded-3 overflow-auto'>
      <Container>
        <CardBody>
          <CardTitle>Main Coin Worth</CardTitle>
          <Form className='w-25 '>
            <FormGroup className='position-relative custom-input'>
              <span className='material-icons position-absolute font '>
                search
              </span>
              <Input
                className=' bg-light text-muted rounded border-1 form-control-sm'
                id='search'
                name='search'
                placeholder='search'
                type='text'
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </FormGroup>
          </Form>
          <Row>
            <ListGroup horizontal className='bg-light font-11 rounded'>
              <Col>
                <ListGroupItem className='border-0 d-flex bg-light'>
                  <span class='material-icons fs-5 text-warning'>
                    star_border
                  </span>
                  <span className='ms-2'>Name</span>
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem className='border-0 ms-5 bg-light'>
                  Price
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem className='border-0 ms-5 bg-light'>
                  Change(24h)
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem className='border-0 ms-5 bg-light'>
                  High(24h)
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem className='border-0 ms-5 bg-light'>
                  Low(24h)
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem className='border-0 ms-5 bg-light'>
                  Market Cap
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem className=' border-0 ms-5 bg-light'>
                  Total Volume
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem className='border-0 bg-light' />
              </Col>
            </ListGroup>
          </Row>

          <WorthItem searchTerm={searchTerm} />
        </CardBody>
      </Container>
    </Card>
  )
}

export default CoinWorth
