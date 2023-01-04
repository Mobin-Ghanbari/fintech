import React from "react";
import { Row, Col, Container } from "reactstrap";
import Candle from "./Card/CandleChart";
import Activity from "./Card/Activity";
import AnalystSetting from "./Card/AnalystSetting";
import CoinWorth from "./Card/coinWorth/CoinWorth";
import MemberCard from "./Card/memberCard/MemberCard";
import Portfoli from "./Card/Portfoli";
import SignalCard from "./Card/SignalCard";
import WelcomeCard from "./Card/WelcomeCard";
import Chat from "./chat/Chat";
import BarCard from "./Card/barCard/BarCard";
import RecentOrder from "./Card/orders/RecentOrder";

function MainCard() {
  return (
    <Container fluid className="bg-light">
      <Container className="pt-3">
        <span className="fw-bold fs-6 my-2">Dashboard</span>
        <Row className="d-flex flex-wrap">
          <Col xl="4">
            <WelcomeCard />
            <Portfoli />
            <Activity />
          </Col>
          <Col xl="8">
            <Row>
              <SignalCard />
            </Row>
            <BarCard />
            <Candle />
          </Col>
        </Row>
        <Row>
          <Col xl="4">
            <MemberCard />
          </Col>
          <Col xl="4">
            <Chat />
          </Col>
          <Col xl="4">
            <AnalystSetting />
          </Col>
        </Row>
        <Row>
          <Col>
            <CoinWorth />
          </Col>
        </Row>
        <Row>
          <Col>
            <RecentOrder />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MainCard;