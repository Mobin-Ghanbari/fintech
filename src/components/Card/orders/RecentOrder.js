import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  Table,
} from "reactstrap";
import OrderItem from "./OrderItem";
const RecentOrder = () => {
  return (
    <Card className="mt-4 border-0 shadow rounded-3">
      <CardBody>
        <CardTitle className="text-black-50 font fw-bold">
          Recent Orders
        </CardTitle>
        <Nav className="bg-light">
          <NavItem>
            <NavLink className="text-muted fw-bold" href="#">
              Open Orders
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fw-bold" active href="#">
              Closed Orders
            </NavLink>
          </NavItem>
          <NavItem className="me-auto">
            <NavLink className="text-muted fw-bold" href="#">
              Trade History
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Button
                className="bg-danger bg-opacity-10 border-0 font-9"
                size="sm"
              >
                <span
                  href="#"
                  className="material-icons font-11 pe-1 pt-1 align-bottom text-danger"
                >
                  highlight_off
                </span>
                <span className="font-11 text-danger">Cancell All</span>
              </Button>
              <a
                href="#"
                className="material-icons   text-primary bg-info bg-opacity-10 text-decoration-none custo-crop-free"
              >
                crop_free
              </a>
            </NavLink>
          </NavItem>
        </Nav>
        <Table bordered responsive>
          <thead className="font-11 text-muted">
            <tr className="align-middle">
              <th rowspan="2">NO.</th>
              <th rowspan="2" className="ps-4">
                Signal NO.
              </th>
              <th rowspan="2" className="ps-4">
                Data & Time
              </th>
              <th rowspan="2" className="ps-4">
                Pair
              </th>
              <th rowspan="2">Buy/Sell</th>
              <th rowspan="2" className="ps-4">
                Entry 1
              </th>
              <th rowspan="2" className="ps-4">
                Entry 2
              </th>
              <th rowspan="2" className="ps-4">
                Entry 3
              </th>
              <th rowspan="2" className="ps-4">
                Target 1
              </th>
              <th rowspan="2" className="ps-4">
                Target 2
              </th>
              <th rowspan="2" className="ps-4">
                Target 3
              </th>
              <th rowspan="2" className="ps-4">
                Status
              </th>
              <th colspan="2" className="ps-5">
                Gain
              </th>
              <th rowSpan="2" className="ps-4">
                Action
              </th>
            </tr>
            <tr>
              <th className="ps-3">(%)</th>
              <th className="ps-4">($)</th>
            </tr>
          </thead>
          <tbody>
            <OrderItem />
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default RecentOrder;
