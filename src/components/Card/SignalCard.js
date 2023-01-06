import React from "react";
import { Card, CardText, Col } from "reactstrap";

const SignalCard = () => {
  return (
    <>
      <Col xl="6">
        <Card
          body
          className="custom-border2 d-flex flex-row justify-content-around shadow rounded-3 position-relative"
        >
          <span className="position-absolute text-white font-11 custom-tradeGain">
            Trade Gain
          </span>
          <CardText className="text-muted d-flex flex-column ms-2 my-auto fw-bold">
            <span className="font-11 ">This Year</span>
            <CardText className=" align-self-center p-2 text-success">
              3.05%
            </CardText>
          </CardText>
          <CardText className="text-muted d-flex flex-column ms-2 my-auto fw-bold">
            <span className="font-11">This Month</span>
            <CardText className=" align-self-center p-2 text-danger">
              2.86%
            </CardText>
          </CardText>
          <CardText className="text-muted d-flex flex-column ms-4 fw-bold">
            <span className="ps-3 font-11">Today</span>
            <CardText className=" p-2 text-danger ps-3">0.01%</CardText>
          </CardText>
        </Card>
      </Col>
      <Col xl="6">
        <Card
          body
          className="custom-border d-flex flex-row shadow rounded-3 position-relative"
        >
          <span className="position-absolute text-white font-11  custom-signal">
            signals
          </span>
          <CardText className="text-muted d-flex flex-column ms-2 my-auto ps-3 fw-bold ">
            <span className="font-11">Total Signals</span>
            <CardText className="align-self-center p-2">4122</CardText>
          </CardText>
          <CardText className="text-muted d-flex flex-column ms-4 ps-5 fw-bold ">
            <span className="font-11">Your Signals</span>
            <CardText className="p-2 ps-3">1234</CardText>
          </CardText>
        </Card>
      </Col>
    </>
  );
};

export default SignalCard;
