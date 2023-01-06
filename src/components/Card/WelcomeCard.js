import React from "react";
import { Card, CardBody, CardSubtitle, Button } from "reactstrap";

const WelcomeCard = () => {
  return (
    <Card className="custom-height shadow rounded-3 border-0">
      <img
        src={require("../../img/cm2.png")}
        alt="img"
        className="custom-img"
      />
      <span className="text-body custom-left-position position-absolute">
        Welcome Back Reza!
      </span>
      <span className="text-body custom-top-position position-absolute">
        Nurafin Dashboard
      </span>
      <img
        className="rounded-circle welcomUser-img"
        src={require("../../img/Reza Zargari.jpg")}
      />
      <CardBody>
        <CardSubtitle className="my-4 text-muted " tag="h6">
          Reza Zargari
          <span className="ms-4 rank  font-11">TA</span>
          <span className=" ms-1 rank1 font-11 ">T</span>
        </CardSubtitle>

        <Button
          size="sm"
          id="test-btn"
          className="custom-color py-1 border-0 px-4 font"
        >
          Trading Team
        </Button>
      </CardBody>
    </Card>
  );
};

export default WelcomeCard;
