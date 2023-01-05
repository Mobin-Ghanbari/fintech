import React from 'react'
import { ListGroupItem } from 'reactstrap'

const MemberItem = ({ id, image, status, rank, name }) => {
  return (
    <ListGroupItem key={id} className='d-flex flex-wrap'>
      <img
        className='rounded-circle member-img'
        src={require(`../../../img/${name}.jpg`)}
      />
      <div className='d-flex flex-column ms-3'>
        <span className='fw-bold text-muted'> {name}</span>
        <span
          className={
            status === 'online' ? 'text-success' : 'text-black-50 font-11'
          }
        >
          {status}
        </span>
      </div>
      <div className='pt-2 ms-auto'>
        {rank === 'TA'
          ? (
            <>
              <span className='ms-4 rank  font-11'>TA</span>{' '}
              <span className=' ms-1 rank1 font-11 '>T</span>
            </>
            )
          : rank === 'T'
            ? (
              <span className=' ms-1 rank1 font-11 '>T</span>
              )
            : (
              <span className=' ms-1 rank2 font-11 '>M</span>
              )}
      </div>
    </ListGroupItem>
  )
}

export default MemberItem
