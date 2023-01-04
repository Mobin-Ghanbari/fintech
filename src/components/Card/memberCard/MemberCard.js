import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import MemberItem from "./MemberItem";
import { memberStatus } from "./member-status";

import Image2 from "../../../img/mobin.jpg";
function MemberCard() {
  const Item = memberStatus.map((value) => {
    const { name, id, rank, status, image } = value;
    return (
      <MemberItem
        key={id}
        name={name}
        id={id}
        rank={rank}
        status={status}
        image={image}
      />
    );
  });

  return (
    <Card className="shadow rounded-3 border-0">
      <CardBody>
        <CardTitle className="text-black-50 font fw-bold">
          Team Members
        </CardTitle>
      </CardBody>
      <CardBody className="pt-0">
        <ListGroup flush>{Item}</ListGroup>
      </CardBody>
    </Card>
  );
}

export default MemberCard;
