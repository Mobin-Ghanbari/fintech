import React from "react";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";

const Portfoli = () => {
  return (
    <Card className="my-3 rounded-3 shadow border-0">
      <CardBody>
        <CardTitle className="text-black-50 font fw-bold" tag="h5">
          Portfolio
        </CardTitle>
      </CardBody>
      <img alt="Card cap" src={require("../../img/portfolio2.png")} />
      <CardBody className="d-flex flex-column justify-content-center align-items-center">
        <CardText className="fw-bold text-black-50 font">
          You dont have a wallet yet!
        </CardText>
        <CardText className="fw-bold text-black-50 font-11 ">
          Connect to wallet and see your portfolio
        </CardText>
        <Button id="sel-button" className="font custom-color px-4 py-1 my-2">
          Connect to Wallet
        </Button>
      </CardBody>
    </Card>
  );
};

export default Portfoli;
