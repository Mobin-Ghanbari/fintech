import React from "react";
import { Card, CardBody, CardTitle, ListGroup } from "reactstrap";
import MemberItem from "./MemberItem";
import { memberStatus } from "./member-status";

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
        <CardTitle className=" font fw-bold">Team Members</CardTitle>
      </CardBody>
      <CardBody className="pt-0">
        <ListGroup flush>{Item}</ListGroup>
      </CardBody>
    </Card>
  );
}

export default MemberCard;
