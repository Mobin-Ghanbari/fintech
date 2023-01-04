import React from "react";
import { Card, CardText, Col } from "reactstrap";

const SignalCard = () => {
  return (
    <>
      <Col xl="6">
        <Card
          body
          className="custom-border2 d-flex flex-row justify-content-around shadow rounded-3 "
        >
          <CardText className="text-muted d-flex flex-column ms-2 my-auto">
            Total Signals
            <CardText className="fw-bold align-self-center p-2 text-success">
              3.05%
            </CardText>
          </CardText>
          <CardText className="text-muted d-flex flex-column ms-2 my-auto">
            Total Signals
            <CardText className="fw-bold align-self-center p-2 text-danger">
              2.86%
            </CardText>
          </CardText>
          <CardText className="text-muted d-flex flex-column ms-4 ">
            Your Signals
            <CardText className="fw-bold p-2 text-danger ps-3">0.01%</CardText>
          </CardText>
        </Card>
      </Col>
      <Col xl="6">
        <Card body className="custom-border d-flex flex-row shadow rounded-3 ">
          <CardText className="text-muted d-flex flex-column ms-2 my-auto">
            Total Signals
            <CardText className="fw-bold align-self-center p-2">4122</CardText>
          </CardText>
          <CardText className="text-muted d-flex flex-column ms-4 ">
            Your Signals
            <CardText className="fw-bold p-2 ps-3">1234</CardText>
          </CardText>
        </Card>
      </Col>
    </>
  );
};

export default SignalCard;
