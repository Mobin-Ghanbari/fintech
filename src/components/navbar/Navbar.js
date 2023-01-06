import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap'
import NavItems from './NavItem'

function Example () {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <Navbar expand='lg' light container='xl' className='me-4'>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className='ms-2'>
        <Nav className='me-4' navbar>
          <NavItems />
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Example
