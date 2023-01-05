import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import MainCard from './components/MainCard'

import Navbar from './components/navbar/Navbar'

function App () {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className='bg-up ' />
        </Row>
        <Navbar />
      </Container>
      <MainCard />
    </>
  )
}

export default App
