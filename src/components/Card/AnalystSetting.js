import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function AnalystSetting() {
  return (
    <Card className="border-0 shadow rounded-3 h-100 py-4">
      <CardBody>
        <CardTitle tag="h5">
          <Button className="text-white font-11  custom-color border-0">
            <span className="material-icons text-white font-11 me-2">
              signal_cellular_alt
            </span>
            Analyst Setting
          </Button>
          <Button className="text-black-50 fw-bold font-11  bg-light border-0">
            <span className="material-icons font-11 text-black-50 fw-bold me-1">
              show_chart
            </span>
            Trade Settings
          </Button>
        </CardTitle>

        <ListGroup flush className="mt-4">
          <ListGroupItem className="bg-light border-bottom-0 text-secondary font-11 fw-bold my-2">
            Indicators
            <span className="float-end">Weight</span>
          </ListGroupItem>
          <ListGroupItem className="text-muted font-11 fw-bold my-1">
            Relative Strength Index (RSI)
            <span className="float-end">50%</span>
          </ListGroupItem>
          <ListGroupItem className="text-muted font-11 fw-bold my-1">
            Relative Strength Index (RSI)
            <span className="float-end">40%</span>
          </ListGroupItem>
          <ListGroupItem className="text-muted font-11 fw-bold my-1">
            Relative Strength Index (RSI)
            <span className="float-end">10%</span>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
}

export default AnalystSetting;
