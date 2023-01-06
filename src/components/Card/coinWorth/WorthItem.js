import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Col, Row } from "reactstrap";
import { coinsList } from "./dataCoin";
const WorthItem = ({ searchTerm }) => {
  const [coins, setCoin] = useState(coinsList);

  useEffect(() => {
    const filteredCoin = coinsList.filter((coin) =>
      coin.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCoin(filteredCoin);
  }, [searchTerm, coinsList]);

  const Item = coins.map(
    ({ name, id, price, high, low, total, cap, Change, fullName, status }) => {
      return (
        <tr key={id} className="border-bottom">
          <th scope="row" className="d-flex align-items-center">
            <span className="material-icons fs-5 text-black-50">
              star_border
            </span>
            <span className="d-flex justify-content-start">
              <img
                className="rounded-circle coin-logo ms-3"
                src={require(`../../../img/logo/${name}.png`)}
              />
              <span className="ps-1 ">{name}</span>
              <span className="font-9 text-black-50 ps-2 pt-1">{fullName}</span>
            </span>
          </th>

          <td>{price}</td>
          <td
            className={`${status === "gain" ? "text-success" : "text-danger"}`}
          >
            {Change}
          </td>
          <td>{high}</td>
          <td>{low}</td>
          <td>{cap}</td>
          <td>{total}</td>
          <td>
            <img
              className="rounded-circle coin-logo"
              src={require("../../../img/logo/binance-coin-bnb-icon.png")}
            />
          </td>
        </tr>
      );
    }
  );

  return <>{Item}</>;
};

export default WorthItem;

{
  /* <Table responsive>

  <tbody>
    <tr>
      <th scope="row">
         <span className="material-icons fs-5 text-black-50">
                  star_border
                </span>
      </th>
      <td>
         <img
                  className="rounded-circle coin-logo ms-3"
                  src={require(`../../../img/logo/${name}.png`)}
                />
                <span className="ps-1 ">{name}</span>
                <span className="font-9 text-black-50 ps-2 pt-1">
                  {fullName}
                </span>
      </td>
      <td>
        {price}
      </td>
      <td>
        {Change}
      </td>
      <td>
        {high}
      </td>
      <td>
        {low}
      </td>
      <td>
        {cap}
      </td>
      <td>
        {total}
      </td>
      <td>
          <img
                  className="rounded-circle coin-logo"
                  src={require("../../../img/logo/binance-coin-bnb-icon.png")}
                />
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
    </tr>
  </tbody>
</Table> */
}
