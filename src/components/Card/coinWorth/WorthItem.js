import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, Col, Row } from 'reactstrap'
import { coinsList } from './dataCoin'
const WorthItem = ({ searchTerm }) => {
  const [coins, setCoin] = useState(coinsList)

  useEffect(() => {
    const filteredCoin = coinsList.filter((coin) =>
      coin.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setCoin(filteredCoin)
  }, [searchTerm, coinsList])

  const Item = coins.map(
    ({ name, id, price, high, low, total, cap, Change, fullName }) => {
      return (
        <Row key={id}>
          <ListGroup horizontal className=' font-11 rounded border-bottom mb-2'>
            <Col>
              <ListGroupItem className='border-0 d-flex  me-5'>
                <span className='material-icons fs-5 text-black-50'>
                  star_border
                </span>
                <img
                  className='rounded-circle coin-logo ms-3'
                  src={require(`../../../img/logo/${name}.png`)}
                />
                <span className='ps-1 '>{name}</span>
                <span className='font-9 text-black-50 ps-2 pt-1'>
                  {fullName}
                </span>
              </ListGroupItem>
            </Col>
            <Col>
              <ListGroupItem className='border-0 ms-1 '>
                <span className=''>{price}</span>
              </ListGroupItem>
            </Col>
            <Col>
              <ListGroupItem className='border-0 text-success   ms-4'>
                <span className=''>{Change}</span>
              </ListGroupItem>
            </Col>
            <Col>
              <ListGroupItem className='border-0    ms-3'>
                <span className=''>{high}</span>
              </ListGroupItem>
            </Col>
            <Col>
              <ListGroupItem className='border-0   ms-3'>
                <span className=''>{low}</span>
              </ListGroupItem>
            </Col>
            <Col>
              <ListGroupItem className='border-0   mx-4'>
                <span className=''>{cap}</span>
              </ListGroupItem>
            </Col>
            <Col>
              <ListGroupItem className='border-0   ms-4'>
                <span className=''>{total}</span>
              </ListGroupItem>
            </Col>
            <Col>
              <ListGroupItem className='border-0   ms-3'>
                <img
                  className='rounded-circle coin-logo'
                  src={require('../../../img/logo/binance-coin-bnb-icon.png')}
                />
              </ListGroupItem>
            </Col>
          </ListGroup>
        </Row>
      )
    }
  )

  return <>{Item}</>
}

export default WorthItem
