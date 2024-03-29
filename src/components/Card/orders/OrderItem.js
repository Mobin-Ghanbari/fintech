import React from 'react'
import { orderData } from './orderData'
const OrderItem = () => {
  const Item = orderData.map((val) => {
    const {
      NO,
      Signal,
      date,
      pair,
      buy,
      Entry1,
      Entry1P,
      Entry2,
      Entry2P,
      Entry3,
      Entry3P,
      Target1,
      Target1P,
      Target2,
      Target2P,
      Target3,
      Target3P,
      status,
      GainDollar,
      GainPercent
    } = val
    return (
      <tr className='font-11' key={NO}>
        <th scope='row' className='align-middle ps-3'>
          {NO}
        </th>
        <td className='align-middle ps-4'>{Signal}</td>
        <td className='align-middle ps-4'>{date}</td>
        <td className='align-middle ps-3'>{pair}</td>
        <td className='align-middle ps-3'>{buy}</td>
        <td
          className={
            val.EntryStatus === 'gain'
              ? 'bg-success bg-opacity-25'
              : 'bg-warning bg-opacity-25'
          }
        >
          <td>{Entry1}</td>
          <td className='font-9 d-block'>{Entry1P}</td>
        </td>
        <td
          className={
            val.EntryStatus === 'gain'
              ? 'bg-success bg-opacity-25'
              : 'bg-warning bg-opacity-25'
          }
        >
          <td>{Entry2}</td>
          <td className='d-block'>{Entry2P}</td>
        </td>
        <td
          className={
            val.EntryStatus === 'gain'
              ? 'bg-success bg-opacity-25'
              : 'bg-warning bg-opacity-25'
          }
        >
          <td>{Entry3}</td>
          <td className='d-block'>{Entry3P}</td>
        </td>
        <td
          className={
            val.EntryStatus === 'gain'
              ? 'bg-success bg-opacity-25'
              : 'bg-warning bg-opacity-25'
          }
        >
          <td>{Target1}</td>
          <td className='d-block'>{Target1P}</td>
        </td>
        <td
          className={
            val.EntryStatus === 'gain'
              ? 'bg-success bg-opacity-25'
              : 'bg-danger bg-opacity-25'
          }
        >
          <td>{Target2}</td>
          <td className='d-block'>{Target2P}</td>
        </td>
        <td
          className={
            val.EntryStatus === 'gain'
              ? 'bg-success bg-opacity-25'
              : 'bg-warning bg-opacity-25'
          }
        >
          <td>{Target3}</td>
          <td className='d-block'>{Target3P}</td>
        </td>
        {status === 'Compeleted'
          ? (
            <td className='d-block'>
              <td className='material-icons  ms-3 font  text-white custom-done '>
                done
              </td>
              <td className='ps-2'>{status}</td>
            </td>
            )
          : (
            <td className='pt-3 ps-4'>{status}</td>
            )}

        <td
          className={
            val.GainStatus === 'gain'
              ? 'text-success align-middle'
              : 'text-danger align-middle'
          }
        >
          {GainPercent}
        </td>
        <td
          className={
            val.GainStatus === 'gain'
              ? 'text-success align-middle'
              : 'text-danger align-middle'
          }
        >
          {GainDollar}
        </td>
        <td className='pt-3'>
          <a
            href='#'
            className='material-icons fs-6 text-primary bg-info bg-opacity-10 text-decoration-none'
          >
            present_to_all
          </a>
          <a
            href='#'
            className='material-icons fs-6 mx-2 bg-warning bg-opacity-10 text-decoration-none'
          >
            content_copy
          </a>
          <a
            href='#'
            className='material-icons fs-6 text-danger bg-danger bg-opacity-10 text-decoration-none'
          >
            highlight_off
          </a>
        </td>
      </tr>
    )
  })
  return <>{Item}</>
}

export default OrderItem
