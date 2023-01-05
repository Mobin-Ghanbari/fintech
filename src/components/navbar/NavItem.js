import React from 'react'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const NavItem = () => {
  return (
    <>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className='text-muted me-1' nav>
          <i className='material-icons md-36 fs-6 text align-middle pe-2'>
            home
          </i>
          Dashboards
          <i className='material-icons font align-middle ms-1'>expand_more</i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className='text-muted' nav>
          <i className='material-icons md-36 fs-6 text align-middle pe-2'>
            tonality
          </i>
          UI Elements
          <i className='material-icons font align-middle ms-1'>expand_more</i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className='text-muted mx-1' nav>
          <i className='material-icons md-36 fs-6 text align-middle pe-2'>
            apps
          </i>
          Apps
          <i className='material-icons font align-middle ms-1'>expand_more</i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className='text-muted ' nav>
          <i className='material-icons md-36 fs-6 text align-middle pe-2'>
            apps
          </i>
          components
          <i className='material-icons font align-middle ms-1'>expand_more</i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className='text-muted mx-1' nav>
          <i className='material-icons md-36 fs-6 text align-middle pe-2'>
            description
          </i>
          Extra Pages
          <i className='material-icons font align-middle ms-1'>expand_more</i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className='text-muted ' nav>
          <i className='material-icons md-36 fs-6 text align-middle pe-2'>
            view_comfy
          </i>
          Layouts
          <i className='material-icons font align-middle ms-1'>expand_more</i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  )
}

export default NavItem
